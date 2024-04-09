import { useABFlag } from "./useABFlag";

export const ABTestComponent = () => {
  const { isInExpB, isInControl } = useABFlag();

  if (isInControl) {
    return <h1>You have fell into control and are out of LD AB Test!</h1>;
  }
  if (isInExpB) {
    return <h1>You have fell into experience B in LD AB Test!</h1>;
  }
};
