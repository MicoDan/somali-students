import { GlobeSvg } from '../components/Svgs'
import _bgsnow from '/bg-snow.svg'
import { LoginScreen, useLoginScreen } from '../components/LoginScreen';
import { Link } from 'react-router-dom';
import favicon from '/favicon.ico'

const HomeScreen = () => {

    const { loginScreenState, setLoginScreenState } = useLoginScreen();

    return (
        <>
        <header className='fixed top-0 left-0 right-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#235390] px-10 font-bold text-white'>
          <Link className="text-4xl" to='/'>
          <img className="inline-block w-16 h-16" src={favicon} alt='logo'/>Social
          </Link>
        </header>
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white md:flex-row md:gap-36" style={{ backgroundImage: `url(${_bgsnow})` }}>
            <GlobeSvg className='h-fit w-7/12 md:w-[360px]' />
            <div>
                <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
                    Learn English the fun way and at your own pace!
                </p>
                <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
                    <button
                        className="w-full rounded-2xl border-b-4 border-green-700 bg-green-600 px-10 py-3 text-center font-bold uppercase transition hover:border-green-600 hover:bg-green-500 md:min-w-[320px]"
                        onClick={() => setLoginScreenState("SIGNUP")}
                    >
                        Get started
                    </button>
                    <button
                        className="w-full rounded-2xl border-2 border-b-4 border-[#042c60] bg-[#235390] px-8 py-3 font-bold uppercase transition hover:bg-[#204b82] md:min-w-[320px]"
                        onClick={() => setLoginScreenState("LOGIN")}
                    >
                        I already have an account
                    </button>
                </div>
            </div>
            <LoginScreen
                loginScreenState={loginScreenState}
                setLoginScreenState={setLoginScreenState}
            />
        </div>
        </>

    )
}
export default HomeScreen