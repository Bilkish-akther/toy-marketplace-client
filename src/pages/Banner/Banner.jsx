/*eslint-disable no-unused-vars */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

import { Container } from "react-bootstrap";

const Banner = () => {
  
  return (
    <Container className="mt-5 w-100 h-75 rounded ">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 rounded"
            src="https://i.ibb.co/THkV7Yh/bannner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="mb-16">
            <p className="text-color-design">
              Step into the magical realm of dolls at our toy shop. Experience
              the joy of choosing from an extensive selection of dolls, ranging
              from classic favorites to the latest trendy characters. Let your
              imagination soar as you explore intricately designed doll
              clothing, accessories, and charming playsets, creating endless
              possibilities for imaginative play and storytelling.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 rounded"
            src="https://i.ibb.co/F08JRwP/banner2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>
              Immerse yourself in a world of enchanting dolls at our delightful
              store. Discover a captivating collection of fashion dolls, baby
              dolls, and collectible dolls from various brands. Explore
              miniature worlds, dollhouses, and charming accessories that will
              ignite your imagination and create unforgettable playtime moments.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 rounded"
            src="https://i.ibb.co/PZ8vsT5/banner4-2.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              Welcome to our dolls toy shop, a haven for doll enthusiasts of all
              ages. Lose yourself in a wonderland of dolls, where you'll find a
              diverse array of beautifully crafted dolls, including elegant
              fashion dolls, adorable baby dolls, and limited edition
              collector's items.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
