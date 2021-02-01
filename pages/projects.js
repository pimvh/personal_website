import Markdown from 'react-markdown';

import Layout from '../components/layout';
import Header from '../components/header';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import * as _ from "lodash";

function Projects () {

    const { t, lang } = useTranslation();


    function getProjects() {
        const data = require(`../public/static/projects/projects-${lang}.json`)["data"];

        const sorted = _.sortBy(data, 'title');
        return sorted;
    };

    const Project = ({ project }) => (
        <div className="panel">
            <div className="panel-header"> {project.title}</div>

            <div className="panel-body">
                <div className= "flex-grid">
                    <div className="col-3">
                        <img src = {project.img_link} alt = {project.img_alt} className="project-img" />
                    </div>
                    <div className="col-8">
                    <Markdown source={project.content} />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>

        <Header title={t('projects:title')} description={t('projects:description')} />

        <Layout>
        <div className = 'project_container'>

            <Markdown source={t("projects:top")} />

            <Markdown source={t("projects:bot")} />

            {getProjects().map(project => (
                <Project key={project.id} project={project} />
                    ))}
        </div>
        </Layout>
        </>
    );


}

export default Projects;
