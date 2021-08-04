import React from 'react'

const Book = ({img, title, author, url}) => {
    const compexExample = (author) => {
        console.log(author);
    };
    return (
        <article className='book' onMouseOver={ ()=>{
            console.log(title)
        }}>
            <img src={img} alt='' onClick={() => window.open(url)}/>
            <h2 onClick={() => window.open(url)}>{title}</h2>
            <h4 onClick={() => alert(author)}>{author}</h4>
            <button type="button" onClick={() => compexExample(author)}>Just Log
            </button>
        </article>
    );
}


export default Book
