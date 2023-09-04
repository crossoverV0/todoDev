import { ISteps } from "./step";

export interface ITask {
   title: string,
   done: boolean,
   steps: ISteps[]
}