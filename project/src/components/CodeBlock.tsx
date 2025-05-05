import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span className="text-sm text-gray-400">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;