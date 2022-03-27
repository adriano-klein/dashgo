import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
  }

export function Profile({showProfileData = true}:ProfileProps){
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Adriano Klein</Text>
        <Text
          color='gray.300'
          fontSize="small">adriano25klein@gmail.com
        </Text>
      </Box>
      )}
      <Avatar size="md" name="Adriano Klein" src="https://github.com/adriano-klein.png"/>
    </Flex>
  )
}