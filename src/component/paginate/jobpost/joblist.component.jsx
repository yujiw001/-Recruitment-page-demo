import React from 'react';
import JOB_DATA from './jobitem/job.data.js';
import JobItem from './jobitem/jobitem.component';
class JobList extends React.Component {
    constructor(props){
        super(props);
    
    this.state= {
        collections: JOB_DATA
    };
    }


    render(){
        const {collections}= this.state;
        return (<div className='job-list'>
            {
                collections.map(({ id, ...otherCollectionProps}) => (
                    <JobItem key={id}{...otherCollectionProps} />
                ))
            }
        </div>);
    }
}

export default JobList;
