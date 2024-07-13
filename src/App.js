import { ReactFundamentals } from "./reaact-fundamentals/ReactFundamentals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import { HooksFundaments } from "./hooks-fundamentals/HooksFundamentals";
import { BillingTable } from "./billing-table/components/BillingTable";
import { MoviePage } from "./MoviePage/components/MoviePage";
import { StudentDetails } from "./student-details/StudentDetails";
import { CountryDelightOne } from "./country-delight-one/CountryDelightOne";
import { BillDetails } from "./Hotel-Bill/Bill-Details";
import { FatherAndMother } from "./FatherAndMother/FatherAndMother";
import { HotelMenu } from "./HotelMenu/HotelMenu";
import { PropDrilling } from "./PropDrilling/PropDrilling";
import { UserData } from "./UserData/UserData";
import { UserReducer } from "./Redux/Reducers/UserReducer";

const store = createStore(UserReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ReactFundamentals /> */}
        {/* <HooksFundaments /> */}
        {/* <BillingTable /> */}
        {/* <MoviePage /> */}
        {/* <CountryDelightOne /> */}
        {/* <StudentDetails /> */}
        {/* <BillDetails /> */}
        {/* <FatherAndMother /> */}
        {/* <HotelMenu /> */}
        {/* <PropDrilling /> */}
        <UserData />
      </div>
    </Provider>
  );
}

export default App;
