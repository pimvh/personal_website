import React from 'react';
import Markdown from 'react-markdown';
import Layout from '../components/layout';

export default function ErrorPage () {
    return (
        <>
        <Layout>
        <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              children={`
    Error the page you looked for does not exist. Return to [home](/).
    `} />
            </div>
            </div>
        </Layout>
        </>
    );
}
