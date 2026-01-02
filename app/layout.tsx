import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}