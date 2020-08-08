import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation'

function ActiveLink({ children, href}) {

    const { translate, locale } = useTranslation();

    const router = useRouter()
    const active = router.pathname === href ? 'active' : ''

    const handleClick = (e) => {
        e.preventDefault()
        router.push(`/${locale}/${href}`)
    }

    return (
        <a href={href} onClick={handleClick} className={active}>
          {children}
        </a>
    )
}

export default ActiveLink
