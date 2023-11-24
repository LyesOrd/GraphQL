// GraphQL Resolvers

const { Todo } = require("./models/todo.js");

const resolvers = {
    Query: {
      greetings: () => "GraphQL is Awesome",
      welcome: (parent, args) => `Hello ${args.name}`,
    },
    Mutation: {
        createTodo: async (parent, args) => {
            try {
            const todo = await new Todo({
                title: args.title,
                description: args.description,
                done: args.done,
            }).save();
            return todo;
            } catch (err) {
            console.log(err);
            }
        },
        updateTodo: async (parent, args) => {
            try {
            const todo = await Todo.findOneAndUpdate(
                {
                _id: args.id,
                },
                {
                $set: {
                    title: args.title,
                    description: args.description,
                    done: args.done,
                },
                },
                { new: true }
            );
            return todo;
            } catch (err) {
            console.log(err);
            }
        },
        deleteTodo: async (parent, args) => {
            try {
            const todo = await Todo.findByIdAndRemove({
                _id: args.id,
            });
            return todo;
            } catch (err) {
            console.log(err);
            }
        },
        getTodo: async (parent, args) => {
            try {
            const todo = await Todo.find();
            return todo;
            } catch (err) {
            console.log(err);
            }
        },
    }
  };
  
  module.exports = { resolvers };