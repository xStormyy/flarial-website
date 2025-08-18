import { format } from 'date-fns';
import { ChangelogEntry } from '@/lib/markdown';

interface ChangelogCardProps {
  entry: ChangelogEntry;
}

const tagColors = {
  Client: 'bg-red-500 text-white',
  Launcher: 'bg-blue-500 text-white',
  Website: 'bg-green-500 text-white',
};

export function ChangelogCard({ entry }: ChangelogCardProps) {
  const formattedDate = format(new Date(entry.date), 'MMMM d, yyyy');

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors[entry.tag]}`}>
            {entry.tag}
          </span>
        </div>
        <time className="text-gray-400 text-sm">
          {formattedDate}
        </time>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">
        {entry.title}
      </h3>
      
      <div 
        className="prose prose-invert max-w-none prose-headings:text-white prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-4 prose-h2:text-xl prose-h2:font-semibold prose-h2:text-red-400 prose-h2:mt-6 prose-h2:mb-3 prose-h3:text-lg prose-h3:font-semibold prose-h3:text-red-300 prose-h3:mt-4 prose-h3:mb-2 prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white prose-a:text-red-400 prose-a:no-underline hover:prose-a:text-red-300 hover:prose-a:underline prose-ul:list-disc prose-ol:list-decimal"
        dangerouslySetInnerHTML={{ __html: entry.htmlContent }}
      />
    </div>
  );
}