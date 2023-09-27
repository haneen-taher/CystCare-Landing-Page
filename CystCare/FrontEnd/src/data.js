// import icons
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

// import images
import AboutImg from "../src/assets/img/about-removebg-preview.png";
import Feature1Img from "../src/assets/img/features/feature1.png";
import Feature2Img from "../src/assets/img/features/feature2-removebg-preview.png";
import Feature3Img from "../src/assets/img/features/feature3-removebg-preview.png";
import Feature4Img from "../src/assets/img/features/feature4-removebg-preview.png";
import Avatar1Img from "../src/assets/img/testimonials/avatar1-removebg-preview.png";

import Avatar3Img from "../src/assets/img/testimonials/avatar3-removebg-preview.png";
import Avatar4Img from "../src/assets/img/testimonials/avatar4-removebg-preview.png";

import HeroImage from "../src/assets/img/hero-img-removebg-preview.png";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";
import Logo from "../src/assets/img/logo.png";

export const navigationData = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Features",
    href: "/#features",
  },
  {
    name: "Contact Us",
    href: "/#contact",
  },
  {
    name: "Blog",
    href: "#",
  },
];

export const heroData = {
  title: ` Lorem Ipsum is simply dummy text of the printing and typesetting.`,
  subtitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  btnText: "Download now!",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "We are a high-level data storage bank",
  subtitle:
    "The place to store various data that you can access at any time through the internet  and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.",
};

export const featuresData = {
  title: "Features",
  subtitle:
    "Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Search Data",
      description:
        "Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",

      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "24 Hours Access",
      description:
        "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent..",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Security Code",
      description:
        "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password than you created, so only you can open the file.",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "John Fang",
    web: "wordfaang.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar3Img,
    name: "Jim Ferry",
    web: "jimjimf.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar4Img,
    name: "Jim Ferry",
    web: "jimjimf.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const footer = {
  logo: Logo,
  links: [
    { name: "Home", href: "/" },
    { name: "About us", href: "/" },
    { name: "Features", href: "/" },
    { name: "Blog", href: "/" },
  ],

  newsletter: {
    title: "Newsletter",
    subtitle: "Over 25000 people have subscribed",
  },
  form: {
    placeholder: "Enter your email",
    btnText: "Subscribe",
    smallText: "We don’t sell your email and spam",
  },
};

export const copyright = {
  link1: {
    name: "Privacy & Terms",
    href: "/",
  },
  link2: {
    name: "Contact us",
    href: "/",
  },
  copyText: "Copyright @ 2022 xpence",
  socialIcons: [
    { icon: <FaYoutube />, href: "/" },
    { icon: <FaFacebook />, href: "/" },
    { icon: <FaInstagram />, href: "/" },
  ],
};
