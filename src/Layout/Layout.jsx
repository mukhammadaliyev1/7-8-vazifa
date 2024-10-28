import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className=' w-full  bg-blue-950 '>
      <header className=' container  bg-blue-950 p-4 mx-auto mb-20 flex flex-wrap justify-between'>
          
          <div className=' flex items-center gap-4'>
          <img src="src/assets/117px-Xe_Logo.png" className='w-10 h-10  rounded-lg'  alt="" />
          <h1 className='text-xl text-white'> Buisness | <span className='text-slate-400'>Personal</span></h1>
          </div>

<div className='flex flex-wrap  gap-4'>
  <h1 className=' text-white text-xl p-1 hover:bg-purple-900 rounded-md cursor-pointer hover:text-white'>Send Money</h1>
  <h1 className=' text-white text-xl  p-1 hover:bg-purple-900 rounded-md cursor-pointer hover:text-white'>Converter</h1>
  <h1 className=' text-white text-xl p-1 hover:bg-purple-900  rounded-md cursor-pointer hover:text-white'> Currensy Api</h1>
  <h1 className=' text-white text-xl p-1 hover:bg-purple-900  rounded-md cursor-pointer hover:text-white'> Tools</h1>
  <h1 className=' text-white text-xl p-1 hover:bg-purple-900  rounded-md cursor-pointer hover:text-white'> Resources</h1>

</div>


<div className=' flex flex-wrap gap-5'>
  <button className='p-2 rounded-md hover:border hover:border-blue-800 text-xl text-white'> Sign in</button>

  <button className='text-xl text-white p-2 bg-blue-700 rounded-xl hover:border hover:border-white'> Register</button>
</div>

      </header>
      <main >
        {children}
      </main>
     
    </div>
  );
};

export default Layout;
