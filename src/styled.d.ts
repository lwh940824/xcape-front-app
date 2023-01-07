import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        merchats: {
            bgColor: string; // #1D1D20
            color: string; // #000000
        };
        ku: {
            bgcolor: string; // #000000
            color: string; // #9C8871
            theme: {
                themeIndex: string; // #BFA88E
                bgColor: string; // #000000
                color: string; // #000000
            };
        };
    }
}
