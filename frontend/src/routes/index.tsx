import * as React from "react";
import { FileRoute, Link } from "@tanstack/react-router";

export const Route = new FileRoute("/").createRoute({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div className={`p-2`}>
      <div className={`max-w-xl`}>
        Here is the landing page for non logged in users
      </div>
      <div>It will briefly introduce Feynman and a login try now button</div>
    </div>
  );
}
