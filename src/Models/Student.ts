export interface Student {
  SID: number,
  Name: string,
  Gender: string,
  Email: string,
  Password: string,
  CoursesEnrolled: number[],
}

export interface tempStudent{
    Name: string,
    Gender: string,
    Email: string,
    CoursesEnrolled: number[],
}

export class tempStudentClass implements tempStudent {
  public constructor(
    public Name: string,
    public Gender: string,
    public Email: string,
    public CoursesEnrolled: number[],
  ) {}
}

export class StudentClass implements Student {
  public constructor(
    public SID: number,
    public Name: string,
    public Gender: string,
    public Email: string,
    public Password: string,
    public CoursesEnrolled: number[],
  ) {}
}
