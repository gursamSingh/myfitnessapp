import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const HomeHeader = () => {
  const user = useContext(UserDataContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(true);
  const menuRef = useRef(null);

  useGSAP(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.4,
        x: 0,
        opacity: 1,
        display: "block",
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.4,
        x: "-100%",
        opacity: 0,
        display: "none",
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  return (
    <div>
      {/* Header */}
      <div className="bg-[#FFFFFF] w-full h-15 flex justify-between items-center m-0 pt-4 pb-4 lg:justify-center lg:h-[60px] lg:gap-[48rem]">
        <div className="text-blue-500 font-sans text-2xl font-semibold p-4">
          myfitness
        </div>

        <div
          className="p-4 flex gap-4 hover:bg-gray-200 rounded-lg cursor-pointer"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setMenuIcon((prev) => !prev);
          }}
        >
          <button className="hover:bg-gray-200 rounded-lg cursor-pointer">
            {menuIcon ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sliding Menu */}
      <div
        ref={menuRef}
        className="top-0 left-0 w-2/3 max-w-sm h-full bg-white shadow-lg z-50"
        style={{
          transform: "translateX(-100%)",
          opacity: 0,
          display: "none",
        }}
      >
        <Menu />
      </div>
    </div>
  );
};

export default HomeHeader;
