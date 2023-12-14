type MiniPlayerControlsProps = {}

export default function MiniPlayerControls({}: MiniPlayerControlsProps) {
  return (
    <div
      className="flex items-center justify-center text-global-flipped"
      style={{ opacity: 0.25 }}
    >
      <span className="text-xl p-1 m-1">
        <i className="fa-duotone fa-shuffle" />
      </span>
      <span className="text-3xl p-1 m-1">
        <i className="fa-fw fa-duotone fa-backward-step" />
      </span>
      <span className="text-4xl p-1 m-1">
        <i className="fa-fw fa-duotone fa-play" />
      </span>
      <span className="text-3xl p-1 m-1">
        <i className="fa-fw fa-duotone fa-forward-step" />
      </span>
      <span className="text-xl p-1 m-1">
        <i className="fa-duotone fa-repeat" />
      </span>
    </div>
  )
}
