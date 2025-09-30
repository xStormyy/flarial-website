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
    <div className="relative bg-black text-white min-h-screen">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Latest Updates</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 pb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-none">
            Changelog
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Stay up to date with the latest updates and improvements to{' '}
            <span className="text-white font-semibold">Flarial Client</span>,{' '}
            <span className="text-white font-semibold">Launcher</span>, and{' '}
            <span className="text-white font-semibold">Website</span>.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <ChangelogFilter
              selectedTag={selectedTag}
              onTagChange={setSelectedTag}
            />
          </div>

          {filteredChangelogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border border-gray-800 mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-gray-400 text-xl font-medium">
                No updates found for the selected filter.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Try selecting a different category
              </p>
            </div>
          ) : (
            <div className="space-y-6 md:space-y-8">
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