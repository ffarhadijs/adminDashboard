import {
  Dashboard,
  GridView,
  Logout,
  Help,
  Article,
  BarChart,
  Description,
  BusinessCenter,
  AccountCircle,
  Settings,
  Mail,
  Apps,
} from "@mui/icons-material";

export const menuItems = [
  { title: "dashboard", slug: "/", id: "0", icon: Dashboard },
  {
    title: "Apps",
    id: "1",
    icon: Apps,
    subItems: [
      { title: "Inbox", id: "11", slug: "/apps/inbox" },
      { title: "Contacts", id: "12", slug: "/apps/contacts" },
      { title: "Calendar", id: "13", slug: "/apps/calendar" },
      { title: "Note", id: "14", slug: "/apps/note" },
    ],
  },
  {
    title: "Layouts",
    id: "2",
    icon: GridView,
    subItems: [
      { title: "Header", id: "21", slug: "/layouts/header" },
      { title: "Aside", id: "22", slug: "/layouts/aside" },
      { title: "Footer", id: "23", slug: "/layouts/footer" },
    ],
  },
  { title: "UI Kits", slug: "/kits", id: "3", icon: BusinessCenter },
  {
    title: "Pages",
    id: "4",
    icon: Description,
    subItems: [
      { title: "Profile", id: "41", slug: "/pages/profile" },
      { title: "Settings", id: "42", slug: "/pages/settings" },
      { title: "Search", id: "43", slug: "/pages/search" },
      { title: "FAQ", id: "44", slug: "/pages/faq" },
    ],
  },
  {
    title: "Charts",
    id: "5",
    icon: BarChart,
    subItems: [
      { title: "Line", id: "51", slug: "/charts/line" },
      { title: "Bar", id: "52", slug: "/charts/bar" },
      { title: "Pie", id: "53", slug: "/charts/pie" },
    ],
  },
  { title: "Document", slug: "/document", id: "6", icon: Article },
];

export const avatarMenuItems = [
  { id: 1, title: "Profile", to:"/pages/profile", icon: AccountCircle },
  { id: 2, title: "Settings",to:"/pages/settings", icon: Settings },
  { id: 3, title: "Inbox",to:"/apps/inbox", icon: Mail },
  { id: 4, title: " Need help?",to:"/pages/faq", icon: Help },
  { id: 5, title: " Logout",to:"/logout", icon: Logout },
];
