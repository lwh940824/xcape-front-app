import { useMediaQuery } from "react-responsive";
import { atom } from "recoil";

export const isMainAtom = atom({
    key: "isMain",
    default: true,
});

export const merchantsIndex = atom({
    key: "merchants",
    default: 1,
});
