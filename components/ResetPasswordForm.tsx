"use client";
import CustomInput from "@/components/ui/input/CustomInput";
import SideDecoration from "@/components/ui/SideDecoration";
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";

const ResetPasswordForm = () => {
  return (
    <Container maxW="full" p={0}>
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} minH="100vh">
        <Flex align="center" justify="center" px="30px" py="80px">
          <Box w="full" maxW="447px">
            <Flex direction="column" gap="24px">
              <Image
                w={{ base: "200px", lg: "300px", md: "250px" }}
                h={{ base: "40px", lg: "50px", md: "45px" }}
                src="/logo.svg"
                alt="logo"
              />

              <Flex direction="column" gap="2px">
                <Heading textStyle="heading.3">Connectez-vous</Heading>
                <Text textStyle="text.small" color="gray.700">
                  Accédez à votre compte
                </Text>
              </Flex>

              <form>
                <Flex direction="column" gap="16px">
                  <CustomInput
                    type="password"
                    label="Nouveau mot de passe"
                    textStyle="text.body"
                    placeholder="------"
                  />
                  <CustomInput
                    type="password"
                    label="Confirmer votre nouveau mot de passe"
                    placeholder="------"
                  />
                  <Button variant="primary" colorPalette="primary">
                    Connexion
                  </Button>
                </Flex>
              </form>
            </Flex>
          </Box>
        </Flex>
        <SideDecoration />
      </Grid>
    </Container>
  );
};

export default ResetPasswordForm;
