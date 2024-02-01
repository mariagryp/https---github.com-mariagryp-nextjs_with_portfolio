"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    jon: "Chef",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, aut.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Richard Thompson",
    jon: "Chef",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, aut.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Emili Grant",
    jon: "Chef",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, aut.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Chak Noris",
    jon: "Chef",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, aut.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Winnie Puh",
    jon: "Chef",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, aut.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Richard Thompson",
    jon: "Chef",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, aut.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="containe mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          sliderPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* images */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
