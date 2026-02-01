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
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues = {
  lastname: "",
  firstname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = () => {
  alert("Votre compte a été créer avec succès !");
};

const validationSchema = Yup.object({
  firstname: Yup.string()
    .max(15, "Doit contenir au maximum 15 caractères")
    .required("Champ obligatoire"),
  lastname: Yup.string()
    .max(20, "Doit contenir au maximum 20 caractères")
    .required("Champ obligatoire"),
  email: Yup.string()
    .email("Adresse e-mail invalide")
    .required("Champ obligatoire"),
  password: Yup.string()
    .min(8, "Doit contenir au moins 8 caractères")
    .required("Champ obligatoire"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre")
    .required("Champ obligatoire"),
});

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

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Flex direction="column" gap="16px">
                    <Flex direction="row" gap="16px">
                      <InputField
                        name="lastname"
                        type="text"
                        label="Nom"
                        placeholder="Doe"
                      />

                      <InputField
                        name="firstname"
                        type="text"
                        label="Prénom"
                        placeholder="John"
                      />
                    </Flex>

                    <InputField
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="johndoe@mail.com"
                    />

                    <InputField
                      name="password"
                      type="password"
                      label="Mot de passe"
                      placeholder="------"
                      helperText="(8 caractères minimum)"
                    />

                    <InputField
                      name="confirmPassword"
                      type="password"
                      label="Répéter le mot de passe"
                      placeholder="------"
                    />
                    <Button type="submit" bg="primary.900">
                      S&apos;enregistrer
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

export default SignUp;
