'use client';

import { useState } from 'react';
import { ChangelogEntry } from '@/lib/markdown';
import { ChangelogCard } from '@/components/changelog/ChangelogCard';
import { ChangelogFilter } from '@/components/changelog/ChangelogFilter';

interface ChangelogClientProps {
  changelogs: ChangelogEntry[];
}

export default function ChangelogClient({ changelogs }: ChangelogClientProps) {
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredChangelogs = selectedTag === 'all' 
    ? changelogs 
    : changelogs.filter(entry => entry.tag === selectedTag);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Changelog
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay up to date with the latest updates and improvements to Flarial Client, 
            Launcher, and Website.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ChangelogFilter 
            selectedTag={selectedTag} 
            onTagChange={setSelectedTag} 
          />

          {filteredChangelogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No updates found for the selected filter.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredChangelogs.map((entry) => (
                <ChangelogCard key={entry.id} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}