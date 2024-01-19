import { useDarkMode } from 'usehooks-ts'

type DarkModeSwitchProps = {}

export default function DarkModeSwitch({}: DarkModeSwitchProps) {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode()

  return (
    <button
      className="text-xl mr-1 cursor:pointer"
      onClick={() => toggleDarkMode()}
    >
      {!isDarkMode ? (
        <i className="fa-fw fa-duotone fa-sun" />
      ) : (
        <i className="fa-fw fa-duotone fa-moon" />
      )}
    </button>
  )
}
