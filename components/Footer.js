import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardBody} from 'reactstrap'
import Markdown from 'react-markdown'

export default function Footer ({show}) {
    return (
        <Card className='FooterCard' >
            <CardBody className = 'text-center'>
              <CardTitle />
              <CardText >
              <Markdown
                source={`
Op zoek naar mijn contactgegevens?

[Klik hier](/contact)
`} />
              </CardText>
             </CardBody>
        </Card>
    );
}
