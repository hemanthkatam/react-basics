import { ReactFundamentals } from "./reaact-fundamentals/ReactFundamentals";
import "./App.css";
import { HooksFundaments } from "./hooks-fundamentals/HooksFundamentals";
import { BillingTable } from "./billing-table/components/BillingTable";
import { MoviePage } from "./MoviePage/components/MoviePage";
import { StudentDetails } from "./student-details/StudentDetails";
import { CountryDelightOne } from "./country-delight-one/CountryDelightOne";
import { BillDetails } from "./Hotel-Bill/Bill-Details";

function App() {
  return (
    <div className="App">
      {/* <ReactFundamentals /> */}
      {/* <HooksFundaments /> */}
      {/* <BillingTable /> */}
      {/* <MoviePage /> */}
      {/* <CountryDelightOne /> */}
      {/* <StudentDetails /> */}
      <BillDetails />
    </div>
  );
}

export default App;
