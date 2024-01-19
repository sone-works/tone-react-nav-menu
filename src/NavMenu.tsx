import { ToneUser } from '@sone-dao/tone-react-user-store'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import DarkModeSwitch from './components/DarkModeSwitch'
import HamburgerButton from './components/HamburgerButton'
import MegaMenu from './components/MegaMenu'

type NavMenuProps = {
  user: ToneUser
}

export default function NavMenu({ user }: NavMenuProps) {
  const [isMegaOpen, setMegaOpen] = useState<boolean>(false)

  const pathname = usePathname()

  const hiddenPaths = ['/signup', '/login']

  const isHidden = hiddenPaths.includes(pathname)

  return user.isLoggedIn && !isHidden ? (
    <div className="w-full bg-global text-global flex items-center justify-between p-2 sticky top-0 border-b-2 border-global">
      <span className="text-4xl font-release font-bold">tone</span>
      <div className="flex items-center">
        <DarkModeSwitch />
        <HamburgerButton onClick={() => setMegaOpen(!isMegaOpen)} />
      </div>
      <MegaMenu isMegaOpen={isMegaOpen} setMegaOpen={setMegaOpen} user={user} />
    </div>
  ) : (
    <></>
  )
}
