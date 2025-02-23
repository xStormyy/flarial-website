import { Container } from '@/components/ui/Container';
import { ContributorCard } from '@/components/ui/ContributorCard';

const contributors = [
  { name: 'FreezeEngine', roles: ['Client Developer'], github: "https://github.com/FreezeEngine", },
  { name: 'happened again', roles: ['Launcher Developer'], github: "https://github.com/megahendick" },
  { name: 'Hatless', roles: ['Client Developer'], github: "https://github.com/oHatless" },
  { name: 'marioSQ', roles: ['Client Developer'], github: "https://github.com/marioCST"  },
  { name: 'oAnshul', roles: ['Client Developer'], github: "https://github.com/oAnshull" },
  { name: 'TrueTypeFont', roles: ['Client Developer', 'API Developer'], github: "https://github.com/TTF-fog" },
  { name: 'Никита', roles: ['Client Developer'], github: "https://github.com/Withors"},
  { name: 'kappug', roles: ['Client Developer'], github: "https://github.com/kappug" },
  { name: 'realcenter', roles: ['Client Developer', 'API Developer'], github: "https://github.com/Melvin1663" },
  { name: 'treegfx', roles: ['Client Developer'], github: "https://github.com/treegfx" },
  { name: 'bari', roles: ['Client Developer'], github: "https://github.com/TheBarii" },
  { name: 'StoneHunter', roles: ['Client Developer'], github: "https://github.com/St0neHunter" },
  { name: 'Aetopia', roles: ['Client Developer'], github: "https://github.com/Aetopia" },
  { name: 'Richard Gordon', roles: ['API Developer', 'Bot Developer'], github: "https://github.com/EpiclyRaspberry" },
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
              github={contributor.github}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
