import { short_faqs } from "../FAQs/faqs";
import { FAQComponent } from "../FAQs";
import { HeroSection } from "../HeroSection";
import { TrustedBySection } from "../TrustedBySection";
import { Layout } from "../Layout";
import { OurProcess } from "../OurProcess/OurProcess";

export const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <OurProcess />
      <FAQComponent faqs={short_faqs} title="FAQs" />
    </Layout>
  );
};
