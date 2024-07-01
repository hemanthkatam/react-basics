import { ReactFundamentals } from "./reaact-fundamentals/ReactFundamentals";
import "./App.css";
import { HooksFundaments } from "./hooks-fundamentals/HooksFundamentals";
import { BillingTable } from "./billing-table/components/BillingTable";
import { MoviePage } from "./MoviePage/components/MoviePage";
function App() {
  return (
    <div className="App">
      {/* <ReactFundamentals /> */}
      {/* <HooksFundaments /> */}
      <BillingTable />
      {/* <MoviePage /> */}
    </div>
  );
}

export default App;
