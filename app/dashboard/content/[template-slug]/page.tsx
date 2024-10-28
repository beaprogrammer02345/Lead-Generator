'use client';
import React, { useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Templates from '@/app/(data)/Templates';
import { TEMPLATE } from '../../_components/TemplateListSection';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/AiModal';
import { useUser } from '@clerk/nextjs'; // No need to import 'UserResource'
import moment from 'moment';
import db from '@/utils/db';
import { insertLeadPerInteraction } from '@/utils/dbqueries'; // Import the query
import { aiOutputTable } from '@/utils/schema';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

interface EmailAddressResource {
  id: string;
  emailAddress: string;
}

function CreateNewContent({ params }: PROPS) {
  const { user } = useUser(); // user can be User | null | undefined

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params['template-slug']
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [output, setOutput] = useState<string>('');

  const GenerateAIContent = async (formData: { [key: string]: any }) => {
    try {
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt || '';
      const FinalAIPrompt = JSON.stringify(formData) + ', ' + SelectedPrompt;

      if (!chatSession) {
        console.error('chatSession is not initialized.');
        return;
      }

      const result = await chatSession.sendMessage(FinalAIPrompt);
      const responseText = await result.response.text();
      setOutput(responseText);
      await SaveInDb(formData, selectedTemplate?.slug, responseText, user);
      // Insert dummy leads after generating content
      // Insert a new lead for the current tool usage
      if (selectedTemplate?.slug) {
        await insertLeadPerInteraction(selectedTemplate?.slug);
      }

      
    } catch (error) {
      console.error('Error generating content:', error);
      setOutput('');
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (
    formData: any,
    slug: string | undefined,
    aiResponse: string,
    user: typeof useUser extends () => { user: infer U } ? U : never
  ) => {
    try {
      if (!slug) throw new Error('Template slug is undefined.');

      const userEmail = user?.primaryEmailAddress
          ? Array.isArray(user.primaryEmailAddress)
          ? user.primaryEmailAddress[0]?.emailAddress // Get first email if it's an array
          : user.primaryEmailAddress.emailAddress // Use directly if it's an object
          : 'anonymous'; // Fallback to 'anonymous' if no email is found

      const result = await db.insert(aiOutputTable).values({
        formData: JSON.stringify(formData),
        templateSlug: slug,
        aiResponse: aiResponse,
        createdBy:userEmail,
        createdAt: new Date(),
      });

      console.log('Data saved:', result);
    } catch (error) {
      console.error('Error saving in DB:', error);
    }
  };

  if (!selectedTemplate) {
    return (
      <div>
        <p>Template not found</p>
        <Link href="/dashboard">
          <Button>
            <ArrowLeft className="mr-2" /> Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft className="mr-2" /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={output} />
        </div>
      </div>
      {loading && <div>Generating content...</div>}
    </div>
  );
}

export default CreateNewContent;