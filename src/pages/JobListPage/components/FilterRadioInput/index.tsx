import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import React from 'react';

const FilterRadioInput = ({ label }: { label: string }) => {
    return (
        <FormGroup className="job-list__filter-item">
            <FormControlLabel control={<Switch />} label={label} color="#1dbf73" />
        </FormGroup>
    );
};

export default FilterRadioInput;
