import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '43%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0401/9070/5820/files/Z_Fold_4_Desktop.jpg?v=1666083099',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0572/4779/3329/files/WhatsApp_Image_2023-02-21_at_18.48.02_1_1400x.jpg?v=1676988796',
    },
    {
      image:
        'https://www.mycart.pk/media/wysiwyg/porto/homepage/slider/08/slider/Slider_Banner.jpg',
    },
    {
      
      image:
        'https://cdn.metro-online.pk/dashboard/images/1874386325.jpg',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'450px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        color={'orange.700'}
        >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
      color={'orange.700'}
        aria-label="right-arrow"
        
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}