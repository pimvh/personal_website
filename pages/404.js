import Markdown from 'react-markdown';

const Error404 = () => (

    <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <Markdown
          source={`
ERROR 404: De pagina waar je op gezocht, bestaat niet. Ga [terug naar de homepage](/).
`} />
        </div>
        </div>
);

export default Error404
