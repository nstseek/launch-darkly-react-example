import { useFlags } from "launchdarkly-react-client-sdk";
import { useMemo } from "react";

export const useFeatureFlag = () => {
  const testflag = useFlags().testflag;

  return useMemo(() => ({ testflag }), [testflag]);
};
