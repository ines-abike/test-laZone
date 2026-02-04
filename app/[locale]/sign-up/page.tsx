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
import { useTranslations } from "next-intl";

const SignUp = () => {
  const t = useTranslations("auth");

  const initialValues = {
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .max(15, t("validation.firstname.max"))
      .required(t("validation.firstname.required")),
    lastname: Yup.string()
      .max(20, t("validation.lastname.max"))
      .required(t("validation.lastname.required")),
    email: Yup.string()
      .email(t("validation.email.email"))
      .required(t("validation.email.required")),
    password: Yup.string()
      .min(8, t("validation.password.min"))
      .required(t("validation.password.required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("validation.confirmPassword.oneOf"))
      .required(t("validation.confirmPassword.required")),
  });

  const onSubmit = () => {
    alert(t("successMessage"));
  };

  return (
    <Container maxW="full" p={0}>
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} minH="100vh">
        <Flex align="center" justify="center" px="30px" py="80px">
          <Box w="full" maxW="447px">
            <Flex direction="column" gap="24px">
              <Image
                w={{ base: "200px", md: "250px", lg: "300px" }}
                h={{ base: "40px", md: "45px", lg: "50px" }}
                src="/logo.svg"
                alt="logo"
              />

              <Flex direction="column" gap="2px">
                <Text textStyle="heading.3">{t("signup.title")}</Text>
                <Text textStyle="text.small" color="gray.700">
                  {t("signup.subtitle")}
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
                        label={t("signup.lastName")}
                        placeholder="Doe"
                      />
                      <InputField
                        name="firstname"
                        type="text"
                        label={t("signup.firstName")}
                        placeholder="John"
                      />
                    </Flex>

                    <InputField
                      name="email"
                      type="email"
                      label={t("signup.email")}
                      placeholder="johndoe@mail.com"
                    />

                    <InputField
                      name="password"
                      type="password"
                      label={t("signup.password")}
                      placeholder="------"
                      helperText="(8 caractères minimum)"
                    />

                    <InputField
                      name="confirmPassword"
                      type="password"
                      label={t("signup.confirmPassword")}
                      placeholder="------"
                    />

                    <Button type="submit" bg="primary.900">
                      {t("signup.submitButton")}
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
