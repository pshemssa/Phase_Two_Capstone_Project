
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
title: "Lumen Yard",
description: "Stories that linger"
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
// simple system theme detection

return (
<html lang="en">
<body className="bg-white">
<Header />
<main >{children}</main>

</body>
</html>
);
}