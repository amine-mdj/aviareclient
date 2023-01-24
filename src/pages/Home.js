import React, { Component }  from "react";
import Slider from "react-slick";

import Customslide1 from '../components/Customslide1'
import Customslide2 from '../components/Customslide2'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './home.css'

function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div
        className="nextarrow"
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
      <div
        className="prevarrow"
        onClick={onClick}
      />
    );
  }



export default class Home extends Component {
    render() {
      const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
      return (
        <div className="main">
          
          <Slider {...settings}>
          <Customslide2 />
          <Customslide1 />
          </Slider>
        </div>
      );
    }
  }