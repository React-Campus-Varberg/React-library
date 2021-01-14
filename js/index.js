import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Book from './book';
import BookInfo from './bookInfo';
import books from '../assets/childrensbooks.json';

function App(props) {
    const [currentBook, setCurrentBook] = useState('');

    return (
        <section class="library">
            <div class="wrapper">
                { currentBook ? <BookInfo book={ currentBook } close={ setCurrentBook } /> :  
                    <main class="books">
                        { props.books.map((book, index) => {
                            return <Book book={ book } moreInfo={ setCurrentBook } key={ index } />
                        })}
                    </main>
                }
            </div>
        </section>
    )
}

ReactDOM.render(<App books={ books } />, document.getElementById('root'));