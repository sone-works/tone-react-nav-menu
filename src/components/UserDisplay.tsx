import { Avatar } from '@sone-dao/tone-react-core-ui'
import { ToneUser } from '@sone-dao/tone-react-user-store'
import Link from 'next/link'

type UserDisplayProps = {
  user: ToneUser
}

export default function UserDisplay({ user }: UserDisplayProps) {
  return !user.isLoggedIn ? (
    <div className="flex flex-col items-center mx-2 mt-0 mb-2 p-4 rounded-xl bg-[var(--global-darker)]">
      <Avatar
        className="w-[7rem] h-[7rem] mx-auto mt-[-75px] border-4 border-[var(--global-darker)] bg-[var(--global-lighter)]"
        fallback={
          <i className="fa-fw fa-duotone fa-user text-[var(--global-darker)] text-[3rem]" />
        }
      />
      <ul className="flex w-full justify-around text-[var(--global-lighter)]">
        <li className="flex items-center font-header text-xl">
          <Link href="/login">login</Link>
        </li>
        <li className="flex items-center font-header text-xl">
          <Link href="/signup">signup</Link>
        </li>
      </ul>
    </div>
  ) : (
    <img
      src="https://placehold.co/800x350?text=Component:+User+Display"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  )
}
