import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the City",
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship",
    },
];


const BreakingNews = () => {
    return (
        <div className='container flex justify-between items-center mx-auto gap-4 px-2 py-4 bg-gray-200'>
            <button className='btn bg-pink-800 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
               {
                news.map(n => <span key={n._id}>{n.title}</span>)
               }
            </Marquee>
        </div>
    );
};

export default BreakingNews;