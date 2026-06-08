'use client';

import {useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './carousel.module.css';

const photos = [
  '/images/photo_1.jpg',
  '/images/photo_2.jpg',
  '/images/photo_3.jpg',
  '/images/photo_4.jpg',
  '/images/photo_5.jpg',
  '/images/photo_6.jpg',
  '/images/photo_7.jpg',
  '/images/photo_8.jpg',
  '/images/photo_9.jpg',
  '/images/photo_10.jpg',
  '/images/photo_11.jpg',
];

export default function PhotoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.carouselWrapper}>
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.carouselContainer}>
          {photos.map((photo, index) => (
            <div className={styles.slide} key={photo}>
              <img
                src={photo}
                alt={`Фото ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          type='button'
          className={styles.button}
          onClick={scrollPrev}
          aria-label='Попереднє фото'
        >
          ←
        </button>

        <button
          type='button'
          className={styles.button}
          onClick={scrollNext}
          aria-label='Наступне фото'
        >
          →
        </button>
      </div>
    </section>
  );
}
