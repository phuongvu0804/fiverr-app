//Functions related to Like Btn
export const handleInitialLikedState = (
    likedPosts: number[],
    postId: number,
    setLiked: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    likedPosts.forEach((itemId: number): void => {
        if (itemId == postId) {
            setLiked(true);
        }
    });
};

export const handleRemoveLikedPostId = (likedPosts: number[], postId: number) => {
    return likedPosts.filter((id) => id !== postId);
};

export const handleLike = (
    postId: number,
    isLiked: boolean,
    setLiked: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    //set Active class for btn
    setLiked(!isLiked);

    const likedPostsData = localStorage.getItem('fiverLikedPosts');
    if (likedPostsData) {
        const parsedLikedPostsData = JSON.parse(likedPostsData);

        //Update liked post list to local storage
        if (!isLiked) {
            const NEW_LIST = [...parsedLikedPostsData, postId];
            localStorage.setItem('fiverLikedPosts', JSON.stringify(NEW_LIST));
        } else {
            localStorage.removeItem('fiverLikedPosts');
            const NEW_LIST = handleRemoveLikedPostId(parsedLikedPostsData, postId);
            localStorage.setItem('fiverLikedPosts', JSON.stringify(NEW_LIST));
        }
    }
};
