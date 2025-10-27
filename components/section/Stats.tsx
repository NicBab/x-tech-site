import React from 'react';
import Image from "next/image";
import { StatsInfo } from "../../constants/stats"

const Stats = () => {
  return (
    <section className="w-full py-8">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-12">
            {StatsInfo.map((item) => (
                <div key={item.id} className="flex justify-center items-center">
                    <Image 
                        src={item.src}
                        alt={item.alt}
                        width={200}
                        height={100}
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Stats