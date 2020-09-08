import Markdown from 'react-markdown';

import Layout from '../components/layout';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';

import * as _ from "lodash";

export default function Resources() {

    const { t, lang } = useTranslation();

    function getResources() {
        const data = require(`../public/static/resources-${lang}.json`)["data"];

        const sorted = _.sortBy(data, 'title');
        return sorted;
    };

    const Resource = ({ resource }) => (
        <div className="panel rounded-more-corners">

        <div className="panel-header"> {resource.title}</div>
        <div className="panel-body">
        <Markdown source={resource.content} />
        </div>
        </div>
    );

    return (
    <>
        <Layout>
            <Markdown
              source={t("resources:top")} />
            {getResources().map(resource => (
                <Resource key={resource.id} resource={resource} />
            ))}
        </Layout>
    </>
    );
}
