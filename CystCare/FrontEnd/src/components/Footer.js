import React, { useState } from "react";

//import data
import { footer } from "../data";
//import component
import Copyright from "../components/Copyright";

import axios from "axios";
import Swal from "sweetalert2";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      await axios.post("/subscribe", { email: formData.email });
      console.log("Successfully subscribed!");
      setFormData({ email: "" });

      // Display success SweetAlert
      Swal.fire({
        title: "Success!",
        text: "You have been subscribed to our newsletter.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error subscribing:", error);

      // Display error SweetAlert
      Swal.fire({
        title: "Error!",
        text: "Failed to subscribe. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // destructure footer data
  const { logo, links, newsletter, form } = footer;
  return (
    <footer className="pt-[142px] pb-[60px]">
      <div className=" container mx-auto">
        <div className="flex  flex-col items-center  text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          {/* logo */}
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
            <img className="h-8" src={logo} alt="logo" />
          </div>

          {/* list 1 */}
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className=" font medium hover:text-accent transition"
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* newsLetter */}
          <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="200">
            <div className="text-2xl uppercase font-medium mb-6">
              {newsletter.title}
            </div>
            <div className="text-xl text-light mb-[18px]">
              {newsletter.subtitle}
            </div>
            {/* form */}
            <form className="max-w-[349px] mb-[10px]" onSubmit={handleSubmit}>
              <div className="h-[62px] p-[7px] flex border border-dark rounded-lg ">
                <input
                  className="w-full h-full pl-6 border-none outline-none placeholder:text-dark"
                  type="text"
                  placeholder={form.placeholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ email: e.target.value })}
                />
                <button className="btn btn-primary mb-8 xl:mb-0  hover:bg-accentHover w-[127px] h-[3rem] text-white">
                  {form.btnText}
                </button>
              </div>
            </form>
            <span className="text-sm text-light">{form.smallText}</span>
          </div>
        </div>
        <hr
          className="mt-10 mb-5"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
        />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
