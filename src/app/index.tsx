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
          <main className="flex w-full flex-col bg-white py-0 md:grid md:grid-cols-[200px_1fr] md:pl-10 lg:max-h-screen lg:grid-cols-[300px_1fr] lg:overflow-hidden">
            <Profile />
            <SocialMedia />
          </main>
        </TooltipProvider>
      </IconContext.Provider>
    </QueryClientProvider>
  );
}
