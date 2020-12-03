import React, { useEffect } from "react";
import { useAuth } from "./../hooks/use-auth";
import PeopleAPI from "./../apis/peopleAPI";

export default function Home() {
  useEffect(() => {
    PeopleAPI.get();
  }, []);
  const { setUser } = useAuth();
  return (
    <div>
      <button
        onClick={() => {
          setUser("user");
        }}
      >
        henlo
      </button>
    </div>
  );
}
