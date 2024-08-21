import { useState } from "react";
import HomeTab from "./components/HomeTab";
import UserTab from "./components/UserTab";
import StoreTab from "./components/StoreTab";
import houseGray from "./assets/house-gray.svg";
import houseBlue from "./assets/house-blue.svg";
import storeGray from "./assets/store-gray.svg";
import storeBlue from "./assets/store-blue.svg";
import userGray from "./assets/user-gray.svg";
import userBlue from "./assets/user-blue.svg";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("house");

  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    if (selectedTab === "house") {
      return <HomeTab />;
    } else if (selectedTab === "user") {
      return <UserTab />;
    } else if (selectedTab === "store") {
      return <StoreTab />;
    }
    return null;
  };

  return (
    <div className="flex flex-col h-dvh overflow-x-hidden">
      <div className="flex-grow flex flex-col items-center justify-center">
        {renderTabContent()}
      </div>

      <div className="flex justify-center gap-[60px] p-10 ">
        <div
          className={`flex flex-col items-center cursor-pointer ${
            selectedTab === "house" ? "text-gray-500" : "text-blue-500"
          }`}
          onClick={() => handleClick("house")}
        >
          <img
            className="w-[40px]"
            src={selectedTab === "house" ? houseGray : houseBlue}
            alt="House"
          />
          <span className="mt-2 font-['Open_Sans'] font-[600] text-[16px]">
            Home
          </span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            selectedTab === "user" ? "text-gray-500" : "text-blue-500"
          }`}
          onClick={() => handleClick("user")}
        >
          <img
            className="w-[43px]"
            src={selectedTab === "user" ? userGray : userBlue}
            alt="User"
          />
          <span className="mt-2 font-['Open_Sans'] font-[600] text-[16px]">
            Friends
          </span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            selectedTab === "store" ? "text-gray-500" : "text-blue-500"
          }`}
          onClick={() => handleClick("store")}
        >
          <img
            className="w-[40px]"
            src={selectedTab === "store" ? storeGray : storeBlue}
            alt="Store"
          />
          <span className="mt-2 font-['Open_Sans'] font-[600] text-[16px]">
            Store
          </span>
        </div>
      </div>
    </div>
  );
}
