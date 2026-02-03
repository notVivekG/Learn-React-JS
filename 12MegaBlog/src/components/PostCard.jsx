import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 hover:shadow-2xl transition">
        <div className="w-full mb-4">
          {featuredImage ? (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No image</span>
            </div>
          )}
        </div>

        <h2 className="text-xl font-bold wrap-break-word line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;