import { ABTestComponent } from "./ABTestComponent/ABTestComponent";
import "./App.css";
import { FeatureFlagComponent } from "./FeatureFlagComponent/FeatureFlagComponent";
import { useLoadLDProvider } from "./useLoadLDProvider";

function App() {
  const { LDProviderWithFallback } = useLoadLDProvider({
    fallback: () => <h2>LD loading...</h2>,
  });

  return (
    <LDProviderWithFallback>
      <h2>LD loaded successfully!</h2>
      <ABTestComponent />
      <FeatureFlagComponent />
    </LDProviderWithFallback>
  );
}

export default App;
