import { Schema, model, Document, Types } from 'mongoose';

const schema: Schema = new Schema({ name: { type: 'String' } });

interface ITest extends Document {
  name?: string;
}

const Test = model<ITest>('Test', schema);

Test.find().cursor().eachAsync(async(doc: ITest) => console.log(doc.name)).
  then(() => console.log('Done!'));

Test.find().cursor().
  eachAsync(async(doc: ITest, i) => {
    expectType<Types.ObjectId>(doc._id);
    expectType<number>(i);
  }).
  then(() => console.log('Done!'));
