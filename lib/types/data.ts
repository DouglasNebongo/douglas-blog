import { GithubRepository } from './server'

export type Project = {
  type: 'work' | 'self'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string | GithubRepository | null
  builtWith: string[]
  links?: { title: string; url: string }[]
}
