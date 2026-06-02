import {
  Box,
  Link,
  Text,
  Separator,
  Button,
  Stack,
  Container,
  Icon,
} from '@chakra-ui/react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { SiHandshake } from 'react-icons/si'
import { MoveRight } from 'lucide-react'
const Contact = () => {
  return (
    <Box display='flex'>
      <Separator
        orientation='vertical'
        borderColor='blackAlpha.950'
        size='sm'
        variant='solid'
      />
      <Container>
        <Box>
          <Text>Bronx, NY, 10451</Text>
          <Link
            href='mailto:ibrahim3114@gmail.com'
            _hover={{ color: 'gray.400' }}
            display='block'
          >
            Ibrahimk3114@gmail.com
          </Link>
          <Link
            href='mailto:ibrahim.kamagate472@myhunter.cuny.edu'
            _hover={{ color: 'gray.400' }}
            display='block'
          >
            ibrahim.kamagate472@myhunter.cuny.edu
          </Link>
          <Stack direction='row'>
            <Link
              as='a'
              target='_blank'
              href='https://github.com/Ibrahimkamagate472'
              _hover={{ color: 'gray.400' }}
            >
              <Icon as={FaGithubSquare} boxSize={{ base: 6, md: 8 }} />
            </Link>
            <Link
              as='a'
              target='_blank'
              href='https://linkedin.com/in/ibrahim-k-b36422264'
              _hover={{ color: 'gray.400' }}
            >
              <Icon as={FaLinkedin} boxSize={{ base: 6, md: 8 }} />
            </Link>
            <Link
              as='a'
              target='_blank'
              href='https://app.joinhandshake.com/profiles/het24e'
              _hover={{ color: 'gray.400' }}
            >
              <Icon as={SiHandshake} boxSize={{ base: 5, md: 8 }} />
            </Link>
            <Button
              as='a'
              target='_blank'
              href='https://ibrahimkamagate472.github.io/ibrahim-portfolio/'
              variant='ghost'
              w='100px'
              _hover={{ color: 'gray.400' }}
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
            >
              Portfolio
              <MoveRight />
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
export default Contact
