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

export default function addBackgroundColor() {
  let backgroundColor =
    backgroundColors[
    Math.floor(Math.random() * backgroundColors.length)
    ];

  backgroundColors = backgroundColors.filter((color) => {
    return color !== backgroundColor;
  });

  return {
    backgroundColor,
  };
}
