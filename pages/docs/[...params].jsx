import { useRouter } from "next/router";
import React from "react";

const Params = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (!params) return <h1>loading....</h1>;
  if (params.length === 3) {
    return (
      <>
        <h1>
          Doc {params[0]} section {params[1]} example {params[2]}{" "}
        </h1>
      </>
    );
  }
  if (params.length === 2) {
    return (
      <>
        <h1>
          Doc {params[0]} section {params[1]}{" "}
        </h1>
      </>
    );
  }
  if (params.length === 1) {
    return (
      <>
        <h1>Doc {params[0]} </h1>
      </>
    );
  }

  return <div>Params</div>;
};

export default Params;
