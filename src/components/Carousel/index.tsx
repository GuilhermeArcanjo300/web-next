import Image from 'next/image'
import styled from '@/components/Carousel/style.module.scss'
import LogoBall from '@/image/logo.png';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const data = [
    {
      "id": 1,
      "title": "Swiper Carousel Example",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
      "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1597364662/kizmelvin/ussama-azam-hlg-ltdCoI0-unsplash_ttfjib.jpg"
    },
    {
      "id": 2,
      "title": "Swiper Carousel Example",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
      "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645530199/kizmelvin/Carousel%20assets/slim-emcee-jzdOX0XkXr8-unsplash_zocsdq.jpg"
    },
    {
      "id": 3,
      "title": "Swiper Carousel Example",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
      "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645534321/kizmelvin/Carousel%20assets/luwadlin-bosman-J1oObe7WWjk-unsplash_f56oh3.jpg"
    }
  ];

export default function CarouselResponsive() {
    return(
        <div className={styled.container}>
            {/* <div>
                <div className={styled.card}>
                    <Image src={LogoBall} alt='logo' className={styled.image}/>
                </div>
                <div className={styled.card}>
                    <Image src={LogoBall} alt='logo' className={styled.image}/>
                </div>
            </div> */}
            <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
          >
            {data.map((item) => (
              <div key={item.id}>
                <div>
                    <Image src={LogoBall} alt='logo' className={styled.image}/>
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
    )
}