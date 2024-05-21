import { loginImages } from "../../constants/loginImage";
import Container from "./Container";
import LoginForm from "./LoginForm";

import Logo from "../../assets/logo/logo.png";

const LoginScreen = () => {
  return (
    <Container>
      <section className="w-full h-[90vh] bg-whiteTheme-subPrimaryColor rounded-md relative">
        <div className="">
          <img
            src={loginImages.loginIllustration}
            alt=""
            className="w-[500px] absolute top-0 left-0 opacity-50"
          />
          <img
            src={loginImages.loginBottomIllustration}
            alt=""
            className="w-[500px] absolute bottom-0 right-0 opacity-50"
          />
        </div>
        <main className="py-6 px-28  flex flex-col gap-16">
          <div className="flex flex-col gap-10 z-[1000]">
            <span>
              <header>
                <img src={Logo} alt="logo" className="w-32 h-24" />
              </header>
            </span>
          </div>
          <div className="flex items-start justify-between">
            <span className="flex flex-col gap-1 z-[1000]">
              <h1 className="font-bold text-4xl text-whiteTheme-secondColor">
                Login into
              </h1>
              <p className="font-bold text-4xl text-whiteTheme-secondColor">
                Your Account
              </p>
              <p className="text-whiteTheme-secondColor">
                Contribution to economy and society!
              </p>
            </span>
            <LoginForm />
          </div>
        </main>
        <footer className="flex items-center justify-center pb-5">
          <p className="text-center text-sm text-whiteTheme-secondColor pb-5 absolute bottom-0">
            Copyright © 2024 Boulot man. All rights reserved.
          </p>
        </footer>
      </section>
    </Container>
  );
};

export default LoginScreen;
