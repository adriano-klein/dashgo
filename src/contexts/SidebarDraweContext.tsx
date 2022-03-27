import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarContextProviderProps {
  children: ReactNode;
}
type SidebarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarContextProvider({children}:SidebarContextProviderProps){
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose   
  },[router.asPath])

  return(
    <SidebarDrawerContext.Provider value = {disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

function userDisclosure() {
  throw new Error("Function not implemented.");
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
