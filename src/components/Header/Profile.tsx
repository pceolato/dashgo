import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Pedro Ceolato</Text>
                <Text color="gray.300" fontSize="small">
                    pedroceolato2002@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Pedro Ceolato" src="https://github.com/pceolato.png" />
        </Flex>
    );
}