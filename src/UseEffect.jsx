import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [cnt, SetCnt] = useState(0);
  const [cnt2, SetCnt2] = useState(0);

  useEffect(() => {
    alert("btn clicked");
  }, [cnt2]);

  return (
    <>
      <button
        onClick={() => {
          SetCnt(cnt + 1);
        }}
      >
        click me {cnt}
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          SetCnt2(cnt2 - 1);
        }}
      >
        click me {cnt2}
      </button>
    </>
  );
};
