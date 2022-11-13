import React from "react";
import { SlHandbag } from "react-icons/sl";
import { GiBoomerangSun } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { GiMailShirt } from "react-icons/gi";
import { GiBilledCap } from "react-icons/gi";
import { GiSonicShoes } from "react-icons/gi";
import { GiPirateCoat } from "react-icons/gi";
import { isHtmlElement } from "react-router-dom/dist/dom";
import DeliveryItems from "../Components/DeliveryItems";
import Chart from "../Components/Chart";
const container = [
  {
    title: "PENDING ORDER",
    count: 202,
    icon: <SlHandbag />,
    iconClass: "bg-gray-400",
  },
  {
    title: "PROCESSING ORDER",
    count: 99,
    icon: <GiBoomerangSun />,
    iconClass: "bg-orange-400",
  },
  {
    title: "READY TO DELIVER",
    count: 263,
    icon: <AiFillLike />,
    iconClass: "bg-[#00FF00]",
  },
  {
    title: "DELIVERED ORDERS",
    count: 347,
    icon: <MdDone />,
    iconClass: "bg-blue-500",
  },
];

export default function DashBoard() {
  return (
    <>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4  ">
        {container.map((item, i) => {
          return (
            <div className="p-5 bg-white shadow flex items-center justify-between rounded-lg">
              <div className="space-y-2">
                <h2 className="text-xs font-semibold">{item.title}</h2>
                <p className=" font-bold">{item.count}</p>
              </div>
              <div>
                <p
                  className={[
                    "p-2 rounded-2xl text-white",
                    item.iconClass,
                  ].join(" ")}
                >
                  {item.icon}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-start  gap-3 flex-wrap   justify-center ">
        <DeliveryItems />

        <Chart />
      </div>
    </>
  );
}
