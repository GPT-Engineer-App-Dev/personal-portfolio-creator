import { Box, Flex, Text, Button, VStack, Heading, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to My Portfolio</Heading>
        <Text fontSize="xl">Discover my projects, learn about my skills, and get in touch!</Text>
        
        <Flex direction="column" align="center" w="100%">
          <Button colorScheme="teal" size="lg" m={2}>
            About Me
          </Button>
          <Button colorScheme="teal" size="lg" m={2}>
            Portfolio
          </Button>
          <Button colorScheme="teal" size="lg" m={2}>
            Contact
          </Button>
        </Flex>
        
        <Flex justify="center" w="100%" pt={5}>
          <Link href="https://github.com" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="gray" variant="outline">
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="outline" ml={2}>
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:example@example.com">
            <Button leftIcon={<FaEnvelope />} colorScheme="red" variant="outline" ml={2}>
              Email Me
            </Button>
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;