import { useState, useEffect } from 'react'
import { getRandomPoem, getLangFilteredPoems, getNsfwFilteredPoems, fetchRandomFilteredRow, fetchRandomFilteredPoem } from '../src/constants/helpers';
import { useRouter } from 'next/router';
import { supabase } from "../src/supabase";
import Header from '../src/components/Header';
import Body from '../src/components/Body';
import Footer from '../src/components/Footer';
import { Analytics } from "@vercel/analytics/react";  // Adding Vercel analytics


function Homepage({ poems, initPoem }) {
  // Router init
  const router = useRouter();  // Hook to get the i18n (internationalization) paths
  const [isNsfw, setNsfw] = useState(false);  // State of the nsfw variable (true = nsfw content is being shown)
  const [poem, setPoem] = useState(initPoem); // State of the current poem and sets the initial poem
  
  let language = router.locale;             // Initially set the language of the website to the locale

  // Update the language of the website
  const updateLang = (lang) => {
    language = lang;                        // Update the language when the language_buttons were pressed
    router.push("/", "/", {locale: lang});  // Updates the route and appends the locale
    updatePoem();                           // Update the poem
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
    setPoem(newPoem);                             // Set the new poem
  }

  useEffect(() => {
    updatePoem(); // Call updatePoem after the isNsfw state has been updated
  }, [isNsfw]);

  return (
    <div className="flex flex-col h-screen bg-slate-800">
      <Header updatePoem={updatePoem} updateLang={updateLang} language={language}/>
      <Body poem={poem} updatePoem={updatePoem} language={language} updateNsfw={updateNsfw} nsfw={isNsfw}/>
      <Footer />
      <Analytics/>
    </div>
  );
}

// Populate the website with the initial poem
export async function getServerSideProps(context) {
  //const poems = await import('/public/schnupf_dataset.json');
  const { data: poems, error } = await supabase.from("snuff_poems").select("*");
  if (error) {
    console.error("Error fetching poems: ", error);
    return { props: { poems: [], initPoem: 0 } };
  }
  //const langFltPoems = getLangFilteredPoems(poems, context.locale);   // Filter poems according to locale (language)
  const langFltPoems = getLangFilteredPoems(poems, "all");            // Filter poems initially according to "all" languages
  const langNsfwFltPoems = getNsfwFilteredPoems(langFltPoems, false); // Set deactivate nsfw and filter accordingly
  //const initPoem = getRandomPoem(langNsfwFltPoems);                   // Get one random poem
  const initPoem = await fetchRandomFilteredPoem(false, "de");
  console.log("initial poem: ", initPoem);
  return { props: { 
                      poems, 
                      initPoem
                    }
          }
}
export default Homepage;
  