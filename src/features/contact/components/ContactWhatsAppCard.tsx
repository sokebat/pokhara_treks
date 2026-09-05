import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { siteInfo } from "@/constant/site";

const ContactWhatsAppCard = () => (
  <div className="rounded-md bg-foreground p-6 text-primary-foreground">
    <span className="flex size-11 items-center justify-center rounded-full bg-sky/20 text-sky">
      <FaWhatsapp className="size-5" />
    </span>
    <p className="mt-4 text-sm font-semibold tracking-wide text-sky uppercase">
      Prefer WhatsApp?
    </p>
    <p className="mt-2 text-sm text-primary-foreground/80">
      Chat with us directly for a faster response.
    </p>
    <Button
      nativeButton={false}
      render={
        <a
          href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
        />
      }
      size="lg"
      className="mt-5 bg-card text-foreground hover:bg-card/90"
    >
      <FaWhatsapp className="size-4" />
      Message us on WhatsApp
    </Button>
  </div>
);

export default ContactWhatsAppCard;
