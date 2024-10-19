import { StatisticsType } from "types/statistics.type";
import i18n from "../locales/i18n";

import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuMedal } from "react-icons/lu";

export const SiteStatistics: StatisticsType[] = [
  {
    title: i18n.t("statistics.total_acheivment"),
    icon: <LuMedal size={55}/>,
    value: 27,
  },
  {
    title: i18n.t("statistics.total_students"),
    icon: <PiStudent size={55}/>,
    value: 145,
  },
  {
    title: i18n.t("statistics.total_instructor"),
    icon: <FaChalkboardTeacher size={55}/>,
    value: 240,
  },
  {
    title: i18n.t("statistics.over_the_world"),
    icon: <FaMapLocationDot size={55}/>,
    value: 214,
  },
];
