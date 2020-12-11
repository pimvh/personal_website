import Document, { Html, Head, Main, NextScript } from 'next/document'
// import documentLang from 'next-translate/documentLang'

export default class MyDocument extends Document {
    render() {

        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// <Html lang={documentLang(this.props)}>
