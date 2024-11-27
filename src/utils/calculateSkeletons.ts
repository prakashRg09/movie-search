export const calculateSkeletons = () => {
  const cardWidth = 290;
  const gap = 32;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const cardsPerRow = Math.floor(screenWidth / (cardWidth + gap));
  const cardHeight = cardWidth * 0.5625 + 72;
  const rowsPerScreen = Math.floor(screenHeight / (cardHeight + gap));

  return cardsPerRow * rowsPerScreen;
};
