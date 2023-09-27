import React, { useState } from "react";
// import hero data
import { heroData } from "../data";
import axios from "axios";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

//import components
import Header from "./Header";
const Hero = () => {
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

  //destructure hero data
  const { title, subtitle, btnText, image } = heroData;

  return (
    <section className="lg:h - [ 900px] py-12">
      <Header />
      <div className="container mx-auto  h-full relative">
        <div
          className="flex
            flex-col
            xl:flex-row
            items-center
            h-full
            md:py-24"
        >
          {/* text */}
          <div
            className=" text-center xl:text-left          
            "
          >
            <h1
              className="h1 xl:max-w-[700px] mb-6 xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {" "}
              {title}
            </h1>
            <p
              className="lead xl:max-w-[380px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>
            <Link to="https://github.com/haneen-taher/OCA-Final-Project">
              <button
                className="btn btn-primary mb-8 xl:mb-0"
                data-aos="fade-down"
                data-aos-delay="600"
                onClick={handleDownloadClick}
              >
                {btnText}
              </button>
            </Link>
          </div>
          {/* image */}
          <div
            className="xl:absolute xl:-right-12 xl:bottom-16 "
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={image} alt="girl illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
