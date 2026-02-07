import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo />
        <DataFetchingDemo />
        <ServerActionsDemo />
        <Suspense fallback={<p>Loading data...</p>}>
          <UsePromiseDemo />
        </Suspense>
      </ClientDemo>
    </main>
  );
}
