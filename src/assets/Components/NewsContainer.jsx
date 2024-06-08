import React, { useEffect, useState } from 'react'
import './NewsContainer.css';
import NewsItems from './NewsItems'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsContainer = ({ category, setProgress, setresults, results, background, fontColor}) => {
  const [page, setPage] = useState(1);
  const [news,setNews] = useState([]);
  async function fetchNews(){
    setProgress(20);
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=89647c35e68547e289d777b5e1f6b816&page=${page}&pageSize=15&language=en`;
    setPage(page+1)
    const response = await fetch(apiUrl);
    setProgress(40);
    const data = await response.json();
    setNews(news.concat(data.articles));
    console.log(news.length)
    setProgress(70)
    setProgress(100);
  }

  const fetchData = async() => {
     fetchNews();
  }

  async function getNews() {
    try {
      setProgress(20);
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=89647c35e68547e289d777b5e1f6b816&page=1 &pageSize=15&language=en`;
      setPage(page+1);
      const response = await fetch(apiUrl);
      setProgress(40);
      const data = await response.json();
      setProgress(70)
      setNews(data.articles);
      setProgress(100);
      setresults(data.totalResults);
    }
    catch (error) {
      console.error('Error fetching articles:', error);
    }
  }
  useEffect(() => {
     getNews();
  }, [category]);   

  return (
    <div className='min-vh-80'>
      <InfiniteScroll
          dataLength={news.length}
          next={fetchData}
          hasMore={news.length < results}
          loader={<div className="d-flex justify-content-center">   
                    <div className="spinner-grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                 }
        >
      <div className='d-flex flex-wrap gap-4 my-3 mx-5 justify-content-center'>
        {news.map((element) => {
          if(element.title === "[Removed]"){results--;}
          else{return <NewsItems key={element.url} title={element.title} source={element.source.name} description={element.description} urlToImage={element.urlToImage === null ? './/src//assets//Images&Icons//tempImage.jpg' : element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} background={background} fontColor={fontColor}/>}
        })}
       
      </div>
      </InfiniteScroll>
    </div>
  )
}

export default NewsContainer
