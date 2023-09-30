import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "whzd";
const yourPassword = "yoyoyo123";
const yourAPIKey = "69181f06-4e0d-46d3-aa21-be0812871a39";
const yourBearerToken = "001ab104-d5f3-4ccc-a035-9affbc5d438c";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send("Error: ", error.message)
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random", {
      auth: {
        username: yourUsername,
        password: yourPassword
      },
    });
  res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send("Error: ", error.message)
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send("Error: ", error.message)
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      },
    });
  res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send("Error: ", error.message)
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
