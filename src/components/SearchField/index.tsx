//Material UI
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

//Others
import './SearchField.scss';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

interface Props {
    className?: string;
    children?: JSX.Element | string;
    searchBtn?: boolean;
    searchValue: string;
    onSearchValue: React.Dispatch<React.SetStateAction<string>>;
    onSubmit?: (e: SyntheticEvent) => void;
}

const SearchField = ({ className, children, searchBtn = true, searchValue, onSearchValue, onSubmit }: Props) => {
    const navigate = useNavigate();

    const handleChange = (e: SyntheticEvent) => {
        const searchValue = (e.target as HTMLInputElement).value;
        if (!searchValue.startsWith(' ')) {
            onSearchValue(searchValue);
        }
    };

    const handleSubmitSearch = (e: SyntheticEvent) => {
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
            <Box>
                <IconButton className="search-field__icon" type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

                <InputBase
                    className="search-field__input"
                    value={searchValue}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Try "building mobile app"'
                    onChange={handleChange}
                />
            </Box>

            {searchBtn && (
                <Button type="submit" className="search-field__btn" variant="contained">
                    {children}
                </Button>
            )}
        </Paper>
    );
};

export default SearchField;
