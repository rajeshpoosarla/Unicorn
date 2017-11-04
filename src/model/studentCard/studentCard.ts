import { StudentSchedule } from '../models';

export class StudentCard{
    private _imageId: string;
    private _name: string;
    private _description: string;

    private _schedule: StudentSchedule;


    public get ImageId()
    {
      return this._imageId;
    }

    public get Name()
    {
      return this._name;
    }

    public get Description()
    {
      return this._description;
    }

    public get Schedule()
    {
      return this._schedule;
    }

    public constructor(imageId: string, name: string, description: string, schedule: StudentSchedule)
    {
     this._imageId = imageId;
     this._name = name;
     this._description = description;
     this._schedule = schedule;
    }
}
