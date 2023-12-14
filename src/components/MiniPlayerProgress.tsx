import { Slider } from '@sone-dao/tone-react-core-ui'

export default function MiniPlayerProgress({}) {
  return (
    <div className="flex w-full p-2" style={{ opacity: 0.25 }}>
      <Slider
        className="flex items-center w-full"
        min={0}
        max={100}
        step={1}
        trackClassName="flex items-center p-1 first-of-type:bg-global bg-global-flipped border border-global-flipped rounded-xl"
        thumbClassName="rounded-xl bg-global p-2 border-global"
        renderThumb={(props: any) => <div {...props} />}
      />
    </div>
  )
}
