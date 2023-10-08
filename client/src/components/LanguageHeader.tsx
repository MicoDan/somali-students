import { Link } from "react-router-dom";

export const LanguageHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#235390] px-10 font-bold text-white">
      <Link className="text-4xl" to="/">
        <img  className="w-16 h-16 inline-block" src="/nexus.png" alt="nexus"/>Social
      </Link>
    </header>
  );
};
