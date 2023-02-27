
import Image from "next/image";
export default function Ctaemail() {
    return (
       <div className="h-full w-full rounded-b-propper bg-white pb-5">
        <div className="flex flex-col items-center ">
            <h1 className="text-green-600 text-5xl tracking-widest font-bold">
                Calculeaza rapid si usor
            </h1>
            <h1 className="text-green-600 text-5xl tracking-widest font-bold">
                valorile nutritionale
            </h1>
        </div>
        <div className="relative">
        <Image src="/assets/plate1.png" alt="plate" width="250" height="250" className="absolute right-0 bottom-1"/></div>
        <div className="relative">
        <Image src="/assets/plate2.png" alt="plate" width="250" height="250" className="absolute left-0 top-10"/></div>
            <div className="flex flex-col justify-center items-center w-full space-x-5">
            <div className="flex justify-center items-center w-full my-8 space-x-5">
                <div className="flex justify-between align-center items-center flex-col text-center shadow-lg border border-solid border-stone-200 h-60 w-52  p-4">
                    <p className="text-green-600 font-semibold text-lg">OBTINE RAPID</p>
                    <Image src="/assets/clock.svg" alt="clock" width="100" height="100" />
                </div>

                <div className="flex justify-between align-center items-center text-center flex-col shadow-lg border border-solid border-stone-200 h-60 w-52  p-4">
                    <p className="text-green-600 font-semibold text-lg">INFORMATII</p>
                    <Image src="/assets/salad.svg" alt="clock" width="100" height="100" />
                </div>

                <div className="flex justify-between align-center items-center text-center flex-col shadow-lg border border-solid border-stone-200 h-60 w-52 p-4">
                    <p className="text-green-600 font-semibold text-lg">PENTRU PRODUSELE TALE</p>
                    <Image
                        src="/assets/organic.svg"
                        alt="clock"
                        width="100"
                        height="100" />
                </div>
            </div>
            <div className="flex justify-center items-center bg-transparent">
                <div className="flex">
                    <input
                        type="email"
                        className="bg-gray-50 border rounded-lg border-gray-300 text-gray-900 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Adresa email"
                        required />
                    <input
                        type="text"
                        className="bg-gray-50 border rounded-lg border-gray-300 text-gray-900 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mx-4"
                        placeholder="Numar telefon"
                        required />
                    <button className="bg-green-500 rounded-lg hover:bg-green-600 text-white font-bold py-2 px-4">
                        Inregistrare
                    </button>
                </div>
            </div>
            </div>
        </div>
      );  
}
