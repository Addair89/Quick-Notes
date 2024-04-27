import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="z-10 mt-10 mb-10 px-10 h-12 w-[40vw] flex justify-between items-center text-xl bg-gray-950 rounded-full bg-opacity-35 shadow-black/[0.03] backdrop-blur-[0.5rem] text-gray-400">
      <Link className="hover:text-slate-50" to="/">
        Home
      </Link>
      &nbsp; | &nbsp;
      <Link className="hover:text-slate-50" to="/notes">
        Note History
      </Link>
      &nbsp; | &nbsp;
      <Link className="hover:text-slate-50" to="/notes/new">
        New Note
      </Link>
      &nbsp; | &nbsp;
      <Link className="hover:text-slate-50" to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
