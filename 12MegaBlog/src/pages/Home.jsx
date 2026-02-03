import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        appwriteService.getPosts().
        then(response => {
            if (response.documents) {
                setPosts(response.documents);
            } else {
                setPosts([]);
            }
        })
    }, []);

    if (posts.length === 0) {
        return <p className='text-center py-8'>Login to read Posts</p>;
    }
    return (
        <Container>
        <h1 className="text-2xl font-bold mb-6">Latest Posts</h1>

        <div className="flex flex-wrap gap-6 justify-start">
            {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
            ))}
        </div>
        </Container>
    );
}

export default Home