import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='Page-item'>
                    <a onClick={()=>paginate(number)} href="!#" className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </nav>
    )
}

export default Pagination