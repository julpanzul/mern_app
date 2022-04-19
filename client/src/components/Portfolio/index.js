// Chakra imports
import { Grid, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Card, CardHeader, CardBody } from '../Card/Card';
// Assets
import avatar2 from '../../assets/img/avatars/avatar2.png';
import avatar4 from '../../assets/img/avatars/avatar4.png';
import avatar6 from '../../assets/img/avatars/avatar6.png';
import imageArchitect1 from '../../assets/img/ImageArchitect1.png';
import imageArchitect2 from '../../assets/img/ImageArchitect2.png';
import imageArchitect3 from '../../assets/img/ImageArchitect3.png';
// Custom components
import React from 'react';
import ProjectCard from './components/ProjectCard';
import Form from '../Form/Form';

const Projects = ({ title, description }) => {
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Card p="16px" my="24px">
      <CardHeader p="12px 5px" mb="12px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500" fontWeight="400">
            {description}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px="5px">
        <Grid
          templateColumns={{ sm: '1fr', md: '1fr 1fr', xl: 'repeat(4, 1fr)' }}
          templateRows={{ sm: '1fr 1fr 1fr auto', md: '1fr 1fr', xl: '1fr' }}
          gap="24px"
        >
          <ProjectCard
            image={imageArchitect1}
            name={'Project #1'}
            category={'Modern'}
            description={
              'As Uber works through a huge amount of internal management turmoil.'
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
          <Form />
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Projects;
