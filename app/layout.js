import { Geist, Geist_Mono } from "next/font/google";

export const metadata = {
  title: " %s - Nirma",
  default: "ABRO",
  description: "Welcome to my awesome app!",
};

// export const metadata = {
//   title: {
//     template: '%s | Acme',
//   },
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
