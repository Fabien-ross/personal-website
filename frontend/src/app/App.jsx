// App.jsx

import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {
  AnimatePresence
} from "motion/react";

import routes from "./routes.jsx";


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          >

            {route.children?.map((child, childIndex) => (
              <Route
                key={childIndex}
                index={child.index}
                path={child.path}
                element={child.element}
              />
            ))}

          </Route>
        ))}

      </Routes>

    </AnimatePresence>
  );
}


export default App;