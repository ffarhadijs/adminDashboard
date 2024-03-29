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
import user1 from "../assets/avatar.jpg";
import user2 from "../assets/user (1).jpg";
import user3 from "../assets/user (2).jpg";
import user4 from "../assets/user (3).jpg";
import user5 from "../assets/user (4).jpg";
import user6 from "../assets/user (5).jpg";
import user7 from "../assets/user (6).jpg";
import user8 from "../assets/user (7).jpg";
import user9 from "../assets/user (8).jpg";

export const menuItems = [
  { title: "dashboard", slug: "/", id: "0", icon: Dashboard },
  {
    title: "Apps",
    id: "1",
    icon: Apps,
    subItems: [
      { title: "Inbox", id: "11", slug: "/apps/emailbox" },
      { title: "Todo", id: "13", slug: "/apps/todo" },
      { title: "Note", id: "14", slug: "/apps/note" },
    ],
  },
  {
    title: "Layouts",
    id: "2",
    icon: GridView,
    subItems: [
      { title: "Header", id: "21", slug: "/layouts/header" },
      { title: "Footer", id: "23", slug: "/layouts/footer" },
    ],
  },
  {
    title: "Pages",
    id: "4",
    icon: Description,
    subItems: [
      { title: "Profile", id: "41", slug: "/pages/profile" },
      { title: "Settings", id: "42", slug: "/pages/settings" },
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
];

export const avatarMenuItems = [
  { id: 1, title: "Profile", to: "/pages/profile", icon: AccountCircle },
  { id: 2, title: "Settings", to: "/pages/settings", icon: Settings },
  { id: 3, title: "Inbox", to: "/apps/inbox", icon: Mail },
  { id: 4, title: " Need help?", to: "/pages/faq", icon: Help },
  { id: 5, title: " Logout", to: "/logout", icon: Logout },
];

export const users = [
  {
    id: 1,
    name: "Crystal Guerrero",
    job: "Designer, Blogger",
    avatar: user1,
    color: "success",
  },
  {
    id: 2,
    name: "James Garcia",
    job: "Writter, Mag Editor",
    avatar: user2,
    color: "error",
  },
  {
    id: 3,
    name: "Jean Schneider",
    job: "Designer, Blogger",
    avatar: user3,
    color: "success",
  },
  {
    id: 4,
    name: "Joe Holmes",
    job: "Front-end Developer",
    avatar: user4,
    color: "error",
  },
  {
    id: 6,
    name: "Richard Carr",
    job: "Product Designer",
    avatar: user5,
    color: "error",
  },
  { id: 7, name: "Sara King", job: "Teacher", avatar: user6, color: "success" },
  {
    id: 8,
    name: "Melissa Garza",
    job: "Producer",
    avatar: user7,
    color: "success",
  },
  { id: 9, name: "Jeremy Scott", job: "Writer", avatar: user8, color: "error" },
  {
    id: 5,
    name: "OlsJesse Russell",
    job: "Back-end Developer",
    avatar: user9,
    color: "success",
  },
];

export const emailsData = {
  fiveYear: [
    { id: 3, date: 2019, emails: 150 },
    { id: 4, date: 2020, emails: 250 },
    { id: 5, date: 2021, emails: 205 },
    { id: 6, date: 2022, emails: 120 },
    { id: 7, date: 2023, emails: 190 },
  ],
  oneYear: [
    { id: 1, date: "January", emails: 100 },
    { id: 2, date: "February", emails: 82 },
    { id: 3, date: "March", emails: 55 },
    { id: 4, date: "April", emails: 85 },
    { id: 5, date: "May", emails: 40 },
    { id: 6, date: "June", emails: 95 },
    { id: 7, date: "July", emails: 99 },
    { id: 8, date: "August", emails: 75 },
    { id: 9, date: "September", emails: 75 },
    { id: 10, date: "October", emails: 85 },
    { id: 11, date: "November", emails: 83 },
    { id: 12, date: "December", emails: 99 },
  ],
  oneMonth: [
    { id: 1, date: "1st week", emails: 28 },
    { id: 2, date: "2nd week", emails: 52 },
    { id: 3, date: "3rd week", emails: 46 },
    { id: 4, date: "4th week", emails: 32 },
  ],
};

export const projectsData = {
  fiveYear: [
    { id: 3, date: 2019, projects: 37 },
    { id: 4, date: 2020, projects: 52 },
    { id: 5, date: 2021, projects: 15 },
    { id: 6, date: 2022, projects: 45 },
    { id: 7, date: 2023, projects: 40 },
  ],
  oneYear: [
    { id: 1, date: "January", projects: 37 },
    { id: 2, date: "February", projects: 52 },
    { id: 3, date: "March", projects: 15 },
    { id: 4, date: "April", projects: 45 },
    { id: 5, date: "May", projects: 40 },
    { id: 6, date: "June", projects: 25 },
    { id: 7, date: "July", projects: 19 },
    { id: 8, date: "August", projects: 35 },
    { id: 9, date: "September", projects: 55 },
    { id: 10, date: "October", projects: 50 },
    { id: 11, date: "November", projects: 13 },
    { id: 12, date: "December", projects: 29 },
  ],
  oneMonth: [
    { id: 1, date: "1st week", projects: 8 },
    { id: 2, date: "2nd week", projects: 20 },
    { id: 3, date: "3rd week", projects: 16 },
    { id: 4, date: "4th week", projects: 12 },
  ],
};

export const usersData = {
  fiveYear: [
    { id: 3, date: 2019, users: 500 },
    { id: 4, date: 2020, users: 450 },
    { id: 5, date: 2021, users: 395 },
    { id: 6, date: 2022, users: 495 },
    { id: 7, date: 2023, users: 585 },
  ],
  oneYear: [
    { id: 1, date: "January", users: 80 },
    { id: 2, date: "February", users: 20 },
    { id: 3, date: "March", users: 38 },
    { id: 4, date: "April", users: 55 },
    { id: 5, date: "May", users: 40 },
    { id: 6, date: "June", users: 52 },
    { id: 7, date: "July", users: 32 },
    { id: 8, date: "August", users: 75 },
    { id: 9, date: "September", users: 75 },
    { id: 10, date: "October", users: 29 },
    { id: 11, date: "November", users: 85 },
    { id: 12, date: "December", users: 55 },
  ],
  oneMonth: [
    { id: 1, date: "1st week", users: 45 },
    { id: 2, date: "2nd week", users: 52 },
    { id: 3, date: "3rd week", users: 57 },
    { id: 4, date: "4th week", users: 32 },
  ],
};

export const inboxSideBar = [
  { id: 1, title: "Inbox", slug: "apps/emailbox/inbox" },
  { id: 2, title: "Sent", slug: "apps/emailbox/sent" },
  { id: 3, title: "Trash", slug: "apps/emailbox/trash" },
];

export const inboxLabels = [
  { id: 1, title: "Angular", slug: "apps/emailbox/angular" },
  { id: 2, title: "React", slug: "apps/emailbox/react" },
  { id: 3, title: "Vue", slug: "apps/emailbox/vue" },
];
