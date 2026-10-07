import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TODO | ממתקים, שתייה, בלונים ומתנות בקניון נחמיה",
  description:
    "TODO בקניון נחמיה — ממתקים, פיצוחים, שתייה קלה, משקאות אלכוהוליים, בלונים, מתנות והפתעות לימי הולדת. כל מה שצריך במקום אחד.",
  openGraph: {
    title: "TODO | כל מה שצריך במקום אחד",
    description:
      "ממתקים, שתייה, בלונים, מתנות, פיצוחים ועוד — מחכים לכם ב-TODO בקניון נחמיה.",
    locale: "he_IL",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
