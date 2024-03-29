import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useRef } from "react";
import Avatar from "./avatar";
import HeaderOptions from "./HeaderOptions";

function Header()
{
    const router = useRouter();
    const searchInputRef = useRef(null);
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
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    height={40}
                    width={120}
                    onClick={() => router.push("/")}
                    className="cursor-pointer"
                />

                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none"></input>
                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer" onClick={() => (searchInputRef.current.value="")}/>
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjfk.men%2Fapp%2Fuploads%2F2020%2F07%2FScreen-Shot-Pepe-the-Frog.jpg&f=1&nofb=1"/>
            </div>

            <HeaderOptions />
            
        </header>
    );
}

export default Header;