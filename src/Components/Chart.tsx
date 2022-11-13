import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MdCircle } from "react-icons/md";
const data = [
  { name: "Delivered", value: 700 },
  { name: "Returned", value: 100 },
  { name: "Ready To Deliver", value: 500 },
  { name: "Pending", value: 300 },
  { name: "Processing", value: 300 },
];
const COLORS = ["#0088FE", "#FF0000", "#4ad84b", "#FFA500", "#A9A9A9"];

export default function App() {
  return (
    <div className="bg-white shadow-lg p-2 pb-6  rounded-xl ">
      <p className="font-medium pl-4">Overview</p>
      <ResponsiveContainer width={320} height={400}>
        <PieChart>
          <Pie
            data={data}
            cx={160}
            cy={150}
            innerRadius={50}
            outerRadius={125}
            fill="#8884d8"
            paddingAngle={0.5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            iconType={"circle"}
            iconSize={6}
            content={({ payload }) => (
              <ul className="grid grid-cols-2  w-fit mx-auto gap-x-20 gap-y-1 ">
                {payload?.map((item, index) => {
                  console.log(item);
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xs "
                    >
                      <MdCircle color={item.color} size={8} />
                      {item.value}
                    </li>
                  );
                })}
              </ul>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
