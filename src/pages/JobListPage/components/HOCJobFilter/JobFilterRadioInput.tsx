import React, { useEffect, useState } from 'react';

//Material UI
import { Star } from '@mui/icons-material';
import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    OutlinedInput,
    Radio,
    RadioGroup,
    Box,
} from '@mui/material';

//Others
import { JobFilterDataProps } from '../../interfaces';

interface Props {
    data: JobFilterDataProps;
    onFilter?: any;
}

interface RangeValueProps {
    min: number;
    max: number;
}

const JobFilterRadioInput = ({ data, onFilter }: Props) => {
    const [selected, setSelected] = useState<any>(0);
    const [rangeValue, setRangeValue] = useState<RangeValueProps>({
        min: 0,
        max: 0,
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onFilter({
            option: selected,
            ...rangeValue,
        });
    };

    const renderLabel = (option: any) => {
        switch (typeof option.label) {
            case 'object':
                const arrayLength = option.value * 1;
                const array = Array.apply(null, Array(arrayLength));

                return array.map((item, index) => {
                    return <option.label key={index} />;
                });

            case 'string':
            default:
                return (
                    <span className="filter-menu-item__label">
                        {option.label}
                        {option.subText && <span className="filter-menu-item__sub-text">{`(${option.subText})`} </span>}
                    </span>
                );
        }
    };

    const handleFilterValue = (value: string) => {
        return Number(value);
    };

    return (
        <>
            <Box component="form">
                <RadioGroup>
                    {data.options.map((item, index) => {
                        if (item.custom) {
                            return (
                                <FormGroup key={index}>
                                    <FormControlLabel
                                        className="filter-menu__item filter-menu__item--custom filter-menu__item--radio"
                                        value={item.custom}
                                        control={<Radio />}
                                        checked={selected === item.value}
                                        label={renderLabel(item)}
                                        onChange={() => setSelected(item.value)}
                                    />
                                    <div className="filter-custom-wrapper">
                                        <FormControl className="filter-custom-group">
                                            <span className="filter-custom-group__title">MIN.</span>
                                            <OutlinedInput
                                                className="filter-menu__item filter-menu__item--text"
                                                startAdornment={
                                                    <InputAdornment
                                                        className="filter-custom-group__unit"
                                                        position="end"
                                                    >
                                                        {item?.icon}
                                                    </InputAdornment>
                                                }
                                                placeholder="Price"
                                                value={rangeValue.min || 0}
                                                onChange={(e) => {
                                                    const selectedValue = handleFilterValue(e.target.value);
                                                    setRangeValue({
                                                        ...rangeValue,
                                                        min: selectedValue,
                                                    });
                                                }}
                                            />
                                        </FormControl>

                                        <FormControl className="filter-custom-group">
                                            <span className="filter-custom-group__title">MAX.</span>
                                            <OutlinedInput
                                                className="filter-menu__item filter-menu__item--text"
                                                startAdornment={
                                                    <InputAdornment
                                                        className="filter-custom-group__unit"
                                                        position="end"
                                                    >
                                                        {item?.icon}
                                                    </InputAdornment>
                                                }
                                                placeholder="Price"
                                                value={rangeValue.max || 0}
                                                onChange={(e) => {
                                                    const selectedValue = handleFilterValue(e.target.value);
                                                    setRangeValue({
                                                        ...rangeValue,
                                                        max: selectedValue,
                                                    });
                                                }}
                                            />
                                        </FormControl>
                                    </div>
                                </FormGroup>
                            );
                        } else {
                            return (
                                <FormControlLabel
                                    key={index}
                                    className="filter-menu__item filter-menu__item--radio"
                                    value={item.value}
                                    control={<Radio />}
                                    checked={selected === item.value}
                                    label={renderLabel(item)}
                                    onChange={() => {
                                        setSelected(item.value);
                                    }}
                                />
                            );
                        }
                    })}
                </RadioGroup>
            </Box>
            <Divider />
            <div className="filter-menu__btn-list">
                <Button
                    className="filter-menu__btn-item filter-menu__btn-item--text"
                    variant="text"
                    onClick={() => {
                        //Clear radio input
                        setSelected(null);

                        //Clear custom input
                        setRangeValue({
                            min: 0,
                            max: 0,
                        });
                    }}
                >
                    Clear All
                </Button>
                <Button
                    className="filter-menu__btn-item filter-menu__btn-item--contained"
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Apply
                </Button>
            </div>
        </>
    );
};

export default JobFilterRadioInput;
