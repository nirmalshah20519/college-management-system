export interface Attendance{
    SID:number,
    Status:boolean
}

export class AttendanceClass implements Attendance{
    public constructor(
        public SID:number,
        public Status:boolean
    ){}
}

export interface Lecture{
    LID:number,
    CID:number,
    Schedule:Date,
    Topic:string,
    Attendance:Attendance[]
}

export class LectureClass implements Lecture{
    public constructor(
        public LID:number,
        public CID:number,
        public Schedule:Date,
        public Topic:string,
        public Attendance:Attendance[]
    ){}
}