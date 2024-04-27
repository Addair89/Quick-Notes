import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl mt-20">AuthPage</h1>
      <div className="">
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </div>
    </main>
  );
}
