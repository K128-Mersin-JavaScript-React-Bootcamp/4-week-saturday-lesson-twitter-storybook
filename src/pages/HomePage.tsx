// import  Home from '../assets/home.svg';
import TwNav from "../components/TwNav";
import TwHairline from "../components/TwHairline";
import TwSpace from "../components/TwSpace";
import TwHeader from "../components/TwHeader";
import TwTweet from "../components/TwTweet";

interface Props {}

const tweets = [
  {
    username: "ZaferAyan",
    userNameSurname: "Zafer AYAN",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1349437841055641601/0k5dOKS0_400x400.jpg",
    tweetText: "Merhaba Dünya",
    date: "13h",
  },
  {
    username: "ZaferAyan",
    userNameSurname: "Zafer AYAN",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1349437841055641601/0k5dOKS0_400x400.jpg",
    tweetText: "Merhaba Dünya",
    date: "13h",
  },
  {
    username: "ZaferAyan",
    userNameSurname: "Zafer AYAN",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1349437841055641601/0k5dOKS0_400x400.jpg",
    tweetText: "Merhaba Dünya",
    date: "13h",
  },
];

export default function HomePage(props: Props) {
  return (
    <div style={{ display: "flex" }}>
      <TwNav />
      <TwSpace isVertical={false} size={30} />
      <TwHairline isVertical={true} />
      <div style={{ flexDirection: "row", flex: 1 }}>
        <TwHeader />
        {tweets.map((t) => (
          <TwTweet {...t} />
        ))}
      </div>
    </div>
  );
}
