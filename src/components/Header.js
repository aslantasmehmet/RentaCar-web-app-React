import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import { TbWorld } from "react-icons/tb";
import { IoIosLogIn } from "react-icons/io";

export default function Header() {
    const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <div className="w-full h-16  ">
        <div className="flex flex-row ">
          <div className="flex flex-row">
          <div className="mt-7 ml-8 mr-3"><Hamburger toggled={isOpen} toggle={setOpen} direction="left"  /></div>
            <img
              className="w-56 h-20"
              src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1673619563/A%C3%A7%C4%B1k_Yavrua%C4%9Fz%C4%B1_F%C4%B1r%C3%A7a_Darbesi_Foto%C4%9Fraf%C3%A7%C4%B1l%C4%B1k_Logo_nl1j81.png"
            />
          </div>
          <div className="mt-8 font semibold text-lg font-bold text-orange-500 ml-8 underline underline-offset-8">
            ARAÇ KİRALAMA
          </div>
          <div className="mt-8 font semibold text-lg font-bold text-black mx-8 hover:text-orange-500 duration-100">
            AYLIK ARAÇ KİRALAMA
          </div>
          <div className="flex flex-row hover:text-orange-500 duration-100">
            <div>
              <TbWorld className="mt-9 ml-72 " size={25} />
            </div>
            <div className="mt-9 ml-1 font semibold text-md font-bold   ">
              TR
            </div>
          </div>
          <div className=" flex flex-row hover:text-orange-500 duration-100">
            <div>
              <IoIosLogIn
                className="mt-9 ml-8 "
                size={25}
              />
            </div>
            <div className="mt-9 ml-1 font semibold text-md font-bold    ">
              GİRİŞ YAP | ÜYE OL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
