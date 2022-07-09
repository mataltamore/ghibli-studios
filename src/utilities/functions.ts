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

export function formatDirectorFromUrl(
  director: string | string[] | undefined
): string {
  if (typeof director === "undefined") return "registi";
  if (Array.isArray(director)) return director[0];

  const directorSplit = director.split("_");
  return directorSplit[0] + " " + directorSplit[1];
}

export function formatDirectorToUrl(director: string): string {
  const directorSplit = director.split(" ");
  return directorSplit[0] + "_" + directorSplit[1];
}

export function getDateItalianFormat(date: string) {
  return new Date(date).toLocaleString("IT-it", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
