import Main from '../components/Main'
import Markdown from 'react-markdown';
import * as _ from "lodash";

export default () => (
    <Main title='Resources'>
    <Markdown
      source={`
Hieronder is een lijst van verschillende resources die ik tot nu toe vezameld heb te vinden. Deze lijst update ik nog steeds _(laatst op: 12 februari)_.

De lijst is op alfabetische volgorde. Heb je vragen over deze lijst? Neem dan [contact](/contact) met mij op.
   `} />
    {getResources().map(resource => (
        <Resource key={resource.id} resource={resource} />
    ))}
    </Main>
);

function getResources() {
    const data = require('../public/static/resources.json')
    var arr = data['data']

    const sorted = _.sortBy(arr, 'title');
    return sorted;
};

 const Resource = ({ resource }) => (
     <div className="panel rounded-more-corners">

     <div className="panel-header"> {resource.title}</div>
      <div className="panel-body">
     <Markdown source={resource.content} />
     </div>
     </div>
 );
