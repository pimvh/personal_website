import React, { useEffect } from 'react'
import Head from '../components/header'
import { useRouter } from 'next/router'
import { getInitialLocale } from '../lib/translations/getInitialLocale'

export default function Refer () {
    const router = useRouter();

    useEffect(() => {router.push('/[lang]', `/${getInitialLocale()}`)})

    return (
    <Head />
    )
}
