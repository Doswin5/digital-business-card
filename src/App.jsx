import './App.css';

import profileDp from './assets/images/ayo.jpg.jpeg';

import { MdEmail } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';

function App() {
  return (
    <div className="App rounded-xl border-none mt-8">
      <div className='w-full'>
        <img src={profileDp} alt='profile dp' className='w-full h-[300px] object-cover rounded-t-xl' />
      </div>
      <main className="px-6 py-4">
        <h1 className="text-center text-[24px] font-semibold">Dosunmu Ayomide</h1>
        <h2 className="text-yellow-300 text-center font-medium text-[14px]">Frontend Developer</h2>
        <h3 className='text-center text-[12px] font-normal'>dev_doswin</h3>
        <div className="flex gap-4 items-center my-4">
          <button className='flex items-center gap-2 bg-white font-medium text-black w-full justify-center py-1 rounded text-[14px]'><MdEmail /> Email</button>
          <button className='flex items-center gap-2 bg-blue-700 font-medium text-white w-full justify-center py-1 rounded text-[14px]'><IoLogoLinkedin /> LinkedIn</button>
        </div>
        <div className="w-full flex flex-col gap-4">
          <section className="flex flex-col gap-1.5 text-white">
            <h4 className='text-xl'>About</h4>
            <p className='text-[14px] font-light leading-snug w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda saepe possimus, eveniet recusandae ipsa distinctio ducimus dolores officiis blanditiis!</p>
          </section>
          <section className="flex flex-col gap-1.5 text-white">
            <h4 className='text-xl'>Interests</h4>
            <p className='text-[14px] font-light leading-snug w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda saepe possimus, eveniet recusandae ipsa distinctio ducimus dolores officiis blanditiis!</p>
          </section>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
