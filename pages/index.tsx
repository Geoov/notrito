import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Calculeaza simplu si rapid calorii" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full h-full bg-white">
        <nav className="flex content-between items-center w-full mt-4 mb-8">
          <div className="flex flex-1 justify-center align-center">
            img-Notrito
          </div>
          <div className="flex flex-auto justify-center align-center">
            <a className="mr-2 text-green-600">ACASA</a>
            <a className="mr-2 text-green-500">CUM FUNCTIONEAZA</a>
            <a className="mr-2 text-green-500">BENEFICII</a>
            <a className="mr-2 text-green-500">PLANURI</a>
            <a className="text-green-500">CONTACT</a>
          </div>
          <div className="flex flex-1 justify-center align-center">
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Button
            </button>
          </div>
        </nav>

        <div className="flex flex-col items-center">
          <h1 className="text-green-600 text-5xl tracking-widest">
            Calculeaza rapid si usor
          </h1>
          <h1 className="text-green-600 text-5xl tracking-widest">
            valorile nutritionale
          </h1>
        </div>

        <div className="flex justify-center items-center w-full my-8">
          <div className="flex justify-between align-center items-center flex-col text-center border border-solid border-stone-200 h-44 w-40  p-4">
            <p className="text-green-500">OBTINE RAPID</p>
            <Image src="/assets/clock.svg" alt="clock" width="72" height="72" />
          </div>

          <div className="flex justify-between align-center items-center text-center flex-col border border-solid border-stone-200 h-44 mx-8 w-40 p-4">
            <p className="text-green-500">INFORMATII</p>
            <Image src="/assets/salad.svg" alt="clock" width="72" height="72" />
          </div>

          <div className="flex justify-between align-center items-center text-center flex-col border border-solid border-stone-200 h-44 w-40 p-4">
            <p className="text-green-500">PENTRU PRODUSELE TALE</p>
            <Image
              src="/assets/organic.svg"
              alt="clock"
              width="64"
              height="64"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex">
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Adresa email"
              required
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mx-4"
              placeholder="Numar telefon"
              required
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4">
              Inregistrare
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-yellow-400 mt-20">
          <div className="flex flex-row w-full my-10">
            <div className="basis-1/4"></div>
            <div className="basis-3/4">
              <div className="flex flex-col">
                <h1 className="text-white text-6xl">Cum functioneaza?</h1>
                <p className="bg-grey-700 my-4">
                  Calculeaza valorile nutritionale meselor tale sau ancheta
                  alimentara in cateva clickuri.
                </p>
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

        <div className="flex flex-row bg-yellow-500 py-8">
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

        <div className="flex flex-column bg-black p-12">
          <div className="flex w-full">
            <div className="flex align-center basis-3/5">
              <div>
                <p className="text-white">Company</p>
                <p className="text-gray-200">Test1</p>
                <p className="text-gray-200">Test2</p>
                <p className="text-gray-200">Test3</p>
              </div>

              <div className="mx-32">
                <p className="text-white">Contact</p>
                <p className="text-gray-200">Test1</p>
                <p className="text-gray-200">Test2</p>
                <p className="text-gray-200">Test3</p>
              </div>

              <div>
                <p className="text-white">Legal</p>
                <p className="text-gray-200">Test1</p>
                <p className="text-gray-200">Test2</p>
                <p className="text-gray-200">Test3</p>
              </div>
            </div>

            <div className="flex flex-col align-center basis-2/5">
              <p className="text-white">Follow US</p>
              <div className="flex">
                <p className="text-gray-200">in</p>
                <p className="text-gray-200 mx-2">fb</p>
                <p className="text-gray-200">tw</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
