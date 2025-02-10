'use client'
import { Card } from './Card';
import { motion } from 'framer-motion'
interface ContributorCardProps {
  name: string;
  roles: string[];
  github: string;
}

export function ContributorCard({ name, roles, github }: ContributorCardProps) {
  return (

      <motion.div

          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.4}}
          className="flex flex-col sm:flex-row gap-4 justify-center"
      >

          <Card variant="dark" className="w-full">

            <div className="flex flex-col gap-2">
              <motion.a className="text-lg font-semibold text-white hover:scale[2] " href={github}
                        whileHover={{scale: 1.02, color: "aqua"}}>{name}</motion.a>

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
      </motion.div>
)
;
}