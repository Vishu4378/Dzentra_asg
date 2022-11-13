import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

import SideBar from "./Components/SideBar";
import DashBoard from "./Pages/DashBoard";
import Orders from "./Pages/Orders";
import Pos from "./Pages/Pos";

const Main = () => (
  <Routes>
    <Route path="/" element={<DashBoard></DashBoard>} />
    <Route path="/orders" element={<Orders></Orders>} />
    <Route path="/pos" element={<Pos></Pos>} />
  </Routes>
);
export const OpenBar = createContext<{
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}>({});

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = () => {};
  return (
    <>
      <BrowserRouter>
        <OpenBar.Provider value={{ open, setOpen }}>
          <div className="flex">
            <div className="bg-blue-500 h-64 fixed w-full top-0 left-0 right-0 -z-10 "></div>
            <SideBar />
            <div className=" flex-1 px-4 py-2">
              <Navbar />
              <Main />
            </div>
          </div>
        </OpenBar.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
