import data from '../static/schnupf_dataset.json';

// Get a random poem from the dataset
export function getPoem() {
    const nofPoems = data.length;
    let randIdx = Math.floor(Math.random() * nofPoems-1) + 1;
    return data[randIdx].text;
} 