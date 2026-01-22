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
  Link,
} from "@chakra-ui/react";
<<<<<<< HEAD:app/sign-in/page.tsx
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = () => {
  alert("Heureux de vous retrouver");
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Adresse e-mail invalide")
    .required("Champ obligatoire"),
  password: Yup.string()
    .min(8, "Doit contenir au moins 8 caractères")
    .required("Champ obligatoire"),
});
=======
import { useTranslations } from "next-intl";
>>>>>>> 90dcb2b (feat: add en/fr app translation with next-intl):app/[locale]/sign-in/page.tsx

const SignIn = () => {
  const t = useTranslations("auth.login");

  return (
    <Container maxW="full" p={0}>
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} minH="100vh">
        <Flex align="center" justify="center" px="30px">
          <Box w="full" maxW="447px">
            <Flex direction="column" gap="24px">
              <Image
                w={{ base: "200px", lg: "300px", md: "250px" }}
                h={{ base: "40px", lg: "50px", md: "45px" }}
                src="/logo.svg"
                alt="logo"
              />

              <Flex direction="column" gap="2px">
                <Text textStyle="heading.3">{t("title")}</Text>
                <Text textStyle="text.small" color="gray.700">
                  {t("subtitle")}
                </Text>
              </Flex>

<<<<<<< HEAD:app/sign-in/page.tsx
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Flex direction="column" gap="16px">
                    <InputField
                      label="Email"
                      type="email"
                      placeholder="johndoe@mail.com"
                      name="email"
                    />

                    <InputField
                      label="Mot de passe"
                      type="password"
                      placeholder="Votre mot de passe"
                      name="password"
                    />
=======
              <Box as="form">
                <Flex direction="column" gap="16px">
                  <Field.Root>
                    <Field.Label textStyle="text.body">
                      {t("email")}
                    </Field.Label>
                    <CustomInput type="email" placeholder="JohnDoe@mail.com" />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label textStyle="text.body">
                      {t("password")}
                    </Field.Label>
                    <CustomInput type="password" placeholder="------" />
>>>>>>> 90dcb2b (feat: add en/fr app translation with next-intl):app/[locale]/sign-in/page.tsx
                    <Link
                      href="/reset-password"
                      textStyle="text.micro"
                      color="gray.700"
                      mt="4px"
                      textDecorationStyle="unset"
                    >
                      {t("forgotPassword")}
                    </Link>

<<<<<<< HEAD:app/sign-in/page.tsx
                    <Button type="submit" bg="primary.900">
                      Se connecter
                    </Button>
                  </Flex>
                </Form>
              </Formik>
=======
                  <Button bg="primary.900">{t("submitButton")}</Button>
                </Flex>
              </Box>
>>>>>>> 90dcb2b (feat: add en/fr app translation with next-intl):app/[locale]/sign-in/page.tsx
            </Flex>
          </Box>
        </Flex>
        <SideDecoration />
      </Grid>
    </Container>
  );
};

export default SignIn;
