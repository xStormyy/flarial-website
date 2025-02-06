import { Card } from './Card';

interface ContributorCardProps {
  name: string;
  roles: string[];
}

export function ContributorCard({ name, roles }: ContributorCardProps) {
  return (
    <Card variant="hover" className="w-full bg-gray-900">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm rounded-full bg-gray-800 text-gray-200"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}