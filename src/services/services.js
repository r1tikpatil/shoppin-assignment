import { apiRequest } from "./apiCall";

const NEWS_URL = `https://newsapi.org/v2/everything?from=2025-03-13&q=tata&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
const GOOGLE_CUSTOME_SEARCH_URL = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&q=`;

export const fetchNewsData = async () => {
  const data = await apiRequest(NEWS_URL, "GET");
  return data;
};

export const googleSearchData = async (searchQuery) => {
  const data = await apiRequest(
    GOOGLE_CUSTOME_SEARCH_URL + encodeURIComponent(searchQuery),
    "GET"
  );
  return data;
};
