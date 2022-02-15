import { proxy } from "valtio";

import type { Employee, Null } from "~/type/model";

export const employee = proxy<Employee | Null>({});

export const employeeList = proxy<Employee[] | Null>({});
