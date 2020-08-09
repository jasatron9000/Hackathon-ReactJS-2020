import fetch from "node-fetch";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import config from "../lib/config";
import ProfileCard from "../components/ProfileCard";
import Link from "next/link";
import QuestionCard from "../components/ExamQPage_comps/QuestionCards";
const LinkA = ({ children, href }) => (
  <Link href={href}>
    <a className="pl-4 block pr-4 underline hover:text-white">{children}</a>
  </Link>
);

function Home() {
  const { user, loading } = useFetchUser({ required: false });

  const logEvent = async (type, value) => {
    const event = {
      name: user.nickname,
      type: type,
      value: value,
      // date: added server side so we can't lie
    };
    await fetch(`${config.HOST}/api/events`, {
      method: "post",
      body: JSON.stringify(event),
    });

    // TODO handle error if event cannot be posted.
    // TODO display feedback if event is ok
  };

  const handleClick = (e) => {
    // console.log(e.target)
    logEvent("click", 1);
  };
  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Loading login info...</p>}
      {!loading && !user && (
        <>
          <p>Please Sign In</p>
        </>
      )}
      {user && (
        <>
          <ProfileCard user={user}>
          </ProfileCard>
          <QuestionCard></QuestionCard>
          <h2>Discussion</h2>
        </>
      )}
    </Layout>
  );
}

export default Home;
