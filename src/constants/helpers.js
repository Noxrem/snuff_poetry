import { supabase } from "../supabase";

// Get a random poem object from the poemsArr parameter array
export function getRandomPoem(poemsArr) {
    const nofPoems = poemsArr.length;                   // Get the amount of array elements
    let randIdx = Math.floor(Math.random() * nofPoems); // Random returns a value 0 <= x < 1 times the number of elements in the array and then floored (decimal part of number trimmed)
    return poemsArr[randIdx];           
} 

// Get a random index in the range of 0 and count
export const getRandomIdx = (count) => {
    return Math.floor(Math.random() * count)
}

// Takes an object with poems and returns the ones filtered by the specified language
export function getLangFilteredPoems(unfltPoems, language) {
    let fltPoems;
    if(language != "all") {  // Only apply language filter if a specific language (not "all") is selected
        fltPoems = Object.values(unfltPoems).filter(poem => poem.language == language); // Filter poems for the language locale
    }
    else {
        fltPoems = Object.values(unfltPoems);       // No filtering (Object.values unwraps the array out of the object)
    }
    return fltPoems;
}

// Takes an object with poems and returns the ones filtered by the nsfw value
export function getNsfwFilteredPoems(unfltPoems, nsfw) {
    let fltPoems;
    if(nsfw != true && nsfw != false) { // If nsfw value is not defined --> set to false
        nsfw = false;
    }
    fltPoems = Object.values(unfltPoems).filter(poem => poem.isNsfw == nsfw); // Filter poems according to nsfw value (true/false)
    return fltPoems;
}

// Fetch a random poem filtered by nsfw and language
export const fetchRandomFilteredPoem = async (isNsfw, language) => {
    // Step 1: Get the count or rows matching the filters
    let count, countError;
    if(language !== "all") {
        ({ count, error: countError } = await supabase
            .from("snuff_poems")
            .select("*", { count: "exact", head: true}) // Only get count, not data
            .eq("isNsfw", isNsfw)                       // Apply nsfw and language filters
            .eq("language", language));
    }
    else {
        ({ count, error: countError } = await supabase
            .from("snuff_poems")
            .select("*", { count: "exact", head: true}) // Only get count, not data
            .eq("isNsfw", isNsfw));                       // Apply only nsfw filter
    }

    console.log("Filtered poems count: ", count);
    if(countError){
        console.error("Error fetching row count: ", countError);
        return;
    }

    if(!count || count == 0){
        console.warn("No matching rows found");
        return;
    }

    // Step 2: Generate a random index
    const randomOffset = Math.floor(Math.random() * count);

    // Step 3: Fetch one row using OFFSET
    let supabaseQuery = await supabase
    .from("snuff_poems")
    .select("*")
    .eq("isNsfw", isNsfw);

    if(language !== "all") {
        supabaseQuery = supabaseQuery.eq("language", language);  // Apply language filter only when not "all" selected
    }

    const { data, error } = await supabaseQuery.range(randomOffset, randomOffset);  // Fetch only one row

    
    if(error) {
        console.error("Error fetching random row: ", error);
        return;
    }

    return data[0]; // Return poem
}
