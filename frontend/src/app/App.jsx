// App.jsx
import { Routes, Route } from "react-router-dom";
import routes from "./routes.jsx";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => ( //mapping of the routes
        <Route key={index} path={route.path} element={route.element}>
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
  );
}

export default App;