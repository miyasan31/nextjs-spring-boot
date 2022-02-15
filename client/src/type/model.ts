/* eslint-disable @typescript-eslint/naming-convention */

export type Null = {};

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: Date;
  gender: 1 | 2 | 3;
  phone: string;
  email: string;
  employee_type: 1 | 2 | 3;
  join_date: Date;
  leaving_date: Date;
};

export type Attendance = {
  atendance_id: number;
  employee_id: number;
  join_date_time: Date;
  leaving_date_time: Date;
};

export type Shift = {
  shift_id: number;
  employee_id: number;
  join_date_time: Date;
  leaving_date_time: Date;
};
