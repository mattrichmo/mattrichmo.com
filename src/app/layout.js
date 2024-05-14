//= Global Styles
import "@/styles/globals.css";

export const metadata = {
  title: 'Bayone',
  description: 'Matt Richmond  | Photographer',
  keywords: ['Photography', 'Portfolio', 'nature', 'Matt Richmond'],
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
