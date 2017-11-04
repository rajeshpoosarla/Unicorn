
import { AttendenceOptions } from "../models";

export class StudentSchedule {
  private _timing: string;
  private _attendenceOption: AttendenceOptions;

  public get Slot()
  {
    return this._timing;
  }

public get AttendenceOption()
{
  return this._attendenceOption;
}

  public constructor(timing: string, attendenceOption: AttendenceOptions) {
    this._timing = timing;
    this._attendenceOption = attendenceOption;
  }

  public get Options()
  {
    var studentAttendenceOptions: string[] = ["Attended", "DidNotAttend"];
    return studentAttendenceOptions;
  }

}


