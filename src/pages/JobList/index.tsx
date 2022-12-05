import React from 'react';

//Material UI
import { Button, FormControlLabel, FormGroup, Grid, Popover, Switch } from '@mui/material';

//Others
import './JobList.scss';
import JobItem from './components/JobItem';

const JobList = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    console.log('Categories');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div id="job-list" className="container-center">
            <h3 className="job-list__title">Results for "software"</h3>
            <div className="job-list__filter-wrapper">
                <div className="job-list__filter—group">
                    <div className="job-list__filter-item">
                        <Button className="job-list__filter-btn" onClick={handleClick}>
                            Category
                        </Button>
                        <Popover
                            className="job-list__filter-menu"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                        </Popover>
                    </div>
                    <div className="job-list__filter-item">
                        <Button className="job-list__filter-btn" onClick={handleClick}>
                            Category
                        </Button>
                        <Popover
                            className="job-list__filter-menu"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                        </Popover>
                    </div>
                    <div className="job-list__filter-item">
                        <Button className="job-list__filter-btn" onClick={handleClick}>
                            Category
                        </Button>
                        <Popover
                            className="job-list__filter-menu"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                            <a href="" className="filter-menu__item">
                                Support & IT 1
                            </a>
                        </Popover>
                    </div>
                </div>
                <div className="job-list__filter—group">
                    <FormGroup className="job-list__filter-item">
                        <FormControlLabel control={<Switch />} label="Local sellers" />
                    </FormGroup>
                    <FormGroup className="job-list__filter-item">
                        <FormControlLabel control={<Switch />} label="Local sellers" />
                    </FormGroup>
                    <FormGroup className="job-list__filter-item">
                        <FormControlLabel control={<Switch />} label="Local sellers" />
                    </FormGroup>
                </div>
            </div>
            <div className="job-list__content">
                <span className="job-list__result">8,186 services available</span>
                <Grid container className="job-list__wrapper">
                    <JobItem />
                </Grid>
            </div>
            <div className="job-list__pagination">
                <button className="job-list__pagination-btn">1</button>
            </div>
        </div>
    );
};

export default JobList;
