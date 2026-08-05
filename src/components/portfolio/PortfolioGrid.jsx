import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({ items, isDemo = false }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {items.map((item, index) => (
        <PortfolioCard key={item._id} item={item} index={index} isDemo={isDemo} />
      ))}
    </div>
  );
}
