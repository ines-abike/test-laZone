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
import { useTranslations } from "next-intl";

const ResetPassword = () => {
  const t = useTranslations("auth");

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, t("validation.password.min"))
      .required(t("validation.password.required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("validation.confirmPassword.oneOf"))
      .required(t("validation.confirmPassword.required")),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const onSubmit = () => {
    alert(t("sucessMessage"));
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
                <Heading textStyle="heading.3">
                  {t("reset-password.title")}
                </Heading>
                <Text textStyle="text.small" color="gray.700">
                  {t("reset-password.subtitle")}
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
                      label={t("reset-password.newPassword")}
                      placeholder="------"
                      name="password"
                    />
                    <InputField
                      type="password"
                      label={t("reset-password.confirmNewPassword")}
                      placeholder="------"
                      name="confirmPassword"
                    />
                    <Button type="submit" bg="primary.900">
                      {t("reset-password.submitButton")}
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
