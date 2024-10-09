import { useState, useEffect } from 'react'
import { getRandomPoem, getLangFilteredPoems, getNsfwFilteredPoems } from '../src/constants/helpers';
import { useRouter } from 'next/router';
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
  const updatePoem = () => {
    let langFltPoems = getLangFilteredPoems(poems, language); // Get poems filtered by locale (language)
    let langNsfwFltPoems = getNsfwFilteredPoems(langFltPoems, isNsfw);  // Get the poems filtered whether nsfw is acivated or not
    let newPoem = getRandomPoem(langNsfwFltPoems); // Get a new random language and nsfw filtered poem object
    setPoem(newPoem);                             // Set the new poem
   // console.log("Id: " + newPoem.id + " title: " + newPoem.title + " isNsfw: " + newPoem.isNsfw + " language: " + newPoem.language);
  }

  useEffect(() => {
    updatePoem(); // Call updatePoem after the isNsfw state has been updated
  }, [isNsfw]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header updatePoem={updatePoem} updateLang={updateLang} language={language}/>
      <Body poem={poem} updatePoem={updatePoem} language={language} updateNsfw={updateNsfw} nsfw={isNsfw}/>
      <Footer />
      <Analytics/>
    </div>
  );
}

// Populate the website with the initial poem
export async function getServerSideProps(context) {
  const poems = await import('/public/schnupf_dataset.json');
  //const langFltPoems = getLangFilteredPoems(poems, context.locale);   // Filter poems according to locale (language)
  const langFltPoems = getLangFilteredPoems(poems, "all");            // Filter poems initially according to "all" languages
  const langNsfwFltPoems = getNsfwFilteredPoems(langFltPoems, false); // Set deactivate nsfw and filter accordingly
  const initPoem = getRandomPoem(langNsfwFltPoems);                   // Get one random poem
  return { props: { 
                      poems: JSON.parse(JSON.stringify(poems)), 
                      initPoem
                    }
          }
}
export default Homepage;
  