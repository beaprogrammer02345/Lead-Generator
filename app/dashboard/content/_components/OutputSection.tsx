"use client";

import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import React, { useRef, useEffect } from 'react';

interface Props {
    aiOutput: string; // Expecting string input
}

function OutputSection({ aiOutput }: Props) {
    const editorRef = useRef<Editor | null>(null);

    // Update editor content when aiOutput changes
    useEffect(() => {
        const editorInstance = editorRef.current?.getInstance();
        if (editorInstance) {
            editorInstance.setMarkdown(aiOutput); // Set AI output in editor
        }
    }, [aiOutput]);

    const handleCopy = async () => {
        try {
            const content = editorRef.current?.getInstance()?.getMarkdown(); // Get Markdown content
            if (content) {
                await navigator.clipboard.writeText(content);
                alert('Content copied to clipboard!');
            } else {
                alert('Nothing to copy!');
            }
        } catch (err) {
            console.error('Failed to copy:', err);
            alert('Failed to copy content. Please try again.');
        }
    };

    return (
        <div className="bg-white shadow-lg border rounded-lg">
            <div className="flex justify-between items-center p-5">
                <h2>Your Result</h2>
                <Button className="flex gap-2" onClick={handleCopy}>
                    <Copy /> Copy
                </Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Your result will appear here"
                initialEditType="wysiwyg"
                height="600px"
                useCommandShortcut={true}
            />
        </div>
    );
}

export default OutputSection;