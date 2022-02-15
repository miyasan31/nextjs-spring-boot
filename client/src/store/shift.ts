import { proxy } from "valtio";

import type { Null, Shift } from "~/type/model";

export const shift = proxy<Shift | Null>({});

export const shiftList = proxy<Shift[] | Null>({});
