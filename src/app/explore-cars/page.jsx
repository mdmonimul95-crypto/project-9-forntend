import ExploreCard from '@/components/ExploreCard';
import React from 'react';

const Explore = async() => {
    const res = await fetch('http://localhost:8000/explore')
    const explore = await res.json()
    console.log(explore)
    return (
        <div className='bg-[#F0F3FF]'>
            <h1>Explore Cars</h1>
            <span>Find a car that<br/> matches the trip.</span><br/>
            <span>Search runs across every listing; the type filter shows only that category. Switching one <br/> clears the other so they never stack.</span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    explore.map(explore => <ExploreCard key={explore._id} explore={explore}/>)
                    
                }
            </div>
        </div>
    );
};

export default Explore;