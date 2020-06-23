let backgroundColors = [
  "#FFC30B", //yellow
  "#86D086", //sea green
  "#792F79", //purple
  "#D08686", //mauve
  "#ADD8E6", //light blue
  "#DED978", //chickpea
];

export const resetBackgroundColors = () => {
  backgroundColors = [
    "#FFC30B", //yellow
    "#86D086", //sea green
    "#792F79", //purple
    "#D08686", //mauve
    "#ADD8E6", //light blue
    "#DED978", //chickpea
  ];
};

export const addPlayerBackgroundColors = numPlayers => {
  let playerBackgroundColors = [];

  for (let i = 1; i <= numPlayers; i++) {
    let backgroundColor =
      backgroundColors[
      Math.floor(Math.random() * backgroundColors.length)
      ];

    playerBackgroundColors.push({ backgroundColor })

    backgroundColors = backgroundColors.filter((color) => {
      return color !== backgroundColor;
    });
  }

  return playerBackgroundColors;
};
