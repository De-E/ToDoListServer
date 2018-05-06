/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = {
    attributes: {
        day : {
            type: "number",
            required: true,
        },
        month: {
            type: "number",
            required: true,
        },
        year: {
            type: "number",
            required: true,
        },
        h: {
            type: "number",
        },
        m: {
            type: "number",
        },
        time: {
            type: "number",
        },
        todo: {
            type: "string",
            required: true,
        },
        done: {
            type: "boolean",
            required: true,
        },
    },
    
    datastore: 'mongo',
};
