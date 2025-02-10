import { Container } from '@/components/ui/Container';
import { ContributorCard } from '@/components/ui/ContributorCard';

const contributors = [
  { name: 'FreezeEngine', roles: ['Client Developer', 'API Developer'] },
  { name: 'happened again', roles: ['Launcher Developer'] },
  { name: 'Hatless', roles: ['Client Developer'] },
  { name: 'marioSQ', roles: ['Client Developer'] },
  { name: 'oAnshul', roles: ['Client Developer'] },
  { name: 'TrueTypeFont', roles: ['Client Developer', 'API Developer'] },
  { name: 'Никита', roles: ['Client Developer', 'API Developer'] },
  { name: 'kappug', roles: ['Contributor'] },
  { name: 'realcenter', roles: ['Client Developer', 'API Developer'] },
  { name: 'trrgfx', roles: ['Client Developer'] },
  { name: 'bari', roles: ['Client Developer'] },
  { name: 'StoneHunter', roles: ['Client Developer'] },
  { name: 'Aetopia', roles: ['Client Developer'] },
  { name: 'Richard Gordon', roles: ['API Developer', 'Bot Developer'] },
];

export default function ContributorsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Our Contributors</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the talented developers who have contributed to making Flarial better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((contributor) => (
            <ContributorCard
              key={contributor.name}
              name={contributor.name}
              roles={contributor.roles}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}