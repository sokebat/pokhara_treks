"use client";

import { TbLock, TbLogin, TbMail } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import FormField from "@/components/shared/FormField";

import { useLoginForm } from "../hooks/use-login-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    formError,
    onSubmit,
  } = useLoginForm();

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
