import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div className={cn('prose prose-invert prose-yellow max-w-none', className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover drop-shadow-[0_2px_4px_rgba(252,213,73,0.2)]">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-10 mb-4 text-yellow-500/90 drop-shadow">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold mt-8 mb-3 text-yellow-500/80">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-gray-200/90 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-4 ml-6 list-disc text-gray-200/90">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 ml-6 list-decimal text-gray-200/90">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-2">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/40 pl-4 italic text-gray-400">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a href={href} className="text-primary hover:text-primary-hover underline">
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-primary/90">
              {children}
            </strong>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-[rgba(252,213,73,0.2)] rounded-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[rgba(252,213,73,0.1)]">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-[rgba(252,213,73,0.1)]">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-[rgba(255,255,255,0.03)]">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-sm font-medium text-yellow-500/90">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-gray-200/90">
              {children}
            </td>
          ),
          code: ({ children, className }) => {
            // Check if it's an inline code or a code block
            const isInline = !className;
            return isInline ? (
              <code className="bg-black/30 px-1.5 py-0.5 rounded text-primary/90 font-mono text-sm">
                {children}
              </code>
            ) : (
              <code className={`${className} block bg-black/40 p-4 rounded-md overflow-x-auto font-mono text-sm`}>
                {children}
              </code>
            );
          },
          hr: () => (
            <hr className="my-8 border-t border-[rgba(252,213,73,0.1)]" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 