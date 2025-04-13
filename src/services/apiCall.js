export async function apiRequest(url, method = 'GET') {
    try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');

        const isJson = contentType && contentType.includes('application/json');
        const data = isJson ? await response.json() : await response.text();

        if (!response.ok) {
            throw new Error(data?.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}
