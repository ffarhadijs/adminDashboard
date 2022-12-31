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
import user1 from "../assets/avatar.jpg"
import user2 from "../assets/user (1).jpg"
import user3 from "../assets/user (2).jpg"
import user4 from "../assets/user (3).jpg"
import user5 from "../assets/user (4).jpg"
import user6 from "../assets/user (5).jpg"
import user7 from "../assets/user (6).jpg"
import user8 from "../assets/user (7).jpg"
import user9 from "../assets/user (8).jpg"

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
  { id: 1, title: "Profile", to: "/pages/profile", icon: AccountCircle },
  { id: 2, title: "Settings", to: "/pages/settings", icon: Settings },
  { id: 3, title: "Inbox", to: "/apps/inbox", icon: Mail },
  { id: 4, title: " Need help?", to: "/pages/faq", icon: Help },
  { id: 5, title: " Logout", to: "/logout", icon: Logout },
];

export const users=[
  {id:1, name:"Crystal Guerrero", job:"Designer, Blogger", avatar:user1, color:"success" },
  {id:2, name:"James Garcia", job:"Writter, Mag Editor", avatar:user2, color:"error" },
  {id:3, name:"Jean Schneider", job:"Designer, Blogger", avatar:user3, color:"success" },
  {id:4, name:"Joe Holmes", job:"Front-end Developer", avatar:user4, color:"error" },
  {id:6, name:"Richard Carr", job:"Product Designer", avatar:user5, color:"error" },
  {id:7, name:"Sara King", job:"Teacher", avatar:user6, color:"success" },
  {id:8, name:"Melissa Garza", job:"Producer", avatar:user7, color:"success" },
  {id:9, name:"Jeremy Scott", job:"Writer", avatar:user8, color:"error" },
  {id:5, name:"OlsJesse Russell", job:"Back-end Developer", avatar:user9, color:"success" },
]