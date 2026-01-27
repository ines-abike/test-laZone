import ResetPasswordForm from "@/components/ResetPasswordForm";
import siteConfig from "@/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.auth.resetPassword.title,
  description: siteConfig.auth.resetPassword.description,
};

const ResetPassword = () => {
  return <ResetPasswordForm />;
};

export default ResetPassword;
