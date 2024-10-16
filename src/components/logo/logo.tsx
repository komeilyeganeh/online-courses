import { Text } from "@components";
import LogoPng from "@images/logo.png";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-x-2">
      <img src={LogoPng} alt="logo image" />
      <Text className="uppercase text-red-600">
        on{" "}
        <Text as="span" className="text-purple-600">
          courses
        </Text>
      </Text>
    </Link>
  );
};
