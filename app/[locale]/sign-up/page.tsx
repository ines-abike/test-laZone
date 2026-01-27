import { useTranslations } from "next-intl";
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
} from "@chakra-ui/react";

const SignUp = () => {
  const t = useTranslations("auth.signup");

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
                <Text textStyle="heading.3">{t("title")}</Text>
                <Text textStyle="text.small" color="gray.700">
                  {t("subtitle")}
                </Text>
              </Flex>

              <Box as="form">
                <Flex direction="column" gap="16px">
                  <Flex direction="row" gap="16px">
                    <Field.Root>
                      <Field.Label textStyle="text.body">
                        {t("lastName")}
                      </Field.Label>
                      <CustomInput placeholder="Doe" />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label textStyle="text.body">
                        {t("firstName")}
                      </Field.Label>
                      <CustomInput placeholder="John" />
                    </Field.Root>
                  </Flex>

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
                    <CustomInput type="password" />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label textStyle="text.body">
                      {t("confirmPassword")}
                    </Field.Label>
                    <CustomInput type="password" />
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

export default SignUp;
