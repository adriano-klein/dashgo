import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link'

interface NavLinkProps{
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({children, icon, href}: NavLinkProps){
  return(
    <Link href = {href} passHref>
      <ChakraLink display="flex" alignItems="center">
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
)
}