import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rio Juniyantara Putra Personal Profolio</title>
        <meta name="description" content="personal website protfolio Oleh Rio Juniyantara Putra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" container mx-auto">
        {/* navigasi */}
        <nav className="flex flex-row justify-between items-center h-16 bg-[#FBFBFB] md:px-28">
          {/* logo */}
          <div>
            <p className="text-4xl text-primary font-bold">R.</p>
          </div>

          {/* menu */}
          <div className="flex flex-row">
            <p className="ml-8 font-semibold">Home</p>
            <p className="ml-8 font-semibold">About</p>
            <p className="ml-8 font-semibold">Hobby</p>
            <p className="ml-8 font-semibold">Education</p>
          </div>
        </nav>

        {/* CTA */}
        <section className="pt-5 bg-[#FBFBFB] md:px-28">
          <div className="flex flex-col md:flex-row">

            {/* CTA */}
            <div className=" order-2 md:order-1 md:h-[70vh] w-screen overflow-hidden flex flex-col justify-center items-start mt-5 md:mt-0">
              <h1 className=" font-sans md:text-5xl text-3xl font-bold md:mb-4 mb-1 self-center md:self-start">
                Rio Juniyantara Putra
              </h1>
              <h1 className=" font-sans mb-9 text-center md:text-left self-center md:self-start">
                Web Developer, Mobile Developer
              </h1>
              <button className="bg-primary self-center md:self-start text-white p-3 rounded-md font-semibold mb-10 md:mb-0">
                Contact Me
              </button>
            </div>

            {/* image */}
            <div className="order-1 md:order-2 md:h-[70vh] w-full flex justify-center items-center">
              <figure className=" flex h-1/2 md:h-full xl:h-1/2 w-full overflow-hidden rounded-lg justify-center">
                <Image src="/rio.jpg" width={500} height={500} className="object-cover" />
                {/* <img className=" object-cover h-full" src="/logan.jpg" alt="" /> */}
                {/* <Image src="/logan.jpg" width="100%" height="100%" className="object-cover h-full" /> */}
              </figure>
            </div>
          </div>
        </section>

        {/* about me */}
        <section className="md:px-28 flex flex-col md:flex-row md:h-[50vh]">
          <div className="  md:w-1/2 w-full flex flex-col justify-center items-center">
            <div className="">
              <h1 className=" text-4xl font-bold mb-2 mt-10 md:mt-0">About Me</h1>
              <div className=" w-2/3 h-1 bg-primary"></div>
            </div>
          </div>

          <div className="  md:w-1/2 w-full flex flex-col justify-center items-end px-8 mb-10 md:mb-0">
            <p className=" mb-5 mt-5 text-justify">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
            <p className="text-justify">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>

            <div className="flex flex-row w-full md:mt-10 mt-5">
              <button className="bg-primary self-center md:self-start border-solid border-2 border-primary text-white p-2 rounded-md font-semibold mr-2">
                Hobby
              </button>

              <button className=" border-solid border-2 border-primary text-primary self-center md:self-start  p-2 rounded-md font-semibold">
                Education
              </button>
            </div>
          </div>

        </section>

        {/* Hobby */}
        <section className="md:px-28 flex flex-col  bg-[#FBFBFB]">
          <div className="  md:w-full w-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className=" text-4xl font-bold mb-2 mt-10 md:mt-10">Hobby</h1>
              <div className=" w-2/3 h-1 bg-primary"></div>
            </div>
          </div>

          {/* card hobby */}
          <div className=" w-full h-full mt-10 flex flex-row flex-wrap justify-center ">
            <div className=" md:w-2/5 bg-primary/20 h-2/6 m-5 flex flex-col rounded-md p-5">
              <figure className=" flex h-[50px] w-[50px] overflow-hidden rounded-lg justify-center">
                <Image src="/badminton.png" width={500} height={500} className="object-cover" />
              </figure>
              <p className=" font-bold text-xl mt-5 mb-1">Bulu Tangkis</p>
              <p className=" text-gray-500">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
            </div>
            <div className=" md:w-2/5 bg-primary/20 h-2/6 m-5 flex flex-col rounded-md p-5">
              <figure className=" flex h-[50px] w-[50px] overflow-hidden rounded-lg justify-center">
                <Image src="/ping-pong.png" width={500} height={500} className="object-cover" />
              </figure>
              <p className=" font-bold text-xl mt-5 mb-1">Ping Pong</p>
              <p className=" text-gray-500">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
            </div>
            <div className=" md:w-2/5 bg-primary/20 h-2/6 m-5 flex flex-col rounded-md p-5">
              <figure className=" flex h-[50px] w-[50px] overflow-hidden rounded-lg justify-center">
                <Image src="/badminton.png" width={500} height={500} className="object-cover" />
              </figure>
              <p className=" font-bold text-xl mt-5 mb-1">Bulu Tangkis</p>
              <p className=" text-gray-500">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
            </div>
            <div className=" md:w-2/5 bg-primary/20 h-2/6 m-5 flex flex-col rounded-md p-5">
              <figure className=" flex h-[50px] w-[50px] overflow-hidden rounded-lg justify-center">
                <Image src="/badminton.png" width={500} height={500} className="object-cover" />
              </figure>
              <p className=" font-bold text-xl mt-5 mb-1">Bulu Tangkis</p>
              <p className=" text-gray-500">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
            </div>

          </div>

        </section>

        {/* Hobby */}

        {/* Blog */}
        <section className="md:px-28 flex flex-col ">
          <div className="  md:w-full w-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className=" text-4xl font-bold mb-2 mt-10 md:mt-10">Blog</h1>
              <div className=" w-2/3 h-1 bg-primary"></div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col w-full h-full mt-10">
            {/* card-left */}
            <div className="flex flex-col mx-4 md:w-1/2">
              {/* image */}
              <figure className=" flex h-1/2 w-full overflow-hidden rounded-lg justify-center">
                <Image src="/rio.jpg" width={500} height={500} className="object-cover" />
              </figure>
              {/* image */}
              <p className=" font-bold text-xl my-3"> consectetur adipiscing elit duis</p>
              <p className=" text-justify text-gray-500"> consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
            </div>
            {/* card-left */}

            {/* card right */}
            <div className="flex flex-col mx-4 md:w-1/2 md:mt-0 mt-4">
              {/* single card */}
              <div className="flex flex-row my-2 h-1/4 justify-center items-center">
                <div className="flex flex-col">
                  <p className=" font-bold text-md my-3"> consectetur adipiscing elit duis</p>
                  <p className=" text-justify text-gray-500 md:text-sm text-xs "> consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                </div>
                {/* image */}

                <figure className=" flex flex-row h-full w-full overflow-hidden rounded-lg justify-center items-center p-5 mx-5 bg-primary/10">
                  <Image src="/rio.jpg" width={500} height={500} className="object-cover " />
                </figure>
                {/* image */}
              </div>
              {/* single card */}
              {/* single card */}
              <div className="flex flex-row my-2 h-1/4 justify-center items-center">
                <div className="flex flex-col">
                  <p className=" font-bold text-md my-3"> consectetur adipiscing elit duis</p>
                  <p className=" text-justify text-gray-500 md:text-sm text-xs "> consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                </div>
                {/* image */}

                <figure className=" flex flex-row h-full w-full overflow-hidden rounded-lg justify-center items-center p-5 mx-5 bg-primary/10">
                  <Image src="/rio.jpg" width={500} height={500} className="object-cover " />
                </figure>
                {/* image */}
              </div>
              {/* single card */}

              {/* single card */}
              <div className="flex flex-row my-2 h-1/4 justify-center items-center">
                <div className="flex flex-col">
                  <p className=" font-bold text-md my-3"> consectetur adipiscing elit duis</p>
                  <p className=" text-justify text-gray-500 md:text-sm text-xs "> consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                </div>
                {/* image */}

                <figure className=" flex flex-row h-full w-full overflow-hidden rounded-lg justify-center items-center p-5 mx-5 bg-primary/10">
                  <Image src="/rio.jpg" width={500} height={500} className="object-cover " />
                </figure>
                {/* image */}
              </div>
              {/* single card */}

            </div>
            {/* card right */}
          </div>
        </section>

      </main>

      <footer className={styles.footer} >
        <a
          href="https:yhotie.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright @ 2022 Rio Juniyantara Putra. design by yhotie.com
        </a>
      </footer>
    </div>
  );
}
