import React from "react";

function Post({ fullname, username, caption, created }) {
  return (
    <div className="flex flex-col gap-3 py-3">
      <div className="flex gap-2">
        <div className="w-12 h-12 bg-blue-900 rounded-full"></div>
        <div className="text-sm">
          <p className="font-semibold">{fullname}</p>
          <p className="text-gray-600">@{username}</p>
        </div>
      </div>
      <div className="col-span-1 row-span-3 ml-[50px]">{caption}</div>
    </div>
  );
}

export default Post;
