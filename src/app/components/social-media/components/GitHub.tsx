import { SocialMediaLinks } from "../../../../constants/socialMedia";
import GitHubCalendar, { Activity } from "react-github-calendar";
import GithubIcon from "../../Icons/GithubIcon";
import Card from "./Card";
import CardLogo from "./Card/CardLogo";
import Link from "../../Link";

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
    <Card className="h-[251px] w-[278px] max-w-96 bg-gradient-to-bl from-[#1a2029] to-neutral-800 text-white">
      <CardLogo className="bg-neutral-900">
        <GithubIcon />
      </CardLogo>
      <GitHubCalendar
        username="mrLuisFer"
        year={currentYear}
        throwOnError
        blockSize={15}
        errorMessage="Could not load GitHub activity"
        colorScheme="dark"
        transformData={getTransformedData}
        hideColorLegend
        hideMonthLabels
        hideTotalCount
      />
      <Link href={SocialMediaLinks.GitHub} withButton>
        Follow
      </Link>
    </Card>
  );
}
