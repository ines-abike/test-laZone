import { Button, HStack } from "@chakra-ui/react"

export default function Demo() {
  return (
    <HStack>
      <Button variant="solid" colorScheme="blue">Solid Button</Button>
      <Button variant="outline" colorScheme="green">Outline Button</Button>
    </HStack>
  )
}