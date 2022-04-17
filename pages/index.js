import Layout from '../components/Layout';
import Body from '../components/Body';
import data from '../static/schnupf_dataset.json';
import { getPoem } from '../components/getPoem';

const Homepage = ({ initPoem }) => (
    <Layout>
        <h1>Welcome to the Snuff Poetry website!</h1>
        <Body poem={initPoem}/>
    </Layout>
  );
  
// Populate the website with the initial poem
export async function getServerSideProps() {
    const initPoem = getPoem(); // Get an initial poem
    return { props: { initPoem }}
}
export default Homepage;
  