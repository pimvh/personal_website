import React, { useEffect } from 'react'
import Head from '../components/header'
import { useRouter } from 'next/router'
import getInitialLocale from '../lib/translations/getInitialLocale'

export default function Refer () {
    const router = useRouter();

    useEffect(() => {

        const initLocale = getInitialLocale();

        router.push(`/[lang]`, `/${initLocale}`)}
    )

    return (
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className = "flex-grid">
            loading...
        </div>
        </>
    )
}
