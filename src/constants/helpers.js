
// Get a random poem from the dataset
export function getPoem(data) {
    const nofPoems = data.length;
    let randIdx = Math.floor(Math.random() * nofPoems-1) + 1;
    return data[randIdx].text;
} 

// Get a random index in the range of 0 and count
export const getRandomIdx = (count) => {
    return Math.floor(Math.random() * count)
}

// Takes an object with poems and returns the ones filtered by the specified language
export function langFilteredPoems(unfltPoems, language) {
    let fltPoems;
    if(language != "all") {  // Only apply language filter if a specific language (not "all") is selected
        fltPoems = Object.values(unfltPoems).filter(poem => poem.language == language); // Filter poems for the language locale
    }
    else {
        fltPoems = Object.values(unfltPoems);       // No filtering (Object.values unwraps the array out of the object)
    }
    const fltCount = fltPoems.length;               // Get the amount of the filtered poems 
    const fltRandomIdx = getRandomIdx(fltCount);    // Get a random index of of the filtered poems
    return fltPoems[fltRandomIdx];
}
