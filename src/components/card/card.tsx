import { Button, Text } from "@components";
import { FaRegClock } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import LinesEllipsis from "react-lines-ellipsis";
import { CardProps } from "./card.type";
import { t } from "i18next";

export const Card: React.FC<CardProps> = ({
  title,
  price,
  priceOff,
  image,
  tag,
  lesson,
  teacher,
  time,
}) => {
  // ---- jsx return ----
  return (
    <div className="w-1/4 p-3 bg-white rounded-lg border border-gray-300 flex flex-col gap-y-4">
      <div className="relative">
        <img src={image} alt="" className="w-full" />
        <Text
          as="span"
          className="absolute top-1 left-1 rounded-lg bg-red-400 text-white text-xs py-1 px-3"
        >
          {tag}
        </Text>
      </div>
      <div className="flex items-center justify-between">
        <Text className="flex items-center gap-x-2 text-sm text-gray-500">
          <FaBook className="text-purple-600" /> {lesson}{" "}
          {t("course_list.lesson")}
        </Text>
        <Text className="flex items-center gap-x-2 text-sm text-gray-500">
          <FaRegClock className="text-purple-600" /> {time}
        </Text>
      </div>
      <div className="flex flex-col gap-y-3">
        <Button
          as="link"
          href="/course"
          className="text-2xl font-bold hover:text-purple-500 pl-0"
        >
          <LinesEllipsis text={title} maxLine={2} ellipsis="..." />
        </Button>
        <div className="flex items-center gap-x-3">
          {priceOff !== 0 && (
            <Text className="font-bold text-purple-600">${priceOff}</Text>
          )}
          {price !== 0 && (
            <Text
              className={`font-bold ${
                priceOff === 0
                  ? "text-purple-600"
                  : "text-gray-500 text-sm line-through"
              }`}
            >
              ${price}
            </Text>
          )}
          {price === 0 && (
            <Text className="text-green-600 font-bold bg-green-100 py-1 px-4 rounded-md text-sm">
              {t("course_list.free")}
            </Text>
          )}
        </div>
      </div>
      <div className="border-t border-t-gray-200 pt-2">
        <Text className="flex items-center gap-x-3 text-sm">
          <FaUserTie /> {teacher}
        </Text>
      </div>
    </div>
  );
};
