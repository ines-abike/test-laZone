"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container maxW="full" p={0} bg="primary.900">
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} minH="100vh">
        <Flex align="center" justify="center" px="30px" py="80px">
          <Box w="full" maxW="447px">
            <Flex direction="column" gap="24px" color="gray.50">
              <Text textStyle="text.small.bold">404 erreur</Text>
              <Image
                w={{ base: "200px", lg: "300px", md: "250px" }}
                h={{ base: "40px", lg: "50px", md: "45px" }}
                src="/logo-2.svg"
                alt="logo"
              />

              <Text textStyle="heading.2">
                Oups.. La page que vous recherchez n&apos;est pas ici.{" "}
              </Text>
              <Text textStyle="text.body">
                Cette page est peut-être ailleurs ou n&apos;a peut-être jamais
                existé. Mais ne vous inquiétez pas, voici un chemin simple vers
                la page d&apos;accueil où vous pourrez certainement retrouver
                votre chemin.
              </Text>
              <Link
                bg="white"
                color="primary.900"
                w="50%"
                textStyle="text.body.bold"
              >
                Retour à la page d&apos;accueil
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Box display={{ base: "none", lg: "block" }} position="relative">
          <Image
            position="absolute"
            right="0"
            bottom="100px"
            w="350px"
            src="/not-found.svg"
            alt="decoration"
          />
          <Image
            position="absolute"
            left="50%"
            bottom="250px"
            w="40px"
            src="/emoji-sad.svg"
            alt="decoration"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default NotFound;
