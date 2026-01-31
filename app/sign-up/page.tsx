import SignUpForm from "@/components/ui/button/sign-up/SignUpForm";
import siteConfig from "@/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.auth.signUp.title,
  description: siteConfig.auth.signUp.description,
};

const SignUp = () => {
  return <SignUpForm />;
};

export default SignUp;
