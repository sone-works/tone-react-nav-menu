import useUserStore from '@sone-dao/tone-react-user-store'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import DarkModeSwitch from './components/DarkModeSwitch'
import HamburgerButton from './components/HamburgerButton'
import MegaMenu from './components/MegaMenu'

type NavMenuProps = {}

export default function NavMenu({}: NavMenuProps) {
  const [isLoaded, setLoaded] = useState<boolean>(false)
  const [isMegaOpen, setMegaOpen] = useState<boolean>(false)

  const pathname = usePathname()
  const user = useUserStore()

  const hiddenPaths = ['/signup', '/login']

  const isHidden = hiddenPaths.includes(pathname)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return user.isLoggedIn && !isHidden ? (
    <div
      className="
        w-full bg-global text-global flex items-center justify-between p-2 sticky top-0 border-b-2 border-global"
    >
      <span className="text-4xl font-release font-bold">tone</span>
      <DarkModeSwitch />
      <HamburgerButton onClick={() => setMegaOpen(!isMegaOpen)} />
      {isLoaded && (
        <MegaMenu
          isMegaOpen={isMegaOpen}
          setMegaOpen={setMegaOpen}
          user={user}
        />
      )}
    </div>
  ) : (
    <div className="hidden" />
  )
}
