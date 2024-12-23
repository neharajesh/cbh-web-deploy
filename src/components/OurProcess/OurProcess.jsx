import { Section } from "../Layout/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { steps as processSteps } from "./data";

export const OurProcess = () => {
  return (
    <Section
      title="Our Process"
      description="We deliver through cycles of Strategy, Architecture, and Development"
    >
      <div className="flex gap-4 mt-4">
        {processSteps.map((step, id) => (
          <Card key={id} className="w-1/3">
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {step.steps.map((element, index) => (
                  <div className="my-3" key={index}>
                    <div className="underline">{element.title} </div>
                    <span className="italic"> {element.description} </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
