import CountUp from "react-countup";
import { Text } from "@components";
import { SiteStatistics } from "@data/site-statistics.tsx";
import { StatisticsType } from "types/statistics.type";

export const StatisticsSection: React.FC = () => {
  // ---- jsx return ----
  return (
    <section className="mt-4">
      <div className="container flex items-center justify-between p-8">
        {SiteStatistics.map((statistics: StatisticsType) => (
          <div className="flex items-center gap-x-5">
            <div className="text-red-500">{statistics.icon}</div>
            <div>
              <Text as="span" className="text-3xl font-bold">
                <CountUp end={statistics.value} duration={6} enableScrollSpy scrollSpyDelay={150}/>
              </Text>
              <Text className="uppercase">{statistics.title}</Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
