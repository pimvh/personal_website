import Layout from '../components/MyLayout'
import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Card, Button, CardBody, CardTitle, CardText} from 'reactstrap'

export default () => (
        <Layout>

        <Card>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </CardBody>
        </Card>
        {/*
        <div>
            <p>The standard Lorem Ipsum passage, used since the 1500 s</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
        </div>
        */}

        </Layout>
)
