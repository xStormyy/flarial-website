interface ChangelogFilterProps {
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

const tags = [
  { value: 'all', label: 'All Updates', color: 'bg-gray-600' },
  { value: 'Client', label: 'Client', color: 'bg-red-500' },
  { value: 'Launcher', label: 'Launcher', color: 'bg-blue-500' },
  { value: 'Website', label: 'Website', color: 'bg-green-500' },
];

export function ChangelogFilter({ selectedTag, onTagChange }: ChangelogFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {tags.map((tag) => (
        <button
          key={tag.value}
          onClick={() => onTagChange(tag.value)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedTag === tag.value
              ? `${tag.color} text-white`
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}