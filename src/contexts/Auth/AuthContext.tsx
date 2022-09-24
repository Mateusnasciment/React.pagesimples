import {createContext} from 'react';
import { User } from "../../types/User";

 interface AuthContextType { 
    user: User | null 
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
 }
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export {AuthContextType, AuthContext};
  