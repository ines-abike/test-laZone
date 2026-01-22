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
  Link,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Adresse e-mail invalide")
    .required("Champ obligatoire"),
  password: Yup.string()
    .min(8, "Doit contenir au moins 8 caractères")
    .required("Champ obligatoire"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

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
                <Text textStyle="heading.3">Connectez-vous</Text>
                <Text textStyle="text.small" color="gray.700">
                  Accédez à votre compte
                </Text>
              </Flex>

              <form onSubmit={formik.handleSubmit}>
                <Flex direction="column" gap="16px">
                  <CustomInput
                    type="email"
                    placeholder="johndoe@mail.com"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    invalid={!!(formik.errors.email && formik.touched.email)}
                    error={
                      formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : ""
                    }
                  />

                  <CustomInput
                    label="Mot de passe"
                    type="password"
                    placeholder="Votre mot de passe"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    invalid={
                      !!(formik.errors.password && formik.touched.password)
                    }
                    error={
                      formik.touched.email && formik.errors.password
                        ? formik.errors.password
                        : ""
                    }
                  />
                  <Link
                    href="/reset-password"
                    textStyle="text.micro"
                    color="gray.700"
                    mt="4px"
                  >
                    Mot de passe oublié ?
                  </Link>

                  <Button type="submit" bg="primary.900">
                    Se connecter
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

export default SignIn;
