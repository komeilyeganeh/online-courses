import { Text } from "@components";
import UserImg from "@images/user.webp";

export const CommentSection: React.FC = () => {
  // ---- jsx return ----
  return (
    <section className="mt-56">
      <div className="container p-10 flex items-center justify-between">
        <div className="relative w-1/4 flex flex-col gap-y-4">
          <Text
            as="span"
            className="text-6xl absolute -top-5 -left-5 px-2 bg-purple-600 text-white rounded-md"
          >
            ،،
          </Text>
          <div className="p-10 bg-white shadow-lg rounded-lg">
            <Text>
              “The other hand we denounce righteou indg ation men who are so
              beguiled and demoraliz by the the mo ment.Dislike men who so
              development co”
            </Text>
          </div>
          <div className="flex items-center gap-x-3">
            <img src={UserImg} alt="user image" />
            <Text>Robind Jon</Text>
          </div>
        </div>
        <div className="relative w-1/4 flex flex-col gap-y-4">
          <Text
            as="span"
            className="text-6xl absolute -top-5 -left-5 px-2 bg-purple-600 text-white rounded-md"
          >
            ،،
          </Text>
          <div className="p-10 bg-white shadow-lg rounded-lg">
            <Text>
              “The other hand we denounce righteou indg ation men who are so
              beguiled and demoraliz by the the mo ment.Dislike men who so
              development co”
            </Text>
          </div>
          <div className="flex items-center gap-x-3">
            <img src={UserImg} alt="user image" />
            <Text>Robind Jon</Text>
          </div>
        </div>
        <div className="relative w-1/4 flex flex-col gap-y-4">
          <Text
            as="span"
            className="text-6xl absolute -top-5 -left-5 px-2 bg-purple-600 text-white rounded-md"
          >
            ،،
          </Text>
          <div className="p-10 bg-white shadow-lg rounded-lg">
            <Text>
              “The other hand we denounce righteou indg ation men who are so
              beguiled and demoraliz by the the mo ment.Dislike men who so
              development co”
            </Text>
          </div>
          <div className="flex items-center gap-x-3">
            <img src={UserImg} alt="user image" />
            <Text>Robind Jon</Text>
          </div>
        </div>
      </div>
    </section>
  );
};
