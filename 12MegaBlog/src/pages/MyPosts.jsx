import React, { useEffect, useState } from "react";
import { Container } from "../components";
import PostCard from "../components/PostCard";
import appwriteService from "../appwrite/config";
import { Query } from "appwrite";
import { useSelector } from "react-redux";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!userData) return;

    appwriteService.getPosts([
      Query.equal("userId", userData.$id), // 🔥 ONLY USER POSTS
      Query.orderDesc("$createdAt"),
    ]).then((res) => {
      if (res) setPosts(res.documents);
    });
  }, [userData]);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">My Posts</h1>

      <div className="flex flex-wrap gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))
        ) : (
          <p className="text-gray-500">You haven’t created any posts yet.</p>
        )}
      </div>
    </Container>
  );
}

export default MyPosts;