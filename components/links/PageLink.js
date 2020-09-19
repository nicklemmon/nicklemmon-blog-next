import Link from 'next/link'

export default function PageLink(props) {
  const { onClick, onKeyDown, children, href, className } = props

  return (
    <Link href={href} passHref onKeyDown={onKeyDown} onClick={onClick}>
      <a className={className}>{children}</a>
    </Link>
  )
}
