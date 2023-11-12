import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class FoodsCollection {
  constructor() {
    this.name = 'FoodsCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      name: { type: String, index: true, unique: true },
    });
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
    this.userPublicationName = `${this.name}.publication.admin`;
  }
}

export const Foods = new FoodsCollection();
