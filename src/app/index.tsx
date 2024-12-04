import Profile from "./components/Profile";
import SocialMedia from "./components/SocialMedia";

export default function App() {
  return (
    <main className="container grid min-h-dvh grid-cols-[300px_1fr] overflow-x-hidden overflow-y-hidden px-10 py-8">
      <Profile />
      <SocialMedia />
    </main>
  );
}
