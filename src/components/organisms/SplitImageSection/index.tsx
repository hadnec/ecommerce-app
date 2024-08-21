import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';

interface SplitImageSectionProps {
  images: string[];
}

const SplitImageSection: React.FC<SplitImageSectionProps> = ({ images }) => (
  <Grid templateColumns="repeat(2, 1fr)" height="100vh">
    <GridItem bgImage={`url(${images[0]})`} bgSize="cover" bgPos="center" />
    <GridItem bgImage={`url(${images[1]})`} bgSize="cover" bgPos="center" />
  </Grid>
);

export default SplitImageSection;
