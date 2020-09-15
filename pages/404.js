import Markdown from 'react-markdown';

import { GetStaticProps } from 'next';
import i18nConfig from '../i18n.config';
import { GetI18nProps, getI18nProps } from '../lib/i18n';


const Error404 = () => (

    <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <Markdown
          source={`
ERROR 404: De pagina waar je op gezocht, bestaat niet. Ga [terug naar de homepage](/).
`} />
        </div>
        </div>
);

export async function getStaticProps(){
    return {
        props: {...await getI18nProps({
            language: i18nConfig.defaultLanguage.prefix,
            paths: [],
        }),
        }
    }

}

export default Error404
