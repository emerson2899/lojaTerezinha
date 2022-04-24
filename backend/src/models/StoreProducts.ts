import { Schema, Model, model, connection } from 'mongoose';

type StoreProducts = {
name: string,
description: string,
category: string,
brandding: String,
price: number,


}

const schema = new Schema<StoreProducts>({
name: String,
description: String,
category: String,
brandding: String,
price: Number,

});

// Criando o Model
const modelName: string = 'User';

const StoreProducts = connection && connection.models[modelName]
? (connection.models[modelName] as Model<StoreProducts>)
: model<StoreProducts>(modelName, schema);

export default StoreProducts;