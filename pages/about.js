//import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
//import QuestionCard from "../components/QuestionCards";
import SubmissionForm from "../components/ExamQPage_comps/SubmissionFom";
import MediaGrid from "../components/ExamQPage_comps/MediaGrid";
import AddQuestion from "../components/ExamQPage_comps/AddQuestion";

function About() {
  const { user, loading } = useFetchUser();

  // const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <AddQuestion />
      <MediaGrid />
    </div>
  );
}

export default About;
