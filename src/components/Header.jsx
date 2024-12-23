import { Button } from "@/components/ui/button";

export const Header = () => {
  const navigateToHome = () => {
    window.location = "/";
  };
  return (
    <div className="py-8 flex justify-between content-center">
      <div className="flex items-center" onClick={navigateToHome}>
        <img
          className="h-[50px] mr-2"
          alt="logo"
          src="codebrewhouse-logo.png"
        />
        <p className="text-[24px] font-bold">CodeBrewHouse</p>
      </div>
      <Button>✦ Start a Project</Button>
    </div>
  );
};
