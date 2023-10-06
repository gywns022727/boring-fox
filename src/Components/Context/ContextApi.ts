import { createContext } from "react";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingType>({
  isLoading: false,
  setIsLoading: () => {},
});

interface CountType {
  isCount: number;
  setIsCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CountContext = createContext<CountType>({
  isCount: 1,
  setIsCount: () => {},
});
