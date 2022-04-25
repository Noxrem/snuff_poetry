import Layout from '../components/Layout';
import Body from '../components/Body';
//import data from '../static/schnupf_dataset.json';
import { getRandomIdx } from '../components/helpers';

const Homepage = ({ poems, count, initPoemIdx }) => (
    <Layout>
        <h1>Welcome to the Snuff Poetry website!</h1>
        <Body poems={poems} count={count} initPoemIdx={initPoemIdx}/>
    </Layout>
  );
  
// Populate the website with the initial poem
export async function getServerSideProps() {
    const poems = await import('/static/schnupf_dataset.json');
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
  