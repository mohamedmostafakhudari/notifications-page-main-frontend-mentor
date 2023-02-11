import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Header from "./components/Header";
import Notifications from "./components/Notifications";
import Footer from "./components/Footer";
const res = dayjs.extend(relativeTime);
const initialNotifications = [
  {
    user: "Mark Webber",
    userProfileImageSrc: "assets/images/avatar-mark-webber.webp",
    type: "react",
    postTitle: "My first tournament today",
    date: dayjs("2023-2-11 20:00:00").fromNow(),
    read: false,
  },
  {
    user: "Angela Gray",
    userProfileImageSrc: "assets/images/avatar-angela-gray.webp",
    type: "follow",
    date: dayjs("2023-2-11 15:00:00").fromNow(),
    read: false,
  },
  {
    user: "Jacob Thompson",
    userProfileImageSrc: "assets/images/avatar-jacob-thompson.webp",
    type: "join-group",
    groupName: "Chess Club",
    date: dayjs("2023-2-11 7:00:00").fromNow(),
    read: false,
  },
  {
    user: "Rizky Hasanuddin",
    userProfileImageSrc: "assets/images/avatar-rizky-hasanuddin.webp",
    type: "pm",
    messageText:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
    date: dayjs("2023-2-10 15:00:00").fromNow(),
    read: true,
  },
  {
    user: "Kimberly Smith",
    userProfileImageSrc: "assets/images/avatar-kimberly-smith.webp",
    type: "comment",
    object: "picture",
    objectImageSrc: "/assets/images/image-chess.webp",
    objectImageAlt: "chess",
    date: dayjs("2023-2-9 15:00:00").fromNow(),
    read: true,
  },
  {
    user: "Nathan Peterson",
    userProfileImageSrc: "assets/images/avatar-nathan-peterson.webp",
    type: "react",
    postTitle: "5 end-game strategies to increase your win rate",
    date: dayjs("2023-2-6 15:00:00").fromNow(),
    read: true,
  },
  {
    user: "Anna Kim",
    userProfileImageSrc: "assets/images/avatar-anna-kim.webp",
    type: "left-group",
    groupName: "Chess Club",
    date: dayjs("2023-2-4 15:00:00").fromNow(),
    read: true,
  },
];
function App() {
  const [notifications, setNotifications] = useState(initialNotifications);
  return (
    <>
      <div id="wrapper" className="md:py-12">
        <div className="container mx-auto px-4 max-w-[650px] bg-white min-h-screen md:min-h-0 xl:px-8">
          <Header
            unreadNotifications={
              notifications.filter(
                (notification) => notification.read === false
              ).length
            }
            setNotifications={setNotifications}
          />
          <Notifications notifications={notifications} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
