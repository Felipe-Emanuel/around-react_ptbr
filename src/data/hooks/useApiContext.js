import { useContext } from "react";
import { APIContext } from '../../contexts/APIContext'

export const useApiContext = () => useContext(APIContext);
