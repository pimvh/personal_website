import React, {Component} from 'react';
import Markdown from 'react-markdown'

export default function Footer () {

    
    return (
            <div className="flex-grid">
                <div className= "col-12 padding-xl text-center .fixed">
                <Markdown source={`
Op zoek naar mijn contactgegevens?

[Klik hier](/contact)
`} />
                </div>
            </div>
    );
}
