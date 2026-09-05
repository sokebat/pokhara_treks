"use client";

import { TbLoader2, TbSend } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";

import { siteInfo } from "@/constant/site";
import { Button } from "@/components/ui/button";

import { useCustomizeTripForm } from "../hooks/use-customize-trip-form";
import EnquirySuccess from "./EnquirySuccess";
import TripDetailsFields from "./TripDetailsFields";
import YourDetailsFields from "./YourDetailsFields";

const CustomizeTripForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    submitted,
    setSubmitted,
    onSubmit,
  } = useCustomizeTripForm();

  if (submitted) {
    return <EnquirySuccess onReset={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
      <TripDetailsFields control={control} register={register} errors={errors} />
      <YourDetailsFields control={control} register={register} errors={errors} />

      <div className="flex flex-col gap-5 border-t-2 border-border pt-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <FaWhatsapp className="size-4 shrink-0 text-whatsapp" />
            Have questions? Call or WhatsApp us at{" "}
            <a
              href={`tel:${siteInfo.phone}`}
              className="font-medium text-foreground hover:text-chart-2"
            >
              {siteInfo.phoneDisplay}
            </a>
          </p>

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="accent"
            size="xl"
            className="hidden sm:inline-flex"
          >
            {isSubmitting ? (
              <>
                <TbLoader2 className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <TbSend className="size-4" />
                Send Your Enquiry
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CustomizeTripForm;
