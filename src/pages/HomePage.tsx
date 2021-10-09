// import  Home from '../assets/home.svg';
import TwNav from "../components/TwNav";
import TwHairline from "../components/TwHairline";
import TwSpace from "../components/TwSpace";
import TwHeader from "../components/TwHeader";

interface Props {}

export default function HomePage(props: Props) {
  return (
    <div style={{ display: "flex" }}>
      <TwNav />
      <TwSpace isVertical={false} size={30} />
      <TwHairline isVertical={true} />
      <TwHeader />
    </div>
  );
}
