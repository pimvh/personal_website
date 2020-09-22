const OpenGraph = ({ title, description, imageUrl, imageAlt }) => {

    return (
        <>
            <meta property="og:title" content={title || "pimvanhelvoirt.nl"} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description || "welcome to my personal website"} />
            <meta property="og:image" content={`https://pimvanhelvoirt.nl/static/common/${imageUrl || "unicorn_icon.jpg"}`} />
            <meta property="og:image:secure_url" content={`https://pimvanhelvoirt.nl/static/common/${imageUrl || "unicorn_icon.jpg"}`} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            <meta property="og:image:alt" content={imageAlt} />
        </>
    );
}

export default OpenGraph;
