import { useMediaQuery } from "react-responsive";
import { atom } from "recoil";

export const isMainAtom = atom({
    key: "isMain",
    default: true,
});
