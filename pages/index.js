import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/avatar'
import { ChipIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid"
import { useRef } from 'react'
import { useRouter } from 'next/dist/client/router'

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term)
    {
      return null;
    }

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-500">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p  className="link">Mail</p>
          <p className="link">Images</p>
          
          <ViewGridIcon className="h-10 w-10 p-2 cursor-poiter"/>
          <Avatar url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjfk.men%2Fapp%2Fuploads%2F2020%2F07%2FScreen-Shot-Pepe-the-Frog.jpg&f=1&nofb=1"/>

        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt="Google Logo"
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input 
            type="text" 
            className="focus:outline-none flex-grow"
            ref={searchInputRef}
            />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="down-button">
            Google Search
          </button>

          <button className="down-button">
            I'm feeling lucky
          </button>
        </div>

      </form>

      <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
         
         <div className="px-8 py-3">
           <p>Bulgaria</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
            <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-center">
              <p>About us</p>
              <p>Advertising</p>
              <p>How Google works</p>
            </div>

            <div className="flex justify-center space-x-8 md:ml-auto">
              <p>Privacy</p>
              <p>Terms</p>
              <p>Settings</p>
            </div>
         </div>
      
      </footer>
    </div>
  )
}
