'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    //change array to object
    find: async ctx => {
        const blogs = await strapi.services.blog.find(ctx.query)
        const obj = Object.assign({}, blogs);
        return obj
    },

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
        const blogs = await strapi.services.blog.find(ctx.query)
        return blogs[id];
    },
};
