import Main from '../../components/main'
import Markdown from 'react-markdown'
import WithLocale from '../../components/withLocale'
import useTranslation from '../../hooks/useTranslation'

function AboutMe () {

    const { translate, locale } = useTranslation();

    const CVdisplay = () => {

        const [open, setOpen] = React.useState(false);

        if(!open) {
            return (
              <button onClick={() => {setOpen(!open);}} className={open ? "open" : null } className='btn'>
                {translate('aboutme')['button']}
              </button>
            );
        } else {
            return (
                <object data={`/static/200801_Pim_van_Helvoirt__Curriculum_Vitae-${locale}.pdf#toolbar=0`} type="application/pdf" width="100%" height='600px'>
                <p> {translate('aboutme')['errormessage']} <a href={`/static/200801_Pim_van_Helvoirt__Curriculum_Vitae-${locale}.pdf`}>link</a>.</p>
                </object>
            );
        }
    };

    return (
    <Main title='Projecten'>
        <div className = 'project_container'>
        <Markdown
          source={translate('aboutme')['topmessage']} />
        </div>

    <CVdisplay />

    </Main>
);}

export default WithLocale(AboutMe)
