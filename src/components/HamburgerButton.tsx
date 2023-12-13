export default function HamburgerButton({
  onClick = () => {},
}: HamburgerButtonProps) {
  return (
    <div onClick={(e) => onClick(e)}>
      <div className="p-2 text-3xl">
        <i className="fa-fw fa-sharp fa-thin fa-bars" />
      </div>
    </div>
  )
}

type HamburgerButtonProps = {
  onClick?: Function
}
