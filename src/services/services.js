import { NEWS_API_KEY, SEARCH_ENGINE_ID, GOOGLE_API_KEY } from "../utils/config"
import { apiRequest } from "./apiCall"

const NEWS_URL = `https://newsapi.org/v2/everything?q=bitcoin&from=2025-03-11&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
const GOOGLE_CUSTOME_SEARCH_URL = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=`
const GOOGLE_SEARCH_SUGGESTION_URL = `https://suggestqueries.google.com/complete/search?client=chrome&q=`

export const fetchNewsData = async () => {
    const data = await apiRequest(NEWS_URL, "GET");
    return data;
}

export const googleSearchData = async (searchQuery) => {
    console.log({ GOOGLE_CUSTOME_SEARCH_URL })
    const data = await apiRequest('https://www.googleapis.com/customsearch/v1?key=AIzaSyBqx6Z_aekxzpqGUWY0T9qnOX7__aje-4Y&cx=d4320e458f3bd4cc6&q=' + encodeURIComponent(searchQuery), "GET");
    return data;
}

export const googleSearchSuggestionData = async (searchQuery) => {
    const data = await apiRequest(GOOGLE_SEARCH_SUGGESTION_URL + encodeURIComponent(searchQuery), "GET");
    return data;
}