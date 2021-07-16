import CombinationInfo from "types/CombinationInfo";

export const PRINCES_SYMBOL = "princes";
export const YELLOW_DRAGON_SYMBOL = "yellowDragon";
export const GREEN_DRAGON_SYMBOL = "greenDragon";
export const WILD_SYMBOL = "wild";
export const COINS_SYMBOL = "coins";
export const A_SYMBOL = "a";
export const K_SYMBOL = "k";
export const Q_SYMBOL = "q";
export const J_SYMBOL = "j";
export const TEN_SYMBOL = "10";

export const symbolPayoutValue: {
  [key: string]: {
    [key: number]: number;
  };
} = {
  [WILD_SYMBOL]: {
    2: 4,
    3: 100,
    4: 300,
    5: 500,
  },
  [PRINCES_SYMBOL]: {
    2: 2,
    3: 40,
    4: 200,
    5: 400,
  },
  [YELLOW_DRAGON_SYMBOL]: {
    3: 30,
    4: 150,
    5: 300,
  },
  [GREEN_DRAGON_SYMBOL]: {
    3: 20,
    4: 100,
    5: 250,
  },
  [COINS_SYMBOL]: {
    3: 20,
    4: 75,
    5: 200,
  },
  [A_SYMBOL]: {
    3: 10,
    4: 50,
    5: 160,
  },
  [K_SYMBOL]: {
    3: 10,
    4: 40,
    5: 140,
  },
  [Q_SYMBOL]: {
    3: 5,
    4: 30,
    5: 120,
  },
  [J_SYMBOL]: {
    3: 5,
    4: 25,
    5: 110,
  },
  [TEN_SYMBOL]: {
    3: 5,
    4: 20,
    5: 100,
  },
};

