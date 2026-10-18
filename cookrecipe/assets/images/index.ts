export const ImageIconPack = {
  food_1: require("@/assets/images/food_1.jpeg"),
  food_2: require("@/assets/images/food_2.jpeg"),
  food_3: require("@/assets/images/food_3.jpeg"),
  food_4: require("@/assets/images/food_4.jpeg"),
  food_5: require("@/assets/images/food_5.jpeg"),
  food_6: require("@/assets/images/food_6.jpeg"),
  chef_1: require("@/assets/images/chef_1.jpeg"),
  chef_2: require("@/assets/images/chef_2.jpeg"),
  chef_3: require("@/assets/images/chef_3.jpeg"),
  icon_1: require("@/assets/images/icon_1.png"),
  icon_2: require("@/assets/images/icon_2.png"),
  icon_3: require("@/assets/images/icon_3.jpeg"),
  icon_4: require("@/assets/images/icon_4.png"),
  FreePan: require("@/assets/images/FreePan.gif"),
};

export const FoodImagesList = [
  ImageIconPack.food_1,
  ImageIconPack.food_2,
  ImageIconPack.food_3,
  ImageIconPack.chef_1,
  ImageIconPack.food_4,
  ImageIconPack.chef_2,
  ImageIconPack.food_5,
  ImageIconPack.food_6,
  ImageIconPack.chef_3,
];

export type ImageIconPackType = keyof typeof ImageIconPack;
