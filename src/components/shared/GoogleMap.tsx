import { cn } from "@/lib/utils";
import { siteInfo } from "@/constant/site";

type GoogleMapProps = {
  label?: string;
  className?: string;
};

// Official Google Maps "Embed a map" code for the verified business listing
// (Share > Embed a map) — pins exactly this place, nothing else nearby.
const embedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4267.192484421028!2d83.95421599076006!3d28.217714586593537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959524d54ba515%3A0xf3a5d30655dc7581!2sPokhara%20Treks%20%26%20Expeditions%20Pvt.Ltd!5e1!3m2!1sen!2snp!4v1788276439582!5m2!1sen!2snp";

const GoogleMap = ({ label = siteInfo.name, className }: GoogleMapProps) => {
  return (
    <div
      className={cn(
        "aspect-video overflow-hidden rounded-md border-2 border-border",
        className,
      )}
    >
      <iframe
        src={embedSrc}
        title={`${label} location on Google Maps`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMap;
