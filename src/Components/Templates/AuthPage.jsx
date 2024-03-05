import "../../App.css";
import Lottie from "react-lottie";
import animationData from "../../Assets/lottieAnimation/LoginAmination.json";
import NavigationBar from "../Molecules/NavigationBar";
import LoginSection from "../Molecules/LoginSection";

function AuthPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData // Replace with your animation data
  };
  return (
    <div>
      <NavigationBar />
      <div className="h-[93vh] bg-tertiaryColor/[.10] w-screen flex">
        <div className="hidden sm:flex h-full w-[50vw] bg-tertiaryColor/[.05] items-center">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
        <div className="w-full sm:w-[50vw] h-full bg-tertiaryColor/[.05]">
          <LoginSection />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
