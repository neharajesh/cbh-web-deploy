import { Footer } from "../Footer";
import { Header } from "../Header";
import "./styles.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
