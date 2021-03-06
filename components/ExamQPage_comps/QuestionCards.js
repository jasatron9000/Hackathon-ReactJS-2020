import Link from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";

export const QuestionCard = ({
  user,
  children,
  QuestionTitle,
  Description,
  Name,
  Date,
}) => {
  return (
    <div class="m-6 w-3/5">
      <CardActionArea>
        <Link to="/index" style={{ textDecoration: "none" }}>
          <div class="border-2 border-gray-600 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                {QuestionTitle}
              </div>
              <p class="overflow-y-auto h-32 text-gray-700 text-base">
                {Description}
              </p>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <p class="text-gray-900 leading-none">{Name}</p>
                <p class="text-gray-600">{Date}</p>
              </div>
            </div>
          </div>
        </Link>
      </CardActionArea>
    </div>
  );
};
export default QuestionCard;
