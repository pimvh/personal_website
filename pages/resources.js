import Markdown from 'react-markdown';

import Layout from '../components/layout';
import Header from '../components/header';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import * as _ from "lodash";

export default function Resources() {

    const { t, lang } = useTranslation();

    function getResources() {
        const data = require(`../public/static/resources/resources-${lang}.json`)["data"];

        const sorted = _.sortBy(data, 'title');
        return sorted;
    };

    const Resource = ({ resource }) => (
        <div className="panel rounded-more-corners">

        <div className="panel-header"> {resource.title}</div>
        <div className="panel-body">
        <Markdown children={resource.content} />
        </div>
        </div>
    );

    return (
        <>

        <Header title={t('resources:title')} description={t('resources:description')} />

        <Layout>
            <Markdown
              children={t("resources:top")} />
            {getResources().map(resource => (
                <Resource key={resource.id} resource={resource} />
            ))}
        </Layout>
        </>
    );
}
