import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import QuestionCard from "../components/QuestionCards";
// import SubmissionForm from "../components/SubmissionFom";

function About() {
  const { user, loading } = useFetchUser();

  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <div onClick={() => setModalOpen(!modalOpen)}>
        <div class="flex items-center justify-center h-64">
          <button
            onClick={() => setModalOpen(!modalOpen)}
            class="modal-button bg-teal-200 p-3 rounded-lg text-teal-900 hover:bg-teal-300"
          >
            Blast off
          </button>
        </div>
        <div
          class={`modal opacity-${
            modalOpen ? 1 : 0
          } pointer-events-none absolute w-full h-full top-0 left-0 flex items-center justify-center`}
        >
          <div class="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"></div>
          {/* <SubmissionForm></SubmissionForm> */}
        </div>
        <article>
          <div class="">
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
