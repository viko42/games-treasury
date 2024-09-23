import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './games-list-sliders.css';

interface Game {
  title: string;
  image: string;
  playNowLink: string;
  logo: string;
  slug: string;
}

const games: Game[] = [
  { 
    title: 'Kaidro', 
    image: 'https://roninchain.com/static/images/games/kaidro-bg.png', 
    playNowLink: "",
    logo: 'https://roninchain.com/static/images/games/kaidro-logo.png',
    slug: "kaidro",
  },

 
  { 
    title: 'Wild Forest', 
    image: 'https://roninchain.com/static/images/games/wild-forest-bg.png', 
    playNowLink: '/wildforest',
    logo: 'https://roninchain.com/static/images/games/wild-forest-logo.png',
    slug: "wildforest",
  },
  { 
    title: 'Pixels', 
    image: 'https://roninchain.com/static/images/games/pixels-bg.png', 
    playNowLink: '',
    logo: 'https://roninchain.com/static/images/games/pixels-logo.png',
    slug: "pixels",
  },
  // Add more games here...
];

export default function GamesListSliders(props: { game: string }) {
  return (
    <div className="games-list-slider">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        // navigation
        // pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={'auto'}
        loop={true}
        initialSlide={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            {game.playNowLink === '' || props.game === game.slug ? (
              <div className="game-card">
                <div className="game-logo">
                  <Image src={game.logo} alt={`${game.title} logo`} width={100} height={50} />
                </div>
                <img src={game.image} alt={game.title} />
                <div className="game-info">
                  <button className="play-now-btn" disabled>
                    {game.playNowLink === '' ? 'Soon' : 'Current Game'}
                  </button>
                </div>
              </div>
            ) : (
              <Link href={game.playNowLink}>
                <div className="game-card">
                  <div className="game-logo">
                    <Image src={game.logo} alt={`${game.title} logo`} width={100} height={50} />
                  </div>
                  <img src={game.image} alt={game.title} />
                  <div className="game-info">
                    <button className="play-now-btn">View analytics</button>
                  </div>
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}