import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown';
import * as _ from "lodash";
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
Hieronder is een lijst van verschillende resources die ik tot nu toe vezameld heb te vinden. De lijst is op alfabetische volgorde. Heb je vragen over deze lijst? Neem dan [contact](/contact) met mij op.
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
    var arr = [
    {id: '1', title: 'Privacytools.io - Bron voor online privacy',
    content: `De website [privacytools.io](https://PrivacyTools.io) is een goede start om je internetprivacy naar een hoger niveau te brengen. Verder worden op deze website verschillende argumenten geven waarom internetprivacy van belang is (e.g. een antwoord op "Maar ik heb niets te verbergen").
Je vindt op deze website een gedetailleerde lijst van services/tips over verschillende services (browsers, emailclients, messaging apps, etc.) die beter rekening houden met je privacy.

Bekijk, als je gebruiker van een firefoxbrowser bent, zeker het onderdeel waar verschillende add-ons voor firefox worden aangeraden. Deze zijn allemaal vrij eenvoudig aan je browser toe te voegen.`
    },

    {id: '2', title: 'Rank a Brand - Merken vergelijken qua duurzaamheid',
    content: `De website [Rank a Brand](https://rankabrand.org/) is een website, grotendeels op basis van vrijwilligers, die de duurzaamheid van allerlei soorten merken test.
De labels kloppen niet altijd (of zijn niet altijd beschikbaar), maar mocht je van plan zijn om nieuwe spullen te kopen, dan is dit altijd een goede website om van tevoren te even te controleren.`
    },


    {id: '3', title: 'Todoist - Handige takenlijst',
    content: `De Takenlijst app [Todoist](https://todoist.com), is handig om je taken bij te houden. De kosten van deze app blijven erg beperkt (~15 eu per jaar). De app is ook multiplatform (helaas niet op Ubuntu) en via het internet beschikbaar.
Hiernaast heeft de website verschillende tutorials/templates voor het maken van lijstjes om je gestelde doelen te behalen.`
    },

    {id: '4', title: 'Mozilla Privacy Not Included - Een gids om privacyveilig aankopen te doen.',
    content: `[De Mozilla Privacy buyer guide](https://foundation.mozilla.org/en/privacynotincluded/) laat een ander perspectief zien op een aantal aankopen. In deze gids kun je met verschillende filters verschillende soorten koptelefoons, camera's en andere apparaten laten zien.
De website hanteert een creepy-schaal voor hoe angstaanjagend andere gebruikers een product vinden.`
    }
    ];

    const sorted = _.sortBy(arr, 'title');

    return sorted;
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
