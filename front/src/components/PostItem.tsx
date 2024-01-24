import { useState } from 'react';
import PostEditForm from './PostEditForm';

type Post = {
    id: number;
    title: string;
    description: string;
};

type PostItemProps = {
    post: Post;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleEditCancel = () => {
        setIsEditing(false);
    };

    return (
        <div>
            {!isEditing ?(
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            ) : (
                <PostEditForm post={post} onEdit={handleEditCancel} />
            )}
        </div>
    );
};

export default PostItem;