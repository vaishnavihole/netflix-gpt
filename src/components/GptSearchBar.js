const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
        <form  className="w-1/2 bg-black grid grid-cols-12">

         <input 
         type="text" 
         className=" p-3 m-3 col-span-9" 
         placeholder="What would you like to watch today?"/>

         <button 
         type="button" 
         className="col-span-3 m-3 py-1 px-3 bg-red-700 text-white rounded-lg">
        Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar