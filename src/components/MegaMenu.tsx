import { ToneUser } from '@sone-dao/tone-react-user-store'
import { MenuItem } from '../types'
import CloseButton from './CloseButton'
import ListenerMenu from './ListenerMenu'
import MenuFooter from './MenuFooter'
import MiniPlayer from './MiniPlayer'
import UserDisplay from './UserDisplay'

type MegaMenuProps = {
  isOpen: boolean
  setOpen: Function
  user: ToneUser
}

const globalMenuItems: MenuItem[] = [
  {
    name: 'Home',
    icon: '',
    link: '',
  },
  {
    name: 'Search',
    icon: '',
    link: '',
  },
]

export default function MegaMenu({ isOpen, setOpen, user }: MegaMenuProps) {
  return (
    <div
      className="bg-global text-global flex flex-col w-full h-screen absolute top-0 left-0 transition-all ease-in-out"
      style={{
        marginLeft: isOpen ? 0 : '-100%',
      }}
    >
      <div className="flex justify-end items-center p-2">
        <CloseButton onClick={() => setOpen(false)} />
      </div>
      <UserDisplay user={user} />
      <MiniPlayer />
      <ul className="text-2xl">
        {globalMenuItems.map((item, i) => (
          <li key={i} className="py-4 border-b border-[var(--global-darker)]">
            {item.name}
          </li>
        ))}
        <ListenerMenu />
      </ul>
      <MenuFooter />
    </div>
  )
}
