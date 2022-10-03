import React from 'react';
import './FrontPage.css';
import tShirt from '../../img/tshirt.jpg';

const FrontPage = () => {
    return (
        <div className='frontPage-container md:flex justify-between p-20'>
             <div className='md:w-1/2 mb-10'>
                <h1 className='text-4xl text-yellow-400 mb-8'>JavaScript TShirt</h1>
                <p>Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, repellendus adipisci sint velit beatae aut fuga numquam magnam. Saepe, ipsa! sit amet consectetur adipisicing elit. Placeat blanditiis tenetur voluptates possimus nisi ipsum sunt perspiciatis sit, ipsa mollitia et natus similique sapiente quasi repellendus illum nihil. Culpa, autem.</p>
                <button className='mt-5 bg-yellow-300 py-3 px-5 rounded-md hover:bg-yellow-500 hover:font-semibold'>Learn More...</button>
              </div>
             <div className='md:w-1/2 flex justify-end'>
                <img src={tShirt} alt="" />
             </div>
        </div>
    );
};

export default FrontPage;