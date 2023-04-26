export interface Course{
    CID:number,
    Name:string,
    Description:string,
    EnrolledStudents:number[],
    FacultiesAssigned:number[]
}

export class CourseClass implements Course{
    public constructor(
        public CID:number,
        public Name:string,
        public Description:string,
        public EnrolledStudents:number[],
        public FacultiesAssigned:number[]
    ){}
}