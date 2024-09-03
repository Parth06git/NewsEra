import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'
import NewsItems2 from './NewsItems2'
import InfiniteScroll from 'react-infinite-scroll-component'



export default function CategoryNews(props) {

    const capitalized = (e) => {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)

    const updateNews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=9`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(40)
        let finaData = await data.json()
        props.setProgress(70)
        setArticles(finaData.articles)
        setTotalResults(finaData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews()
        document.title = `NewsEra - ${capitalized(props.category)}`
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=9`
        setLoading(true)
        let data = await fetch(url)
        let finalData = await data.json()
        setArticles(articles.concat(finalData.articles))
        setTotalResults(finalData.totalResults)
        setLoading(false)
    }

    const myStyle = {
        marginTop: '90px'
    }

    const myStyle2 = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'gray',
    }

    return (
        <div style={myStyle} >
            <h1 className='text-center' style={myStyle2}>NewsApp - Top Headlines - {capitalized(props.category)}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-sm-4 col-7 m-auto my-3">
                                    <NewsItems2 title={element.title ? element.title.slice(0, 65) + "..." : ""} description={element.description ? element.description.slice(0, 80) + "..." : ""} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} name={element.source.name} mode={props.mode} />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </div>
    )
}

CategoryNews.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}
CategoryNews.defaultProps = {
    country: "us",
    category: "general"
}
