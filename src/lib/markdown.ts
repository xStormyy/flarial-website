import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export interface ChangelogEntry {
  id: string;
  title: string;
  date: string;
  tag: 'Client' | 'Launcher' | 'Website';
  content: string;
  htmlContent: string;
}

const changelogsDirectory = path.join(process.cwd(), 'content/changelogs');

export async function getAllChangelogs(): Promise<ChangelogEntry[]> {
  const filenames = fs.readdirSync(changelogsDirectory);
  
  const changelogs = await Promise.all(
    filenames
      .filter(name => name.endsWith('.md'))
      .map(async (filename) => {
        const id = filename.replace(/\.md$/, '');
        const fullPath = path.join(changelogsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        const { data, content } = matter(fileContents);
        
        // Process markdown to HTML
        const processedContent = await remark()
          .use(remarkHtml)
          .process(content);
        
        const htmlContent = processedContent.toString();
        
        return {
          id,
          title: data.title,
          date: data.date,
          tag: data.tag,
          content,
          htmlContent
        };
      })
  );
  
  // Sort by date (newest first)
  return changelogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getChangelogByTag(tag: string): Promise<ChangelogEntry[]> {
  const allChangelogs = await getAllChangelogs();
  return allChangelogs.filter(changelog => changelog.tag === tag);
}