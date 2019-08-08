import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown';
import {
    Container, Row, Col,
    Card, CardTitle, CardBody, CardText
} from 'reactstrap'

export default () => (
    <Layout title='Resources'>

    <Container fluid className='main'>
    <Col><Row className='row'>
    <div>

    <Markdown
      source={`
Onderstaand zijn verschillende resources te vinden die ik over de tijd heen verzameld heb. Klik op een van de buttons om een catergorie te openen.
   `} />
    </div>

    {getResources().map(resource => (
        <Resource key={resource.id} resource={resource} />
    ))}

    </Row></Col>

    </Container>
    </Layout>

 )

 function getResources() {
     return [
    {id: '1', title: 'Privacytools.io - Bron voor online privacy',
    content: `De website [privacytools.io](https://PrivacyTools.io) is een goede start om je internet privacy te verhogen en worden verschillende argumenten (zoals "Maar ik heb niets te verbergen") tegen privacy tegengesproken.
Op deze website vindt je verschillende tips voor welke services (browsers, emailclients, messaging apps, etc.) beter zijn om te gebruiken wat betreft privacy.

Bekijk, als firefox-gebruiker, zeker het onderdeel waarin verschillende add-ons voor firefox worden aangeraden. Deze zijn allemaal vrij eenvoudig aan je browser toe te voegen.

    `},

    {id: '2', title: 'Rank a Brand - Merken vergelijken qua duurzaamheid',
    content: `De website [Rank a Brand](https://rankabrand.org/) is een website, grotendeels op basis van vrijwilligers, die de duurzaamheid van allerlei merken test.
De rankings kloppen niet altijd, maar mocht je van plan zijn om nieuwe spullen te kopen, dan is dit altijd een goede website om van tevoren te controleren.
    `}

    ];
}

 const Resource = ({ resource }) => (
     <Card className="resource_card">
     <CardBody>
     <CardTitle className="cardtitle"> {resource.title}</CardTitle>
     <CardText>
     <Markdown source={resource.content} />
     </CardText>
     </CardBody>
     </Card>
 );

 // TODO: Categorieen toevoegen, nadenken wat je hier op je website wil hebben staan.
