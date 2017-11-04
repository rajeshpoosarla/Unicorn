import { AttendenceOptions } from "../models";

export class StudentAttendence{

  private _schedule: string;
  private _attendenceOption: AttendenceOptions;

  public get Schedule()
  {
    return this._schedule;
  }

public get AttendenceOption()
{
  return this._attendenceOption;
}

  public constructor(schedule: string, attendenceOption: AttendenceOptions) {
    this._schedule = schedule;
    this._attendenceOption = attendenceOption;
  }
}

