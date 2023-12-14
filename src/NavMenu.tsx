import { UseUserStore } from '@sone-dao/tone-react-user-store'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import DarkModeSwitch from './components/DarkModeSwitch'
import HamburgerButton from './components/HamburgerButton'
import MegaMenu from './components/MegaMenu'

type NavMenuProps = {
  useUserStore: UseUserStore
}

export default function NavMenu({ useUserStore }: NavMenuProps) {
  const [isMegaOpen, setMegaOpen] = useState<boolean>(false)

  const user = useUserStore()
  const pathname = usePathname()

  const hiddenPaths = ['/signup', '/login']

  const isHidden = hiddenPaths.includes(pathname)

  return !isHidden ? (
    <div className="w-full bg-[var(--global-lighter)] text-[var(--global-darker)] flex items-center justify-between p-2 sticky top-0 border-b-2 border-[var(--global-darker)]">
      <span className="text-4xl font-release font-bold">tone</span>
      <DarkModeSwitch />
      {/* div for CSS (or JS) to control hamburger visibility */}
      <div>
        <HamburgerButton onClick={() => setMegaOpen(!isMegaOpen)} />
      </div>
      <MegaMenu isOpen={isMegaOpen} setOpen={setMegaOpen} user={user} />
    </div>
  ) : (
    <></>
  )
}
