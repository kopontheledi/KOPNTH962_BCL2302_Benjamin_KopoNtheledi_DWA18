import "./Styles/App.css";
import CardList from "./Services/CardList";

import Footer from "./Services/Footer";
import Supa from './config/SupabaseClient';
import { Supabase } from './config/SupabaseClient';
import { useState, useEffect } from 'react';

export default function App() {
  const [signUpState, setSignUpState] = useState('SignPhase')
  useEffect(() => {
    const authListener = Supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        console.log("User signed in successfully:", session.user.email);
        setSignUpState('startPhase')
      }
    });
    return () => {
      authListener.unsubscribe;
    };
  }, [])
  return (
    <>
    {signUpState ==='SignPhase' && <Supa />}
      { signUpState ==='startPhase' && <div className="app"></div>}
        <CardList/>
        <Footer />
    </>
  );
}





