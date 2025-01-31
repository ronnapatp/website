import React from 'react';
import Nav from '../components/navbarh';
import Nav2 from '../components/navbarp';
import Nav3 from '../components/navbaro';
import Nav4 from '../components/navbarc';
import Nav5 from '../components/navbard';
import '../public/css/App.css'
// import Slide from '../components/slideshow'



const Homepage = () => {
  return (
    <div className="App">
      <header className="App-header">
     <Nav />   
     <img src="../public/image/kumipropic.PNG" alt="KUMI" width="100%" height="auto"/>
      <h1 className="bhira-word">Handsome</h1>
      
      </header>
    </div>
  )
};
const Productpage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav2 />
        <p>Hello Vite + React!</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
};
const Orderpage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav3 />
        <p>Hello Vite + React!</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
};
const Contactpage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav4 />
        <div className="text-7xl font-bold text-pink-500">
        Contact us
        </div>
        <center>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6907316197744!2d100.51423551527397!3d13.737164601332557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299dd6c7b4585%3A0x7ddd4b024ce97042!2sDeverhood%20Company%20Limited!5e0!3m2!1sth!2sth!4v1629382621142!5m2!1sth!2sth" width="1000" height="500" loading="lazy"></iframe>
        </center>
        <div className="text-2xl text-gray-400 font-medium font-sans text-opacity-75">
        320 ถนนพระรามที่ ๔ แขวง มหาพฤฒาราม เขตบางรัก กรุงเทพมหานคร 10500
        </div>
        <br /><br />
        
      </header>
    </div>
  )
};
const Donatepage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav5 />
        <div className="text-7xl font-bold text-pink-500">
        Donate
        </div>
        <br /><br />
        <div className="text-3x1">
          We have many platform that you can donate
        </div>
        <div className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Donate on ronnapatp</h1>
        <div className="flex mb-4">

        </div>
        <iframe id='kofiframe' src='https://ko-fi.com/ronnapatp/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:"none",width:"100%",padding:"4px",background:"#f9f9f9"}} height='500' title='ronnapatp'></iframe>

      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Donate to bhira</h1>
        <div className="flex mb-4">

        </div>
        <iframe id='kofiframe' src='https://ko-fi.com/bhira/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:"none",width:"100%",padding:"4px",background:"#f9f9f9"}} height='500' title='bhira'></iframe>
      </div>
    </div>
  </div>
  </div>
      </header>
    </div>
  )
};

export {Homepage, Productpage,Orderpage,Contactpage,Donatepage }; 