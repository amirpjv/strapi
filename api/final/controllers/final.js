'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    //change array to object

    async find(ctx) {

        // step 1: we fetch the whole blogs from the strapi query
        const blogs = await strapi.query('final').find();
        // step 2: we configure the new model of data we wish to return to the user
        const newBlogsFormat = {
            blogs
        };
        // then we simply return it :D
        ctx.send({
            newBlogsFormat,
            message: 'Done!'
        });

        // NOTE !!!!!!!!! :: PLEASE BE ADVISED THAT WE HAVE TO RESTART THE STRAPI SERVER EVERYTIME WE CHANGE
        // THE SOURCE CODE !!!!!!!!!

    },
    // Fetch data that have the `yourDateAttributeName_lt` lower than the now.
    // const data = await strapi.query('article').find({
    //     yourDateAttributeName_lt: new Date()
    // });

    // Delete all entries fetched.
    // data.forEach((entry) => strapi.query('article').delete({
    //     id: entry.id
    // }));

    //return object of all blogs but put in other variable named blog
    // find: async ctx => {
    //     const blogs = await strapi.services.blog.find(ctx.query)
    //     let blog={};
    //     return {blog:blogs.map(blog=>blog)}
    // },

    //return object of titles in other variable named i
    // find: async ctx => {
    //     const blogs = await strapi.services.blog.find(ctx.query)
    //     let i={};
    //     return {i:blogs.map(blog=>blog.blogtitle)}
    // },

    //find blog by integer id number in object(json) format
    findOne: async ctx => {
        const id = ctx.params.id;
        const blogs = await strapi.services.final.find(ctx.query)
        return blogs[id];
    },
};
