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
  Field,
} from "@chakra-ui/react";

const ResetPassword = () => {
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
                <Text textStyle="heading.3">Connectez-vous</Text>
                <Text textStyle="text.small" color="gray.700">
                  Accédez à votre compte
                </Text>
              </Flex>

              <Box as="form">
                <Flex direction="column" gap="16px">
                  <Field.Root>
                    <Field.Label textStyle="text.body">
                      Nouveau mot de passe
                    </Field.Label>
                    <CustomInput type="password" />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label textStyle="text.body">
                      Confirmer votre nouveau mot de passe
                    </Field.Label>
                    <CustomInput type="password" />
                  </Field.Root>

                  <Button bg="primary.900">Connexion</Button>
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

export default ResetPassword;
