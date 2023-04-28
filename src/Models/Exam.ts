export interface Score{
    SID:number,
    Score:number|undefined
}

export class ScoreClass implements Score{
    public constructor(
        public SID:number,
        public Score:number|undefined
    ){}
}

export interface Exam{
    EID:number
    CID:number,
    Schedule:Date,
    Topic:string,
    TotalMarks:number
    Score:Score[]
}

export class ExamClass implements Exam{
    public constructor(
        public EID:number,
        public CID:number,
        public Schedule:Date,
        public Topic:string,
        public TotalMarks:number,
        public Score:Score[]
    ){}
}