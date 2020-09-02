import { useRouter } from 'next/router';

function ActiveLink({children, href}) {

    const locale = 'en';

    const router = useRouter()

    const active = router.pathname === `/[lang]${href}` ? 'active' : ''

    const handleClick = (e) => {
        e.preventDefault()
        router.push(`/${locale}${href}`)
    }

    return (
        <a href={href} onClick={handleClick} className={active}>
          {children}
        </a>
    )
}

export default ActiveLink
