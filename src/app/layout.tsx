import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
