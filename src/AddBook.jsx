import { useContext, useState } from 'react'
import { BookContext } from './contexts/BookContext';
import BookForm from './components/BookForm';
import { useNavigate } from 'react-router'

export const AddBook = () => {
    const navigate = useNavigate()

    const initialState = {
        isbn: '',
        name: '',
        count: '',
        category: '',
        cost: '',
        row: '',
        availability: false
    }
    const [ book, setBook ] = useState( initialState );
    const { addBook } = useContext( BookContext )
    const handleChange = ( e ) => {
        setBook( {
            ...book, ...{
                [ e.target.id ]: e.target.id !== 'availability' ? e.target.value : e.target.checked ? "Yes" : "No"
            }
        } )
    }
    const handleAddBook = ( e ) => {
        e.preventDefault()
        addBook( book )
        setBook( initialState )
        navigate( 0 )
    }
    return (
        <BookForm action="Add" book={ book } handleClick={ handleAddBook } handleChange={ handleChange } />
    )
}
