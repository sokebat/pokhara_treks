"use client";

import { TbLock, TbLogin, TbMail } from "react-icons/tb";
import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import FormField from "@/components/shared/FormField";
import {
  loginFormDefaultValues,
  loginFormSchema,
  type LoginFormValues,
} from "@/features/auth/validation/login.validation";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formError, setFormError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
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

    const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
    router.push(callbackUrl);
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      <FormField
        id="email"
        label="Email"
        icon={TbMail}
        type="email"
        placeholder="you@pokharatreks.com"
        error={errors.email?.message}
        registration={register("email")}
      />

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <TbLock className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            aria-invalid={!!errors.password}
            className="h-14 w-full rounded-md border-2 border-input bg-transparent pr-4 pl-11 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm"
            {...register("password")}
          />
        </div>
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      {formError && <p className="text-sm text-destructive">{formError}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="rounded-md"
      >
        <TbLogin className="size-4" />
        {isSubmitting ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
};

export default LoginForm;
