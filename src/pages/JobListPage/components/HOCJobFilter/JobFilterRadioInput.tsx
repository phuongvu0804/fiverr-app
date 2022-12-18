//Material UI
import { Star } from '@mui/icons-material';
import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    InputAdornment,
    OutlinedInput,
    Radio,
    RadioGroup,
} from '@mui/material';

//Others
import { JobFilterDataProps } from '../../interfaces';

interface Props {
    data: JobFilterDataProps;
    onFilter?: any;
}

const JobFilterRadioInput = ({ data }: Props) => {
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

    return (
        <>
            <FormControl>
                <RadioGroup>
                    {data.options.map((item, index) => {
                        if (item.custom) {
                            return (
                                <FormControl key={index}>
                                    <FormControlLabel
                                        className="filter-menu__item filter-menu__item--custom filter-menu__item--radio"
                                        value={item.custom}
                                        control={<Radio />}
                                        label={renderLabel(item)}
                                    />
                                    <div className="filter-custom-wrapper">
                                        <div className="filter-custom-group">
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
                                                placeholder="Any"
                                            />
                                        </div>

                                        <div className="filter-custom-group">
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
                                                placeholder="Any"
                                            />
                                        </div>
                                    </div>
                                </FormControl>
                            );
                        } else {
                            return (
                                <FormControlLabel
                                    key={index}
                                    className="filter-menu__item filter-menu__item--radio"
                                    value={item.value}
                                    control={<Radio />}
                                    label={renderLabel(item)}
                                />
                            );
                        }
                    })}
                </RadioGroup>
            </FormControl>
            <Divider />

            <div className="filter-menu__btn-list">
                <Button className="filter-menu__btn-item filter-menu__btn-item--text" variant="text">
                    Clear All
                </Button>
                <Button className="filter-menu__btn-item filter-menu__btn-item--contained" variant="contained">
                    Apply
                </Button>
            </div>
        </>
    );
};

export default JobFilterRadioInput;
