//import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
//import QuestionCard from "../components/QuestionCards";
import SubmissionForm from "../components/SubmissionFom";
import MediaGrid from "../components/MediaGrid_Comp/MediaGrid";
import AddQuestion from "../components/AddQuestion";

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
