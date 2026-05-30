import { Badge, Box, Heading, Container } from '@chakra-ui/react'
const Skills = () => {
  return (
    <Box>
      <Container>
        <Heading size={{ md: '3xl' }}>TECHNICAL SKILLS</Heading>
        <Box>
          <Heading pb={2}>Languages</Heading>
          <Badge mx={1}>C++</Badge>
          <Badge mx={1}>Pyton</Badge>
          <Badge mx={1}>JavaScript</Badge>
          <Badge mx={1}>SQL</Badge>
          <Badge mx={1}>HTML</Badge>
          <Badge mx={1}>CSS</Badge>
        </Box>
        <Box py={2}>
          <Heading pb={2}>Frameworks/Libraries</Heading>
          <Badge mx={1}>React</Badge>
          <Badge mx={1}>Express</Badge>
        </Box>
        <Box py={2}>
          <Heading pb={2}>Databases</Heading>
          <Badge mx={1}>PostgreSQL</Badge>
          <Badge mx={1}>Prisma</Badge>
        </Box>
        <Box py={2} pb={10}>
          <Heading pb={2}>Tools</Heading>
          <Badge mx={1}>Git</Badge>
          <Badge mx={1}>Github</Badge>
          <Badge mx={1}>VS Code</Badge>
        </Box>
      </Container>
    </Box>
  )
}
export default Skills
