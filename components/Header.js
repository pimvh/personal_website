import Head from 'next/head'
import Footer from './Footer'
import React from 'react'
import {
    Jumbotron, Container,
    Row, Col,
    Card,
    Carousel, CarouselItem, CarouselControl, CarouselIndicators,  CarouselCaption
} from 'reactstrap';

export default function Header ({title}) {

    /* https://nextjs.org/docs#fetching-data-and-component-lifecycle */

        return (
        <div>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content="Persoonlijke website van mij" />
            <meta name="author" content="Pim van Helvoirt" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            // Latest compiled and minified CSS
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>

            // jQuery library
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

            // Popper JS
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

            // Latest compiled JavaScript
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

            <title>Pim van Helvoirt {(title == 'Home') ? "" : ("- ").concat(title)} </title>
        </Head>

        <Container fluid className = "Header_container">
        <Row>
        <Col className = "carousel_col" >
        <HeadCarousel className="carousel" />
        </Col>
        </Row>
        </Container>
        </div>
    );
}

const items = [
  {
    src: '/static/garden.png',
    altText: 'Garden',
    caption: ''
  },
  {
    src: '/static/snowymountains.png',
    altText: 'Sneeuwbergen',
    caption: ''
  },
  {
    src: '/static/dunes.png',
    altText: 'Duinen',
    caption: ''
  }
];

class HeadCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
