import React, { useContext, useEffect, useState } from "react";
import { SupabaseContext } from "../context/supabase-context";
import UserProfile from "./UserProfile";

function SuggestedProfiles({ loggedUserProfile }) {
  const { supabase } = useContext(SupabaseContext);
  const mylist = loggedUserProfile.followers;
  const [whoToFollowers, setWhoToFollowers] = useState(null);

  useEffect(() => {
    const suggestedFollower = async function () {
      const { data: profiles } = await supabase
        .from("profiles")
        .select("*")
        .neq("id", loggedUserProfile.id)
        .not("id", "in", `(${mylist.join(",")})`);

      setWhoToFollowers(profiles);
    };
    suggestedFollower();
  }, []);
  console.log(whoToFollowers);

  return (
    <div className="basis-2/6 bg-gray-50 p-5">
      <h3 className="mb-3 font-bold text-gray-700">Who to follow</h3>
      {whoToFollowers && (
        <div className="flex flex-col gap-4 text-sm">
          {whoToFollowers.map((follow) => (
            <div key={follow.id} className="flex justify-between items-center">
              <UserProfile
                imageSrc={follow.avatar_url}
                username={follow.username}
                fullname={follow.fullname}
              />
              <button className="bg-gray-800 text-xs text-gray-100 font-semibold px-4 py-[5px] rounded-full">
                follow
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SuggestedProfiles;
