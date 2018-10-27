import React from 'react';
import { Jumbotron, } from 'reactstrap';

const Article = (props) => {
  const {urlToImage, title, url, author, description} = props;

  return (
    <Jumbotron>
      <div className='img-wrap'>
      <img  src={urlToImage}/>
      </div>
      <h3 className="display-5">
        <a className="title" href={url}>{title}</a>
      </h3>
      <span>{author}</span>
      <hr className="my-2" />
      <p>{description}</p>
      <p className="lead"></p>
    </Jumbotron>
  );
};

export default Article;