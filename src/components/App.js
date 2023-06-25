import React, { useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news');
            const data = await response.json();
            setNews(data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching news:', error);
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <h1>News Feed</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="news-feed">
                    {news.map((article, index) => (
                        <li key={index} className="article">
                            <h2>{article[' category']}</h2>
                            <p className="author">{article[' author']}</p>
                            <p className="content">{article['content']}</p>
                            <a href={article['url']} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
