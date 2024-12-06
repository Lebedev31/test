import './Post.scss';
import { useLocation, Link } from 'react-router-dom';
import { IPost } from '../../../type/type';

const Post = () => {
    const location = useLocation();
    const post = location.state?.post as IPost;

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post">
            <div className="post__nav">
                <Link to="/" className="post__nav-link">
                    ← Назад к списку
                </Link>
            </div>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__body">{post.body}</p>
        </div>
    );
};

export default Post;