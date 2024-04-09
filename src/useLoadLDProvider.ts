import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { useState, ReactNode, useEffect, useMemo } from "react";

export const useLoadLDProvider = ({
  fallback,
}: {
  fallback: () => ReactNode;
}) => {
  const [LDProvider, setLDProvider] = useState<
    (({ children }: { children: ReactNode }) => ReactNode) | undefined
  >(undefined);

  const LDProviderWithFallback = useMemo(
    () => LDProvider ?? fallback,
    [LDProvider, fallback]
  );

  useEffect(() => {
    (async () => {
      const ldComponent = await asyncWithLDProvider({
        clientSideID: "your-client-side-id",
        context: {
          kind: "user",
          key: "user-key-123abc",
          name: "Sandy Smith",
          email: "sandy@example.com",
        },
      });
      setLDProvider(() => ldComponent);
    })();
  }, [setLDProvider]);

  return useMemo(() => ({ LDProviderWithFallback }), [LDProviderWithFallback]);
};
