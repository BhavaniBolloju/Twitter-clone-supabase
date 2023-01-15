import React from "react";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineRetweet,
} from "react-icons/ai";
import UserProfile from "./UserProfile";

function Post({ fullname, username, post, imageSrc }) {
  const { caption, post_image = "" } = post;
  return (
    <div className="flex flex-col gap-3 py-4 text-sm border border-gray-100 justify-center px-5">
      {/* <header className="flex gap-2">
        <img src={imageSrc} className="w-11 h-11 object-cover rounded-full" />
        <div>
          <p className="font-semibold capitalize">{fullname}</p>
          <p className="text-gray-500 text-xs">@{username}</p>
        </div>
      </header> */}
      <UserProfile
        imageSrc={imageSrc}
        username={username}
        fullname={fullname}
      />
      <main className="col-span-1 row-span-3 ml-[50px] ">
        <p>{caption}</p>
        {post_image && (
          <img
            src={post_image}
            alt={username}
            className="mt-3 rounded-2xl object-cover"
          />
        )}
      </main>
      <footer className="ml-[60px] flex gap-20 self-start">
        <AiOutlineComment className="w-5 h-5 text-gray-500 hover:cursor-pointer" />
        <AiOutlineRetweet className="w-5 h-5 text-gray-500 hover:cursor-pointer" />
        <AiOutlineHeart className="w-5 h-5 text-gray-500 hover:cursor-pointer" />
      </footer>
    </div>
  );
}

export default Post;
