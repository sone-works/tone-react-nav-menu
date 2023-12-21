import { ToneUser } from '@sone-dao/tone-react-user-store'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import DarkModeSwitch from './components/DarkModeSwitch'
import HamburgerButton from './components/HamburgerButton'
import MegaMenu from './components/MegaMenu'

type NavMenuProps = {
  user: ToneUser
}

export default function NavMenu({ user }: NavMenuProps) {
  const [isLoaded, setLoaded] = useState<boolean>(false)
  const [isMegaOpen, setMegaOpen] = useState<boolean>(false)

  const pathname = usePathname()

  const hiddenPaths = ['/signup', '/login']

  const isHidden = hiddenPaths.includes(pathname)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return !isHidden ? (
    <div
      className="
        w-full bg-global text-global flex items-center justify-between p-2 sticky top-0 border-b-2 border-global"
    >
      <span className="text-4xl font-release font-bold">tone</span>
      <DarkModeSwitch />
      {/* div for CSS (or JS) to control hamburger visibility */}
      <div>
        <HamburgerButton onClick={() => setMegaOpen(!isMegaOpen)} />
      </div>
      {isLoaded && (
        <MegaMenu isOpen={isMegaOpen} setOpen={setMegaOpen} user={user} />
      )}
    </div>
  ) : (
    <></>
  )
}
