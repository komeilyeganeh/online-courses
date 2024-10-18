import { LanguageType } from "types/language.type";
import { Languages } from "../../data/languages";
import { Text } from "@components"

export const Language: React.FC = () => {
  return (
    <div className="relative">
      <div className="peer">
        <img src={Languages[0].flag} alt="flag image" className="cursor-pointer" />
      </div>
      <div className="absolute top-full right-0 duration-150 ease-linear bg-white shadow-lg p-2 w-32 flex flex-col gap-y-2 rounded-md translate-y-2 invisible opacity-0 peer-hover:opacity-100 peer-hover:visible peer-hover:translate-y-0 hover:opacity-100 hover:visible hover:translate-y-0">
        {Languages.map((lng: LanguageType) => (
          <div className="relative flex items-center gap-2 cursor-pointer after:absolute after:h-0 after:w-1 after:bg-red-500 after:duration-150 after:ease-linear after:-left-1 after:top-1/2 after:-translate-y-1/2 after:rounded-lg hover:after:h-2/3">
            <img src={lng.flag} alt="flag image" />
            <Text as="span" className="text-xs">{lng.title}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};
