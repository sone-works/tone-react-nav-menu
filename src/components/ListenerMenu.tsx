import { MenuItem } from '../types'

const listenerMenuItems: MenuItem[] = [
  {
    name: 'Collection',
    icon: '',
    link: '',
  },
  {
    name: 'Playlists',
    icon: '',
    link: '',
  },
]

type ListenerMenuProps = {}

export default function ListenerMenu() {
  return (
    <div>
      <ul>
        {listenerMenuItems.map((item, i) => (
          <li key={i} className="py-4 border-b border-[var(--global-darker)]">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
