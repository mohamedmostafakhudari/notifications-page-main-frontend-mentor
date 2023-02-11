import React from "react";
export default function Notifications({ notifications }) {
  return (
    <ul className="space-y-5">
      {notifications.map((notification, index) => {
        return <Notification key={index} notification={notification} />;
      })}
    </ul>
  );
}

function Notification({ notification }) {
  switch (notification.type) {
    case "react":
      return (
        <li className="flex items-start bg-blue-100 py-3 rounded-lg xl:py-6 xl:text-lg">
          <div className="max-w-[38px] mx-3 xl:max-w-[48px]">
            <img
              src={notification.userProfileImageSrc}
              alt={notification.user}
              className="object-cover object-center"
            />
          </div>
          <div className="text-blue-700 flex-1">
            <span className="text-blue-900 font-extrabold mr-1 duration-200 ease-in-out cursor-pointer hover:text-blue">
              {notification.user}
            </span>{" "}
            reacted to your recent post{" "}
            <span className="text-blue-700 font-extrabold duration-100 ease-in-out cursor-pointer hover:text-blue">
              {notification.postTitle}!{" "}
            </span>
            {!notification.read && (
              <div className="w-[9px] h-[9px] rounded-full bg-red inline-block ml-1"></div>
            )}
            <div className="text-blue-500">{notification.date}</div>
          </div>
        </li>
      );
    case "follow":
      return (
        <li className="flex items-start bg-blue-100 py-3 rounded-lg xl:py-6 xl:text-lg">
          <div className="max-w-[38px] mx-3 xl:max-w-[48px]">
            <img
              src={notification.userProfileImageSrc}
              alt={notification.user}
              className="object-cover object-center"
            />
          </div>
          <div className="text-blue-700 flex-1">
            <span className="text-blue-900 font-extrabold mr-1 duration-200 ease-in-out cursor-pointer hover:text-blue">
              {notification.user}
            </span>{" "}
            followed you{" "}
            {!notification.read && (
              <div className="w-[9px] h-[9px] rounded-full bg-red inline-block ml-1"></div>
            )}
            <div className="text-blue-500">{notification.date}</div>
          </div>
        </li>
      );
    case "join-group":
      return (
        <li className="flex items-start bg-blue-100 py-3 rounded-lg xl:py-6 xl:text-lg">
          <div className="max-w-[38px] mx-3 xl:max-w-[48px]">
            <img
              src={notification.userProfileImageSrc}
              alt={notification.user}
              className="object-cover object-center"
            />
          </div>
          <div className="text-blue-700 flex-1">
            <span className="text-blue-900 font-extrabold mr-1 duration-200 ease-in-out cursor-pointer hover:text-blue">
              {notification.user}
            </span>{" "}
            has joined your group{" "}
            <span className="text-blue font-extrabold duration-100 ease-in-out cursor-pointer hover:text-blue">
              {notification.groupName}{" "}
            </span>
            {!notification.read && (
              <div className="w-[9px] h-[9px] rounded-full bg-red inline-block ml-1"></div>
            )}
            <div className="text-blue-500">{notification.date}</div>
          </div>
        </li>
      );

    case "left-group":
      return (
        <li className="flex items-start bg-blue-100 py-3 rounded-lg xl:py-6 xl:text-lg">
          <div className="max-w-[38px] mx-3 xl:max-w-[48px]">
            <img
              src={notification.userProfileImageSrc}
              alt={notification.user}
              className="object-cover object-center"
            />
          </div>
          <div className="text-blue-700 flex-1">
            <span className="text-blue-900 font-extrabold mr-1 duration-200 ease-in-out cursor-pointer hover:text-blue">
              {notification.user}
            </span>{" "}
            left the group{" "}
            <span className="text-blue font-extrabold duration-100 ease-in-out cursor-pointer hover:text-blue">
              {notification.groupName}{" "}
            </span>
            {!notification.read && (
              <div className="w-[9px] h-[9px] rounded-full bg-red inline-block ml-1"></div>
            )}
            <div className="text-blue-500">{notification.date}</div>
          </div>
        </li>
      );

    case "pm":
      return (
        <li className="flex items-start bg-blue-100 py-3 rounded-lg xl:py-6 xl:text-lg">
          <div className="max-w-[38px] mx-3 xl:max-w-[48px]">
            <img
              src={notification.userProfileImageSrc}
              alt={notification.user}
              className="object-cover object-center"
            />
          </div>
          <div className="text-blue-700 flex-1">
            <span className="text-blue-900 font-extrabold mr-1 duration-200 ease-in-out cursor-pointer hover:text-blue">
              {notification.user}
            </span>{" "}
            sent you a private message{" "}
            {!notification.read && (
              <div className="w-[9px] h-[9px] rounded-full bg-red inline-block ml-1"></div>
            )}
            <div className="text-blue-500">{notification.date}</div>
            <div className="border border-blue-300 shadow mt-3 p-4 leading-5 rounded duration-200 ease-in-out cursor-pointer hover:bg-blue-200">
              {notification.messageText}.
            </div>
          </div>
        </li>
      );
    case "comment":
      return (
        <li className="flex items-start bg-blue-100 py-3 rounded-lg xl:py-6 xl:text-lg">
          <div className="max-w-[38px] mx-3 xl:max-w-[48px]">
            <img
              src={notification.userProfileImageSrc}
              alt={notification.user}
              className="object-cover object-center"
            />
          </div>
          <div className="text-blue-700 flex-1">
            <span className="text-blue-900 font-extrabold mr-1 duration-200 ease-in-out cursor-pointer hover:text-blue">
              {notification.user}
            </span>{" "}
            commented on your <span>{notification.object}</span>
            {!notification.read && (
              <div className="w-[9px] h-[9px] rounded-full bg-red inline-block ml-1"></div>
            )}
            <div className="text-blue-500">{notification.date}</div>
          </div>
          <div className="max-w-[32px] mx-[4px] xl:max-w-[42px]">
            <img
              src={notification.objectImageSrc}
              alt={notification.objectImageAlt}
            />
          </div>
        </li>
      );
    default:
      break;
  }
}
