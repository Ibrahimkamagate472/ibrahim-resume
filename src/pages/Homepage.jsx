import {
  Box,
  SimpleGrid,
  GridItem,
  Heading,
  Center,
  Separator,
} from '@chakra-ui/react'
import { Contact, School, Projects, Skills, Work } from '../components/index'
const Homepage = () => {
  return (
    <Box ml={10} mr={10} spaceY={4} maxW='100vw' overflowX='hidden'>
      <SimpleGrid columns={{ base: 2, md: 4 }} mt={10}>
        <GridItem
          colSpan={{ base: 1, md: 3 }}
          display='flex'
          justifyContent='center'
        >
          <Center>
            <Heading
              size={{ base: '3xl', md: '5xl' }}
              textAlign='center'
              mr={{ base: 2 }}
            >
              Ibrahim Kamagate
            </Heading>
          </Center>
        </GridItem>

        <GridItem colSpan={1}>
          <Contact />
        </GridItem>
      </SimpleGrid>
      <Separator
        orientation='horizontal'
        borderColor='blackAlpha.950'
        size='sm'
        variant='solid'
        mt={5}
        mb={5}
      />
      <School />
      <Work />
      <Projects />
      <Skills />
    </Box>
  )
}
export default Homepage
