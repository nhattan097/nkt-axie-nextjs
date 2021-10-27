import { Box, Heading, Text, Image, Center, Grid } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import { Pet } from '~/interfaces/pet';
import { Player } from '~/interfaces/player';
import CardPlayer from '~/components/LandingPage/CardPlayer';
import CardAxie from '~/components/LandingPage/CardAxie';
import { best_players, best_team } from '~/data/sample';

// install Swiper modules
SwiperCore.use([Pagination]);

const RightPage = () => {
  return (
    <Box position="relative" w="half" bg="primaryDark" color="white" py="50px">
      <Image
        position="absolute"
        left="140px"
        top="52px"
        alt=""
        src="/svg/thunder-ball.svg"
      />
      <Image
        position="absolute"
        right="85px"
        top="138px"
        alt=""
        src="/svg/heart-ball.svg"
      />
      <Image
        position="absolute"
        left="178px"
        bottom="186px"
        alt=""
        src="/svg/fire-ball.svg"
      />
      <Image
        position="absolute"
        right="152px"
        bottom="136px"
        alt=""
        src="/svg/star-ball.svg"
        zIndex="1"
      />
      <Image
        position="absolute"
        top="228px"
        left="28px"
        alt=""
        src="/svg/dot-bg.svg"
      />
      <Image
        position="absolute"
        top="0"
        right="0"
        alt=""
        src="/svg/triangle-bg.svg"
      />
      <Image
        position="absolute"
        bottom="0"
        right="0"
        alt=""
        src="/svg/rectangle-bg.svg"
      />
      <Swiper
        spaceBetween={100}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Box>
            <Center my="130px" flexDirection="column">
              <Heading fontSize="2xl" mb="48px" fontWeight="700">
                Best Team of the month
              </Heading>
              <Text mb="40px">{best_team.player.name}</Text>
              <Grid templateColumns="repeat(3, 176px)" gap="18px" zIndex="1">
                {best_team.pets.map((pet: Pet) => (
                  <CardAxie key={pet.id} {...pet} />
                ))}
              </Grid>
            </Center>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Center mt="130px" flexDirection="column">
              <Heading fontSize="2xl" mb="64px" fontWeight="bold">
                Top 3 best player
              </Heading>
              <Grid templateRows="repeat(3, 100px)" gap="18px" zIndex="1">
                {best_players.players.map((player: Player) => (
                  <CardPlayer key={player.id} {...player} />
                ))}
              </Grid>
            </Center>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default RightPage;
