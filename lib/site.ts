export const siteConfig = {
  brand: "TODO",
  tagline: "כל מה שצריך במקום אחד",
  ownerName: "אדיר רווח",
  locationName: "קניון נחמיה",

  // עדכנו לפני העלייה לאוויר:
  phoneDisplay: "0547322616",
  phoneInternational: "972547322616",
  whatsappText:
    "היי TODO, אשמח לקבל פרטים על מוצרים / בלונים / מתנה ליום הולדת",
};

export const whatsappUrl = siteConfig.phoneInternational
  ? `https://wa.me/${siteConfig.phoneInternational}?text=${encodeURIComponent(siteConfig.whatsappText)}`
  : "#contact";
