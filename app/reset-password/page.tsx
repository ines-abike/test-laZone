"use client";
import InputField from "@/components/ui/input/InputField";
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
import { Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const onSubmit = () => {
  alert("Votre mot de passe est réinitialisé !");
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Doit contenir au moins 8 caractères")
    .required("Champ obligatoire"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre")
    .required("Champ obligatoire"),
});

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
                      placeholder="------"
                      name="password"
                    />
                    <InputField
                      name="confirmPassword"
                      type="password"
                      label="Confirmer votre nouveau mot de passe"
                      placeholder="------"
                    />
                    <Button
                      variant="primary"
                      colorPalette="primary"
                      type="submit"
                    >
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

export default ResetPassword;
