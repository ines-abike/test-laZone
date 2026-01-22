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
} from "@chakra-ui/react";

const ResetPassword = () => {
  const t = useTranslations("auth.reset-password");

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

              <form>
                <Flex direction="column" gap="16px">
                  <CustomInput
                    type="password"
                    label={t("newPassword")}
                    textStyle="text.body"
                    placeholder="••••••••"
                  />
                  <CustomInput
                    type="password"
                    label={t("confirmNewPassword")}
                    placeholder="••••••••"
                  />
                  <Button variant="primary" colorPalette="primary">
                    {t("submitButton")}
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
