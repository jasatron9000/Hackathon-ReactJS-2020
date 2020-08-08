import { useFetchUser } from "../lib/user";
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
