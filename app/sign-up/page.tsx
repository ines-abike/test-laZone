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
} from "@chakra-ui/react";

const SignUp = () => {
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
                <Text textStyle="heading.3">Inscrivez-vous</Text>
                <Text textStyle="text.small" color="gray.700">
                  Créez votre compte
                </Text>
              </Flex>

              <Box as="form">
                <Flex direction="column" gap="16px">
                  <Flex direction="row" gap="16px">
                    <CustomInput placeholder="Doe" label="Nom" />
                    <CustomInput placeholder="John" label="Prenom" />
                  </Flex>

                  <CustomInput
                    type="email"
                    placeholder="JohnDoe@mail.com"
                    label="Email"
                  />

                  <CustomInput
                    type="password"
                    helperText="(8 caractères minimum)"
                    placeholder="------"
                    label="Mot de passe"
                  />

                  <CustomInput
                    type="password"
                    placeholder="------"
                    label="Répéter le mot de passe"
                  />

                  <Button variant="primary" colorPalette="primary">
                    S&apos;enregistrer
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <SideDecoration />
      </Grid>
    </Container>
  );
};

export default SignUp;
