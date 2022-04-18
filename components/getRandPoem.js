// Get a random poem from the dataset
export function getRandPoem(data) {
    const nofPoems = data.length;
    let randIdx = Math.floor(Math.random() * nofPoems-1) + 1;
    return data[randIdx];
} 