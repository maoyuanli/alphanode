import Twitter from "twitter-lite";
import {Request, Response} from "express";
import {provideConfig} from "../../config/keys";

const client = new Twitter({
    consumer_key: provideConfig().TwitterConsumerKey,
    consumer_secret: provideConfig().TwitterConsumerSecret,
    access_token_key: provideConfig().TwitterAccessTokenKey,
    access_token_secret: provideConfig().TwitterAccessTokenSecret,
});

export const provideTweets = async (req: Request, res: Response) => {
    const screenNames = ["wsj", "ft", "business", "theeconomist", "cnbc"];
    try {
        const tweetsArray: string[] = [];
        for (let name of screenNames) {
            const tweetRes = await client.get('statuses/user_timeline', {
                screen_name: name,
                count: 3,
            });
            const simplifiedTweetRes = tweetRes.map(originRes => {
                const simplifiedRes = {
                    id: originRes.id,
                    text: originRes.text,
                    user: {
                        screenName: originRes.user.screen_name,
                        profileImageUrlHttps: originRes.user.profile_image_url
                    }
                }
                return simplifiedRes;
            });
            tweetsArray.push(...simplifiedTweetRes);
        }
        // @ts-ignore
        tweetsArray.sort(((a, b) => a.id - b.id));
        res.status(200).json({
            tweets: tweetsArray
        })
    } catch (e) {
        console.log(e)
    }
};
