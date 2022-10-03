import React from 'react';
import { Link } from 'react-router-dom';
import SingleReview from '../SingleReview/SingleReview';
import useReview from './../../hook/useReview';
import Review from './../Review/Review';

const TotalReview = () => {

    const [reviews, setReviews] = useReview();

    return (
        <div className='md:grid grid-cols-3'>
            {
                reviews.map(review => <SingleReview key={Review.id} review={review}><div className='flex justify-center'><Link to={`/review/${review.id}`} className='mt-5 bg-yellow-300 py-3 px-5 rounded-md hover:bg-yellow-500 hover:font-semibold'>Details</Link></div></SingleReview>)
            }
        </div>
    );
};

export default TotalReview;