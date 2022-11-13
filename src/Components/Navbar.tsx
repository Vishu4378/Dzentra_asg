import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillTagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { OpenBar } from "../App";

export default function Navbar() {
  const { setOpen } = useContext(OpenBar);

  return (
    <div className="flex justify-between items-center  px-3">
      <div>
        <GiHamburgerMenu
          onClick={() => {
            setOpen?.((curr) => !curr);
          }}
          className="cursor-pointer text-white"
        ></GiHamburgerMenu>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="flex space-x-1.5 items-center">
          <BsFillPlusCircleFill className="text-white text-xs" />
          <BsFillTagFill className="text-white text-xs" />
          <FaUser className="text-white text-xs" />
        </div>
        <select
          name="language"
          id="language"
          className="rounded text-[9px] font-bold p-1  text-blue-600"
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
    </div>
  );
}
