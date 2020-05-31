let playerBackgroundColors = [
  "#FFC30B", //yellow
  "#86D086", //sea green
  "#792F79", //purple
  "#D08686", //mauve
  "#ADD8E6", //light blue
  "#DED978", //chickpea
];

export default function addBackgroundColor() {
  let playerBackgroundColor =
    playerBackgroundColors[
      Math.floor(Math.random() * playerBackgroundColors.length)
    ];

  playerBackgroundColors = playerBackgroundColors.filter((color) => {
    return color !== playerBackgroundColor;
  });

  return {
    backgroundColor: playerBackgroundColor,
  };
}
