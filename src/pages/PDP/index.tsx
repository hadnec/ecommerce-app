// src/pages/ProductDetail/index.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Image, Button, VStack, HStack, IconButton } from '@chakra-ui/react';
import axios from 'axios';
import { FiX } from 'react-icons/fi';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleImageClick = () => {
    if (!isImageFullscreen) {
      setIsImageFullscreen(true);
    } else if (!isZoomed) {
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target as HTMLDivElement;
    const x = (offsetX / clientWidth) * 100;
    const y = (offsetY / clientHeight) * 100;
    setZoomPosition({ x, y });
  };

  const handleCloseFullscreen = () => {
    setIsImageFullscreen(false);
    setIsZoomed(false);
  };

  if (!product) return <Text>Loading...</Text>;

  return (
    <Box p={4} position="relative">
      {/* Контейнер с изображением и деталями */}
      <HStack align="flex-start" spacing={8}>
        {/* Изображение */}
        <Box
          flex="1"
          position="relative"
          overflow="hidden"
          onClick={handleImageClick}
          onMouseMove={handleMouseMove}
          cursor={isZoomed ? 'zoom-out' : 'zoom-in'}
        >
          <Image
            src={product.image}
            alt={product.title}
            transform={isZoomed ? `scale(2) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)` : 'scale(1)'}
            transition="transform 0.3s ease"
            style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
          />
          {isImageFullscreen && (
            <IconButton
              icon={<FiX />}
              aria-label="Close Fullscreen"
              onClick={handleCloseFullscreen}
              position="absolute"
              top="2"
              right="2"
              size="lg"
              colorScheme="red"
            />
          )}
        </Box>

        {/* Детали продукта */}
        <VStack align="flex-start" spacing={4} flex="2">
          <Text fontSize="2xl" fontWeight="bold">{product.title}</Text>
          <Text fontSize="lg" color="gray.500">${product.price}</Text>
          <Text>{product.description}</Text>

          {/* Кнопки для раскрытия информации по категориям */}
          {product.category && (
            <Button onClick={() => alert(`Category: ${product.category}`)}>
              {product.category}
            </Button>
          )}
          {/* Дополнительные кнопки для информации */}
          <Button onClick={() => alert('Additional Info: More details here')}>
            Additional Information
          </Button>
        </VStack>
      </HStack>

      {/* Полноэкранный режим изображения */}
      {isImageFullscreen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.8)"
          zIndex={1000}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={product.image}
            alt={product.title}
            onClick={handleImageClick}
            transform={isZoomed ? `scale(2) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)` : 'scale(1)'}
            transition="transform 0.3s ease"
            style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
          />
          <IconButton
            icon={<FiX />}
            aria-label="Close Fullscreen"
            onClick={handleCloseFullscreen}
            position="absolute"
            top="4"
            right="4"
            size="lg"
            colorScheme="red"
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductDetail;
