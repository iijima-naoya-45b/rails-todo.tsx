import { useState } from  'react';
import { updatePost } from '../Post/api';

type Post = {
    id: number;
    title: string;
    description: string;
};

type PostEditFormProps = {
    post: Post;
    onEdit: () => void;
};

const PostEditForm: React.FC<PostEditFormProps> = ({ post, onEdit }) => {
    const id = post.id
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            const postData = {
                title,
                description,
            };
            await updatePost(id, postData);
            onEdit();
        } catch (error) {
            console.error('Error while updating Post', error);
        }
    };

    return (
        <form className="edit-form-container" onSubmit={handleSubmit}>
        <h3>Edit Post</h3>
            <div>
                <label>
                    Title:
                    <input    
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Update</button>
        </form>
    );
};

export default PostEditForm;