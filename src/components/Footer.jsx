import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="h-[300px] w-full flex flex-col items-center justify-center bg-gray-50 rounded-t-lg mt-[32px]">
      <p className="text-[26px] font-bold mb-8">Build with CodeBrewHouse</p>
      <Button>✦ 2 client slots open</Button>
    </div>
  );
};
