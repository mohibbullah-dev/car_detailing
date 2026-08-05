import { usePortfolioList } from "../hooks/usePortfolio";
import PortfolioBackground from "../components/portfolio/PortfolioBackground";
import PortfolioIntro from "../components/portfolio/PortfolioIntro";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";
import {
  PortfolioLoading,
  PortfolioError,
  PortfolioEmpty,
} from "../components/portfolio/PortfolioStates";

export default function Portfolio() {
  const { data, isLoading, error } = usePortfolioList();

  return (
    <main className="portfolio-section relative min-h-[100svh] overflow-hidden bg-[#070707] pt-28 pb-20 font-[Inter,system-ui,sans-serif] lg:pt-32 lg:pb-24">
      <PortfolioBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <PortfolioIntro />

        <div className="mt-14 sm:mt-16 lg:mt-20">
          {isLoading ? (
            <PortfolioLoading />
          ) : error ? (
            <PortfolioError message={error.message} />
          ) : !data?.length ? (
            <PortfolioEmpty />
          ) : (
            <PortfolioGrid items={data} />
          )}
        </div>

        {!isLoading && !error && data?.length > 0 && <PortfolioCTA />}
      </div>
    </main>
  );
}
