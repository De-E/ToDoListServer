/**
 * RestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    /**
     * `RestController.a()`
     */
    findRest: function (req, res) {
        Rest.find({ name: req.query.name })
                .exec(function( err, rest)
                {
                    return res.json({data: rest});
                });
        return null;
    }

};

