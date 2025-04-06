import { useState, useEffect, useRef } from 'react'
import { getRandomPoem, getLangFilteredPoems, getNsfwFilteredPoems, fetchRandomFilteredRow, fetchRandomFilteredPoem } from '../src/constants/helpers';
import { useRouter } from 'next/router';
import { supabase } from "../src/supabase";
import Header from '../src/components/Header';
import Body from '../src/components/Body';
import Footer from '../src/components/Footer';
import { Analytics } from "@vercel/analytics/react";  // Adding Vercel analytics


function Homepage({ initPoem }) {
  // Router init
  const router = useRouter();  // Hook to get the i18n (internationalization) paths
  const [isNsfw, setNsfw] = useState(false);  // State of the nsfw variable (true = nsfw content is being shown)
  const [poem, setPoem] = useState(initPoem); // State of the current poem and sets the initial poem
  const [language, setLanguage] = useState(router.locale);  // Store language in a state
  const firstRender = useRef(true);           // Track the initial render
  
  // let language = router.locale;             // Initially set the language of the website to the locale

  // Update the language of the website
  const updateLang = (lang) => {
    setLanguage(lang);                      // Store updated language in state
    // language = lang;                        // Update the language when the language_buttons were pressed
    router.push("/", "/", {locale: lang});  // Updates the route and appends the locale
    // updatePoem(lang);                           // Pass new language to updatePoem
    //updatePoem();                           // Update poem
  }

  // Update the nsfw state
  const updateNsfw = () => {
    if(isNsfw) {
      setNsfw(false); // If nsfw content is on and the switch is turned off, also turn of nsfw content
    }
    else {
      setNsfw(true);
    }
    //console.log("updateNsfw value: " + isNsfw);
  }

  // Update the poem
  const updatePoem = async () => {
    // Get a new random poem that is filtered by nsfw and the language (locale)
    let newPoem = await fetchRandomFilteredPoem(isNsfw, language);
    setPoem(newPoem);               // Set the new poem
  }

  useEffect(() => {
    if (firstRender.current){
      firstRender.current = false;  // Prevent first effect (initial render) from running updatePoem
      return;
    }
    updatePoem(); // Call updatePoem after the isNsfw or language state have been changed
  }, [isNsfw, language]); 

  return (
    <div className="flex flex-col h-screen grow max-w-4xl bg-slate-800">
      <Header updatePoem={updatePoem} updateLang={updateLang} language={language}/>
      <Body poem={poem} updatePoem={updatePoem} language={language} updateNsfw={updateNsfw} nsfw={isNsfw}/>
      <Footer />
      <Analytics/>
    </div>
  );
}

// Fetch initial poem on server-side
export async function getServerSideProps(context) {
  let _initPoem = 0
  try {
    // Get one random poem
    const initPoem = await fetchRandomFilteredPoem(false, "all");
    _initPoem = { props: { initPoem } };
  } catch (error) {
    _initPoem = { props: null };
  }
  return _initPoem;
}
export default Homepage;
  