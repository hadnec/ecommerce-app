// src/components/molecules/ImageZoom.tsx

import React, { useState } from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

interface ImageZoomProps {
  src: string;
  alt?: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleImageClick = () => {
    if (!isFullScreen) {
      setIsFullScreen(true);
    } else {
      setIsZoomed(!isZoomed);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setPosition({ x, y });
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullScreen(false);
    setIsZoomed(false);
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        cursor="pointer"
        onClick={handleImageClick}
        _hover={{ opacity: 0.8 }}
      />

      {isFullScreen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.9)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="1000"
          cursor={isZoomed ? 'zoom-out' : 'zoom-in'}
          onClick={handleImageClick}
          onMouseMove={handleMouseMove}
        >
          <IconButton
            aria-label="Close"
            icon={<CloseIcon />}
            position="absolute"
            top="1rem"
            right="1rem"
            onClick={handleClose}
            zIndex="1001"
            bg="whiteAlpha.800"
            _hover={{ bg: 'whiteAlpha.900' }}
          />
          <Box
            overflow="hidden"
            width="80%"
            height="80%"
            position="relative"
          >
            <Image
              src={src}
              alt={alt}
              position="absolute"
              top="0"
              left="0"
              width={isZoomed ? '200%' : '100%'}
              height={isZoomed ? '200%' : '100%'}
              transform={
                isZoomed
                  ? `translate(-${position.x}%, -${position.y}%)`
                  : 'translate(0, 0)'
              }
              transition="transform 0.1s"
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ImageZoom;
