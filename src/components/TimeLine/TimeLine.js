import React, { useState, useRef, useEffect } from "react";

import {
  Imga,
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ImageData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = ImageData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / ImageData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          ImageData.length
      );

      setActiveItem(index);
    }
  };

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about" nopadding>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {ImageData.map((image, i) => (
            <CarouselMobileScrollNode
              key={i}
              final={i === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={i}
                id={`carousel__item-${i}`}
                active={activeItem}
                onClick={(e) => handleClick(e, i)}
              >
                <Imga src={image.image} alt="keo-images" />
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {ImageData.map((item, i) => (
          <CarouselButton
            key={i}
            index={i}
            active={activeItem}
            onClick={(e) => handleClick(e, i)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
