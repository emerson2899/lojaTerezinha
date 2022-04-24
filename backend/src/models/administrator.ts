import { Schema, Model, model, connection } from 'mongoose';

type StoreProducts = {
name: {
firstName: string,
lastName: string
},
interests: [string, string, string],
email: string,
age: number,
}

const schema = new Schema<StoreProducts>({
name: {
firstName: { type: String, required: true },
lastName:String
},
interests: [String],
email: { type: String, required: true },
age: { type: Number, required: true },
});

// Criando o Model
const modelName: string = 'User';

const StoreProducts = connection && connection.models[modelName]
? (connection.models[modelName] as Model<StoreProducts>)
: model<StoreProducts>(modelName, schema);

export default StoreProducts;