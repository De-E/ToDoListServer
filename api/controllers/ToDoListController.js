/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = {
    
    todolist: function(req, res)
    {
        Todo.find({done: false})
                .exec(function(err, todos)
        {
            return res.json(todos);
        });
    },
    
    todolistWeek: function(req, res)
    {
        var day = new Date().getUTCDay();
        Todo.find({day: day})
                .exec(function(err, todos)
        {
            return res.json(todos);
        });
    }
}
