import { createContext, useContext, useState, ReactNode } from 'react';

interface WelcomeContextType {
  welcomeShown: boolean;
  setWelcomeShown: (value: boolean) => void;
}

const WelcomeContext = createContext<WelcomeContextType | undefined>(undefined);

export const useWelcome = (): WelcomeContextType => {
  const context = useContext(WelcomeContext);
  if (!context) {
    throw new Error('useWelcome must be used within a WelcomeProvider');
  }
  return context;
};

interface WelcomeProviderProps {
  children: ReactNode;
}

const WelcomeProvider = ({ children }: WelcomeProviderProps): JSX.Element => {
  const [welcomeShown, setWelcomeShown] = useState(false);

  const value: WelcomeContextType = {
    welcomeShown,
    setWelcomeShown,
  };

  return <WelcomeContext.Provider value={value}>{children}</WelcomeContext.Provider>;
};

export default WelcomeProvider;