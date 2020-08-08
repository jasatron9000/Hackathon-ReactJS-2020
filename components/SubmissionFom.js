import QuestionCards from "../components/QuestionCards";
import AddQuestion from "../components/AddQuestion";

export const SubmissionForm = ({ user, children, ...rest }) => {
  return (
    <form {...rest} class="m-6 w-full max-w-sm">
      <div class=" md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-50 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Question Title
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="text"
            placeholder="Give the question a title"
          ></input>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-50 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-password"
          >
            Question
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="text"
            placeholder="Describe the question"
          ></input>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubmissionForm;
