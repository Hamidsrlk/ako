import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
