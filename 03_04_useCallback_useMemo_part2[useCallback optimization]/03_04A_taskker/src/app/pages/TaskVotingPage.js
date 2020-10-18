import React, { useState } from 'react';
import AppLayout from '../../shared/layout/AppLayout';

import { items as tasksItems } from '../../data/tasks';
import TaskVote from '../components/TaskVote';

const TaskVotingPage = (props) => {

    const [items, setItems] = useState(tasksItems);
    const [data, setData] = useState(0);

    const updateItems = () => {
        const updated = items.map( (item, index)=>{
            if (index === 0) return {
                id: 1,
                subject: 'Task One',
                votes: item.votes+1,
                project_id: 1
            }
            return item;
        } );
        setItems(updated);
    }

    console.log('Render TaskVotingPage...');
    return (
        <AppLayout>
            <div className="my-3 my-md-5">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title"> Task Voting </h1>
                        <div className="page-subtitle"> useCallback and useMemo </div>
                    </div>
                    <div className="page-content">
                        <input type="text" value={data} readOnly disabled />
                        <button onClick={ () => setData(data+1) }
                            className="btn btn-sm btn-info"> Modify TaskVotingPage State </button>
                        <button onClick={ updateItems }
                            className="btn btn-sm btn-info"> Add one vote to task 1 </button>
                    </div>
                    <div className="row row-cards">

                        { 
                            items.map( (item, i) => (
                                <TaskVote key={i} subject={item.subject} votes={item.votes} />
                            ))

                        }

                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default TaskVotingPage;