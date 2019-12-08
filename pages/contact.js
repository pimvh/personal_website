import Main from '../components/Main'
import Markdown from 'react-markdown';
import { Container, Row, Col, Tooltip} from 'reactstrap';
import { Table } from 'reactstrap'

// op Facebook of Instagram.
export default () => {

    return (

    <Main title='Contact'>

        <Container fluid className='main'>

            <Col>
            <Row className='row'>
            <div>
            Hieronder zijn mijn contactgegevens te vinden op verschillende platformen te vinden. Ik ben niet te vinden op Facebook en Instagram.

            Stuur me gerust een email!
            </div>

            <Table className='table'>

            {getContactDetails().map(contact => (
                <ContactRow key={contact.service} contact={contact} />
            ))}

            </Table>

        </Row>
        </Col>

        </Container>
        <div>

        </div>
    </Main>

);
}

function getContactDetails() {
    return [
        {service: 'MeetMe', link: 'https://doodle.com/pimvanhelvoirt', text: 'Maak hier een afspraak met mij.'},
        {service: 'Linked-in', link: 'https://nl.linkedin.com/in/pim-van-helvoirt', text: 'pim-van-helvoirt'},
        {service: 'Email', link: 'mailto:pim.van.helvoirt@home.nl', text: 'pim.van.helvoirt@home.nl'},
        {service: 'Github', link: 'https://github.com/pimvh', text: 'pimvh'}
    ];
}

const ContactRow = ({ contact }) => (

    <tr>
    <td>
    {contact.service}:
    </td>
    <td>
    <a href={`${contact.link}`} >{contact.text}</a>
    </td>

    <style jsx>{`
      a {
          text-decoration: none;
          color: blue;
      }

      a:hover {
          opacity: 0.6;
      }
    `}</style>
    </tr>
);
