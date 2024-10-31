import { UserAvatar } from '@/entities/user'
import { headerLinks } from '@/widgets/header/model/navigation'
import Link from 'next/link'
import { forwardRef, ReactNode } from 'react'
import { routes } from '@/shared/config/routes'
import { useRouter } from 'next/navigation'

interface MobileNavigationProps {
  handleCloseMenu: () => void
  searchNode?: ReactNode
  isLogged: boolean
}

export const MobileNavigation = forwardRef<
  HTMLDivElement,
  MobileNavigationProps
>(({ handleCloseMenu, searchNode, isLogged }, ref) => {
  const router = useRouter()
  return (
    <div
      ref={ref}
      className="absolute  animate-slide-in top-[96px] left-0 w-full bg-primary shadow-md md:hidden"
    >
      <nav className="list-none font-bold p-4 flex flex-col gap-4">
        <div className="border-b-2 flex items-center justify-between border-white/10 pb-4">
          {isLogged ? (
            <Link
              href={routes.profile}
              className="w-full flex items-center justify-center"
              onClick={handleCloseMenu}
            >
              <UserAvatar />
            </Link>
          ) : (
            <Link onClick={handleCloseMenu} href={routes.login}>
              Авторизація
            </Link>
          )}
        </div>
        {headerLinks.map((link) => (
          <li onClick={handleCloseMenu} key={link.title}>
            <a
              onClick={
                link.onClick
                  ? async () => {
                      const randomRoute = await link.onClick!()
                      router.push(randomRoute)
                    }
                  : undefined
              }
              href={link.href || '#'}
            >
              {link.title}
            </a>
          </li>
        ))}

        {searchNode}

        <li className="text-yellow-400">Підписка</li>
      </nav>
    </div>
  )
})

MobileNavigation.displayName = 'MobileNavigation'
