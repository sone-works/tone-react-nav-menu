type MenuFooterProps = {}

export default function MenuFooter({}: MenuFooterProps) {
  return (
    <ul className="flex items-center justify-center p-2">
      <li className="font-header mx-1 text-small">Sone Dao 2024</li>
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
  )
}
