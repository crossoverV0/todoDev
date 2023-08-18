import { IStep } from "./step";

export interface ITask {
   title: string,
   done: boolean,
   steps: IStep[]
}