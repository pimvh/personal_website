import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Main from '../components/Main'

export default () => {
    const router = useRouter();

    return (

    <Main title={router.query.title}>
    <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <Markdown
          source={`
Error 404: De pagina waar je op gezocht heb bestaat niet. Ga [terug naar de homepage](/).
`} />
        </div>
        </div>
    </Main>
  );
};
