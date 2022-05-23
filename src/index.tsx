import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

const rootElement: HTMLElement | null = document.getElementById("root")!;
const root: ReactDOMClient.Root | null =
  ReactDOMClient.createRoot(rootElement)!;

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
