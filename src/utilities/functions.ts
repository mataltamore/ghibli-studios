import { COLOR } from "./constants";

export const getLabelColor = (director: string) => {
  switch (director) {
    case "Goro Miyazaki":
      return COLOR.GORO;
    case "Hiromasa Yonebayashi":
      return COLOR.YONEBAYASHI;
    case "Isao Takahata":
      return COLOR.TAKAHATA;
    case "Hayao Miyazaki":
      return COLOR.MIYAZAKI;
    case "Yoshifumi Kondo":
      return COLOR.KONDO;
    default:
      return COLOR.GRAY;
  }
};
