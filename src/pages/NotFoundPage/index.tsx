import React, { useState } from 'react';

//Components
import SearchField from '@/components/SearchField';

//MUI
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

//Others
import './NotFoundPage.scss';
import LogoBtn from '@/components/LogoBtn';

const NotFoundPage = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <div id="not-found">
            <LogoBtn className="not-found__logo-btn" />
            <Box>
                <h1>Well, this isn't what you were looking for</h1>
                <Divider className="not-found__divider" />
                <h5>But at least it's pretty</h5>
                <p>Keep exploring</p>
                <SearchField
                    className="not-found__search-field"
                    searchValue={searchValue}
                    onSearchValue={setSearchValue}
                >
                    <SearchIcon className="not-found__search-icon" />
                </SearchField>
            </Box>
        </div>
    );
};

export default NotFoundPage;
