import siteMetadata from '@/data/siteMetadata'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Fragment } from 'react'
import { Twemoji } from '@/components/ui/Twemoji'

function getAccountHandle(url = '') {
  const lastPart = url.split('/').pop()
  if (lastPart) {
    return lastPart
  }
  return url
}

const SOCIALS = [
  {
    platform: 'github',
    handle: getAccountHandle(siteMetadata.github),
    href: siteMetadata.github,
    Icon: () => <Github size={20} strokeWidth={1.5} />,
  },
  {
    platform: 'linkedin',
    handle: getAccountHandle(siteMetadata.linkedin),
    href: siteMetadata.linkedin,
    Icon: () => <Linkedin size={20} strokeWidth={1.5} />,
  },
]

export function ProfileCardInfo() {
  return (
    <div className="hidden py-4 md:block md:px-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Douglas Nebongo</h3>
      <h5 className="py-0 text-gray-600 dark:text-gray-400">Learner | Builder</h5>
      <div className="mb-2 mt-4 space-y-1">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <MapPin strokeWidth={1.5} size={20} />
          <p className="px-2">
            Toronto,
            <span className="absolute ml-1 inline-flex pt-px">
              <Twemoji emoji="flag-canada" />
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Mail strokeWidth={1.5} size={20} />
          <a className="px-2" href={`mailto:${siteMetadata.email}`}>
            {siteMetadata.email}
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
          {SOCIALS.map(({ platform, handle, href, Icon }, idx) => (
            <Fragment key={platform}>
              <a
                target="_blank"
                href={href}
                rel="noreferrer"
                className="flex items-center underline-offset-4 hover:underline"
              >
                <Icon />
                <span className="ml-px text-gray-500">/</span>
                <span className="ml-0.5">{handle}</span>
              </a>
              {idx !== SOCIALS.length - 1 && (
                <span className="text-gray-400 dark:text-gray-500">|</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
