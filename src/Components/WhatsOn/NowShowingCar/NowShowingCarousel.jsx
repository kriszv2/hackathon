import Carousel from 'react-bootstrap/Carousel';
import "./NowShowingCarousel.css"

export default function NowShowingCarousel() {
  return (
    <section className='carousel-section'>

    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1920/250"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1920/250"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1920/250"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      <span>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis voluptates, asperiores, ratione recusandae accusantium modi aut quas maxime dolore fugit! In fuga adipisci cumque deleniti? Ut cum sit alias!
        </p>
        </span>
      </section>
  );
}
