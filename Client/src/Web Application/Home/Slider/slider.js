import React, { Component } from 'react';
import logo1 from './images/gsd4.jpg';
import logo2 from './images/gsd5.jpg';
import logo3 from './images/gsd6.png';
import logo4 from './images/gsd7.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    
    img :logo1
  },
  {
    id: 2,
   
    img :logo2
  },
  {
    id: 3,
    
    img :logo3
  },
  {
    id: 3,
    
    img :logo4
  }
];

class Example extends Component {
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
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
          
        >
                <div>
                    <img src={item.img} height="100%"  width="100%" alt=""/>
                </div>
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption}  />
          
        </CarouselItem>
        
      );
    });

    return (
      <div style={{marginTop:'72px'}}>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Example;