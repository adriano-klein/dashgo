import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import {ActiveLink} from "../ActiveLink"

interface NavLinkProps{
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({children, icon, href}: NavLinkProps){
  return(
    <ActiveLink href = {href} passHref>
      <ChakraLink display="flex" alignItems="center">
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
)
}