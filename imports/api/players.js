import SimpleSchema from 'simpl-schema'
import {Mongo} from 'meteor/mongo'
export const Players = new Mongo.Collection('players');

Players.allow({
    insert() { return false;},
    update() { return false;},
    remove() { return false;},
})

Players.deny({
    insert() { return true;},
    update() { return true;},
    remove() { return true;},
})

const PlayerSchema = new SimpleSchema({
    name:{type:String},
    team:{type:String},
    ballManipulation:{type:Number,defaultValue:0},
    kicking:{type:Number,defaultValue:0},
    passing:{type:Number,defaultValue:0},
    tackling:{type:Number,defaultValue:0},
    fieldCoverage:{type:Number,defaultValue:0},
    blocking:{type:Number,defaultValue:0},
    gameStrategy:{type:Number,defaultValue:0},
    risks:{type:Number,defaultValue:0},
    notes:{type:String,optional:true},
    owner: {type:String},
});

Players.attachSchema(PlayerSchema);
