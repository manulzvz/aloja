import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Aloja",
  keywords: "rental, property, real state, housing, apartments, houses",
  description: "Aloja is a rental platform for finding and listing properties.",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </AuthProvider>
  );
};

export default MainLayout;
