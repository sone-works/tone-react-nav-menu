import { Avatar } from '@sone-dao/tone-react-core-ui'
import { ToneUser } from '@sone-dao/tone-react-user-store'
import Link from 'next/link'

type UserDisplayProps = {
  user: ToneUser
  setMegaOpen: Function
}

export default function UserDisplay({ user, setMegaOpen }: UserDisplayProps) {
  return (
    <div className="flex flex-col items-center mx-2 mt-0 mb-2 p-4 rounded-xl bg-user-flipped">
      <Avatar
        className="w-[7rem] h-[7rem] mx-auto mt-[-75px] border-4 border-user bg-user"
        fallback={
          <i className="fa-fw fa-duotone fa-user text-user text-[3rem]" />
        }
        src={user.avatar.dataURL}
      />
      {user.isLoggedIn ? (
        <div className="flex flex-col w-full">
          <h3 className="flex items-center justify-center font-release text-user-flipped text-2xl p-1">
            {user.display}
            <span className="font-header mx-4 text-lg">
              ($0.00)
              <i className="fa-fw fa-duotone fa-wallet ml-2" />
            </span>
          </h3>
          <ul className="flex items-center justify-center font-content text-user-flipped py-1 border-user-flipped border-t">
            <li className="px-2 pt-1">
              <Link href="/dashboard" onClick={() => setMegaOpen(false)}>
                <i className="fa-fw fa-solid fa-grid-horizontal mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="px-2 pt-1">
              <Link href="/settings" onClick={() => setMegaOpen(false)}>
                <i className="fa-fw fa-duotone fa-gear mr-2" />
                Settings
              </Link>
            </li>
            <li className="px-2 pt-1">
              <Link href="/signout" onClick={() => setMegaOpen(false)}>
                <i className="fa-fw fa-duotone fa-right-from-bracket mr-2" />
                Signout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="flex w-full justify-around text-user-flipped">
          <li className="flex items-center font-header text-2xl">
            <Link href="/login">Login</Link>
          </li>
          <li className="flex items-center font-header text-2xl">
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      )}
    </div>
  )
}
