import { Section } from "../Layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const FAQ = ({ faqs }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs?.map((faq, id) => (
        <AccordionItem value={`{item-${id + 1}}`} key={id}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const FAQComponent = ({ faqs, title, description }) => {
  const handleClick = () => {
    window.location = "/faqs";
  };

  return (
    <Section title={title} description={description}>
      <FAQ faqs={faqs} />
      <div className="flex justify-center">
        <Button variant="ghost" className="mt-4" onClick={handleClick}>
          Read More <ChevronRight />
        </Button>
      </div>
    </Section>
  );
};
