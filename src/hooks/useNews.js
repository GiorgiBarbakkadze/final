import { useState, useEffect } from 'react';

export const useNews = (category = 'general', searchQuery = '') => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Using JSONPlaceholder as a mock API and creating realistic news data
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        // Transform posts into news format
        const newsData = posts.slice(0, 12).map((post, index) => ({
          id: post.id,
          title: `${post.title.charAt(0).toUpperCase() + post.title.slice(1)}`,
          description: post.body.slice(0, 150) + '...',
          content: post.body,
          url: `#/news/${post.id}`,
          urlToImage: `https://picsum.photos/400/300?random=${index + 1}`,
          publishedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
          source: { name: ['Tech News', 'Science Daily', 'Business Times', 'Sports World'][index % 4] },
          category: ['technology', 'science', 'business', 'sports'][index % 4],
          author: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson'][index % 4],
          views: Math.floor(Math.random() * 5000) + 100,
          likes: Math.floor(Math.random() * 200) + 10,
          shares: Math.floor(Math.random() * 100) + 5,
        }));

        // Filter by category and search
        const filteredNews = newsData.filter(article => {
          const matchesCategory = category === 'general' || article.category === category;
          const matchesSearch = !searchQuery || 
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesCategory && matchesSearch;
        });

        setNews(filteredNews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, searchQuery]);

  return { news, loading, error };
}; 