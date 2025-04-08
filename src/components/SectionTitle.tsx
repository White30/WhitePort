
interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12 animate-on-scroll">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      <div className="h-1 w-20 bg-microsoft-blue mx-auto mt-5"></div>
    </div>
  );
};

export default SectionTitle;
