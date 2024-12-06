import { CardProps } from '../../../type/type';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import './Card.scss';
import { AppDispatch } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite, deletePost } from '../../../redux/slices/postSlice';
import { useNavigate } from 'react-router-dom';

export const Card = ({ post }: CardProps) => {
    const [favorite, setFavorite] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className={`card ${favorite ? 'active' : ''}`} onClick={(e) => navigate(`/products/${post.id}`,
            { state: { post } })}>
            <div className='card__close' onClick={(e) => {e.stopPropagation(); 
                                                         dispatch(deletePost(post.id))}}>
                                                        <CloseIcon /></div>  
            <p className="card__title">{post.title}</p>
            <p className="card__subtitle">Описание поста</p>
            
            <div className="card__content">
                <div className="card__preview-text">
                    {post.body.slice(0, 50)}...
                </div>
            </div>

            <div className="card__favorite" onClick={(e) => {   
                                            e.stopPropagation();
                                            setFavorite(!favorite); 
                        favorite ? dispatch(removeFavorite(post.id)) : dispatch(addFavorite(post.id))}}>
                <FavoriteIcon className={`card__favorite-icon 
                                         ${favorite ? 'card__favorite-icon-active' : ''}`} />
                <p>Добавить в избранное</p>
            </div>
        </div>
    );
};
