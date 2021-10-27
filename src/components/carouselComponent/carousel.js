import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

const CarouselComponent = ({ label,subDataItem }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  
  const getRedirectionData = (label, number) => {
    switch (label) {
      case "books":
        return `/data/${label}/${number}`;
      case "characters":
        return `/data/${label}/${number}`;
        case 'povCharacters':
        return `/data/characters/${number}`
        case 'swornMembers':
          return `/data/characters/${number}`
      case "allegiances":
        return `/data/houses/${number}`;
        case "houses":
          return `/data/houses/${number}`;
      default:
        return `/data/characters/583`;
    }
  };
  const getNumber=(dataItem)=>{
    let res=dataItem.split('/').reverse()[0]
    return res.toString()
  }

  const isValidLink=(label)=>{
   return (label==='characters'||label==='povCharacters'||label==='books'||label==='allegiances'
                ||label==='houses'||label==='swornMembers')
  }
  return (
    <>
      <Carousel
        responsive={responsive}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        centerMode={true}
      >
        {/* {carouselContainer(label, subDataItem)} */}
        {subDataItem.map((dataItem,index) => {
          return (
            <Card style={{ height: '300px'}} key={index}>
              <Card.Img className="card-img"src={`https://source.unsplash.com/random?sig=${(Math.floor(Math.random()*10))}`}/>
              <Card.Body className={`${!isValidLink(label)&&'flex_center'}`}>
              {/* .substr(0,label.length-1) */}
                <Card.Title>{`${label?.toUpperCase()} - ${getNumber(dataItem)}`}</Card.Title>
                {isValidLink(label)&&
                <Link
                  to={getRedirectionData(label,getNumber(dataItem))}
                  variant="primary"
                  style={{ color: "#303c47" }}
                >View Content</Link>
          }
              </Card.Body>
            </Card>
          );
        })}
        </Carousel>
      ;
    </>
  );
};

export default withRouter(CarouselComponent);
