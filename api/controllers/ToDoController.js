/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = {
    create: async function(req, res)
    {
        var todo = {
            "day": req.body.day,
            "month": req.body.month,
            "year": req.body.year,
            "h": req.body.h,
            "m": req.body.m,
            "time": req.body.time,
            "todo": req.body.todo,
            "done": req.body.done,
        };
        
        await Todo.create(todo);
        
        return res.ok();
    },
    
    delete: async function(req, res)
    {
        await Todo.destroy({day: req.query.day, month: req.query.month,year: req.query.year,todo: req.query.todo});
        
        return res.ok();
    },
    
    update: function(req, res)
    {
        return res.ok();
    },
}
