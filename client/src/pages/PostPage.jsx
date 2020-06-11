import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/http.hook';
import AuthContext from '../context/AuthContext';
import { PostCard } from '../components';


const PostPage = () => {
    const { token } = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const { request } = useHttp();
    useEffect(() => {
        request(
            `/posts/${id}`,
            'GET',
        )
            .then(({ post }) => setPost(post));
    }, [request, token, id]);

    if (!post) {
        return 'Loading...';
    }

    return (
        <PostCard post={post} linkActive={false} />
    );

};

export default PostPage;
