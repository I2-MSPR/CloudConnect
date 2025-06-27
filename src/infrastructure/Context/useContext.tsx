import { createContext } from "react";

interface ConnectedContextType {
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Connected = createContext<ConnectedContextType>({
  connected: false,
  setConnected: () => {},
});

interface CreateLoginContextType {
  createLogin: boolean;
  setCreateLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateLoginContext = createContext<CreateLoginContextType>({
  createLogin: false,
  setCreateLogin: () => {},
});
