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
  Field,
  Link,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";

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
                    <Link
                      href="/reset-password"
                      textStyle="text.micro"
                      color="gray.700"
                      mt="4px"
                      textDecorationStyle="unset"
                    >
                      {t("forgotPassword")}
                    </Link>
                  </Field.Root>

                  <Button bg="primary.900">{t("submitButton")}</Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <SideDecoration />
      </Grid>
    </Container>
  );
};

export default SignIn;
