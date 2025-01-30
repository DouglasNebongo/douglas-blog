import clsx from 'clsx'
import type { GithubRepository } from '@/lib/types/server'
import CustomLink from '@/components/links/Link'
import type PROJECTS from '@/data/projectsData'

import { Github } from 'lucide-react'
import { Fragment } from 'react'
import { GradientBorder } from '@/components/ui/gradient-border'
import { GrowingUnderline } from '@/components/ui/growing-underline'
import { TiltedGridBackground } from '@/components/ui/tilted-grid-background'

export function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const { title, description, url, repo, builtWith, links } = project
  const repository = repo as GithubRepository
  const href = repository?.url || url
  const lang = repository?.languages?.[0]

  return (
    <GradientBorder
      offset={28}
      className="m-4 flex flex-col rounded-[40px] p-6 [box-shadow:0_8px_32px_rgba(194,194,218,.3)] dark:bg-white/5 dark:shadow-none md:p-8"
    >
      <TiltedGridBackground className="inset-0 z-[-1] rounded-[40px]" />
      <div className="mb-6 flex items-center justify-center gap-4">
        {' '}
        {/* Center the title */}
        <div className="flex flex-col items-center gap-1 pt-1">
          {' '}
          {/* Center the title */}
          <h2 className="text-center text-[22px] font-bold leading-[30px]">
            {' '}
            {/* Center the title */}
            {href ? (
              <CustomLink href={href} aria-label={`Link to ${title}`}>
                <GrowingUnderline data-umami-event="project-title-link">{title}</GrowingUnderline>
              </CustomLink>
            ) : (
              title
            )}
          </h2>
        </div>
      </div>
      <p className="mb-4 line-clamp-3 grow text-lg">{repository?.description || description}</p>
      <div
        className={clsx(
          ' mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
          repository ? 'grid-cols-3' : 'grid-cols-2'
        )}
      >
        {repository ? (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-1.5">
                <Github size={16} strokeWidth={1.5} />
                <span className="font-medium">{repository?.stargazerCount}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-1.5">
            <div className="text-xs text-gray-600 dark:text-gray-400">Links</div>
            <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-1.5">
              {links?.map(({ title, url }, idx) => (
                <Fragment key={url}>
                  <CustomLink href={url} className="flex items-center gap-1.5">
                    <GrowingUnderline className="font-medium" data-umami-event="project-link">
                      {title}
                    </GrowingUnderline>
                  </CustomLink>
                  {idx !== links.length - 1 && (
                    <span className="hidden text-gray-400 dark:text-gray-500 md:inline">|</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        )}
        <div className="hidden h-12 w-px bg-gray-300 dark:bg-gray-600 sm:block" />
        <div className="space-y-1.5">
          <div className="text-xs text-gray-600 dark:text-gray-400">Built with</div>
          <div className="flex flex-wrap items-center gap-1.5">
            {builtWith?.length > 0 ? (
              builtWith.map((tool, index) => (
                <span key={index} className="font-semibold text-gray-600 dark:text-gray-300">
                  {tool}
                  {index !== builtWith.length - 1 && ', '}
                </span>
              ))
            ) : (
              <span className="text-gray-500 dark:text-gray-400">No tools specified</span>
            )}
          </div>
        </div>
      </div>
    </GradientBorder>
  )
}
