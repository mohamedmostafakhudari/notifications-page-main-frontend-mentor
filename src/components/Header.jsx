import React from "react";

export default function Header({ unreadNotifications, setNotifications }) {
  return (
    <header className="py-8 xl:py-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-baseline gap-3">
          <h1 className="text-blue-900 font-extrabold text-xl xl:text-3xl">
            Notifications
          </h1>
          <div className="bg-blue rounded">
            <span className="text-white font-extrabold p-3 xl:text-xl">
              {unreadNotifications}
            </span>
          </div>
        </div>
        <p
          onClick={() =>
            setNotifications((prev) =>
              prev.map((notification) => {
                return {
                  ...notification,
                  read: true,
                };
              })
            )
          }
          className="text-blue-700 cursor-pointer duration-100 ease-in-out hover:text-blue-900 xl:text-lg"
        >
          Mark all as read
        </p>
      </div>
    </header>
  );
}
