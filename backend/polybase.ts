import { Polybase } from "@polybase/client";

const db = new Polybase({
  defaultNamespace: "matchcast",
});

console.log("testing db", db);
