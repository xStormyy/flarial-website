import { format } from 'date-fns';
import { ChangelogEntry } from '@/lib/markdown';
import { Gamepad2, Rocket, Globe, Zap } from 'lucide-react';

interface ChangelogCardProps {
  entry: ChangelogEntry;
}

const tagConfig = {
  Client: {
    gradient: 'from-red-500 to-rose-600',
    icon: Gamepad2,
    glow: 'group-hover:shadow-red-500/20'
  },
  Launcher: {
    gradient: 'from-blue-500 to-cyan-500',
    icon: Rocket,
    glow: 'group-hover:shadow-blue-500/20'
  },
  Website: {
    gradient: 'from-green-500 to-emerald-600',
    icon: Globe,
    glow: 'group-hover:shadow-green-500/20'
  },
  Both: {
    gradient: 'from-purple-500 to-pink-500',
    icon: Zap,
    glow: 'group-hover:shadow-purple-500/20'
  },
};

export function ChangelogCard({ entry }: ChangelogCardProps) {
  const formattedDate = format(new Date(entry.date), 'MMMM d, yyyy');
  const config = tagConfig[entry.tag];

  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${config.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />

      <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:scale-[1.01] shadow-xl hover:shadow-2xl overflow-hidden">
        {/* Top gradient accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient}`} />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${config.gradient} text-white font-semibold shadow-lg`}>
              <config.icon className="w-4 h-4" />
              <span>{entry.tag}</span>
            </div>
          </div>
          <time className="text-gray-400 text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formattedDate}
          </time>
        </div>

        <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-gray-50 transition-colors">
          {entry.title}
        </h3>

        <div
          className="prose prose-invert max-w-none
            prose-headings:text-white prose-headings:font-bold prose-headings:leading-tight
            prose-h1:text-2xl prose-h1:mb-4 prose-h1:leading-tight
            prose-h2:text-xl prose-h2:font-semibold prose-h2:text-transparent prose-h2:bg-clip-text prose-h2:bg-gradient-to-r prose-h2:from-red-400 prose-h2:to-pink-400 prose-h2:mt-6 prose-h2:mb-3 prose-h2:leading-tight
            prose-h3:text-lg prose-h3:font-semibold prose-h3:text-red-300 prose-h3:mt-4 prose-h3:mb-2 prose-h3:leading-tight
            prose-p:text-gray-300 prose-p:leading-normal prose-p:text-base
            prose-li:text-gray-300 prose-li:leading-normal
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-red-400 prose-a:font-medium prose-a:no-underline hover:prose-a:text-red-300 hover:prose-a:underline prose-a:transition-colors
            prose-ul:list-disc prose-ul:my-3
            prose-ol:list-decimal prose-ol:my-3
            prose-code:text-pink-400 prose-code:bg-gray-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: entry.htmlContent }}
        />
      </div>
    </div>
  );
}