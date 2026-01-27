import { Box, Image } from "@chakra-ui/react";
import LanguageSwitcher from "./LanguageSwitcher";

const SideDecoration = () => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      bg="primary.900"
      position="relative"
    >
      <LanguageSwitcher />
      <Image
        position="absolute"
        right="0"
        bottom="100px"
        w="350px"
        src="/decoration-sidepart.svg"
        alt="decoration"
      />
    </Box>
  );
};

export default SideDecoration;
