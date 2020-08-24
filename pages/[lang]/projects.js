import Head from 'next/head'
import Markdown from 'react-markdown'
import useTranslation from '../../hooks/useTranslation'
import ActiveLink from '../../components/activelink'

import * as _ from "lodash"

function Projects () {

    const { translate, locale } = useTranslation();

    function getProjects() {
        var arr = [
            {id: 1, button_id: "1", title: "Een persoonlijke website", img_link: "/static/nextjs.png", img_alt: "Next.js",
            content: `Met behulp van [Next.js][1], een react.js framework, heb ik deze website gemaakt. Deze website is geschreven in JavaScript met behulp van [React][2] en [Pure CSS Framework][3].
[1]: <https://nextjs.org/> "Next.js"
[2]: <https://reactjs.org/> "React.js"
[3]: <http://purecssframework.com/> "Pure CSS Framework"`},

            {id: 2, button_id: "2", title: "Een Telegram-bot in Python", img_link: "/static/pythontelegrambot.png", img_alt: "Python Telegram wrapper",
            content: `Op Telegram heb ik een bot gemaakt, met behulp van de [Python-telegram-bot wrapper][1]. Op het moment kan deze ondere andere het weer opzoeken, memes versturen van reddit en heeft deze verschillende antwoorden op tekst die de gebruiker stuurt. De bot is bereikbaar met Telegram op [@Rob_Ot][3]. Verder is de code [beschikbaar via Github][2].
[1]: <https://python-telegram-bot.org/> "Python Telegram Wrapper"
[2]: <https://github.com/pimvh/telegrambot_simple> "Simple Telegram Bot"
[3]: <https://t.me/Rob_Ot_bot> "@Rob_Ot_bot"`}
        ];

        const sorted = _.sortBy(arr, 'title');

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
        <Head>
        <title>
            Pim van Helvoirt - Projects
        </title>
        </Head>
        <div className = 'project_container'>
            <Markdown source={translate('projects')['message']} />

            <p> {translate('projects')['linkmessage']}
                <ActiveLink href="contact" > {(locale == 'en') ? "contact me" : "contacteren"}. </ActiveLink>
            </p>

            {getProjects().map(project => (
                <Project key={project.id} project={project} />
                    ))}
        </div>
        </>
    );


}

export default Projects
