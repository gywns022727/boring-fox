import { createContext } from "react";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CountType {
  isCount: number;
  setIsCount: React.Dispatch<React.SetStateAction<number>>;
}

export const LoadingContext = createContext<LoadingType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const CountContext = createContext<CountType>({
  isCount: 1,
  setIsCount: () => {},
});
