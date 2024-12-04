import { Tweet, useTweet } from "react-tweet";
import TwitterIcon from "../../Icons/TwitterIcon";
import { Button } from "@/components/ui/button";
import { SocialMediaLinks } from "@/app/constants/social-media-links";
import CardLogo from "./Card/CardLogo";
import Card from "./Card";
import CardTitle from "./Card/CardTitle";
import defaultTweet from "../../../../assets/tweet.png";

export default function Twitter() {
  const { isLoading, data, error } = useTweet("1634701418354421761");
  const shouldTweetBeRedered =
    !isLoading && error !== undefined && data !== undefined;
  console.log({
    isLoading,
    data,
    error,
  });
  return (
    <Card className="bg-gradient-to-tl from-blue-100 to-blue-200">
      <CardLogo className="bg-white hover:bg-blue-50">
        <TwitterIcon />
      </CardLogo>
      <CardTitle>Twitter</CardTitle>
      {!isLoading && error && (
        <div className="relative">
          <img
            src={defaultTweet}
            alt="Tweet from Speed account"
            className="h-full w-full"
          />
        </div>
      )}
      {shouldTweetBeRedered && (
        <div className="relative m-0 [&>*]:m-0" data-theme="light">
          <Tweet id="1634701418354421761" />
        </div>
      )}
      <Button asChild variant="secondary">
        <a
          href={SocialMediaLinks.Twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Puedes ver más tweets o contactarme
        </a>
      </Button>
    </Card>
  );
}
