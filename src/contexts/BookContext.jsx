import { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ( { children } ) => {
	const [ books, setBooks ] = useState( [] );

	const addBook = ( newBook ) => {
		setBooks( [ ...books, newBook ] );
	};
	const editBook = ( updatedBook ) => {
		const updatedBooks = books.map( ( book ) => {
			if ( book.isbn === updatedBook.isbn )
				return updatedBook
			return book
		} )
		setBooks( updatedBooks );
	};

	const deleteBook = ( isbn ) => {
		const filteredBooks = books.filter( ( book ) => book.isbn !== isbn )
		setBooks( filteredBooks )
	};

	return <BookContext.Provider value={ { books, addBook, deleteBook, editBook } }>{ children }</BookContext.Provider>;
};

