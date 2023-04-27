const BASE_URL = 'http://localhost:5001/api';

export const fetchTopHeadlines = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/top-headlines?q=${query}`);
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    return [];
  }
};
