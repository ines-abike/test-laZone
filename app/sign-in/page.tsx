import { Metadata } from "next";
import siteConfig from "@/site-config";
import SignInForm from "@/components/SignInForm";

export const metadata: Metadata = {
  title: siteConfig.auth.signIn.title,
  description: siteConfig.auth.signIn.description,
};

export default function SignInPage() {
  return <SignInForm />;
}
