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
    <div className='w-full py-8'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
    )
}

export default Home