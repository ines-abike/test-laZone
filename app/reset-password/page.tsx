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
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Doit contenir au moins 8 caractères")
    .required("Champ obligatoire"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre")
    .required("Champ obligatoire"),
});
const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: () => {
      alert("Votre mot de passe est réinitialisé !");
    },
  });

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

              <form onSubmit={formik.submitForm}>
                <Flex direction="column" gap="16px">
                  <CustomInput
                    type="password"
                    label="Nouveau mot de passe"
                    placeholder="------"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    invalid={
                      !!(formik.errors.password && formik.touched.password)
                    }
                    error={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : ""
                    }
                  />
                  <CustomInput
                    name="confirmPassword"
                    type="password"
                    label="Confirmer votre nouveau mot de passe"
                    placeholder="------"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    invalid={
                      !!(
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
                      )
                    }
                    error={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? formik.errors.confirmPassword
                        : ""
                    }
                  />
                  <Button
                    variant="primary"
                    colorPalette="primary"
                    type="submit"
                  >
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

export default ResetPassword;
