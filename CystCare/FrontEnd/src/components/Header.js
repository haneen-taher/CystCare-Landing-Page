import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

//import components
import Logo from "../assets/img/logo.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

//import icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [downloadCount, setDownloadCount] = useState(0); // Initialize download count

  const handleDownloadClick = async () => {
    try {
      // Send an API request to my backend to increment the download count
      await axios.post("/api/increment-download-count");
      console.log("Successfully!");

      // Display success SweetAlert
      Swal.fire({
        text: "Downloading has begun!",
        confirmButtonText: "OK",
      });

      // Update the download count in the state
      setDownloadCount(downloadCount + 1);
    } catch (error) {
      console.error("Error incrementing download count:", error);
    }
  };
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  return (
    <header
      className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className=" flex items-center justify-between relative ">
          <div className="flex items-center gap-x-[120px]">
            {/* Logo */}
            <a href="#">
              <img className="h-8" src={Logo} alt="CystCare logo" />
            </a>
            {/* nav - initially is hidden, shown in large screens */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          {/* mobile nav - initially is showing, hidden on large screens */}
          <div
            className={`${
              isNavMobileOpen ? "max-h-52" : "max-h-0"
            } lg:hidden absolute top-24 w-full left-0 right-0 bg-accent-tertiary font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>
          <Link to="https://github.com/haneen-taher/OCA-Final-Project">
            <button
              className="btn btn-quaternary flex items-center gap-x-[20px] group"
              onClick={handleDownloadClick}
            >
              Download Now{" "}
              <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition " />
            </button>
          </Link>
          {/* nav trigger btn, appears on mobile screens */}
          <div
            onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
