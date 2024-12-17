import { Link } from "react-router-dom";
import { Dropdown, DropdownList, DropdownTitle } from "./Dropdown";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <div className="container mx-auto py-4 flex">
      <div className="logo w-[140px] mr-auto">
        <img
          src="https://esnfrance.org/wp-content/uploads/2020/09/cropped-cropped-Logo-ESN-France-1.png"
          alt=""
        />
      </div>
      <nav className="flex items-center">
        <Dropdown>
          <DropdownTitle>
            <div className="flex items-center">
              <span>About Us&nbsp;</span>
              <ChevronDown size={20} />
            </div>
          </DropdownTitle>
          <DropdownList
            items={[
              { content: "Missions and values", link: "#" },
              { content: "Governance", link: "#" },
              { content: "Permanent team", link: "#" },
              { content: "History", link: "#" },
              { content: "Documents", link: "#" },
            ]}
          />
        </Dropdown>
        <Dropdown>
          <DropdownTitle>
            <div className="flex items-center">
              <span>The Network&nbsp;</span>
              <ChevronDown size={20} />
            </div>
          </DropdownTitle>
          <DropdownList
            items={[
              { content: "Missions", link: "#" },
              { content: "Local sections", link: "#" },
              { content: "International network", link: "#" },
            ]}
          />
        </Dropdown>
        <Dropdown>
          <DropdownTitle>
            <div className="flex items-center">
              <span>Our Actions&nbsp;</span>
              <ChevronDown size={20} />
            </div>
          </DropdownTitle>
          <DropdownList
            items={[
              { content: "Tools and actions", link: "#" },
              { content: "Mobility pathway", link: "#" },
            ]}
          />
        </Dropdown>
        <Dropdown>
          <DropdownTitle>
            <div className="flex items-center">
              <span>Our Partners&nbsp;</span>
              <ChevronDown size={20} />
            </div>
          </DropdownTitle>
          <DropdownList
            items={[
              { content: "Our partners", link: "#" },
              { content: "Our four sections", link: "#" },
            ]}
          />
        </Dropdown>
        <div className="px-8 text-lg cursor-pointer font-medium transition-all hover:scale-110 hover:text-sky-700 ">
          <Link to="#">Contact</Link>
        </div>
      </nav>
    </div>
  );
};
