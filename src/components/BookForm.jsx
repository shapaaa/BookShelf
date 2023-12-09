import React from 'react'

const BookForm = ( { handleClick, handleChange, book, action } ) => {
    const { isbn, name, count, category, cost, row, availability } = book
    return (
        <div className='d-flex justify-content-center w-100'>
            <form className='d-flex flex-column  justify-content-start w-25'>
                <div className='d-flex flex-column my-1 w-100'>
                    <label className='align-self-start' htmlFor='name'>Name</label>
                    <input className="form-control" id='name' name='name' type='text' value={ name } onChange={ handleChange } />
                </div>
                <div className='d-flex flex-column my-1 w-100'>
                    <label className='align-self-start' htmlFor='isbn'>ISBN No</label>
                    <input className="form-control" id='isbn' name='isbn' type='text' value={ isbn } onChange={ handleChange } />
                </div>
                <div className='d-flex flex-column my-1 w-100'>
                    <label className='align-self-start' htmlFor='count'>Count</label>
                    <input className="form-control" id='count' name='count' type='text' value={ count } onChange={ handleChange } />
                </div>
                <div className='d-flex flex-row-reverse justify-content-end my-1 w-100'>
                    <label className='form-check-label' htmlFor='availability'>Availability</label>
                    <input className="mx-1" id='availability' name='availability' type='checkbox' value={ availability } onChange={ handleChange } />
                </div>
                <div className='d-flex flex-column my-1 w-100'>
                    <label className='align-self-start ' htmlFor='category'>Category</label>
                    <input className="form-control" id='category' name='category' type='text' value={ category } onChange={ handleChange } />
                </div>
                <div className='d-flex flex-column my-1 w-100'>
                    <label className='align-self-start' htmlFor='cost'>Cost</label>
                    <input className="form-control" id='cost' name='cost' type='text' value={ cost } onChange={ handleChange } />
                </div>
                <div className='d-flex flex-column my-1 w-100'>
                    <label className='align-self-start' htmlFor='row'>Row</label>
                    <input className="form-control" id='row' name='row' type='text' value={ row } onChange={ handleChange } />
                </div>
                <button onClick={ handleClick } type="submit" className="btn my-3 btn-primary">{ action } Book</button>
            </form>
        </div>
    )
}

export default BookForm