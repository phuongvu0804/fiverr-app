import React from 'react';

//Material UI
import { Divider, Grid } from '@mui/material';

//Others
import { jobCategoryProps } from '../../interfaces';

//Others
import './CategoryList.scss';

const CategoryList = ({ data }: { data: jobCategoryProps[] }) => {
    return (
        <div className="home__category-list container-center">
            <h3 className="sub-title__md">Explore the marketplace</h3>
            <Grid container spacing={2} className="category-list__wrapper">
                {data.map((item, index) => (
                    <Grid key={index} item xs={6} sm={4} md={2.4}>
                        <a className="category-list__item">
                            <div className="category-list__item-top">
                                <img src={item.image} alt={item.name} />
                                <Divider
                                    sx={{ borderBottomWidth: 2 }}
                                    textAlign="center"
                                    className="category-list__item-divider"
                                />
                            </div>
                            <p className="category-list__item-bottom">{item.name}</p>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CategoryList;
