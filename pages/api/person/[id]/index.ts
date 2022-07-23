import { NextApiRequest, NextApiResponse } from "next";

export default function getPersonById(req: NextApiRequest, res: NextApiResponse){
    res.json({byId: req.query.id, message: 'Get person by id'})
}