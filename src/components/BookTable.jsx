import { useCallback, useContext, useMemo, useState } from 'react'
import { BookContext } from '../contexts/BookContext'
import { NavLink, useNavigate } from 'react-router-dom'
import _debounce from 'lodash.debounce'
const BookTable = () => {
    const { books, deleteBook } = useContext( BookContext )
    const navigate = useNavigate();
    const handleDelete = ( isbn ) => {
        deleteBook( isbn )
    }
    const handleEdit = ( isbn ) => {
        navigate( `/editBook/${ isbn }` )
    }
    const [ query, setQuery ] = useState( "" );
    const [ text, setText ] = useState( "" );

    let filteredBooks = books;

    if ( query !== "" ) {
        filteredBooks = books.filter( ( book ) => {
            return book.isbn.includes( query ) || book.name.toLowerCase().includes( query.toLowerCase() );
        } );
    }

    const handleChange = ( e ) => {
        setQuery( e.target.value );
    };

    const debouncedHandleChange = useCallback(
        _debounce( handleChange, 300 )
        , [] );
    return (
        <>
            <input className='m-3' type='text' value={ text } onChange={ ( e ) => {
                setText( e.target.value )
                debouncedHandleChange( e )
            }
            } />
            <NavLink className="btn btn-primary my-2 my-sm-0" to='addbook'>Add Book</NavLink>
            { !!filteredBooks.length && <div>
                <table className="table">
                    <thead>
                        <tr>
                            {
                                Object.keys( filteredBooks[ 0 ] ).map( ( key ) =>
                                    <th key={ key } scope="col">{ key }</th>
                                )
                            }
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        { filteredBooks.map( ( book ) => {
                            return ( <tr>
                                { Object.values( book ).map( ( value ) =>
                                    <td key={ value }>{ value }</td>
                                ) }
                                <td><button onClick={ () => handleEdit( book.isbn ) } type="submit" >✍️</button></td>
                                <td><button onClick={ () => handleDelete( book.isbn ) } type="submit" >❌</button></td>
                            </tr> )
                        } ) }
                    </tbody>
                </table>
            </div>
            }
        </>
    )
}

export default BookTable