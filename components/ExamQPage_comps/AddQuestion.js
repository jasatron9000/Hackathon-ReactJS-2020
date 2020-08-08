import SubmissionForm from "../ExamQPage_comps/SubmissionFom";

function AddQuestion() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(!modalOpen)}
        class=" mx-8 my-8 btn-blue"
      >
        Add Question
      </button>
      {modalOpen && <SubmissionForm></SubmissionForm>}
    </div>
  );
}

export default AddQuestion;
