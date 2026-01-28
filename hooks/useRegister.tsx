import { Result, StrapiErrorResponse, StrapiResponse } from "@/types/auth";
import { useState } from "react";

interface RegisterValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const register = async (values: RegisterValues): Promise<Result> => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: `${values.firstname} ${values.lastname}`,
            email: values.email,
            password: values.password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        const errorData = data as StrapiErrorResponse;
        let errorMessage = "Erreur lors de l'inscription";

        if (errorData.error?.message) {
          errorMessage = errorData.error.message;
        } else if (errorData.message) {
          errorMessage = Array.isArray(errorData.message)
            ? errorData.message.join(", ")
            : errorData.message;
        }

        return {
          success: false,
          error: errorMessage,
        };
      }

      const successData = data as StrapiResponse;
      setToken(successData.jwt);
      localStorage.setItem("token", successData.jwt);

      return { success: true, data: successData };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erreur réseau";

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return { register, loading, token, logout };
};
