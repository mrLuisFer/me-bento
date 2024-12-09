import { IconContext } from "react-icons/lib";
import Profile from "./components/Profile";
import SocialMedia from "./components/social-media";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IconContext.Provider value={{}}>
        <TooltipProvider>
          <main className="grid max-h-screen w-full grid-cols-[300px_1fr] overflow-hidden bg-white py-0 pl-10">
            <Profile />
            <SocialMedia />
          </main>
        </TooltipProvider>
      </IconContext.Provider>
    </QueryClientProvider>
  );
}
