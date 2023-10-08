import { useContext, useState } from "react";
import axios from 'axios';
import { BottomBar } from "../../components/BottomBar";
import { LeftBar } from "../../components/LeftBar";
import { TopBar } from "../../components/TopBar";
import { SettingsRightNav } from "../../components/SettingsRightNav";
import { toast } from "react-toastify";
import { Store } from "../../redux/Share_store";

const Account = () => {
  const { state } = useContext(Store)
  const id = state.userSlice._id
  const [newname, setNewname] = useState('')
  const token = state.userSlice.token

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put('http://localhost:5000/users/profile', { newname, id }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem('userData', JSON.stringify(response.data));
      setNewname(newname);
      toast.success('name updated successfully')
    } catch (error) {
      toast.error('failed to update your name')
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div>
      <TopBar />
      <LeftBar selectedTab={null} />
      <BottomBar selectedTab={null} />
      <div className="mx-auto flex flex-col gap-5 px-4 py-20 sm:py-10 md:pl-28 lg:pl-72">
        <div className="mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-4xl">
          <h1 className="text-lg font-bold text-gray-800 sm:text-2xl">
            Account
          </h1>
          <button
            className="rounded-2xl border-b-4 border-green-600 bg-green-500 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100"
            onClick={handleSaveChanges}
          >
            Save changes
          </button>
        </div>
        <div className="flex justify-center gap-12">
          <div className="flex w-full max-w-xl flex-col gap-8">
            <div
              className="flex flex-col items-stretch justify-between gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-10 sm:pl-10"
            >
              <div className="font-bold sm:w-1/6">Name</div>
              <input
                className="grow rounded-2xl border-2 border-gray-200 p-4 py-2"
                value={newname}
                onChange={(e) => setNewname(e.target.value)}
              />
            </div>
          </div>
          <SettingsRightNav selectedTab="Account" />
        </div>
      </div>
    </div>
  );
};

export default Account;
