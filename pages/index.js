import Layout from '../src/layouts/Layout';
import Body from '../src/components/Body';
import { getRandomIdx } from '../src/constants/helpers';
import { useRouter } from 'next/router';
import de from '../src/constants/de';   // German language package
import en from '../src/constants/en';   // English language package

function Homepage({ poems, count, initPoemIdx }) {
  const router = useRouter(); // Use router to filter the json data by language 
  console.log(router.locale);
  const filteredPoems = Object.entries(poems).filter(poem => poem.language == router.locale); // Filter poems for the language locale
  const filteredCount = filteredPoems.length;
  const filteredRandomIdx = getRandomIdx(filteredCount);

  return (
    <Layout>
        {/* <Body poems={filteredPoems} count={filteredCount} initPoemIdx={filteredRandomIdx}/> */}
        <Body poems={poems} count={count} initPoemIdx={initPoemIdx}/>
    </Layout>
  );
}

// Populate the website with the initial poem
export async function getServerSideProps() {
  const poems = await import('/public/schnupf_dataset.json');
  const count = poems.length;               // Get length of poem dataset
  const initPoemIdx = getRandomIdx(count);  // Get an initial poem
  return { props: { 
                      poems: JSON.parse(JSON.stringify(poems)), 
                      count, 
                      initPoemIdx
                    }
          }
}
export default Homepage;
  