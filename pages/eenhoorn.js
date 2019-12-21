import Main from '../components/Main'
import Markdown from 'react-markdown'

export default () => (
    <Main title='Eenhoorn'>

        <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <Markdown
          source={`
#### Numeri 23:22
"God heeft hen uit Egypte uitgevoerd; zijn krachten zijn als van een eenhoorn."

#### Job 39:9-10
“Zal de eenhoorn u willen dienen? Zal hij vernachten aan uw kribbe? Zult gij den eenhoorn met zijn touw aan de voren binden? Zal hij de laagten achter u eggen?”

lees [hier](https://www.thesprucepets.com/are-unicorns-real-1885833) meer over de krachten van de eenhoorn.
`} />
        </div>
        </div>
    </Main>
);
