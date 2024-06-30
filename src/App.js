import { ReactFundamentals } from "./reaact-fundamentals/ReactFundamentals";
import "./App.css";
import { HooksFundaments } from "./hooks-fundamentals/HooksFundamentals";
import { BillingTable } from "./billing-table/components/BillingTable";

function App() {
  return (
    <div className="App">
      {/* <ReactFundamentals /> */}
      {/* <HooksFundaments /> */}
      <BillingTable />
    </div>
  );
}

export default App;
