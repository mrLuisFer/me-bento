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
          <main className="grid max-h-screen w-full overflow-hidden bg-white py-0 pl-10 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr]">
            <Profile />
            <SocialMedia />
          </main>
        </TooltipProvider>
      </IconContext.Provider>
    </QueryClientProvider>
  );
}
