export class Student{
private _id: string;
private _lastName: string;
private _firstName: string;
private _dob: string;
private _mobileNumber: string;
private _imageData: string;

  public constructor(id: string, lastName: string, firstName: string, dob: string, mobileNumber: string, imageData: string){
this._id = id;
this._lastName = lastName;
this._firstName = firstName;
this._dob = dob;
this._mobileNumber = mobileNumber;
this._imageData = imageData;
  }

  public get Id()
  {
    return this._id;
  }

  public get LastName()
  {
    return this._lastName;
  }

  public get FirstName()
  {
    return this._firstName;
  }

  public get DateofBirth()
  {
    return this._dob;
  }

  public get MobileNumber()
  {
    return this._mobileNumber;
  }

  public get ImageData()
  {
    return this._imageData;
  }
}
