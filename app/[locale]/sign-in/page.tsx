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
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";

const SignIn = () => {
  const t = useTranslations("auth");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("validation.email.email"))
      .required(t("validation.email.required")),
    password: Yup.string()
      .min(8, t("validation.password.min"))
      .required(t("validation.password.required")),
  });

  const onSubmit = () => {
    alert(t("sucessMessage"));
  };

  return (
    <Container maxW="full" p={0}>
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} minH="100vh">
        <Flex align="center" justify="center" px="30px">
          <Box w="full" maxW="447px">
            <Flex direction="column" gap="24px">
              <Image
                w={{ base: "200px", md: "250px", lg: "300px" }}
                h={{ base: "40px", md: "45px", lg: "50px" }}
                src="/logo.svg"
                alt="logo"
              />

              <Flex direction="column" gap="2px">
                <Text textStyle="heading.3">{t("login.title")}</Text>
                <Text textStyle="text.small" color="gray.700">
                  {t("login.subtitle")}
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
                      label={t("login.email")}
                      type="email"
                      placeholder="johndoe@mail.com"
                      name="email"
                    />

                    <InputField
                      label={t("login.password")}
                      type="password"
                      placeholder="Votre mot de passe"
                      name="password"
                    />

                    <Link
                      href="/reset-password"
                      textStyle="text.micro"
                      color="gray.700"
                      mt="4px"
                      textDecorationStyle="unset"
                    >
                      {t("login.forgotPassword")}
                    </Link>

                    <Button type="submit" bg="primary.900">
                      {t("login.submitButton")}
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

export default SignIn;
