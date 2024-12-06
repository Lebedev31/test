import { CircularProgress, Alert, Button } from '@mui/material';
import { useGetPostsQuery} from '../../../redux/slices/postsApi';
import { Card } from '../Card/Card';
import './CardList.scss';
import {useState, useEffect, useCallback} from "react";
import { IPost } from '../../../type/type';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';    

export const CardList = () => {
    const { data: posts, isLoading, error, refetch } = useGetPostsQuery();
    const [dataArray, setDataArray] = useState<IPost[]>([]);
    const postsId = useSelector((state: RootState) => state.post.postsId);
    const favoritesArrayId  = useSelector((state: RootState) => state.post.favoritesArrayId);
    const newPost = useSelector((state: RootState) => state.post.newPostArray);


    const favoritePost = useCallback(() => {
        const newArray = dataArray.filter((post) => favoritesArrayId.includes(post.id));
        setDataArray(newArray);
    }, [dataArray, favoritesArrayId]);
   

    

    useEffect(() => {
        if (posts && !isLoading) {
            setDataArray(prev => [...newPost, ...posts].filter((post) => !postsId.includes(post.id)))
        }
    }, [posts, newPost, postsId]);

    if (isLoading) {
        return (
            <div className="loader">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <Alert severity="error">
                Error loading posts
            </Alert>
        );
    }

    return (
        <>
            <div className="cardnav">
                <span className="cardnav__link" onClick={favoritePost}>Избранное</span>
                <span className="cardnav__separator">/</span>
                <Link style={{textDecoration: "none"}} to="/new-post"><span className="cardnav__link">Создать новый пост</span></Link> 
            </div>
            <div className="card-list">
                {dataArray?.map((post) => (
                    <div className="card-list__item" key={post.id}>
                        <Card post={post} />
                    </div>
                ))}
            </div>
        </>
    );
};
