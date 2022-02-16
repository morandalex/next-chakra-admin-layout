import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "../components/Icons/Icons";
var Routes = [
  {
    path: "/",
    name: "Home",
    icon: <HomeIcon color="inherit" />,
  },
  {
    path: "/docs",
    name: "docs",
    icon: <DocumentIcon color="inherit" />,
  },
  {
    path: "/about",
    name: "About",
    icon: <PersonIcon color="inherit" />,
  },
  {
    path: "/stats",
    name: "Stats",
    icon: < StatsIcon color="inherit" />,
  },
];
export default Routes;
