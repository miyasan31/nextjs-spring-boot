import { proxy } from "valtio";

import type { Attendance, Null } from "~/type/model";

export const attendance = proxy<Attendance | Null>({});

export const employeeList = proxy<Attendance[] | Null>({});
