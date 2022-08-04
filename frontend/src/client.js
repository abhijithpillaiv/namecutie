import React from "react";
import { Route} from "react-router-dom";
import Landing from "./component/landing/landing";

function App() {

  return (
    <span>
      <div>
              <Route exact component={Landing} path="/" />
      </div>
    </span>
  ) 
}

// export default App;
// import React from "react";
// import { Route } from "react-router-dom";
// import Landing from "./component/landing/landing";
// import {search} from './context/search'

// function App() {
//   const [serchName, setserchName] = useState('')

//   return (
//     <span>
//       <div>
//         <search.Provider value={{ serchName: serchName, setserchName: setserchName }}>

//           <Route exact component={Landing} path="/" />
//         </search.Provider>

//       </div>
//     </span>
//   )
// }

// export default App;