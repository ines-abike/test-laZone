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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  const formik = useFormik({
    initialValues: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: () => {
      alert("Votre compte a été créer avec succès !");
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
                <Text textStyle="heading.3">Inscrivez-vous</Text>
                <Text textStyle="text.small" color="gray.700">
                  Créez votre compte
                </Text>
              </Flex>

              <form onSubmit={formik.handleSubmit}>
                <Flex direction="column" gap="16px">
                  <Flex direction="row" gap="16px">
                    <CustomInput
                      name="lastname"
                      placeholder="Doe"
                      type="text"
                      label="Nom"
                      value={formik.values.lastname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      invalid={
                        !!(formik.errors.lastname && formik.touched.lastname)
                      }
                      error={
                        formik.touched.lastname && formik.errors.lastname
                          ? formik.errors.lastname
                          : ""
                      }
                    />

                    <CustomInput
                      name="firstname"
                      placeholder="John"
                      type="text"
                      label="Prénom"
                      value={formik.values.firstname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      invalid={
                        !!(formik.errors.firstname && formik.touched.firstname)
                      }
                      error={
                        formik.touched.firstname && formik.errors.firstname
                          ? formik.errors.firstname
                          : ""
                      }
                    />
                  </Flex>
                  <CustomInput
                    name="email"
                    type="email"
                    placeholder="johndoe@mail.com"
                    label="Email"
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
                    name="password"
                    type="password"
                    label="Mot de passe"
                    helperText="(8 caractères minimum)"
                    placeholder="------"
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
                    placeholder="------"
                    label="Répéter le mot de passe"
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

                  <Button type="submit" bg="primary.900">
                    S&apos;enregistrer
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

export default SignUp;
