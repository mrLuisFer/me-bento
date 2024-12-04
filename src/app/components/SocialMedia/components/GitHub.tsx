import { SocialMediaLinks } from "../../../constants/social-media-links";
import GitHubCalendar, { Activity } from "react-github-calendar";
import GithubIcon from "../../Icons/GithubIcon";
import { Button } from "@/components/ui/button";
import Card from "./Card";
import CardLogo from "./Card/CardLogo";
import CardTitle from "./Card/CardTitle";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const shownMonths = 3;

const getTransformedData = (contributions: Activity[]) => {
  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

export default function GitHub() {
  return (
    <Card className="bg-gradient-to-bl from-[#1a2029] to-neutral-800 text-white">
      <CardLogo className="bg-neutral-900">
        <GithubIcon />
      </CardLogo>
      <CardTitle>Github</CardTitle>
      <GitHubCalendar
        username="mrLuisFer"
        year={currentYear}
        throwOnError
        blockSize={15}
        errorMessage="Could not load GitHub activity"
        colorScheme="dark"
        transformData={getTransformedData}
        hideColorLegend
      />
      <Button asChild>
        <a
          href={SocialMediaLinks.GitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow
        </a>
      </Button>
    </Card>
  );
}
