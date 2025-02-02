import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

interface CarouselComponentProps {
  images: { id: string; image: string }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }: { item: { id: string; image: string } }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        width={screenWidth}
        height={500}
        onSnapToItem={(index) => setActiveIndex(index)}
        autoPlay
        autoPlayInterval={3000}
        loop
        pagingEnabled
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Ensure this is relative for absolute positioning of children
    height: 500, // Set a fixed height for the container
  },
  slide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, // Adjust this value to position the dots
    zIndex: 1, // Bring the pagination to the front
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Temporary background to debug visibility
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent dots
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default CarouselComponent;