import { Box, Heading, Text, Flex, Container } from '@chakra-ui/react'
const School = () => {
  return (
    <Box>
      <Container spaceY={4}>
        <Heading size={{ base: '2xl', md: '3xl' }}> EDUCATION </Heading>
        <Box>
          <Heading>Hunter College</Heading>
          <Flex>
            <Text textIndent={2}>
              Bachelor of Arts in Computer Science, Minor in Mathematics
            </Text>
            <Text ml='auto'>Aug. 2024 - Dec. 2026</Text>
          </Flex>
        </Box>
        <Box>
          <Heading>Hostos Community College</Heading>
          <Flex>
            <Text textIndent={2}>
              Associate of Applied Science in Game Design
            </Text>
            <Text ml='auto'>Aug. 2019 - Jan. 2021</Text>
          </Flex>
        </Box>
        <Heading size={{ base: '2xl', md: '3xl' }}>RELEVANT COURSEWORK</Heading>
        <Text w={{ sm: '300px', md: '700px' }}>
          Intro to Computer Science, Object-Oriented Programming, Software
          Analysis and Design I, Software Analysis and Design II, Software
          Analysis and Design III, Discrete Structures, Computer Architecture I,
          Computer Architecture II, Computer Theory 1, Operating Systems,
          Database Management, Practical Web Development, Software Engineering,
          Network Security, Technical Writing I
        </Text>
      </Container>
    </Box>
  )
}
export default School
