import React from 'react';
import './SingleReview.css';

const SingleReview = ({review, children}) => {
    const {name, comment, rating} = review;
    return (
        <div>
            <div className='border p-5 m-5 shadow-md rounded-md bg-yellow-300 text-center hover:-translate-y-6 duration-300'>
            <p className='text-xl'>Name: {name}</p>
            <p>Comment: <span className='text-yellow-900 font-semibold'>{comment}</span></p>
            <p>Ratings: <small>{rating}</small></p>
            
            </div>

            {
                children
            }
        </div>
    );
};

export default SingleReview;