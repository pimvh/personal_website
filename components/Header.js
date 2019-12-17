import Head from 'next/head'
import React from 'react'

export default function Header ({title}) {

    /* https://nextjs.org/docs#fetching-data-and-component-lifecycle */

        return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content="Persoonlijke website van mij" />
            <meta name="author" content="Pim van Helvoirt" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            // Popper JS - library for Pop-ups
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <title>Pim van Helvoirt {(title == 'Home') ? "" : ("- ").concat(title)} </title>
        </Head>
    );
}
