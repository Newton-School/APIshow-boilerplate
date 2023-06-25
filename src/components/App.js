import React, { useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
   

    return (
        <div className="app">
            <h1>News Feed</h1>
            
                <p>Loading...</p>
       
                <ul className="news-feed">
                 
                        <li  className="article">
                            <h2>{/*article[' category']*/}</h2>
                            <p className="author">{/*article[' author']*/}</p>
                            <p className="content">{/*article['content']*/}</p>
                            <a href={/*article['url']*/} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </li>
                   
                </ul>
            )}
        </div>
    );
}

export default App;
