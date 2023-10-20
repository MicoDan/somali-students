import { useContext, type ComponentProps } from "react";

import { BottomBar } from "../components/BottomBar";
import { LeftBar } from "../components/LeftBar";
import { RightBar } from "../components/RightBar";
import { TopBar } from "../components/TopBar";
import { Store } from "../redux/Share_store";
import axios from "axios";
import { toast } from 'react-toastify'

const StreakFreezeSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(26 9)">
          <path
            d="M40.754 2.02l29.783 42.822A8.162 8.162 0 0 1 72 49.502v16.92a8.162 8.162 0 0 1-1.877 5.208L55.168 89.678a5.83 5.83 0 0 1-4.49 2.11H27.724a5.83 5.83 0 0 1-3.41-1.1L1.936 74.547A4.664 4.664 0 0 1 0 70.765V17.339a4.664 4.664 0 0 1 6.162-4.417l14.45 4.9L33.265 1.793a4.664 4.664 0 0 1 7.49.227z"
            fill="#71D2FF"
          />
          <path
            d="M17.863 93.238c-.223.44-.547.804-.938 1.055-1.207.775-2.744.302-3.433-1.055L4.645 75.805H26.71l-8.847 17.433z"
            fill="#71D2FF"
          />
          <path
            d="M33.639 103.66a2.821 2.821 0 0 1-5.45 0l-5.89-21.988h17.229l-5.89 21.988zM65.346 93.653a2.817 2.817 0 0 1-3.898-.858l-6.432-10.081L71.71 67.997 66.578 91.89a2.83 2.83 0 0 1-1.232 1.764z"
            fill="#71D2FF"
          />
          <g>
            <g>
              <g>
                <path
                  d="M10.679 51.434l-.209-20.13c-.03-3.017 1.582-5.231 4.372-4.736.556.098 1.733.464 2.26.752l5.814 3.168 7.261-9.313a6.647 6.647 0 0 1 10.484 0L53.825 38.06c.13.167.242.343.336.525 3.875 4.31 6.226 9.967 6.226 16.162 0 13.51-11.178 24.462-24.968 24.462-13.789 0-24.967-10.952-24.967-24.462 0-1.123.077-2.23.227-3.313z"
                  fill="#1CB0F6"
                />
                <path
                  d="M28.051 56.63c.044-.139.11-.27.197-.388l4.987-6.76a2.618 2.618 0 0 1 4.213 0l4.987 6.76c.02.028.04.056.057.084 1.732 1.705 2.798 4.034 2.798 6.602 0 5.227-4.42 9.464-9.87 9.464-5.452 0-9.872-4.237-9.872-9.464 0-2.418.947-4.625 2.503-6.298z"
                  fill="#1CDAF6"
                  opacity=".75"
                />
              </g>
            </g>
          </g>
          <path
            d="M8.124 17.834l15.021 5.424L34.917 5.674a2.332 2.332 0 0 1 3.888.018l14.798 22.56a2.332 2.332 0 0 1-.466 3.078L8.815 67.87A2.332 2.332 0 0 1 5 66.072V20.027a2.332 2.332 0 0 1 3.124-2.193z"
            fill="#B4E7FF"
            opacity=".593"
          />
          <rect
            fill="#FFF"
            transform="rotate(45 13.807 37.146)"
            x="8.971"
            y="32.295"
            width="9.672"
            height="9.701"
            rx="1.166"
          />
          <path
            d="M67.707 65.498L51.58 84.97a2.332 2.332 0 0 1-1.796.845h-13.45a2.332 2.332 0 0 1-1.69-3.938L64.22 50.742a2.332 2.332 0 0 1 4.023 1.606v11.663c0 .543-.19 1.069-.537 1.487z"
            fill="#B4E7FF"
            opacity=".593"
          />
          <rect
            fill="#FFF"
            transform="rotate(45 56.516 61.607)"
            x="53.049"
            y="58.129"
            width="6.934"
            height="6.955"
            rx="1.166"
          />
        </g>
      </g>
    </svg>
  );
};

const EmptyGemSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#E5E5E5" stroke="#FFF" strokeWidth="2">
          <path d="M4.12 6.36l6.475-3.908a4.387 4.387 0 0 1 4.534 0l6.475 3.907a4.387 4.387 0 0 1 2.12 3.757v9.666a4.387 4.387 0 0 1-2.12 3.756l-6.475 3.907a4.387 4.387 0 0 1-4.534 0L4.12 23.538A4.387 4.387 0 0 1 2 19.782v-9.666c0-1.538.804-2.962 2.12-3.757z" />
        </g>
      </g>
    </svg>
  );
};

const DoubleOrNothingSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" {...props}>
      <title>double_or_nothing</title>
      <defs>
        <rect id="a" x="0" y="0" width="70" height="64" rx="4" />
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(21 8)">
          <rect fill="#FF9600" x="0" y="25.784" width="82" height="78" rx="7" />
          <path
            d="M64.916 13.095L75.5 45.271H20.75l37.691-33.9a4 4 0 0 1 6.475 1.724z"
            fill="#FF9600"
          />
          <path
            d="M23.836 1.984L9 27.382h38c-5.187-5.28-8.645-9.402-10.375-12.364-1.264-2.163-3.139-6.334-5.625-12.51a4 4 0 0 0-7.164-.524zM66.125 17.221c1.688 5 5 8.563 7.375 8.563 1.583 0 1.375 1.583-.625 4.75l-11.063-4.75c1.75-9.042 3.188-11.896 4.313-8.563z"
            fill="#FF9600"
          />
          <path
            d="M37.25 16.034c3.5 6.125 10 5.625 15.375.75 3.583-3.25 4.875-1.084 3.875 6.5L43.625 33.409l-12.75-11.625c1.916-7.917 4.04-9.834 6.375-5.75z"
            fill="#FF9600"
          />
          <path
            d="M32.625 23.659c3 6.625 11.625 8.25 16.875 3.125 3.5-3.417 4.583-2.375 3.25 3.125L39 42.034 27.375 29.909c1.5-8.583 3.25-10.667 5.25-6.25z"
            fill="#FFC800"
          />
          <path
            d="M23.836 18.768L9 44.166h38c-5.187-5.28-8.645-9.402-10.375-12.364-1.264-2.163-3.139-6.334-5.625-12.51a4 4 0 0 0-7.164-.524z"
            fill="#FFC800"
          />
          <path
            d="M62.916 22.095L73.5 54.271H18.75l37.691-33.9a4 4 0 0 1 6.475 1.724z"
            fill="#FFC800"
          />
          <path
            d="M15.375 16.471c-3 5.188-6.563 8.79-9.078 9.305-1.677.344-1.484 1.909.578 4.695 9.542-4.291 13.646-6.437 12.313-6.437-2 0-.813-12.75-3.813-7.563z"
            fill="#FF9600"
          />
          <g transform="translate(6 33.784)">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <use fill="#FFF" xlinkHref="#a" />
            <path fill="#F34848" mask="url(#b)" d="M-6-3h81v21H-6z" />
          </g>
          <circle fill="#C22E2E" cx="24" cy="41.784" r="5" />
          <circle fill="#C22E2E" cx="59" cy="41.784" r="5" />
          <g fill="#F34848">
            <path d="M34.5 60.784h13a3.5 3.5 0 0 1 0 7h-13a3.5 3.5 0 0 1 0-7z" />
            <path d="M34.532 82.636l9.644-19.773a3.5 3.5 0 0 1 6.292 3.069l-9.644 19.773a3.5 3.5 0 0 1-6.292-3.069z" />
          </g>
          <rect fill="#FFF" x="20" y="26.784" width="8" height="18" rx="4" />
          <rect fill="#FFF" x="55" y="26.784" width="8" height="18" rx="4" />
          <path
            d="M46.313 97.815c7.75 0 14.149-15.031 18.525-15.031 4.376 0 2.224 15.031 6.475 15.031 2.833 0 2.925.99.273 2.969h-22.75c-6.849-1.98-7.69-2.969-2.523-2.969z"
            fill="#FF9600"
          />
          <path
            d="M39.187 97.8c-7.75 0-11.311-8.766-15.687-8.766-4.376 0-5.076 8.766-9.327 8.766-2.834 0-2.896.994-.186 2.984h22.749c6.8-1.99 7.618-2.984 2.451-2.984z"
            fill="#FF9600"
          />
        </g>
      </g>
    </svg>
  );
};



const Shop = () => {
  const { state, dispatch } = useContext(Store)
  const lingots = state.lingotSlice.lingots
  const userData: Record<string, any> | null = JSON.parse(localStorage.getItem('userData') || 'null');
  const spendLingots = async(amount: number) => {
    try{
      const { data } = await axios.post ('http://localhost:5000/users/spend-lingots', { userId: userData?._id, amount: amount})
      const lingotsRemaining = data.lingotsRemaining
      const message = data.message
      toast.success(message)
      dispatch({type: 'SPEND_LINGOTS', payload: lingotsRemaining})
      return lingotsRemaining
    } catch(error){ 
      toast.error('Failed to purchase streak freeze')
      console.log(error)
    }
  }

  const handlePurchaseStreakFreeze = () => {
    const price = 10; // The price of a Streak Freeze
    spendLingots(price);
  };

  return (
    <div>
      <TopBar />
      <LeftBar selectedTab="Shop" />
      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="px-4 pb-20">
          <div className="py-7">
            <h2 className="mb-5 text-2xl font-bold">Power-ups</h2>
            <div className="flex border-t-2 border-gray-300 py-5">
              <StreakFreezeSvg className="shrink-0" />
              <section className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Streak Freeze</h3>
                <p className="text-sm text-gray-500">
                  Streak Freeze allows your streak to remain in place for one full day
                  of inactivity.
                </p>
                <div className="w-fit rounded-full bg-gray-200 px-3 py-1 text-sm font-bold uppercase text-gray-400">
                  {Math.floor(lingots / 10)}
                </div>
                <button
                  className={`flex w-fit items-center gap-1 rounded-2xl border-2 border-gray-300 bg-white px-4 py-2 text-sm font-bold uppercase ${lingots >= 10 ? 'text-red-500' : 'text-gray-300' // Change button color based on lingots
                    }`}
                  onClick={handlePurchaseStreakFreeze}
                  disabled={lingots < 10}
                >
                  Get one for: <EmptyGemSvg /> 10
                </button>
              </section>
            </div>
            <div className="flex border-t-2 border-gray-300 py-5">
              <DoubleOrNothingSvg className="shrink-0" />
              <section className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Double or Nothing</h3>
                <p className="text-sm text-gray-500">
                  Attempt to double your five lingot wager by maintaining a
                  seven day streak.
                </p>
                <button
                  className="flex w-fit items-center gap-1 rounded-2xl border-2 border-gray-300 bg-white px-4 py-2 text-sm font-bold uppercase text-gray-300"
                  disabled
                >
                  Get for: <EmptyGemSvg /> 5
                </button>
              </section>
            </div>
          </div>
        </div>
        <RightBar />
      </div>
      <BottomBar selectedTab="Shop" />
    </div>
  );
};

export default Shop;
