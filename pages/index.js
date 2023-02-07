import Layout from '../src/layouts/Layout';
import Body from '../src/components/Body';
import { getLangFilteredPoem, getRandomIdx, getRandomPoem } from '../src/constants/helpers';
import { useRouter } from 'next/router';
import de from '../src/constants/de';   // German language package
import en from '../src/constants/en';   // English language package

function Homepage({ poems, count, initPoemIdx, initPoem }) {
  // Router init
  const { locale, locales, asPath } = useRouter();  // Hook to get the i18n (internationalization) paths

  return (
    <Layout>
        <Body poems={poems} count={count} initPoemIdx={initPoemIdx} initPoem={initPoem} language={locale}/>
    </Layout>
  );
}

// Populate the website with the initial poem
export async function getServerSideProps(context) {
  const poems = await import('/public/schnupf_dataset.json');
  const count = 0;
  const initPoemIdx = 0;
  const langFltPoems = getLangFilteredPoem(poems, context.locale);  // Filter poems according to locale (language)
  const initPoem = getRandomPoem(langFltPoems);                     // Get one random poem
  return { props: { 
                      poems: JSON.parse(JSON.stringify(poems)), 
                      count, 
                      initPoemIdx,
                      initPoem
                    }
          }
}
export default Homepage;
  