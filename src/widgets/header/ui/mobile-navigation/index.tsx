import { UserAvatar } from '@/entities/user'
import { headerLinks } from '@/widgets/header/model/navigation'
import Link from 'next/link'
import { forwardRef, ReactNode } from 'react'
import { routes } from '@/shared/config/routes'
import { useRouter } from 'next/navigation'
import { logout } from '@/entities/session'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { LoginPage } from '@/screens/login'
import { RegistrationPage } from '@/screens/registration'

interface MobileNavigationProps {
  handleCloseMenu: () => void
  searchNode?: ReactNode
  isLogged: boolean
  isLogin: boolean
  togglePage: () => void
}

export const MobileNavigation = forwardRef<
  HTMLDivElement,
  MobileNavigationProps
>(({ handleCloseMenu, searchNode, isLogged, togglePage, isLogin }, ref) => {
  const router = useRouter()
  return (
    <div
      ref={ref}
      className="absolute top-[96px] left-0 w-full bg-primary shadow-md md:hidden"
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
            !isLogged && (
              <Dialog>
                <DialogTrigger>Авторизація</DialogTrigger>
                <DialogContent ref={ref} className="lg:w-[40%] w-full">
                  {isLogin ? (
                    <LoginPage togglePage={togglePage} />
                  ) : (
                    <RegistrationPage togglePage={togglePage} />
                  )}
                </DialogContent>
              </Dialog>
            )
          )}
        </div>
        {headerLinks.map((link) =>
          link.onClick ? (
            <a
              className="cursor-pointer"
              key={link.href}
              onClick={() =>
                link.onClick().then((res) => {
                  router.push(res)
                  handleCloseMenu()
                })
              }
            >
              {link.title}
            </a>
          ) : (
            <Link onClick={handleCloseMenu} href={link.href} key={link.href}>
              {link.title}
            </Link>
          ),
        )}

        {searchNode}

        <li className="text-yellow-400">Підписка</li>
        {isLogged && (
          <div className="border-t-2 border-white/10 pt-4">
            <li
              className="text-base font-bold"
              onClick={() => {
                logout().then(() => router.refresh())
              }}
            >
              Вийти з профілю
            </li>
          </div>
        )}
      </nav>
    </div>
  )
})

MobileNavigation.displayName = 'MobileNavigation'
