import React from 'react'
import Card from './card'

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div>
      {/* left side */}
      <div className="left-side">
        {leftArticles.map((article, i) => {
          return (
            <Card
              article={article}
              key={`article__left__${article.node.slug}`}
            />
          )
        })}
      </div>
      {/* right side */}
      <div className="right-side">
        {rightArticles.map((article, i) => {
          return (
            <Card
              article={article}
              key={`article__right__${article.node.slug}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Articles
