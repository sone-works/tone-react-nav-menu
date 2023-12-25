type MenuFooterProps = {}

export default function MenuFooter({}: MenuFooterProps) {
  return (
    <div className="flex flex-col items-center">
      <ul className="flex items-center justify-center p-2">
        <li className="text-3xl mx-1">
          <a href="https://github.com/sone-dao">
            <i className="fa-fw fa-brands fa-github" />
          </a>
        </li>
        <li className="text-3xl mx-1">
          <a href="https://discord.com/invite/dfky8n7kFv">
            <i className="fa-fw fa-brands fa-discord" />
          </a>
        </li>
      </ul>
      <p className="font-header mx-1 text-small">Sone 2024</p>
    </div>
  )
}
