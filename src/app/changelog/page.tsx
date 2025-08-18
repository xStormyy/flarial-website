import { getAllChangelogs } from '@/lib/markdown';
import ChangelogClient from './ChangelogClient';

export default async function ChangelogPage() {
  const changelogs = await getAllChangelogs();

  return <ChangelogClient changelogs={changelogs} />;
}