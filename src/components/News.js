import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'
import Spinner from './Spinner'

export default function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)


    const updateNews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&page=${page}&pageSize=4`
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
        document.title = "NewsEra"
    }, [])

    const handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&page=${page - 1}&pageSize=4`
        setPage(page - 1)
        setLoading(true)
        let data = await fetch(url)
        let finaData = await data.json()
        setArticles(finaData.articles)
        setTotalResults(finaData.totalResults)
        setLoading(false)
    }

    const handleNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&page=${page + 1}&pageSize=4`
        setPage(page + 1)
        setLoading(true)
        let data = await fetch(url)
        let finaData = await data.json()
        setArticles(finaData.articles)
        setTotalResults(finaData.totalResults)
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
        <div style={myStyle}>
            <h2 className='my-3 text-center'style={myStyle2} >Top Headlines</h2>
            {loading && <Spinner />}
            <div className="container" style={myStyle2}>
                {articles.map((element) => {
                    return (
                        <div key={element.url}>
                            <NewsItems title={element.title ? element.title : ''} description={element.description ? element.description : ''} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} mode={props.mode} name={element.source.name} />
                        </div>
                    )
                })}
                <div className="d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'}`} onClick={handlePrev} > &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / 4)} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'}`} onClick={handleNext} >Next &rarr; </button>
                </div>
            </div>
        </div>
    )
}

News.propTypes ={
    mode: PropTypes.string
}