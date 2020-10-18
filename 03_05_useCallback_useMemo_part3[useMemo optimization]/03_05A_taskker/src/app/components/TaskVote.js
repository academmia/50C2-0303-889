import React, { useState, useEffect } from 'react'

// demo fn to re-acalculate position after vote is changing
function calculateRanking(subject, votes) {
    console.log('Calculate new ranking for data: ', subject, votes);
    return Math.round(Math.random()*100);
}

const TaskVote = ({getSubject, id, votes}) => {
    
    // const 
    const [ranking, setRanking] = useState(0);
    
    // run / re-run effect if subject and vote is changing
    useEffect( () => {
        const subject = getSubject(id)
        setRanking(calculateRanking(subject, votes));
    }, [getSubject, id, votes] )

    console.log('Render TaskVote...');
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="card p-3">
                
                <div className="d-flex align-items-center px-2">
                    <div>
                        <div> { getSubject(id) } </div>
                    </div>
                    <div className="ml-auto text-muted">
                        <a href="/" className="icon">
                            <i className="fe fe-heart mr-1"></i> { votes }</a>
                        <a href="/" className="icon">
                            <i className="fe fe-file mr-1"></i> { ranking }</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskVote;