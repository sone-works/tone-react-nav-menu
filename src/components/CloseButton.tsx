export default function CloseButton({ onClick = () => {} }: CloseButtonProps) {
  return (
    <div onClick={(e) => onClick(e)} className="p-2 text-3xl">
      <i className="fa-fw fa-sharp fa-thin fa-xmark" />
    </div>
  )
}

type CloseButtonProps = {
  onClick?: Function
}
