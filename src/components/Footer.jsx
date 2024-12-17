import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-[#212121] py-10 text-white">
      <div className="max-w-[1000px] w-full mx-auto flex">
        <div className="flex-1 px-5">
          <h3 className="text-lg mb-3 text-nowrap">
            Erasmus Student Network Azerbaijan
          </h3>
          <div className="text-neutral-400">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem.</p>
          </div>
        </div>
        <div className="flex-1 px-5 pl-16">
          <h3 className="text-lg mb-3">About Us</h3>
          <div className="text-neutral-400">
            <div className="mb-2">
              <Link className="text-neutral-400 hover:text-white transition-all">
                The network's history
              </Link>
            </div>
            <div className="mb-2">
              <Link className="text-neutral-400 hover:text-white transition-all">
                Missions and values
              </Link>
            </div>
            <div className="mb-2">
              <Link className="text-neutral-400 hover:text-white transition-all">
                Governance
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 px-5">
          <h3 className="text-lg mb-3">Our Network</h3>
          <div className="text-neutral-400">
            <div className="mb-2">
              <Link className="text-neutral-400 hover:text-white transition-all">
                Local sections
              </Link>
            </div>
          </div>
          <div className="mb-2">
            <Link className="text-neutral-400 hover:text-white transition-all">
              Their missions
            </Link>
          </div>
          <div className="mb-2">
            <Link className="text-neutral-400 hover:text-white transition-all">
              ESN International
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
