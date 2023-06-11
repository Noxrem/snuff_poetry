import { useState, useEffect } from 'react'
import Layout from '../src/layouts/Layout';
import Body from '../src/components/Body';
import { getRandomPoem, getLangFilteredPoems } from '../src/constants/helpers';
import { useRouter } from 'next/router';
import de from '../src/constants/de';   // German language package
import en from '../src/constants/en';   // English language package

function Homepage({ poems, initPoem }) {
  // Router init
  const router = useRouter();  // Hook to get the i18n (internationalization) paths
  const [poem, setPoem] = useState(initPoem); // State of the current poem and sets the initial poem
  const [isNsfw, setNsfw] = useState(false);  // State of the nsfw variable (true = nsfw content is being shown)

  let language = router.locale;             // Initially set the language of the website to the locale

  // Update the language of the website
  const updateLang = (lang) => {
    language = lang;                        // Update the language when the language_buttons were pressed
    router.push("/", "/", {locale: lang});  // Updates the route and appends the locale
    updatePoem();                           // Update the poem
  }

  // Update the poem
  const updatePoem = () => {
    let langFltPoems = getLangFilteredPoems(poems, language); // Get poems filtered by locale (language)
    setPoem(getRandomPoem(langFltPoems));                     // Get a new random language filtered poem object
  }

  // Update the nsfw state
  const updateNsfw = () => {
    if(isNsfw) {
      setNsfw(false); // If nsfw content is on and the switch is turned off, also turn of nsfw content
    }
    else {
      setNsfw(true);
    }
  }
  
  return (
    <Layout updatePoem={updatePoem} updateLang={updateLang} language={language}>
        <Body poem={poem} updatePoem={updatePoem} language={language} updateNsfw={updateNsfw} nsfw={isNsfw}/>
    </Layout>
  );
}

// Populate the website with the initial poem
export async function getServerSideProps(context) {
  const poems = await import('/public/schnupf_dataset.json');
  const langFltPoems = getLangFilteredPoems(poems, context.locale); // Filter poems according to locale (language)
  const initPoem = getRandomPoem(langFltPoems);                     // Get one random poem
  return { props: { 
                      poems: JSON.parse(JSON.stringify(poems)), 
                      initPoem
                    }
          }
}
export default Homepage;
  