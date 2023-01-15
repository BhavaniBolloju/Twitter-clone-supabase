import React, { useEffect } from "react";
import Posts from "./Posts";

function TimeLine({ userProfile }) {
  // console.log(userProfile);
  const { fullname, username, posts, avatar_url = "" } = userProfile;
  return (
    <div className="basis-1/2">
      <div className="px-2 py-2 flex flex-col gap-2 border-b border-gray-200">
        <p className="font-semibold text-xl ">Home</p>
        <div className="flex ">
          {avatar_url ? (
            <img
              src={avatar_url}
              alt={username}
              className="w-11 h-11 rounded-full object-cover"
            />
          ) : (
            <div className="rounded-full self-start w-10 h-10 flex items-center justify-center bg-blue-700 text-gray-100 text-xl">
              {userProfile.fullname[0].toUpperCase()}
            </div>
          )}
          <form className="w-[100%] px-4 flex flex-col items-end">
            <textarea
              name="userPost"
              className="resize-none w-full h-20 bg-transparent outline-none placeholder:text-gray-500 placeholder:text-lg text-base border-b mb-2 mt-2 border-gray-200"
              placeholder="What's happening?"
            />
            <button className="bg-blue-600 text-sm px-4 py-1 rounded-2xl text-gray-100">
              Tweet
            </button>
          </form>
        </div>
      </div>
      <Posts
        fullname={fullname}
        username={username}
        imageSrc={avatar_url}
        posts={posts}
      ></Posts>
    </div>
  );
}

export default TimeLine;
