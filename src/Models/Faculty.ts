export interface Faculty {
    FID: number,
    Name: string,
    Gender: string,
    Email: string,
    Password: string,
    CoursesTaking: number[],
  }
  



  
  export class FacultyClass implements Faculty {
    public constructor(
      public FID: number,
      public Name: string,
      public Gender: string,
      public Email: string,
      public Password: string,
      public CoursesTaking: number[],
    ) {}
  }

  export interface tempFaculty{
    Name: string,
    Gender: string,
    Email: string,
    CoursesTaking: number[],
}

export class tempFacultyClass implements tempFaculty{
  public constructor(
    public Name: string,
    public Gender: string,
    public Email: string,
    public CoursesTaking: number[],
  ) {}
}
  