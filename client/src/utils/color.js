const getRandomRGB = () => {
  return Math.round(Math.random() * 255)
    .toString(16)
    .padStart(2, '0');
};

export const getRandomColor = () => {
  let colorCode = '#';

  for (let i = 0; i < 3; i++) colorCode += getRandomRGB();

  return colorCode;
};

export const getFontColor = (labelColor) => {
  const standardColor = '#888888';
  const [white, black] = ['#ffffff', '#000000'];

  if (standardColor > labelColor) return white;
  if (standardColor < labelColor) return black;
};
