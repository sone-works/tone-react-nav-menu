import MiniPlayerControls from './MiniPlayerControls'
import MiniPlayerDisplay from './MiniPlayerDisplay'
import MiniPlayerProgress from './MiniPlayerProgress'

type MiniPlayerProps = {}

export default function MiniPlayer({}: MiniPlayerProps) {
  return (
    <div className="flex items-center bg-global-flipped my-1 mx-2 p-2 rounded-xl">
      <div
        className="bg-global rounded-xl"
        style={{ width: '85px', height: '85px', opacity: 0.25 }}
      ></div>
      <div className="flex grow flex-col">
        <MiniPlayerDisplay />
        <MiniPlayerProgress />
        <MiniPlayerControls />
      </div>
    </div>
  )
}
