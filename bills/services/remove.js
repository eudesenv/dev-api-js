import Bill from "../schemas/Bill";

export default (req, res) => {
    Bill
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(204).end())
        .catch(err => res.status(500)
                .json({ status: false, data: {} })
            )
}