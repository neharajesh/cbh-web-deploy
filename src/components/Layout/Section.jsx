import "./styles.css";

export const Section = ({ title, description, children }) => {
  return (
    <div className="w-full pb-14">
      <h2 className="font-bold text-[26px] text-center section-header">
        {title}
      </h2>
      <p className="text-center mb-10"> {description} </p>
      <div className="section-child">{children}</div>
    </div>
  );
};
