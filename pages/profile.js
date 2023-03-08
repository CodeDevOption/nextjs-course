import { getSession, useSession } from "next-auth/react";
import React from "react";

const profile = () => {
  const { data } = useSession();
  console.log(data);
  return <div>profile</div>;
};

export default profile;

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  console.log("This is the Profile", session);

  return {
    props: {
      session,
    },
  };
};
