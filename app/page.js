"use client";
import { Suspense } from "react";
import Filter from "./components/Filter";
import ListContainer from "./components/ListContainer";
import SwiperSlider from "./components/SwiperSlider";
import { Loader } from "rsuite";

export default function Home() {
  return (
    <main className="h-full px-[4vw] mx-auto max-w-[1400px]  overflow-x-hidden mt-24">
      <div className="h-fit w-full mb-10">
        <h1 className="text-[30px] font-medium mb-4 text-[#440099]">
          Destacados
        </h1>
        <Suspense fallback={<Loader />}>
          <SwiperSlider />
        </Suspense>
      </div>
      <ListContainer />
    </main>
  );
}
