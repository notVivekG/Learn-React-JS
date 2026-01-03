import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { PostCard, Container } from '../components'
function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {}, []);
    appwriteService.getPosts([]).
    then(response => {
        if (response.documents) {
            setPosts(response.documents);
        } else {
            setPosts([]);
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    posts.length > 0 ? posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post} />
                        </div>
                    )) : <p>No posts found.</p>
                }
            </div>
        </Container>

    </div>
  )
}

export default AllPosts