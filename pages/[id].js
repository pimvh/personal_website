import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Main from '../components/Main'
import { Card, Button, CardBody, CardTitle, CardText} from 'reactstrap'
export default () => {
    const router = useRouter();

    return (

    <Main title={router.query.title}>
    <Card className = "general_card">
        <CardBody>
          <CardTitle>Helaas!</CardTitle>
          <CardText>
          <div className="markdown">

          <Markdown
            source={`
Error 404: De pagina waar je op gezocht heb bestaat niet. Ga [terug naar de homepage](/).
`} />
</div>
</CardText>
        </CardBody>
    </Card>
    </Main>
  );
};
