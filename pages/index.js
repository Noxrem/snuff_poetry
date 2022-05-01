import Layout from '../src/layouts/Layout';
import Body from '../src/components/Body';
import { getRandomIdx } from '../src/constants/helpers';

const Homepage = ({ poems, count, initPoemIdx }) => (
    <Layout>
        <h1>Welcome to the Snuff Poetry website!</h1>
        <Body poems={poems} count={count} initPoemIdx={initPoemIdx}/>
    </Layout>
  );
  
// Populate the website with the initial poem
export async function getServerSideProps() {
    const poems = await import('/public/schnupf_dataset.json');
    const count = poems.length;                 // Get length of poem dataset
    const initPoemIdx = getRandomIdx(count); // Get an initial poem
    return { props: { 
                        poems: JSON.parse(JSON.stringify(poems)), 
                        count, 
                        initPoemIdx
                     }
            }
}
export default Homepage;
  