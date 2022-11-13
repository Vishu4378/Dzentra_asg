import React from "react";
import { GiMailShirt } from "react-icons/gi";
import { GiBilledCap } from "react-icons/gi";
import { GiSonicShoes } from "react-icons/gi";
import { GiPirateCoat } from "react-icons/gi";
const deliveryOrders = [
  {
    title: "98659865",
    id: "ORD-0948",
    icon: <GiMailShirt />,
    brdrClass: "border-yellow-400",
  },
  {
    title: "Arif",
    id: "ORD-0949",
    icon: <GiMailShirt />,
    icon2: <GiMailShirt />,
    brdrClass: "border-red-400",
  },
  {
    title: "shiyas",
    id: "ORD-0950",
    icon: <GiBilledCap />,
    brdrClass: "border-gray-400",
  },
  {
    title: "Walk in customer",
    id: "ORD-0951",
    icon: <GiSonicShoes />,
    icon2: <GiBilledCap />,
    brdrClass: "border-gray-400",
  },
  {
    title: "customer2",
    id: "ORD-0952",
    icon: <GiPirateCoat />,
    icon2: <GiPirateCoat />,
    icon3: <GiBilledCap />,
    brdrClass: "border-blue-500",
  },
];
export default function DeliveryItems() {
  return (
    <>
      <div className="bg-white  py-2 flex-1  rounded-xl shadow-lg w-2/3">
        <div className="p-4 flex justify-between items-center ">
          <div>
            <p className="font-semibold">Today's Delivery</p>
          </div>
          <div className="gap-2 flex flex-col sm:flex-row ">
            <input
              type={"search"}
              placeholder="Search Here"
              className="border-[1.5px] rounded px-2 py-1 text-xs max-w-[320px] w-full "
            ></input>
            <select
              name="orders"
              id="orders"
              className="text-xs w-36 border-[1.5px] rounded px-2 py-1 p-1"
            >
              <option value="allOrders">All Orders</option>
              <option value="lorem">Lorem </option>
            </select>
          </div>
        </div>
        <div className=" p-2 grid grid-cols-1  lg:grid-cols-3 w-full  gap-2 ">
          {deliveryOrders.map((item, i) => {
            return (
              <div
                className={[
                  "p-2 bg-white  flex border-l-[5px]  flex-col justify-between rounded-xl border ",
                  item.brdrClass,
                ].join(" ")}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs font-semibold">{item.title}</p>
                  </div>
                  <p className="text-xs font-semibold">{item.id}</p>
                </div>
                <div className="flex gap-1">
                  <p className="bg-gray-100 w-fit p-2 rounded-xl">
                    {item.icon}
                  </p>
                  {item.icon2 && (
                    <p className="bg-gray-100 w-fit p-2 rounded-xl">
                      {item.icon2}
                    </p>
                  )}
                  {item.icon3 && (
                    <p className="bg-gray-100 w-fit p-2 rounded-xl">
                      {item.icon3}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
