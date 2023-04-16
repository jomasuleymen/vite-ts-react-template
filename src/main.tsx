import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const modalRoot = document.getElementById("root") as HTMLElement;
const root = createRoot(modalRoot);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
