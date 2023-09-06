import Header from './Header.js';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="logo"/>


      </div>
       <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-3xl py-4">
          Sign In</h1>

        <input type="text" placeholder="Email Address"
         className='p-3 my-4 w-full bg-gray-700'/>

        <input type="password" placeholder="Password" 
        className='p-3 my-4 w-full bg-gray-700'/>

        <button className="p-3 my-6 bg-red-700 w-full rounded-lg">
          Sign In</button>

          <p className="py-6">New To Netflix? Sign Up Now</p>
       </form>
    </div>
  )
}

export default Login;