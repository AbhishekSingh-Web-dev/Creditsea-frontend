
import "./globals.css";
import SyncWrapper from "./sync-wrapper";

export default function RootLayout({children}:{children: React.ReactNode}){
    return (
        <html lang="en">
            <body>
                <SyncWrapper>{children}</SyncWrapper>
            </body>
        </html>
    )
}
