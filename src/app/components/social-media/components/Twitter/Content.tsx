import { useMemo } from "react";
import { Tweet, useTweet } from "react-tweet";
import defaultTweet from "@/assets/images/tweet.png";

const tweetId = "1634701418354421761";
export default function TwitterContent() {
  const { isLoading, data, error } = useTweet(tweetId);

  const showEmbedTweet = useMemo(
    () => !isLoading && error === undefined && data !== undefined,
    [data, error, isLoading],
  );

  const showTweetError = useMemo(
    () => !isLoading && error !== undefined,
    [error, isLoading],
  );

  return (
    <div className="will-change-contents">
      {showTweetError && (
        <div className="relative">
          <img
            src={defaultTweet}
            alt="Tweet from Speed account"
            className="h-full w-full"
          />
        </div>
      )}
      {showEmbedTweet && (
        <div
          className="relative m-0 [&>*]:m-0 [&>*]:text-xs"
          data-theme="light"
        >
          <Tweet id={tweetId} />
        </div>
      )}
    </div>
  );
}
