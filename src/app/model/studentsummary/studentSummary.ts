export class StudentSummary{
    public ImageId: string;
    public Name: string;
    public Description: string;

    public constructor(imageId: string, name: string, description: string){
     this.ImageId = imageId;   
     this.Name = name;   
     this.Description = description;   
    }    
}