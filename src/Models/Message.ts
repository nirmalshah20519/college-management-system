export interface Message{
    Title:string,
    Message:string,
    bs5_Title_Class:string
}

export class MessageClass implements Message{
    public constructor(
        public Title:string,
        public Message:string,
        public bs5_Title_Class:string
    ){}
}