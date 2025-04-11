import { NEWS_API_KEY } from "../../utils/config"
import { apiRequest } from "../apiCall"

const NEWS_API = `https://newsapi.org/v2/everything?q=bitcoin&from=2025-03-11&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`

export const fetchNewsData = async () => {
    const data = await apiRequest(NEWS_API, "GET");
    return data;
}