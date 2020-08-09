import { useFetchUser } from "../lib/user";
import MediaGrid from "../components/ExamQPage_comps/MediaGrid";
import AddQuestion from "../components/ExamQPage_comps/AddQuestion";

function examq() {
  const { user, loading } = useFetchUser();
  return (
    <div>
      <AddQuestion />
      <MediaGrid />
    </div>
  );
}

export default examq;
