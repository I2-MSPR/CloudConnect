import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Connected,
  CreateLoginContext,
  CreatePasswordContext,
} from "./infrastructure/Context/useContext.tsx";
import { useState } from "react";

const queryClient = new QueryClient();

function RootProvider() {
  const [connected, setConnected] = useState<boolean>(false);
  const [qrcode, setQrcode] = useState<string>("");
  const [createLogin, setCreateLogin] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Connected.Provider value={{ connected, setConnected }}>
        <CreateLoginContext.Provider value={{ createLogin, setCreateLogin }}>
          <CreatePasswordContext.Provider value={{ qrcode, setQrcode }}>
            <App />
          </CreatePasswordContext.Provider>
        </CreateLoginContext.Provider>
      </Connected.Provider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<RootProvider />);
