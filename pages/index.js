import Layout from '../components/Layout';
import Body from '../components/Body';
//import data from '../static/schnupf_dataset.json';
import { getRandPoem } from '../components/getRandPoem';

const Homepage = ({ poems, initPoem }) => (
    <Layout>
        <h1>Welcome to the Snuff Poetry website!</h1>
        <Body poems={poems} poem={initPoem}/>
    </Layout>
  );
  
// Populate the website with the initial poem
/*export async function getServerSideProps(context) */
Homepage.getInitialProps = async (context) => {
    const data = await import('../static/schnupf_dataset.json');
    console.log('get new', data.text);
    const initPoem = getRandPoem(data);     // Get an initial poem

    return { poems: data, initPoem: initPoem } // Return dataset of poems and the initial poem
}
export default Homepage;
  