import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import '@mantine/carousel/styles.css';

import { IconStar } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { Button, Card, Group, Image, Text } from '@mantine/core';
import classes from './Homepage.module.css';

import image1 from '../../assets/carousel/1.png';
import image2 from '../../assets/carousel/2.png';
import image3 from '../../assets/carousel/3.png';

const carouselImages = [
    image1,
    image2,
    image3
];

export function Homepage() {
    const autoplay = useRef(Autoplay({ delay: 3000 }));

    const slides = carouselImages.map((image) => (
        <Carousel.Slide key={image}>
          <Image src={image} height={600} />
        </Carousel.Slide>
      ));
    
      return (
        <Card radius="md" withBorder padding="xl">
          <Card.Section>
            <Carousel
              withIndicators
              loop
              classNames={{
                root: classes.carousel,
                controls: classes.carouselControls,
                indicator: classes.carouselIndicator,
              }}
              plugins={[autoplay.current]}
            >
              {slides}
            </Carousel>
          </Card.Section>
    
          <Group justify="space-between" mt="lg">
            <Text fw={500} fz="lg">
              Malayan Digital Prints
            </Text>
    
            <Group gap={5}>
              <IconStar size={16} />
              <Text fz="xs" fw={500}>
                4.78
              </Text>
            </Group>
          </Group>
    
          <Text fz="sm" c="dimmed" mt="sm">
            Create Custom T-Shirt, Tote Bags, or Mugs.
          </Text>
    
          <Group justify="space-between" mt="md">
            <div>
              
            </div>
    
            <Button radius="md">Book now</Button>
          </Group>
        </Card>
      );
}