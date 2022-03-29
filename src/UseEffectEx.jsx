import { useEffect, useState } from "react";

export const UseEffectEx = () => {
  const [cnt, SetCnt] = useState(0);
  document.title = `Welcome To My Website`;
  useEffect(() => {
    document.title = `You click ${cnt} time`;
  });
  return (
    <>
      <button
        onClick={() => {
          SetCnt(cnt + 1);
        }}
      >
        click me {cnt}
      </button>
    </>
  );
};
