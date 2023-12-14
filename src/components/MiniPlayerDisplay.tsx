type MiniPlayerDisplayProps = {}

export default function MiniPlayerDisplay({}: MiniPlayerDisplayProps) {
  return (
    <div
      className="px-4 py-2 font-release text-lg text-global-flipped w-full tracking-widest"
      style={{ opacity: 0.25 }}
    >
      no song selected
    </div>
  )
}
