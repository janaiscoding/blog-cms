"use client";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import AdminView from "./components/AdminView";
import { getJwtToken } from "./utils/authentication";

export default function Admin() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const jwtToken = getJwtToken();
    if (jwtToken) {
      setLogged(true);
    }
  }, []);
  
  return (
    <div className="h-screen">
      {logged ? <AdminView /> : <Login setLogged={setLogged} />}
    </div>
  );
}
