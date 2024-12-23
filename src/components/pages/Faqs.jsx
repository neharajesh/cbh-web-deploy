import { FAQ } from "../FAQs";
import {
  business_and_planning,
  development_specifics,
  future_considerations,
  project_timeline_and_process,
  technical_considerations,
} from "../FAQs/faqs";
import { Layout } from "../Layout";

const faqSections = [
  { title: "Project Timeline and Process", faqs: project_timeline_and_process },
  { title: "Technical Considerations", faqs: technical_considerations },
  { title: "Business and Planning", faqs: business_and_planning },
  { title: "Development Specifics", faqs: development_specifics },
  { title: "Future Considerations", faqs: future_considerations },
];

export const Faqs = () => {
  return (
    <Layout>
      <h2 className="text-[32px] font-bold text-center"> FAQs </h2>

      {faqSections.map((section) => (
        <div className="my-12" key={section.title}>
          <p className="text-[20px] font-bold my-2"> {section.title} </p>
          <FAQ faqs={section.faqs} />
        </div>
      ))}

      <div className="pb-14"></div>
    </Layout>
  );
};
