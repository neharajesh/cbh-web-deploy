import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="h-[600px] w-full flex bg-gray-50 rounded-lg">
      <div className="w-2/3 m-auto text-center">
        <h1 className="text-[50px] leading-snug font-bold my-4">
          Building MVPs That Scale With Your Vision
        </h1>
        <p className="text-[24px] leading-tight">
          From concept to launch, we transform your ideas into production-ready
          web applications
        </p>
        <Button className="mt-12">Let's Build!</Button>
      </div>
    </div>
  );
};
