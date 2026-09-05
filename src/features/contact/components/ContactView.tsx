import Container from "@/components/shared/Container";
import GoogleMap from "@/components/shared/GoogleMap";

import ContactDetailsCard from "./ContactDetailsCard";
import ContactForm from "./ContactForm";
import ContactWhatsAppCard from "./ContactWhatsAppCard";

const ContactView = () => (
  <div className="py-14 sm:py-20">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Get in Touch
        </p>
        <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
          Let&apos;s plan your Nepal adventure
        </h1>
        <p className="mt-4 text-muted-foreground">
          Have a question about a trek, or want a custom itinerary? Send us a
          message and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col gap-6">
          <ContactDetailsCard />
          <ContactWhatsAppCard />
        </div>
        <div className="rounded-md border-2 border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>

      <div className="mt-8">
        <GoogleMap />
      </div>
    </Container>
  </div>
);

export default ContactView;
