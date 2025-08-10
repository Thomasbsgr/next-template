import "./globals.css";

export const metadata = {
  title: "Title",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
