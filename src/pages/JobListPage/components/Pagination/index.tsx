import React, { Fragment, SyntheticEvent } from 'react';

//Material UI
import { Pagination } from '@mui/material';

interface Props {
    currentPage: number;
    totalPage: number;
    paginate: (event: React.ChangeEvent<unknown>, pageNumber: number) => void;
}

const PaginationMUI = ({ currentPage, totalPage, paginate }: Props) => {
    return (
        <Fragment>
            <Pagination
                className="job-list__pagination"
                count={totalPage}
                size="medium"
                variant="outlined"
                shape="rounded"
                onClick={(e: SyntheticEvent) => console.dir(e.currentTarget)}
                page={currentPage}
                onChange={paginate}
            />
        </Fragment>
    );
};

export default PaginationMUI;
