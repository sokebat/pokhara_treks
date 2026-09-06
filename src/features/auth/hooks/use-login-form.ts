"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import { safeCallbackUrl } from "@/features/auth/lib/callback-url";
import {
  loginFormDefaultValues,
  loginFormSchema,
  type LoginFormValues,
} from "@/features/auth/validation/login.validation";

export function useLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formError, setFormError] = React.useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginFormDefaultValues,
  });

  const onSubmit = async (values: LoginFormValues) => {
    setFormError(null);

    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      setFormError("Invalid email or password.");
      return;
    }

    router.push(safeCallbackUrl(searchParams.get("callbackUrl")));
    router.refresh();
  };

  return {
    ...form,
    formError,
    onSubmit,
  };
}
