import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import {data} from './books'
import Book from './Book'


function BookList() {
    return (
        <section className='booklist'>
            {
                data.map((book) => {
                    return <Book key={book.id} {...book}></Book>
                })
            }
        </section>
    );
}

ReactDom.render(<BookList/>, document.getElementById('root'));
