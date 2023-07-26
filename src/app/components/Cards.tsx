import {
    Box,
    Flex,
    Stack,
    Heading,
    Link,
    Image,
} from "@chakra-ui/react";
const Cards = () => {
    return (
        <>
        <Box bgColor={'gray.200'} rounded={"full"} height={'12vh'} width={"full"} marginTop={20}>
            <Flex>
                <Box><Heading padding={6} fontSize={'2xl'}>Categories</Heading></Box>
                <Box marginLeft={20}>
                    <Flex padding={4} gap={10}>
                    <Stack>
                        <Link>
                        <Image src="/img/mobile.png" width={7} mx={'auto'} alt="Electronics" />
                        <Heading fontSize={'xl'}>Electronics</Heading>
                        </Link>
                    </Stack>
                    <Stack>
                        <Link>
                        <Image src="/img/grocery.png" width={7} mx={'auto'} alt="Grocery" />
                        <Heading fontSize={'xl'}>Grocery</Heading>
                        </Link>
                    </Stack>
                    <Stack>
                        <Link>
                        <Image src="/img/shirt.png" width={7} mx={'auto'} alt="Fashion" />
                        <Heading fontSize={'xl'}>Fashion</Heading>
                        </Link>
                    </Stack>
                    <Stack>
                        <Link>
                        <Image src="/img/pet.png" width={7} mx={'auto'} alt="Pets" />
                        <Heading fontSize={'xl'}>Pets</Heading>
                        </Link>
                    </Stack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        </>
    )
}
export default Cards;