import { Box, Container, Heading, Text, Flex } from '@chakra-ui/react'
const Work = () => {
  return (
    <Box>
      <Container spaceY={4}>
        <Heading size={{ md: '3xl' }}>PROFESSIONAL EXPERIENCE</Heading>
        <Flex>
          <Heading>Cuny Tech Prep</Heading>
          <Text ml='auto'>Jul. 2026 - Curr.</Text>
        </Flex>
      </Container>
    </Box>
  )
}
export default Work
