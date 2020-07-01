import Main from '../components/Main'
import React from 'react'
import Markdown from 'react-markdown';

export default () => (
        <Main title = 'Home'>
            <div className = "flex-grid">
                <div className="col-4">
                    <img src="/static/me.jpg" alt="Pim met plant" className='picture' />
                </div>
                <div className="col-6">

<Markdown source={`Deze website is van mij, Pim van Helvoirt, een bachelorstudent Beta-gamma met Kunstmatige Intelligentie aan de Universiteit van Amsterdam. Op dit moment ben ik bijna klaar met mijn studie.

Op de foto zie je mij met mijn favoriete plant, _de agave potatorum_. Lees hier meer [over mij][1].

Op deze website vind je mijn [programmeerprojecten][2] en [resources][3], die ik over de tijd heb verzameld.
[1]: </overmij> "Over mij"
[2]: </projecten> "Projecten"
[3]: </resources> "Resources"

                `} />
                </div>
                </div>
        </Main>
)
