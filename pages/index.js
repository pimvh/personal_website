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

<Markdown source={`Deze website is van mij, Pim van Helvoirt is een bachelorstudent Beta-gamma met Kunstmatige Intelligentie aan de Universiteit van Amsterdam.  \n\nOp de foto zie je mij met mijm favoriete plant, _de agave potatorum_.

Op deze website vind je mijn [programmeerprojecten][1] en [resources][2], die ik over de tijd heb verzameld.
[1]: </projecten> "Projecten"
[2]: </resources> "Resources"

                `} />
                </div>
                </div>
        </Main>
)

/*
en [mijn blog][3] _(in aanbouw)_
[3]: </blog> "Blog"
*/
