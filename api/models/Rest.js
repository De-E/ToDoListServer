/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = {
    attributes: {
        id: {
            type: "integer",
            required: true
        },
        name: {
            type: "string",
            required: true,
            minLength: 2
        }
    }
};