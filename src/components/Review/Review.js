import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hook/useReview';
import SingleReview from '../SingleReview/SingleReview';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className=''>
            <h1 className='text-4xl text-center font-semibold mb-10'>JS developer Review ({reviews.length})</h1>
            <div className='md:grid grid-cols-3'>
                {
                    reviews.map(review => <SingleReview key={Review.id} review={review}></SingleReview>)
                }
            </div>
            <div className='flex justify-center '>
                <Link to='/review' className='mt-5 bg-yellow-300 py-3 px-5 rounded-md hover:bg-yellow-500 hover:font-semibold'>Total Review</Link>
            </div>
            
        </div>
    );
};

export default Review;