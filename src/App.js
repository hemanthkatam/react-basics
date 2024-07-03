import { ReactFundamentals } from "./reaact-fundamentals/ReactFundamentals";
import "./App.css";
import { HooksFundaments } from "./hooks-fundamentals/HooksFundamentals";
import { BillingTable } from "./billing-table/components/BillingTable";
import { MoviePage } from "./MoviePage/components/MoviePage";
import { CountryDelightOne } from "./country-delight-one/CountryDelightOne";
import { Button } from "./Button/component/Button";

function App() {
  return (
    <div className="App">
      {/* <ReactFundamentals /> */}
      {/* <HooksFundaments /> */}
      {/* <BillingTable /> */}
      {/* <MoviePage /> */}
      {/* <CountryDelightOne /> */}
      <Button />
    </div>
  );
}

export default App;
