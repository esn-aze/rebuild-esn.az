import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Dropdown = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative px-8" ref={dropdownRef}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          toggle: () => setToggle((prev) => !prev),
          isToggled: toggle,
        });
      })}
    </div>
  );
};

export const DropdownTitle = ({ children, toggle, isToggled }) => {
  return (
    <div
      className={`text-lg cursor-pointer font-medium transition-all hover:scale-110 hover:text-sky-700 ${
        isToggled && "text-sky-700"
      }`}
      onClick={toggle}
    >
      {children}
    </div>
  );
};

export const DropdownList = ({ items, isToggled }) => {
  return (
    <>
      {isToggled && (
        <ul className="flex flex-col absolute bottom-[-10px] left-0 transform translate-y-full bg-white">
          {items.map((i, idx) => (
            <DropdownItem key={idx} link={i.link}>
              {i.content}
            </DropdownItem>
          ))}
        </ul>
      )}
    </>
  );
};

const DropdownItem = ({ children, link }) => {
  console.log(link);

  return (
    <div className="border-b-2 border-b-neutral-300  px-6 py-2 text-center text-nowrap hover:text-sky-600 transition-all cursor-pointer">
      <Link to={link}>{children}</Link>
    </div>
  );
};
