import React, { useState } from "react";

function App() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message:
        "Reacted to your recent post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isUnread: false,
      msgContent: "",
      time: "1 min",
    },
    {
      id: 2,
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isUnread: false,
      msgContent: "",
      time: "6 min",
    },
    {
      id: 3,
      message:
        "Reacted to your recent post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isUnread: false,
      msgContent: "",
      time: "8 min",
    },
    {
      id: 4,
      message:
        "Reacted to your recent post, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isUnread: true,
      msgContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      time: "20 min",
    },
    {
      id: 5,
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      isUnread: false,
      msgContent: "",
      time: "45 min",
    },
    {
      id: 6,
      message:
        "Reacted to your recent post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isUnread: true,
      msgContent: "",
      time: "1 hr",
    },
    {
      id: 7,
      message: "Reacted to your recent post.",
      isUnread: false,
      msgContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      time: "3 hr",
    },
    {
      id: 8,
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isUnread: true,
      msgContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      time: "8 hr",
    },
    {
      id: 9,
      message:
        "Reacted to your recent post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isUnread: false,
      msgContent: "",
      time: "1 day ago",
    },
    {
      id: 10,
      message:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isUnread: false,
      msgContent: "",
      time: "1 week ago",
    },
  ]);

  function handleNotificationClick(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: true } : n))
    );
  }

  const markAllRead = (e) => {
    e.preventDefault();
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: true })));
  };

  return (
    <>
      <div className="px-12 py-12">
        <div className="bg-slate-200 p-4 rounded-lg max-h-auto md:h-[42rem] cursor-default">
          <div className="m-2 mb-4">
            <div className="flex flex-wrap md:flex-row justify-between items-center mb-3">
              <div className="flex flex-wrap md:flex-row items-center mr-2">
                <p className="font-extrabold text-lg md:text-2xl text-[#1c202b]">
                  Notifications
                </p>
                <p className="text-white font-semibold px-3 py-1 ml-1 rounded bg-[#0a317b]">
                  {notifications.filter((notify) => !notify.isUnread).length}
                </p>
              </div>
              <div className="flex md:flex-row gap-1">
                <button
                  href="#"
                  className="text-sm md:text-lg font-semibold text-[#038a1e] hover:text-[#1c202b] cursor-pointer"
                  onClick={markAllRead}
                >
                  Mark all as read
                </button>
              </div>
            </div>

            <div className="h-auto md:h-[35rem] bg-slate-200 p-4 overflow_scroll">
              {notifications.map((notifi) => (
                <div
                  className="mt-6 flex h-auto w-full flex-wrap justify-between rounded-lg bg-slate-300 md:h-auto"
                  key={notifi.id}
                  onClick={() => handleNotificationClick(notifi.id)}
                >
                  <div className="inline-flex items-center justify-center gap-4 px-5 py-3">
                    <img
                      src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
                      alt="user image"
                      className="h-12 w-12 rounded-3xl mix-blend-darken shrink-0"
                    />
                    <div className="relative">
                      <p className="text-md">
                        {notifi.message}
                        {!notifi.isUnread && (
                          <span className="h-2 w-2 shrink-0 rounded-full bg-red-600 absolute mx-2 my-2"></span>
                        )}
                      </p>
                      <p className="pt-1 text-sm">{notifi.time}</p>
                    </div>
                    <span className=""></span>
                  </div>
                  {notifi.msgContent && (
                    <div className="mt-1 border border-slate-500 h-auto rounded-xl ml-20 mx-5 my-4 px-5 py-3">
                      <p className="text-md">{notifi.msgContent}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
