import { Sparkles, Gamepad2, Rocket, Globe } from 'lucide-react';

interface ChangelogFilterProps {
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

const tags = [
  { value: 'all', label: 'All Updates', color: 'from-gray-500 to-gray-600', icon: Sparkles },
  { value: 'Client', label: 'Client', color: 'from-red-500 to-rose-600', icon: Gamepad2 },
  { value: 'Launcher', label: 'Launcher', color: 'from-blue-500 to-cyan-500', icon: Rocket },
  { value: 'Website', label: 'Website', color: 'from-green-500 to-emerald-600', icon: Globe },
];

export function ChangelogFilter({ selectedTag, onTagChange }: ChangelogFilterProps) {
  return (
    <div className="mb-12 w-full">
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-800/50 max-w-fit mx-auto">
        {tags.map((tag) => (
          <button
            key={tag.value}
            onClick={() => onTagChange(tag.value)}
            className={`
              relative px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ease-out whitespace-nowrap
              ${selectedTag === tag.value
                ? `bg-gradient-to-r ${tag.color} text-white shadow-lg`
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              <tag.icon className="w-4 h-4" />
              <span className="text-sm sm:text-base">{tag.label}</span>
            </span>
            {selectedTag === tag.value && (
              <div className={`absolute inset-0 bg-gradient-to-r ${tag.color} opacity-20 blur-xl rounded-xl pointer-events-none`} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}