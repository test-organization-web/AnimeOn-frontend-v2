import { getRandomRoute, routes } from '@/shared/config/routes'

export interface HeaderLink {
  title: string
  href: string
  onClick?: () => Promise<string>
}

export const headerLinks: HeaderLink[] = [
  { title: 'Головна', href: routes.home },
  { title: 'Каталог', href: routes.releases },
  { title: 'Випадкове', onClick: getRandomRoute, href: '' },
]
