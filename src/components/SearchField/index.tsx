//Material UI
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

//Others
import './SearchField.scss';

interface Props {
    className?: string;
    children?: JSX.Element | string;
    searchBtn?: boolean;
}

const SearchField = ({ className, children, searchBtn = true }: Props) => {
    return (
        <Paper
            className={`search-field__wrapper ${className}`}
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <IconButton className="search-field__icon" type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

            <InputBase
                className="search-field__input"
                sx={{ ml: 1, flex: 1 }}
                placeholder='Try "building mobile app"'
            />

            {searchBtn && (
                <Button className="search-field__btn" variant="contained">
                    {children}
                </Button>
            )}
        </Paper>
    );
};

export default SearchField;
