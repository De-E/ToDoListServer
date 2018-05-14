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
        
        var debug = await Todo.create(todo).fetch();
        
        return res.json(debug);
    },
    
    delete: async function(req, res)
    {
        var _id = req.query.id;
        
        var debug = await Todo
                .destroy({ id: _id})
                .fetch();
        
        return res.json(debug);
    },
    
    update: async function(req, res)
    {
        var todo = {
            day: req.body.day,
            month: req.body.month,
            year: req.body.year,
            h: req.body.h,
            m: req.body.m,
            time: req.body.time,
            todo: req.body.todo,
            done: req.body.done,
        };
        
        var _id = req.body.id;
        
        var debug = await Todo.update({_id: _id})
                .set(todo)
                .fetch();
        
        return res.json(debug);
    },
}
