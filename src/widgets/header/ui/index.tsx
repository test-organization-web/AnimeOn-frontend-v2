'use client'

import { PageLayout } from '@/shared/layouts/page'
import Image from 'next/image'
import logo from '@/shared/assets/icons/logo.svg'
import { LegacyRef } from 'react'
import { Button } from '@/shared/components/ui/button'
import { UserAvatar } from '@/entities/user'
import { SearchAnime } from '@/features/anime/search'
import { routes } from '@/shared/config/routes'
import Link from 'next/link'
import { headerLinks } from '@/widgets/header/model/navigation'
import { useHeader } from '@/widgets/header/model'

export const Header = () => {
  const {
    handleCloseMenu,
    isMenuOpen,
    menuRef,
    setIsMenuOpen,
    searchRef,
    buttonRef,
  } = useHeader()
  return (
    <header className="fixed bg-gradient-primary z-10 flex items-center w-screen h-[96px] md:h-[80px]">
      <PageLayout>
        <div className="flex justify-between items-center w-full">
          <nav className="hidden md:flex list-none font-bold gap-9">
            {headerLinks.map((link) => (
              <Link onClick={handleCloseMenu} href={link.href} key={link.title}>
                <li>{link.title}</li>
              </Link>
            ))}
          </nav>
          <Link onClick={handleCloseMenu} href={routes.home}>
            <Image src={logo} alt="logo" className="w-36 md:w-36" />
          </Link>
          <Button
            ref={buttonRef}
            variant="ghost"
            className="md:hidden text-2xl flex items-center"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </Button>

          <div className="hidden md:flex items-center gap-9">
            <nav className="list-none items-center flex gap-9">
              <SearchAnime />
              <Link href={routes.login}>Авторизація</Link>
            </nav>
            <UserAvatar />
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-[96px] left-0 w-full bg-primary shadow-md md:hidden"
          >
            <nav className="list-none font-bold p-4 flex flex-col gap-4">
              <div className="border-b-2 flex items-center justify-between border-white/10 pb-4">
                <UserAvatar />
              </div>
              {headerLinks.map((link) => (
                <Link
                  onClick={handleCloseMenu}
                  href={link.href}
                  key={link.title}
                >
                  <li>{link.title}</li>
                </Link>
              ))}

              <SearchAnime
                handleCloseMenu={handleCloseMenu}
                trigger={<li>Пошук</li>}
                ref={searchRef as LegacyRef<HTMLInputElement>}
              />

              <li className="text-yellow-400">Підписка</li>
            </nav>
          </div>
        )}
      </PageLayout>
    </header>
  )
}
