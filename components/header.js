import Head from 'next/head';

export default function Header ({title, description, imageUrl, imageAlt }) {

    /* https://nextjs.org/docs#fetching-data-and-component-lifecycle */

    const titledef = title? title : "pimvanhelvoirt.nl";
    const descriptiondef = description? description : "welcome to my personal website";
    const imageUrldef = `https://pimvanhelvoirt.nl/static/${imageUrl ? imageUrl : "common/unicorn_icon.jpg"}`;
    const imageAltdef = imageAlt ? imageAlt : "A lovely unicorn";

    return (
        <>
        <Head>
            <meta charSet="UTF-8" />

            {/* variable metatags */}
            <meta property="title" content={titledef}/>
            <meta name="description" content={descriptiondef} />

            {/* OpenGraph properties */}
            <meta property="og:title" content={titledef} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={descriptiondef} />
            <meta property="og:image" content={imageUrldef} />
            <meta property="og:image:secure_url" content={imageUrldef} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            <meta property="og:image:alt" content={imageAltdef} />
        </Head>
        </>
    );
}
