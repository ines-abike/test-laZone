import {
  Result,
  LoginValues,
  StrapiErrorResponse,
  StrapiResponse,
} from "@/types/auth";
import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const login = async (values: LoginValues): Promise<Result> => {
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: values.email,
          password: values.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorData = data as StrapiErrorResponse;
        let errorMessage = "Erreur lors de la connexion";

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

  return { login, loading, token, logout };
};
