import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Pedro Ceolato</Text>
                <Text color="gray.300" fontSize="small">
                    pedroceolato2002@gmail.com
                </Text>
            </Box>
            )}

            <Avatar size="md" name="Pedro Ceolato" src="https://github.com/pceolato.png" />
        </Flex>
    );
}