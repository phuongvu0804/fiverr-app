import React from 'react';

//Others
import './JobDesc.scss';

const JobDesc = ({ data }: { data: string }) => {
    return (
        <section id="description" className="job-details-content__wrapper">
            <h3 className="job-details-content__title">About This Gig</h3>
            <div className="job-details-about__content">
                <span className="job-details-content__text">{data}</span>
            </div>
        </section>
    );
};

export default JobDesc;
