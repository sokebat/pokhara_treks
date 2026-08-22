const ContactMap = () => {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <iframe
        src="https://www.google.com/maps?q=Pokhara+Treks+%26+Expeditions+Pvt.Ltd&output=embed"
        title="Pokhara Treks & Expeditions location on Google Maps"
        width="100%"
        height="360"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default ContactMap;
