import { useEffect, useState } from 'react';

//Material UI
import { Favorite, Share } from '@mui/icons-material';
import { IconButton } from '@mui/material';

//Others
import { handleInitialLikedState, handleLike } from '@/constants/functions';
import './SocialList.scss';

const SocialList = ({ postId, likedPosts }: { postId: number; likedPosts: number[] }) => {
    const [isLiked, setLiked] = useState(false);

    useEffect(() => {
        handleInitialLikedState(likedPosts, postId, setLiked);
    }, [postId]);

    return (
        <div className="job-details-head__social-list">
            <IconButton
                className={isLiked ? 'job-details-head__social-item active' : 'job-details-head__social-item'}
                onClick={() => handleLike(postId, isLiked, setLiked)}
            >
                <Favorite />
            </IconButton>
            <IconButton className="job-details-head__social-item">
                <Share />
            </IconButton>
        </div>
    );
};

export default SocialList;
