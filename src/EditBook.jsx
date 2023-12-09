import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { BookContext } from "./contexts/BookContext";
import BookForm from "./components/BookForm";

const EditBook = () => {
    const params = useParams()
    const { books, editBook } = useContext( BookContext )
    const [ book, setBook ] = useState( books.find( ( book ) => book.isbn === params.id ) );
    const handleChange = ( e ) => {
        setBook( {
            ...book, ...{
                [ e.target.id ]: e.target.id !== 'availability' ? e.target.value : e.target.checked ? "Yes" : "No"
            }
        } )
    }
    const handleClick = ( e ) => {
        e.preventDefault()
        editBook( book )
    }
    return (
        <BookForm action='Edit' book={ book } handleChange={ handleChange } handleClick={ handleClick } />
    )
}

export default EditBook