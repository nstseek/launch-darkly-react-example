import { useFeatureFlag } from "./useFeatureFlag";

export const FeatureFlagComponent = () => {
  const { testflag } = useFeatureFlag();

  return <h1>The LD feature flag is {testflag ? "on" : "off"}!</h1>;
};
