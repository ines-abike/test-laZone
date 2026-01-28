"use client";
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
import InputField from "./ui/input/InputField";
import * as Yup from "yup";
import { Form, Formik } from "formik";

const ResetPasswordForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Adresse e-mail invalide")
      .required("Champ obligatoire"),
    password: Yup.string()
      .min(8, "Doit contenir au moins 8 caractères")
      .required("Champ obligatoire"),
  });

  const onSubmit = () => {
    alert("Mot de passe réinitialiser !");
  };

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

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Flex direction="column" gap="16px">
                    <InputField
                      type="password"
                      label="Nouveau mot de passe"
                      name="password"
                      placeholder="------"
                    />
                    <InputField
                      type="password"
                      label="Confirmer votre nouveau mot de passe"
                      name="confim-password"
                      placeholder="------"
                    />
                    <Button variant="primary" colorPalette="primary">
                      Connexion
                    </Button>
                  </Flex>
                </Form>
              </Formik>
            </Flex>
          </Box>
        </Flex>
        <SideDecoration />
      </Grid>
    </Container>
  );
};

export default ResetPasswordForm;
