import React, { useContext, useEffect, useState } from "react";
import TimeLine from "../components/TimeLine";
import Sidebar from "../components/Sidebar";
import SuggestedProfiles from "../components/SuggestedProfiles";
import { AuthContext } from "../context/auth-context";
import { supabase } from "../library/supebaseClient";

function HomePage() {
  const {
    user: { user },
  } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    const userDetails = async function () {
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*, posts(*)")
        .eq("id", user.id);
      setUserProfile(profile);
    };
    userDetails();
  }, []);

  // console.log(userProfile, "user");

  return (
    <div className="flex px-10 py-2 max-w-screen-xl mx-auto">
      <Sidebar />
      {userProfile && <TimeLine userProfile={userProfile[0]} />}
      {userProfile && <SuggestedProfiles loggedUserProfile={userProfile[0]} />}
    </div>
  );
}

export default HomePage;
