import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import SingleReview from '../SingleReview/SingleReview';
import useReview from './../../hook/useReview';

const DetailReview = () => {
    const {reviewId} = useParams();  


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[reviewId])

    // const [reviews, setReviews] = useReview();
    // const added =  reviews.find(review => review.id === reviewId);
    // console.log(reviews);
    return (
        <div> 
             {
                reviewId
             }
             {
                <p>{reviews.name}</p>
             } 
        </div>
    );
};

export default DetailReview;