import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@arco-design/web-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useMemo } from "react";
import { getFlattenRoutes, routes } from "./routes";

function App() {
  const flattenRoutes = useMemo(() => getFlattenRoutes(routes) || [], [routes]);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {flattenRoutes.map((route) => {
            console.log("app-route", route);
            console.log(`/${route.key}`);
            return (
              <Route
                key={route.key}
                path={`/${route.key}`}
                element={route.component}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
