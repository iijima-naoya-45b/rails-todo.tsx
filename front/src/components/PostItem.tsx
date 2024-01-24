import { useState } from 'react';
import PostEditForm from './PostEditForm';
import { deletePost } from '../Post/api';

type Post = {
    id: number;
    title: string;
    description: string;
};

type PostItemProps = {
    post: Post;
    onDelete: (postId: number) => void; //受け取る関数を定義
};

const PostItem: React.FC<PostItemProps> = ({ post, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleEditCancel = () => {
        setIsEditing(false);
    };

    const handleDeleteClick =async () => {
        try {
            await deletePost(post.id);
            onDelete(post.id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {!isEditing ?(
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>
                </div>
            ) : (
                <PostEditForm post={post} onEdit={handleEditCancel} />
            )}
        </div>
    );
};

export default PostItem;