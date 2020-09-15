import Head from 'next/head'

export default function Header ({ title }) {

    /* https://nextjs.org/docs#fetching-data-and-component-lifecycle */

    return (
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content="Persoonlijke website van mij" />
            <meta name="author" content="Pim van Helvoirt" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <title>
                Pim van Helvoirt
            </title>
        </Head>
        </>
    );
}
