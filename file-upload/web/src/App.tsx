import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import { createClient, Provider } from "urql";
import { PageIndex } from "./pages";

const client = createClient({
  url: "http://localhost:8080/query",
  exchanges: [multipartFetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <PageIndex />
    </Provider>
  );
}

export default App;
