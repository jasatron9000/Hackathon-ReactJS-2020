import SubmissionForm from "../components/SubmissionFom";

function AddQuestion() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleSubmit = () => {
    // if (
    //   SearchQuery?.length !== 0 &&
    //   SearchQuery !== null &&
    //   SearchQuery !== ""
    // ) {
    //   let UserInput: IUserInput = {
    //     SearchQuery: SearchQuery,
    //   };
    //   console.log(UserInput);
    //   props.SetUserInput(UserInput);
    // } else {
    //   setHasFocus(true);
    // }
  };

  return (
    <div>
      <button
        onClick={(() => setModalOpen(!modalOpen), handleSubmit)}
        class=" mx-8 my-8 btn-blue"
      >
        Add Question
      </button>
      {modalOpen && <SubmissionForm></SubmissionForm>}
    </div>
  );
}

export default AddQuestion;
