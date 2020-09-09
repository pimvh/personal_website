import Markdown from 'react-markdown';

import Layout from '../components/layout';

import useTranslation from 'next-translate/useTranslation';

function AboutMe () {

    const { t, lang } = useTranslation();

    const CVdisplay = () => {

        const [open, setOpen] = React.useState(false);

        if(!open) {
            return (
              <button onClick={() => {setOpen(!open);}} className={open ? "open" : null } className='btn'>
                {t("aboutme:button")}
              </button>
            );
        } else {
            return (
                <object data={`/static/200801_Pim_van_Helvoirt__Curriculum_Vitae-${lang}.pdf#toolbar=0`} type="application/pdf" width="100%" height='600px'>
                <p> {t("aboutme:errormessage")} <a href={`/static/200801_Pim_van_Helvoirt__Curriculum_Vitae-${lang}.pdf`}>link</a>.</p>
                </object>
            );
        }
    };

    return (
        <>
        <Layout>
            <div className = 'project_container'>
            <Markdown
              source={t("aboutme:topcontent")} />
            </div>

            <CVdisplay />
        </Layout>
        </>
);}

export default AboutMe;
