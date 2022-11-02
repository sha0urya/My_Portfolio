import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import * as Scroll from 'react-scroll';
import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar';

export default function Home({ blogs, profile}) {
  const client = createClient({
    projectId: "37ddxr38",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  // const profile = {
  //   title: "I am Praveen",
  //   name: "Praveen",
  //   image: "https://i.ibb.co/1GBDGj2/praveen-official.jpg" ,
  //   fbLink: "https://facebook.com/",
  //   twitterLink: "https://twitter.com/sha0urya2",
  //   instagramLink: "https://instagram.com/sha0urya",
  // }
  
  
  
  return (
    <><>
      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport" />

        <title>{profile.title} - Developer | Coder | Software Geek</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//" />

        <meta
          property="og:url"
          content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <link rel="icon" type="image/png" href="https://i.postimg.cc/SQZsdR2J/praveen-official.jpg" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet" />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet" />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head> 
      <NavBar profile={profile} />
      {/* <div className="w-full z-50 top-0 py-3 sm:py-5  absolute ">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
             <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              <li className="group pl-6">

                <a href='#about'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#portfolio'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#clients'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#work'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#statistics'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#blog'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div> */}
      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" /> 
      <div className="hidden absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
        <button className="absolute top-0 right-0 mt-4 mr-4">
          <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
        </button>

        <ul className="mt-8 flex flex-col">

          <li className="py-2">

           <span 
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
           {/* <a href="/#about" 
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</a> */}
 
          </li>

          <li className="py-2">

            <span 
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

          </li>

          {/* <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>

          </li> */}

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

          </li>

        </ul>
      </div>
    </><><div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
        <div
          className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
        </div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img src={builder.image(profile.image).width(200).url()} className="h-48 rounded-full sm:h-56" alt="author" />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm {profile.name}!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">Let's connect</p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  {/* <a href={profile.fbLink}>
                    <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                  </a> */}
                  <a href="https://twitter.com/sha0urya2" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                  </a>
                  {/* <a href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                  </a> */}
                  <a href="https://in.linkedin.com/in/sha0urya" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a href="https://www.instagram.com/sha0urya/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                  </a>
                </div>
              </div>
                <Link href={'/blogs'}><div className="buttons text-center md:text-left">
                  <button className='bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl'>All Blogs</button>
                </div></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Praveen Kumar, a full-stack developer. 
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20 text-decoration-line: none;">
            Hello Sir/Madam,
<br />
First of all,
<br />
Thank You very much for coming here and giving me this opportunity to introduce myself.
<br />
My name is Praveen Kumar. My native place is jalalpur, Chapra District,Bihar.
<br />
I completed my Intermediate in Dharikshan PD. H/S +2 Madhopur,gopalganj College, gopalganj in 2021 and I did my schooling in CCS in my native place in 2019.

Coming to my strengths I'm hard working, easy to learn quickly, self-motivated and confident with a positive attitude.
<br />
So, far as my family background is concerned there are 4 members in my family, my parents and we were 2 siblings.

My father is a Principal in Goverment School in Bihar, my mother is a homemaker and I have an younger brother.
<br />
My technical skills are in C, C++, HTML, CSS, Javascript, Nodejs, Reactjs etc.
I am work on windows, Linux and Mac operating system.
I have a couple of hobbies which are listening to music, watching movies and cooking.
<br />
My short-term goal is to get a job in a reputed organization.

And my long-term goal is to achieve a higher position in the same organisation.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                {/* <a href="/">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </a> */}
                <a href="https://twitter.com/sha0urya2" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                {/* <a href="/" className="pl-4">
                  <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                </a> */}
                <a href="https://in.linkedin.com/in/sha0urya" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.instagram.com/sha0urya/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  HTML & CSS
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{"width": "90%"}}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">C++</h4>
                <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "90%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Javascript
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{"width": "85%"}}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">C</h4>
                <h3 className="font-body text-3xl font-bold text-primary">80%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the things i am doing
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-development-white.svg" alt="development icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-development-black.svg" alt="development icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
I am learning new technologies in web development feild and using them in real life.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Technical Writing
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Write blogs about Technology.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Talks about Technology
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Share my knowledge in form of blogs.
              </p>
            </div>
          </div>
          {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Email Development
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Graphic Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/Zone_out.png" href="https://zone0ut.netlify.app/" className="w-full shadow" alt="portfolio image" />
          </a>
          <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/p_portfolio.png" href="https://praveenkportfolio.netlify.app/" className="w-full shadow" alt="portfolio image" />
          </a>
          <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/clock.png" href="/" className="w-full shadow" alt="portfolio image" />
          </a>
          <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/github profile_search.png" href="/" className="w-full shadow" alt="portfolio image" />
          </a>
    
        </div>
      </div>


      <div className="container py-16 md:py-20" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I did before
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                {/* <span className="shrink-0"> */}
                  {/* <img src="/assets/img/logo-spotify.svg" className="h-auto w-32" alt="company logo" /> */}
                {/* </span> */}
                <div className="relative ml-3 hidden w-full md:block">
                  {/* <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span> */}
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40"> December-2021 - </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary"> Competitive Programming </span>
                    <div className="pt-2">
                      <span className="block font-body text-black"> I started my Coding journey in December. At first i learn the CPP Programming Language. Then i start giving contests on Codechef and i also start learning STL side by side and after 3 months i become 3 star coder on codechef. </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <div className="relative ml-3 hidden w-full md:block">
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Aug-2022 - </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Web Development</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">I started my web dev journey in August. Firstly i learned HTML,CSS and Javascript and after that i worked with diffrent technologies like Nodejs,React etc. And I'm am still learning new technologies.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <div className="relative ml-3 hidden w-full md:block">
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">September-2022 -</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary"> Data Structures and Algorithms </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">I am learning DSA and also giving contests to improve my Coding Journey.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
        style={{"backgroundImage": "url(/assets/img/experience-figure.png)"}} id="statistics">
        <div className="container">
          <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <img src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    5+
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Finished Projects
                  </h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <img src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    1
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Awards Won
                  </h4>
                </div>
              </div>

             

              <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <img src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    20+
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Bugs Fixed
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I like to write 
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {blogs.map((item) => { 
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
              <div><div style={{"backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})`}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
              </div></div>
            </Link>
             })}
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="contact">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
          You can ask me about Web development and about any Coding stuffs.
          </p>
        </div>


<div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/216d1da6-a253-4080-9fe5-a4fa93fcf2be"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>





        <div className="flex flex-col pt-16 lg:flex-row" style={{"backgroundImage": "url(/assets/img/bg-cta.jpg)"}}>
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3" >
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-white"></i>
              <p className="pl-2 font-body font-bold uppercase text-white lg:text-lg">
                My Phone
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-white lg:text-lg">
              +91 9798951680
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-white"></i>
              <p className="pl-2 font-body font-bold uppercase text-white lg:text-lg">
                My Email
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-white lg:text-lg">
              singhsatyam312005@gmail.com
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-white"></i>
              <p className="pl-2 font-body font-bold uppercase text-white lg:text-lg">
                My Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-white lg:text-lg">
             Chapra,Patna,Bihar
            </p>
          </div>
        </div>
      </div>


      
    </div><div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, Praveen.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              {/* <a href="/">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a> */}
              <a href="https://twitter.com/sha0urya2" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              {/* <a href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </a> */}
              <a href="https://in.linkedin.com/in/sha0urya" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="https://www.instagram.com/sha0urya/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div></></>
  )
}


export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "37ddxr38",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blogs,
      profile
    }
  }
}