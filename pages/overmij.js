import Main from '../components/Main'
import Markdown from 'react-markdown'

export default function Overmij () {

    return (
    <Main title='Projecten'>
        <div className = 'project_container'>
        <Markdown
          source={`Ik ben Pim van Helvoirt. Op het moment studeer ik nog Kunstmatige Intelligentie aan de Universiteit van Amsterdam, maar binnenkort begin ik aan een master.

In mijn studententijd ben ik veel actief geweest in de studentenvertegenwoordiging. Zo ben ik bijvoorbeeld [voorzitter van de CSR geweest](https://www.folia.nl/actueel/112180/betagamma-student-pim-van-helvoirt-nieuwe-voorzitter-studentenraad).
              `} />
        </div>

    <CVdisplay />

    </Main>
);}

const CVdisplay = () => {

    const [open, setOpen] = React.useState(false);

    if(!open) {
        return (
          <button onClick={() => {setOpen(!open);}} className={open ? "open" : null } className='btn'>
            Klik hier om mijn CV te zien.
          </button>
        );
    } else {
        return (
            <object data="static/200609_Pim_van_Helvoirt__Curriculum_Vitae.pdf#toolbar=0" type="application/pdf" width="100%" height='auto'>
            <p>Your browser does not support this, this is <a href="http://africau.edu/images/default/sample.pdf">the link to the PDF!</a></p>
            </object>
        );
    }
};
