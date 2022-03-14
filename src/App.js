import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MentalModel from "./pages/mental-model";
import ClassFunction from "./pages/class-function";
import Cleanup from "./pages/cleanup";
import FunctionRef from "./pages/function-ref";
import Deps from "./pages/dependency-array";
import Improvement from "./pages/improvement";

import "./styles.css";

function Center({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 300,
        maxHeight: "100vh"
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link className="item" to="/mental-model">
          Mental Model
        </Link>
        <Link className="item" to="/class-function">
          Class vs Function
        </Link>
        <Link className="item" to="/cleanup">
          Cleanup
        </Link>
        <Link className="item" to="/function-ref">
          Function ref
        </Link>
        <Link className="item" to="/deps">
          Deps
        </Link>
        <Link className="item" to="/improvement">
          Improvement
        </Link>
      </div>
      <Switch>
        <Route
          exact
          path="/mental-model"
          component={() => (
            <Center>
              <MentalModel />
            </Center>
          )}
        />
        <Route
          exact
          path="/class-function"
          component={() => (
            <Center>
              <ClassFunction />
            </Center>
          )}
        />
        <Route
          exact
          path="/cleanup"
          component={() => (
            <Center>
              <Cleanup />
            </Center>
          )}
        />
        <Route
          exact
          path="/function-ref"
          component={() => (
            <Center>
              <FunctionRef />
            </Center>
          )}
        />
        <Route
          exact
          path="/deps"
          component={() => (
            <Center>
              <Deps />
            </Center>
          )}
        />
        <Route
          exact
          path="/improvement"
          component={() => (
            <Center>
              <Improvement />
            </Center>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
