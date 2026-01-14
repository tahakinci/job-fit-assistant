import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.post("/analyze", async (req, res) => {
  const { body } = req;

  const resObj = {
    matchScore: 0.72,
    missingKeywords: ["Docker", "AWS"],
    summary: "Good match, backend skills could be improved",
  };
  res.json(resObj);
});

app.listen(PORT, () => {
  console.log("Server is running");
});
