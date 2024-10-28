"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Import Image from next/image
import { Input } from '@/components/ui/input'; // Ensure Input is imported
import { Textarea } from '@/components/ui/textarea'; // Import Textarea
import { TEMPLATE } from '../../_components/TemplateListSection'; // Adjust path as needed
import { Loader2Icon } from 'lucide-react';

interface FormData {
  [key: string]: string; // Change this to a more specific type if known
}

interface PROPS {
  selectedTemplate: TEMPLATE; // Make this required if it's always provided
  userFormInput: (data: FormData) => void; // Specify the expected function signature
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<FormData>({}); // Initialize with an empty object

  if (!selectedTemplate) {
    return <div>No template selected.</div>; // Handle missing template case
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Use React.FormEvent<HTMLFormElement> for type safety
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ensure formData is not empty before submitting
    userFormInput(formData);
  };

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      <Image 
        src={selectedTemplate.icon} 
        alt={selectedTemplate.name} 
        width={70} 
        height={70} 
        className='mb-3'
      />
      <h2 className='text-2xl font-bold mb-2 text-primary'>{selectedTemplate.name}</h2>
      <p className='text-gray-600 text-sm'>{selectedTemplate.desc}</p>

      <form className='space-y-4 mt-6' onSubmit={onSubmit}> {/* Corrected the function reference */}
        {selectedTemplate.form?.map((item, index) => (
          <div key={index} className='flex flex-col gap-2 my-2 mb-7'>
            <label htmlFor={item.name} className='font-medium font-bold'>
              {item.label}
            </label>
            {item.field === 'input' ? (
              <Input 
                id={item.name} 
                name={item.name} 
                required={item?.required} 
                onChange={handleInputChange} 
              />
            ) : item.field === 'textarea' ? (
              <Textarea 
                id={item.name} 
                name={item.name} 
                required={item.required}
                onChange={handleInputChange}  
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className='w-full py-6' disabled={loading}>
          {loading && <Loader2Icon className='animate-spin' />}
          Generate 
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
