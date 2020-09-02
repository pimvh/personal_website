import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getLanguageFromURL } from '../lib/i18n';

export default class MyDocument extends Document {
    render() {

        const { page } = this.props.__NEXT_DATA__;
        const prefix = getLanguageFromURL(page);

        return (
            <Html lang={prefix}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
