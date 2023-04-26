export interface Course{
    CID:number,
    Name:string,
    Description:string
}

export class CourseClass implements Course{
    public constructor(
        public CID:number,
        public Name:string,
        public Description:string
    ){}
}