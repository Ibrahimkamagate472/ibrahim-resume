import { Box, Container, Heading, Text, Flex, List } from '@chakra-ui/react'
const Work = () => {
  return (
    <Box>
      <Container spaceY={4}>
        <Heading size={{ md: '3xl' }}>PROFESSIONAL EXPERIENCE</Heading>
        {/*
        <Flex>
          <Heading>Cuny Tech Prep</Heading>
          <Text ml='auto'>Jul. 2026 - Curr.</Text>
        </Flex>
        */}
        <Box>
          <Heading spaceY={2}>Property Manager</Heading>
          <Box spaceY={4}>
            <Flex>
              <Heading>Ann-Marie’s Rentals | Bronx, NY</Heading>
              <Text ml='auto'>Jul. 2017 - Curr.</Text>
            </Flex>
            <List.Root
              fontWeight='medium'
              spaceY={2}
              maxW={{ base: '50%', md: '700px' }}
            >
              <List.Item>
                Develop a custom property expense tracking application to
                streamline expense management, financial reporting, and property
                performance analysis.
              </List.Item>
              <List.Item>
                Design and maintain digital systems for tracking leases,
                payments, maintenance requests, and property-related expenses.
              </List.Item>
              <List.Item>
                Analyze property income, operating expenses, and occupancy
                trends to support investment and business decisions.
              </List.Item>
            </List.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Work
