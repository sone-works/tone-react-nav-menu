import { Avatar } from '@sone-dao/tone-react-core-ui'
import { ToneUser } from '@sone-dao/tone-react-user-store'
import Link from 'next/link'

type UserDisplayProps = {
  user: ToneUser
}

export default function UserDisplay({ user }: UserDisplayProps) {
  return !user.isLoggedIn ? (
    <div className="flex flex-col items-center mx-2 mt-0 mb-2 p-4 rounded-xl shadow border border-gray-200">
      <Avatar
        className="w-[7rem] h-[7rem] mx-auto mt-[-75px] shadow border border-gray-200 bg-white"
        fallback={
          <i className="fa-fw fa-duotone fa-user text-zinc-500 text-[3rem]" />
        }
      />
      <ul className="flex w-full justify-around">
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
