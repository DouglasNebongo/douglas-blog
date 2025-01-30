import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { build } from 'esbuild'

export const metadata = genPageMetadata({ title: 'Projects' })

export default async function Projects() {
  const description =
    'This is a collection of projects I’ve built—some to solve real-world problems, others simply to get under the hood and explore how different technologies work.'

  const workProjects = projectsData.filter(({ type }) => type === 'work')
  const sideProjects = projectsData.filter(({ type }) => type === 'self')

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
        </div>

        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Work
          </h3>
          <div className="grid-with-line grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
            {workProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Side projects
          </h3>
          <div className="grid-with-line grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
