export const QuestionCard = ({ user, children }) => {
  return (
    <div class="m-6 w-3/5">
      <div class="border-2 border-gray-600 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            [Question Name]
          </div>
          <p class="text-gray-700 text-base">[Question Description]</p>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">[Name]</p>
            <p class="text-gray-600">[Date]</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
