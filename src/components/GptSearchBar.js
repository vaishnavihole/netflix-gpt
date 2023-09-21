import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
        <form  className="w-1/2 bg-black grid grid-cols-12 absolute top-[200px]">

         <input 
         type="text" 
         className=" p-3 m-3 col-span-9" 
         placeholder={lang[langKey].gptSearchPlaceholder}
         />

         <button 
         type="button" 
         className="col-span-3 m-3 py-1 px-3 bg-red-700 text-white rounded-lg">
        {lang[langKey].search}
        </button>
        </form>
    </div>
  )
}

export default GptSearchBar