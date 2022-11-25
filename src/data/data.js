import DashboardIcon from "@mui/icons-material/Dashboard";
import AppsIcon from "@mui/icons-material/Apps";
import GridViewIcon from "@mui/icons-material/GridView";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArticleIcon from "@mui/icons-material/Article";
export const menuItems = [
  { title: "Dashboard", slug: "/", id: "0", icon: DashboardIcon },
  {
    title: "Apps",
    id: "1",
    icon: AppsIcon,
    subItems: [
      { title: "Inbox", id: "11", slug: "/inbox" },
      { title: "Contacts", id: "12", slug: "/contacts" },
      { title: "Calendar", id: "13", slug: "/calendar" },
      { title: "Note", id: "14", slug: "/note" },
    ],
  },
  {
    title: "Layouts",
    id: "2",
    icon: GridViewIcon,
    subItems: [
      { title: "Header", id: "21", slug: "/header" },
      { title: "Aside", id: "22", slug: "/aside" },
      { title: "Footer", id: "23", slug: "/footer" },
    ],
  },
  { title: "UI Kits", slug: "/kits", id: "3", icon: BusinessCenterIcon },
  {
    title: "Pages",
    id: "4",
    icon: DescriptionIcon,
    subItems: [
      { title: "Profile", id: "41", slug: "/profile" },
      { title: "Settings", id: "42", slug: "/settings" },
      { title: "Search", id: "43", slug: "/search" },
      { title: "FAQ", id: "44", slug: "/faq" },
    ],
  },
  {
    title: "Charts",
    id: "5",
    icon: BarChartIcon,
    subItems: [
      { title: "Line", id: "51", slug: "/line" },
      { title: "Bar", id: "52", slug: "/bar" },
      { title: "Pie", id: "53", slug: "/pie" },
    ],
  },
  { title: "Document", slug: "/document", id: "6", icon: ArticleIcon },
];
