import {Text, Checkbox, Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Tbody, Td, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";


export default function UserList(){
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, isFetching } = useUsers(page)
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handlePrefetchUser(userId: string){
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10 //10 minutos
    });

  }

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
            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >Adicionar novo
              </Button>
            </NextLink>
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
              {data.users.map(user => (
                <Tr key={user.id}>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                      <Text fontWeight="bold">{user.name}</Text>
                    </Link>
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

          <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage}/>
          </>        
          )}
        </Box>
        
      </Flex>
    </Box>
  )
}