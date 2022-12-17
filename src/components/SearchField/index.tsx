import { useNavigate } from 'react-router-dom';

//Material UI
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

//Others
import './SearchField.scss';
import { useState } from 'react';

interface Props {
    className?: string;
    children?: JSX.Element | string;
    searchBtn?: boolean;
}

const SearchField = ({ className, children, searchBtn = true }: Props) => {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    const handleSubmitSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (searchValue !== '') {
            navigate(`/job-list/${searchValue}`);
        }
    };

    return (
        <Paper
            className={`search-field__wrapper ${className}`}
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={handleSubmitSearch}
        >
            <IconButton className="search-field__icon" type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

            <InputBase
                className="search-field__input"
                sx={{ ml: 1, flex: 1 }}
                placeholder='Try "building mobile app"'
                onChange={(e) => setSearchValue(e.target.value)}
            />

            {searchBtn && (
                <Button type="submit" className="search-field__btn" variant="contained">
                    {children}
                </Button>
            )}
        </Paper>
    );
};

export default SearchField;
