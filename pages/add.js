import { useState } from 'react'

const languages = {
  de: 'de',
  fr: 'fr',
  it: 'it',
}

const Add = ({ count, poems }) => {
  const [title, setTitle] = useState('')
  const [newPoem, setNewPoem] = useState('')
  const [isNsfw, setIsNsfw] = useState(false)
  const [language, setLanguage] = useState(languages.de)

  const addPoem = () => {
    const addMe = {
      id: count + 1,
      title,
      text: newPoem,
      isNsfw,
      language,
    }
    console.log('new poem to add: ', addMe)
    const newPoems = [poems]
    newPoems.push(addMe)
  }

  return (
    <>
      <h1>Add new Poem</h1>
      <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} /><br />
      <textarea placeholder='New Poem' onChange={(e) => setNewPoem(e.target.value)}></textarea><br />
      <div>
        <input type="checkbox" name="nsfw" onChange={(e) => setIsNsfw(e.target.checked)} /><label htmlFor="nsfw">NSFW</label>
      </div>
      <div>
        {
          Object.keys(languages).map(lang => (
            <button key={lang} disabled={lang === language} onClick={() => setLanguage(lang)}>{lang}</button>
          ))
        }
      </div>
      <button onClick={addPoem}>ADD</button><br /><br />
    </>
  )
}

Add.getInitialProps = async (ctx) => {
  const poems = await import('/public/schnupf_dataset.json') // Get all poems
  const count = poems.length
  return { count, poems }
}

export default Add
