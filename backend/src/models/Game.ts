import { Schema, model } from 'mongoose'

export interface Game {
  name:string
  address: string
  numberOfPeople: number
  date: Date
  time: string
  fileNumber: number
}

const GameSchema = new Schema<Game>({
  name:{
    type:String,
    required:true,
  },
  address: {
    type: String,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  fileNumber: {
    type: Number,
    required: true,
  },
})

export default model<Game>('Game', GameSchema)
