import { ToneUser } from '@sone-dao/tone-react-user-store'
import { MenuItem } from '../types'
import CloseButton from './CloseButton'
import ListenerMenu from './ListenerMenu'
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
      className="bg-white flex flex-col w-full h-full absolute top-0 left-0"
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
          <li key={i} className="py-4 border-b border-solid border-black">
            {item.name}
          </li>
        ))}
        {user.isLoggedIn && <ListenerMenu />}
      </ul>
      <div>
        <img
          src="https://placehold.co/800x350?text=Component:+Menu+Footer"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  )
}
