import React, { useState } from 'react';
import { createPost } from '../Post/api';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit =async (e: React.FormEvent) => {
        try {
            await createPost({
                title,
                description,
            });

            //作成時
            setTitle('');
            setDescription('');
            setError(null);
        } catch (error) {
            console.error('Error while creating Post', error);
            throw error;
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
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
            <button type="submit">Create</button>
        </form>
    );
};

export default PostForm;