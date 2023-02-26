import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Ctaemail from "@/components/ctaemail";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Notrito</title>
        <meta name="description" content="Calculeaza simplu si rapid calorii" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-300 to-yellow-400">
        <Navbar/>
        <Ctaemail/>

        <div className="flex flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-300 to-yellow-400">
          <div className="flex flex-row w-full my-10">
            <div className="basis-1/4"></div>
            <div className="basis-3/4">
              <div className="flex flex-col">
                
                <h1 className="text-white text-6xl">Cum functioneaza?</h1>
                <p className="bg-grey-700 my-4">
                  Calculeaza valorile nutritionale meselor tale sau ancheta
                  alimentara in cateva clickuri.
                </p>
                <div className="relative">
        <Image src="/assets/plate3.png" alt="plate" width="350" height="350" className="absolute right-0 top-46"/></div>
                <Image
                  src="/assets/how-it-works.png"
                  alt="clock"
                  width={700}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-300 to-yellow-400">
          <div className="basis-2/5"></div>
          <div className="basis-3/5">
            <div className="flex flex-col">
              <h1 className="text-white text-4xl font-bold">
                Inscrie-te acum si primesti
              </h1>
              <h1 className="text-white text-4xl font-bold">5 mese gratuit</h1>

              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 w-fit mt-4">
                INREGISTRARE
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
