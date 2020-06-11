import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../context';
import Rating from './Rating';
import useHttp from '../../hooks/http.hook';
import useMessage from '../../hooks/message.hook';


const PostCard = ({ post, linkActive }) => {
    const { request, error, clearError } = useHttp();
    const message = useMessage();
    const { isAuthenticated, token } = useContext(AuthContext);
    const { title, text, owner: { nickname }, date, _id } = post;
    const [rating, setRating] = useState(post.rating);
    const onUp = async () => {
        try {
            await request(
                `/posts/up/${_id}`,
                'POST',
                null,
                { Authorisation: `Bearer ${token}` },
            );
            setRating(rating + 1);
        } catch (e) {}
    };
    const onDown = async () => {
        try {
            await request(
                `/posts/down/${_id}`,
                'POST',
                null,
                { Authorisation: `Bearer ${token}` },
            );
            setRating(rating - 1);
        } catch (e) {}
    };
    useEffect(() => {
        message(error);
        clearError();
    }, [message, error, clearError]);

    return (
        <Card style={{ marginTop: '1rem' }}>
            <Card.Body>
                <Card.Title>
                    {
                        linkActive 
                            ? <Link to={`posts/${_id}`}>{title}</Link>
                            : <h3>{title}</h3>
                    }
                </Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted" style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
            <div> 
                <strong>{nickname}</strong>{' '}
                <small>{date}</small>{' '}
            </div>
            <Rating value={rating} onUp={onUp} onDown={onDown} isAuthenticated={isAuthenticated} />
            </Card.Footer>
        </Card>
    );
};


export default PostCard;