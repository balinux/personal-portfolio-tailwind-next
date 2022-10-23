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

      <main className=" bg-white md:mx-28">
        {/* navigasi */}
        <nav className="flex flex-row justify-between items-center h-16">
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
        <section className="mt-5">
          <div className="flex flex-row">
            <div className=" h-[70vh] w-screen overflow-hidden flex flex-col justify-center items-start">
              <div className="full">
                <h1 className=" font-sans text-5xl font-bold mb-4">
                  Rio Juniyantara Putra
                </h1>
                <h1 className=" font-sans mb-9">
                  Web Developer, Mobile Developer
                </h1>
                <button className="bg-primary text-white p-3 rounded-md font-semibold">
                  Contact Me
                </button>
              </div>
            </div>
            <div className=" h-[70vh] w-screen flex justify-center items-center">
              <figure className=" h-full w-3/6 bg-slate-600 overflow-hidden rounded-lg">
                <img className=" object-cover h-full" src="/logan.jpg" alt="" />
                {/* <Image src="/logan.jpg" width="100%" height="100%" className="object-cover h-full" /> */}
              </figure>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{"  "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
