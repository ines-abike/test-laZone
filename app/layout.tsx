import { Provider } from "./provider";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html>
      <body className={roboto.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}



