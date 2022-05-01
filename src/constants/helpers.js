
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
