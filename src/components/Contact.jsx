const Contact = () => {
  return (
  <section className="relative py-32 bg-black bg-cover bg-no-repeat" style={{ backgroundImage: "url('boldui-assets/images/photo-women.png')" }}>
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
    <div className="relative container mx-auto px-4">
      <div className="max-w-md">
        <h2 className="mb-4 text-2xl text-white font-heading">Create account</h2>
        <p className="mb-6 text-lg text-gray-500">Take a big step forward in growing your business with this great tool.</p>
        <form action="">
          <input className="w-full mb-4 py-4 px-6 bg-black rounded-full border text-white outline-none placeholder-white" type="email" placeholder="Type your e-mail"/>
          <div className="flex mb-6 py-4 px-6 bg-black rounded-full border text-white font-bold">
            <input className="w-full pr-4 bg-transparent outline-none placeholder-white" type="password" placeholder="Enter password"/>
            <button>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.292897 9.29285C-0.0976325 9.68335 -0.0976325 10.3166 0.292897 10.7071L4.7868 15.201C9.86357 20.2778 18.0948 20.2778 23.1716 15.201L27.6655 10.7071C28.056 10.3166 28.056 9.68335 27.6655 9.29285L23.1716 4.79895C18.0948 -0.277868 9.86357 -0.277878 4.7868 4.79895L0.292897 9.29285ZM6.20101 13.7868L2.41422 9.99995L6.20102 6.21315C10.4968 1.91739 17.4616 1.91739 21.7574 6.21315L25.5442 9.99995L21.7574 13.7868C17.4616 18.0826 10.4968 18.0826 6.20101 13.7868ZM10.9584 9.99995C10.9584 8.34305 12.3015 6.99995 13.9584 6.99995C15.6153 6.99995 16.9584 8.34305 16.9584 9.99995C16.9584 11.6569 15.6153 13 13.9584 13C12.3015 13 10.9584 11.6569 10.9584 9.99995ZM13.9584 4.99995C11.197 4.99995 8.95837 7.23855 8.95837 9.99995C8.95837 12.7614 11.197 15 13.9584 15C16.7198 15 18.9584 12.7614 18.9584 9.99995C18.9584 7.23855 16.7198 4.99995 13.9584 4.99995Z" fill="#FFEC3E"></path>
              </svg>
            </button>
          </div>
          <label className="block mb-6" htmlFor="">
            <input type="checkbox"/>
            <span className="text-sm text-white">
              <span>By signing up, you agree to our</span>
              <a className="text-blue-200 hover:underline" href="#">Terms, Data Policy and Cookies Policy.</a>
            </span>
          </label>
          <a className="inline-flex items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200" href="#">
            <svg className="mr-3" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="black"></path>
            </svg>
            <span className="text-sm font-medium font-heading">Try demo</span>
          </a>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact