'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Services from "./components/Services";
import Work from "./components/Work";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(()=>{
    if(localStorage.theme == 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches){
      setIsDarkMode(true);
    }else{
      setIsDarkMode(false);
    }
  }, [])

  useEffect(()=>{
    if(isDarkMode){
      document.getElementById("dark-theme").classList.add('dark:bg-darkTheme');
      document.getElementById("dark-theme").classList.add('dark:text-white');
      localStorage.theme = 'dark';
    }
    else{
      document.getElementById("dark-theme").classList.remove('dark:bg-darkTheme');
      document.getElementById("dark-theme").classList.remove('dark:text-white');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </> 
  );
}
