import { useState, useEffect } from 'react'
import { fetchRandomFilteredPoem } from '../src/constants/helpers';
import { useRouter } from 'next/router';
import Header from '../src/components/Header';
import Body from '../src/components/Body';
import Footer from '../src/components/Footer';
import { Analytics } from "@vercel/analytics/react";  // Adding Vercel analytics
import { SpeedInsights } from "@vercel/speed-insights/next" // Adding speed insight

// Query string for the nsfw setting: { nsfw: "1" } when on, nothing when off
const nsfwQuery = (nsfw) => (nsfw ? { nsfw: "1" } : {});

function Homepage({ initPoem }) {
  // Router init
  const router = useRouter();  // Hook to get the i18n (internationalization) paths
  const language = router.locale;               // The URL decides the language
  const isNsfw = router.query.nsfw === "1";     // The URL decides the nsfw setting (?nsfw=1 = on, otherwise off)
  const [poem, setPoem] = useState(initPoem);   // State of the current poem and sets the initial poem

  // When the server sends a new poem (after a language switch), show it
  useEffect(() => { setPoem(initPoem); }, [initPoem]);

  // Language switch: only navigate, the server fetches the poem
  const updateLang = (lang) => {
    router.push({ pathname: "/", query: nsfwQuery(isNsfw) }, undefined, { locale: lang });  // Updates the route, appends the locale and keeps the nsfw setting (?nsfw=1) if it is on
  };

  // Fetch a new poem directly from the browser and show it
  const loadPoem = async (nsfw) => {
    // Get a new random poem that is filtered by nsfw and the language (locale)
    const newPoem = await fetchRandomFilteredPoem(nsfw, language);
    if (newPoem) setPoem(newPoem);              // Set the new poem (keep the old one if none was found)
  };

  // Refresh button: new poem with the current settings
  const updatePoem = () => loadPoem(isNsfw);

  // 18+ toggle: flip the setting in the URL and fetch with the new value right away
  const updateNsfw = () => {
    const next = !isNsfw;
    // shallow: change the URL without running getServerSideProps again (no second fetch)
    // replace: don't add a browser history entry for every toggle
    router.replace({ pathname: "/", query: nsfwQuery(next) }, undefined, { shallow: true });
    loadPoem(next);
  };

  return (
    <div className="flex flex-col h-screen grow max-w-4xl bg-slate-800">
      <Header updateLang={updateLang} language={language}/>
      <Body poem={poem} updatePoem={updatePoem} language={language} updateNsfw={updateNsfw} nsfw={isNsfw}/>
      <Footer />
      <SpeedInsights/>
      <Analytics/>
    </div>
  );
}

// Fetch initial poem on server-side, filtered by the locale and the nsfw setting from the URL
export async function getServerSideProps({ locale, query }) {
  const nsfw = query.nsfw === "1";  // Only NSFW if the URL contains ?nsfw=1, otherwise a safe poem
  const initPoem = await fetchRandomFilteredPoem(nsfw, locale);
  return { props: { initPoem: initPoem ?? null } };
}
export default Homepage;
