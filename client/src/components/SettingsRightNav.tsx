import { useContext } from "react";
import { Store } from "../redux/Share_store";
import { Link } from "react-router-dom";


type SettingsTitle = ReturnType<typeof useSettingsPages>[number]["title"];

const useSettingsPages = () => {
  const { state } = useContext(Store)
  const loggedIn = state.userSlice.loggedIn;
  return loggedIn
    ? ([
        { title: "Account", href: "/settings/account" },
        { title: "Sound", href: "/settings/sound" },
        { title: "Edit Daily Goal", href: "/settings/coach" },
      ] as const)
    : ([
        { title: "Sound", href: "/settings/sound" },
        { title: "Edit Daily Goal", href: "/settings/coach" },
      ] as const);
};

export const SettingsRightNav = ({
  selectedTab,
}: {
  selectedTab: SettingsTitle;
}) => {
  const settingsPages = useSettingsPages();
  return (
    <div className="hidden h-fit w-80 flex-col gap-1 rounded-2xl border-2 border-gray-200 p-5 lg:flex">
      {settingsPages.map(({ title, href }) => {
        return (
          <Link
            key={title}
            to={href}
            className={[
              "rounded-2xl p-4 font-bold hover:bg-gray-300",
              title === selectedTab ? "bg-gray-300" : "",
            ].join(" ")}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};
