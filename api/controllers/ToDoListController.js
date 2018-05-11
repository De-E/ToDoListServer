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
        var day = new Date().getDate();
        var month = new Date().getMonth()+1;
        var year = new Date().getFullYear();
        
        Todo.find({day: {">=": day, "<=": day+7}, month: month, year: year, done: false, })
                .exec(function(err, todos)
        {
            return res.json(todos);
        });
    },
    
    todolistDay: function(req, res)
    {
        var day = new Date().getDate();
        var month = new Date().getMonth()+1;
        var year = new Date().getFullYear();
        
        Todo.find({day: day, month: month, year: year, done: false})
                .exec(function(err, todos) 
        {
            return res.json(todos);
        });
    }
}
