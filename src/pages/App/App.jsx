import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewNotePage from "../NewNotePage/NewNotePage";
import NoteHistoryPage from "../NoteHistoryPage/NoteHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import { set } from "mongoose";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App min-h-screen bg-black relative flex flex-col items-center text-white">
      {user ? (
        <div className="relative z-10 flex flex-col items-center">
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/notes/new" element={<NewNotePage user={user} />} />
            <Route path="/notes" element={<NoteHistoryPage user={user} />} />
          </Routes>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center">
          <AuthPage setUser={setUser} />
        </div>
      )}
      {/* Background shapes */}
      <div className="absolute top-[20%] right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#fbe2e3] dark:bg-[#946263]"></div>
      <div className="absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#dbd7fb] dark:bg-[#676394]"></div>
    </main>
  );
}
