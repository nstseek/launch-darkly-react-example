import { useFlags } from "launchdarkly-react-client-sdk";
import { FlagContent } from "./entities";
import { useMemo } from "react";

export const useABFlag = () => {
  const abFlag = useFlags().abflag as FlagContent;

  return useMemo(
    () => ({
      abFlag,
      isInExperience: abFlag.experience === "B",
      isInExpB: abFlag.experience === "B",
      isInControl: abFlag.experience !== "B",
    }),
    [abFlag]
  );
};
