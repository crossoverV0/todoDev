export interface ISteps{
   title: string
   code: string
   done: boolean
   work: 'EASY' | 'MEDIUM'  | 'HARD'
   index: number
}

export interface IknownStep extends ISteps{
   date: Date
}

export type TOptionalStep = Partial<ISteps>