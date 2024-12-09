import { SocialMediaLinks } from "@/constants/socialMedia.ts";
import GitHubCalendar, { Activity } from "react-github-calendar";
import GithubIcon from "@/app/components/icons/GithubIcon";
import Card from "./Card";
import CardLogo from "./Card/CardLogo";
import Link from "../../Link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
  const isTabletOrLess = useMediaQuery("(max-width: 1020px)");

  return (
    <Card className="lg-fit w-fit bg-gradient-to-bl from-[#1a2029] to-neutral-800 text-white lg:max-w-96">
      <CardLogo className="bg-neutral-900">
        <GithubIcon />
      </CardLogo>
      <div className="overflow-x-clip [&>*]:text-xs">
        <GitHubCalendar
          username="mrLuisFer"
          year={currentYear}
          throwOnError
          blockSize={isTabletOrLess ? 20 : 15}
          errorMessage="Could not load GitHub activity"
          colorScheme="dark"
          transformData={getTransformedData}
          hideColorLegend
          hideMonthLabels={!isTabletOrLess}
          hideTotalCount={!isTabletOrLess}
        />
      </div>
      <Link href={SocialMediaLinks.GitHub} withButton>
        Follow
      </Link>
    </Card>
  );
}
