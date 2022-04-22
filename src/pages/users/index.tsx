import {Text, Checkbox, Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Tbody, Td, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from 'react-query';
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";



export default function UserList(){
  const { data, isLoading, isError, isFetching } = useQuery('users', async() => {
     const response =  await fetch('http://localhost:3000/api/users');
     const data = await response.json();

     const users = data.users.map(user => {
       return {
         id: user.id,
         name: user.name,
         email: user.email,
         createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day:'2-digit',
          month:'long',
          year:'numeric'
        })
       }
     })
     return users;
  })
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/> }
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >Adicionar novo
              </Button>
            </Link>
          </Flex>
          
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : isError ? (
            <Flex justify="center">
              <Text>Falha ao obter os dados dos usuários</Text>
            </Flex>
          ) : (
            <>
            <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
              <Th>Usuário</Th>
              {isWideVersion && <Th>Data de cadastro</Th>}
              <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(user => (
                <Tr key={user.id}>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">{user.name}</Text>
                    <Text fontSize="sm" color="gray.300">{user.email}</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>{user.createdAt}</Td>}
                <Td>
                  { isWideVersion ? <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >Editar
                  </Button> : <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" marginLeft="1" />}
                    >
                  </Button> }
                </Td>
              </Tr>
              ))}
            </Tbody>
          </Table>

          <Pagination />
          </>        
          )}
        </Box>
        
      </Flex>
    </Box>
  )
}