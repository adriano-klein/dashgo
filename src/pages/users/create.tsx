import {Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Table, VStack} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";



export default function CreateUser(){
  return(
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="248px" spacing={["6","8"]} w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" label="Email" type="email"/>
            </SimpleGrid>
            <SimpleGrid minChildWidth="248px" spacing={["6","8"]} w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input name="password_confirmation" label="Confirmação da senha" type="password"/>
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack>
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
                <Button colorScheme="pink">Salvar</Button>
              
            </HStack>

          </Flex>
        </Box>
        
      </Flex>
    </Box>
  )
}