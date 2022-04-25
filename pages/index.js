import Body from '../src/components/Body'
import { getRandom } from '../src/constants/helpers'

const Homepage = ({ poems, initialPoem, count }) => (
    <>
        <h1>Welcome to the Snuff Poetry website!</h1>
        <Body poems={poems} initialPoem={initialPoem} count={count} />
    </>
)

// Populate the website with the initial poem
export async function getServerSideProps(context) {
    const poems = await import('/public/schnupf_dataset.json') // Get all poems
    const count = poems.length
    const initialPoem = poems[getRandom(count)]

    console.log('SSR initial', initialPoem, count)
    return {
        props: {
            poems: JSON.parse(JSON.stringify(poems)),
            initialPoem,
            count,
        }
    }
}

export default Homepage
  