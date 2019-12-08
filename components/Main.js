import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'
import {
    Container,
    Row, Col
} from 'reactstrap';

export default function Main(props) {

    return (
    <div className='body'>
        <Header />

        <Container>
            <Row>
                {props.children}
            </Row>
            <Row>
                <Footer />
            </Row>

        </Container>
        <Layout />
    </div>
    );
}
