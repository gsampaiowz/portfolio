const handler = (req, res) => {
    if (req.method === "POST") {
        const data = req.body;

        

        return res.status(200).json({ message: "Success" });
    }

    return res.status(400).json({ message: "Bad request" });    
};

export default handler;
