import { atom } from "recoil";

export const loadedStatus = atom({
  key: "loadedStatus",
  default: false,
});

export const activeStatus = atom({
  key: "activeStatus",
  default: false,
});

export const openStatus = atom({
  key: "openStatus",
  default: false,
});
