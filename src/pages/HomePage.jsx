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

  // console.log(useProfile);

  return (
    <div className="flex px-10 py-2 gap-5">
      <Sidebar />
      {userProfile && <TimeLine userProfile={userProfile[0]} />}
      <SuggestedProfiles />
    </div>
  );
}

export default HomePage;
