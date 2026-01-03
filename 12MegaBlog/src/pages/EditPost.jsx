import React , {useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import { Service } from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {
    const [posts, setPosts] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        if (slug) {
            Service.getPosts(slug).then((postsData) => {
                if (postsData.documents.length > 0) {
                    setPosts(postsData.documents[0]);
                } else {
                    setPosts(null);
                }
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);
    return (
        <div className='py-8'>
            <Container>
                {posts ? <PostForm post={posts} /> : <p>Loading...</p>}
            </Container>
        </div>
    )
}

export default EditPost