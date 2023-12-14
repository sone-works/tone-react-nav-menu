import { ToneUser } from '@sone-dao/tone-react-user-store'
import { MenuItem } from '../types'
import CloseButton from './CloseButton'
import ListenerMenu from './ListenerMenu'
import MenuFooter from './MenuFooter'
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
      className="bg-[var(--global-lighter)] text-[var(--global-darker)] flex flex-col w-full h-screen absolute top-0 left-0 transition-all ease-in-out border-r-2 border-[var(--global-darker)]"
      style={{
        marginLeft: isOpen ? 0 : '-100%',
      }}
    >
      <div className="flex justify-between items-center p-2">
        <img
          src="https://placehold.co/150x65?text=Component:+Logo"
          style={{ opacity: 0 }}
        />
        <CloseButton onClick={() => setOpen(false)} />
      </div>
      <UserDisplay user={user} />
      <div className="my-1">
        <img
          src="https://placehold.co/800x150?text=Component:+Mini+Player"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <ul className="text-2xl">
        {globalMenuItems.map((item, i) => (
          <li key={i} className="py-4 border-b border-[var(--global-darker)]">
            {item.name}
          </li>
        ))}
        {user.isLoggedIn && <ListenerMenu />}
      </ul>
      <MenuFooter />
    </div>
  )
}
