import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
export const SideBarr = (props) => {
  const LogoPrincipal = "/assets/images/LogoPrincipal.jpg";
  const LogoPrincipalResponsive = "/assets/images/LogoPrincipalResponsive.png";
  const [classActive, setCassActive] = useState(false);
  const handleClickChangeClass = () => {
    if (classActive) {
      setCassActive(false)
    }else {
      setCassActive(true)
    }
  }
  const collapse = (index) =>{
    const element= document.getElementById(`collapseSidenavEx${index}`);
    if (element.classList.contains('hidden')){
      element.classList.remove('hidden')
    } else {
      element.classList.add('hidden')
    }
  }
  return (
    <div  className={`${classActive ? 'w-0/6': 'lg:w-1/6 w-0/6'} h-screen float-left mr-5 `}>
      <div className={` px-2 py-5`} >
        {
          classActive
          ?
          <img
            onClick={( () => handleClickChangeClass())}
              className="w-10 m-auto"
              src={LogoPrincipalResponsive}
              alt=""
            />
          :
          <>
          <img
            onClick={( () => handleClickChangeClass())}
              className="w-18 h-5 m-auto lg:hidden"
              src={LogoPrincipalResponsive}
              alt=""
            />
          <img
          onClick={( () => handleClickChangeClass())}
            className="w-16 h-14 md:w-32 lg:w-48 m-auto d-sm-none"
            src={LogoPrincipal}
            alt=""
          />
          </>
        }
        
      </div>
      <div
        className={`w-full h-full shadow-md bg-[#7be883] relative rounded-tr-lg`}
        id="sidenavExample"
      >
        {
          classActive? '':<h1 className="Metropolis-Extra-Bold py-4 text-center font-bold md:text-2xl lg:text-3xl bg-[#2c9232] rounded-tr-lg d-sm-none">
          Autos Colombia
        </h1>
        }
        <ul className="relative">
          {Menu.map((val, index) => {
            return (
              <li 
                className="relative"
                id={`lista${index}`} 
                key={index}
                onClick={ (() =>collapse(index))}>
                <a className="Metropolis-Semi-Bold flex items-center text-sm lg:py-4 lg:px-6 px-2 py-1 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer">
                  <img className="w-6 sm:m-auto lg:m-0" src={`/assets/icons/${val.icon}`} alt="" />
                  {
                    classActive? '': <span className="ml-2 d-sm-none">{val.name}</span>
                  }
                </a>
                <ul
                  className="relative accordion-collapse collapse hidden"
                  id={`collapseSidenavEx${index}`}
                  aria-labelledby="sidenavEx1"
                  data-bs-parent="#sidenavExample"
                >
                  {val.content.map((link, index2) => {
                    return (
                      <li className="relative" key={index2}>
                        <Link
                          to={link.phat}
                          className=" Metropolis-Semi-Bold flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
