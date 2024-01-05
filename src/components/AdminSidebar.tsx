import { Link, useLocation, Location } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import {FaChartBar, FaChartPie, FaChartLine, FaStopwatch, FaGamepad} from "react-icons/fa"

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo</h2>
      <DivOne location={location}/>
      <DivTwo location={location}/>
      <DivThree location={location}/>
    </aside>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0, 115, 255, 0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0, 115, 255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

const DivOne = ({location}: {location: Location}) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url={"/admin/dashboard"}
        text={"Dashboard"}
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url={"/admin/product"}
        text={"Product"}
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url={"/admin/customer"}
        text={"Customer"}
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url={"/admin/transaction"}
        text={"Transaction"}
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
);

const DivTwo = ({location}: {location: Location}) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url={"/admin/chart/bar"}
        text={"Bar"}
        Icon={FaChartBar}
        location={location}
      />
      <Li
        url={"/admin/chart/pie"}
        text={"Pie"}
        Icon={FaChartPie}
        location={location}
      />
      <Li
        url={"/admin/chart/line"}
        text={"Line"}
        Icon={FaChartLine}
        location={location}
      />
    </ul>
  </div>
);

const DivThree = ({location}: {location: Location}) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url={"/admin/app/stopwatch"}
        text={"Stopwatch"}
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        url={"/admin/app/coupon"}
        text={"Coupon"}
        Icon={RiCoupon3Fill}
        location={location}
      />
      <Li
        url={"/admin/app/toss"}
        text={"Toss"}
        Icon={FaGamepad}
        location={location}
      />
    </ul>
  </div>
);

export default AdminSidebar;
