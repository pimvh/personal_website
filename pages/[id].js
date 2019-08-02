import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../components/MyLayout';
import { Card, Button, CardBody, CardTitle, CardText} from 'reactstrap'

export default () => {
    const router = useRouter();

    return (

    <Layout title={router.query.title}>
    <Card>
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

      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </Layout>
  );
};