export const combinationsData: { [key: string]: CombinationInfo } = {
  // left column
  combinationFour: {
    x1: 200,
    x2: 220,
    y1: 120,
    y2: 140,
    hover: false,
    title: "4",
    circleCoordinates: [198, 115, 30, 30],
    titleCoordinates: [209, 135],
    combination: [0, 1, 2, 1, 0],
    lineCoordinates: [
      [332, 150],
      [698, 500],
      [1064, 150],
    ],
  },
  combinationTwo: {
    x1: 200,
    x2: 220,
    y1: 160,
    y2: 180,
    hover: false,
    title: "2",
    circleCoordinates: [198, 155, 30, 30],
    titleCoordinates: [209, 175],
    combination: [0, 0, 0, 0, 0],
    lineCoordinates: [
      [332, 150],
      [1064, 150],
    ],
  },
  combinationEight: {
    x1: 200,
    x2: 220,
    y1: 200,
    y2: 220,
    hover: false,
    title: "8",
    circleCoordinates: [198, 195, 30, 30],
    titleCoordinates: [209, 215],
    combination: [0, 1, 0, 1, 0],
    lineCoordinates: [
      [332, 150],
      [515, 300],
      [698, 150],
      [881, 300],
      [1064, 150],
    ],
  },
  combinationSix: {
    x1: 200,
    x2: 220,
    y1: 260,
    y2: 280,
    hover: false,
    title: "6",
    circleCoordinates: [198, 255, 30, 30],
    titleCoordinates: [209, 275],
    combination: [1, 0, 1, 0, 1],
    lineCoordinates: [
      [332, 300],
      [515, 150],
      [698, 300],
      [881, 150],
      [1064, 300],
    ],
  },
  combinationOne: {
    x1: 200,
    x2: 220,
    y1: 300,
    y2: 330,
    hover: false,
    title: "1",
    circleCoordinates: [198, 300, 30, 30],
    titleCoordinates: [209, 320],
    combination: [1, 1, 1, 1, 1],
    lineCoordinates: [
      [332, 300],
      [1064, 300],
    ],
  },
  combinationSeven: {
    x1: 200,
    x2: 220,
    y1: 340,
    y2: 370,
    hover: false,
    title: "7",
    circleCoordinates: [198, 345, 30, 30],
    titleCoordinates: [209, 365],
    combination: [1, 2, 1, 2, 1],
    lineCoordinates: [
      [332, 300],
      [515, 500],
      [698, 300],
      [881, 500],
      [1064, 300],
    ],
  },
  combinationEleven: {
    x1: 200,
    x2: 220,
    y1: 390,
    y2: 420,
    hover: false,
    title: "11",
    circleCoordinates: [198, 390, 30, 30],
    titleCoordinates: [206, 410],
    combination: [2, 0, 2, 0, 2],
    lineCoordinates: [
      [332, 500],
      [515, 150],
      [698, 500],
      [881, 150],
      [1064, 500],
    ],
  },
  combinationFive: {
    x1: 200,
    x2: 220,
    y1: 450,
    y2: 490,
    hover: false,
    title: "5",
    circleCoordinates: [198, 460, 30, 30],
    titleCoordinates: [209, 480],
    combination: [2, 1, 0, 1, 2],
    lineCoordinates: [
      [332, 500],
      [698, 150],
      [1064, 500],
    ],
  },
  combinationTree: {
    x1: 200,
    x2: 220,
    y1: 510,
    y2: 530,
    hover: false,
    title: "3",
    circleCoordinates: [198, 500, 30, 30],
    titleCoordinates: [209, 520],
    combination: [2, 2, 2, 2, 2],
    lineCoordinates: [
      [332, 500],
      [1064, 500],
    ],
  },
  combinationNine: {
    x1: 200,
    x2: 220,
    y1: 550,
    y2: 570,
    hover: false,
    title: "9",
    circleCoordinates: [198, 540, 30, 30],
    titleCoordinates: [209, 560],
    combination: [2, 1, 2, 1, 2],
    lineCoordinates: [
      [332, 500],
      [515, 300],
      [698, 500],
      [881, 300],
      [1064, 500],
    ],
  },
  // right column
  combinationTen: {
    x1: 1150,
    x2: 1170,
    y1: 120,
    y2: 140,
    hover: false,
    title: "10",
    circleCoordinates: [1153, 115, 30, 30],
    titleCoordinates: [1159, 135],
    combination: [0, 2, 0, 2, 0],
    lineCoordinates: [
      [332, 150],
      [515, 500],
      [698, 150],
      [881, 500],
      [1064, 150],
    ],
  },
  combinationThirteen: {
    x1: 1150,
    x2: 1170,
    y1: 160,
    y2: 180,
    hover: false,
    title: "13",
    circleCoordinates: [1153, 155, 30, 30],
    titleCoordinates: [1159, 175],
    combination: [2, 1, 1, 1, 0],
    lineCoordinates: [
      [332, 500],
      [515, 300],
      [881, 300],
      [1064, 150],
    ],
  },
  combinationSixteen: {
    x1: 1150,
    x2: 1170,
    y1: 200,
    y2: 220,
    hover: false,
    title: "16",
    circleCoordinates: [1153, 195, 30, 30],
    titleCoordinates: [1159, 215],
    combination: [0, 0, 2, 0, 0],
    lineCoordinates: [
      [332, 150],
      [515, 150],
      [698, 500],
      [881, 150],
      [1064, 150],
    ],
  },
  combinationFifteen: {
    x1: 1150,
    x2: 1170,
    y1: 260,
    y2: 280,
    hover: false,
    title: "15",
    circleCoordinates: [1153, 255, 30, 30],
    titleCoordinates: [1159, 275],
    combination: [2, 2, 1, 0, 0],
    lineCoordinates: [
      [332, 500],
      [515, 500],
      [881, 150],
      [1064, 150],
    ],
  },
  combinationEighteen: {
    x1: 1150,
    x2: 1170,
    y1: 300,
    y2: 330,
    hover: false,
    title: "18",
    circleCoordinates: [1153, 300, 30, 30],
    titleCoordinates: [1159, 320],
    combination: [1, 2, 1, 0, 1],
    lineCoordinates: [
      [332, 300],
      [515, 500],
      [881, 150],
      [1064, 300],
    ],
  },
  combinationNineteen: {
    x1: 1150,
    x2: 1170,
    y1: 340,
    y2: 370,
    hover: false,
    title: "19",
    circleCoordinates: [1153, 345, 30, 30],
    titleCoordinates: [1159, 365],
    combination: [1, 0, 1, 2, 1],
    lineCoordinates: [
      [332, 300],
      [515, 150],
      [881, 500],
      [1064, 300],
    ],
  },
  combinationTwenty: {
    x1: 1150,
    x2: 1170,
    y1: 390,
    y2: 420,
    hover: false,
    title: "20",
    circleCoordinates: [1153, 390, 30, 30],
    titleCoordinates: [1159, 410],
    combination: [0, 1, 1, 1, 1],
    lineCoordinates: [
      [332, 150],
      [515, 300],
      [1064, 300],
    ],
  },
  combinationSeventeen: {
    x1: 1150,
    x2: 1170,
    y1: 450,
    y2: 490,
    hover: false,
    title: "17",
    circleCoordinates: [1153, 460, 30, 30],
    titleCoordinates: [1159, 480],
    combination: [2, 2, 0, 2, 2],
    lineCoordinates: [
      [332, 500],
      [515, 500],
      [698, 150],
      [881, 500],
      [1064, 500],
    ],
  },
  combinationTwelve: {
    x1: 1150,
    x2: 1170,
    y1: 510,
    y2: 530,
    hover: false,
    title: "12",
    circleCoordinates: [1153, 500, 30, 30],
    titleCoordinates: [1159, 520],
    combination: [0, 1, 1, 1, 2],
    lineCoordinates: [
      [332, 150],
      [515, 300],
      [881, 300],
      [1064, 500],
    ],
  },
  combinationFourteen: {
    x1: 1150,
    x2: 1170,
    y1: 550,
    y2: 570,
    hover: false,
    title: "14",
    circleCoordinates: [1153, 540, 30, 30],
    titleCoordinates: [1159, 560],
    combination: [0, 0, 1, 2, 2],
    lineCoordinates: [
      [332, 150],
      [515, 150],
      [881, 500],
      [1064, 500],
    ],
  },
};

export default combinationsData;
