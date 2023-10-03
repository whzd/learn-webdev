import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const API_URL = "https://ll.thespacedevs.com/2.2.0"

app.use(express.static("public"))

app.get("/", async (req, res) => {

  try {
    const result = await axios.get(`${API_URL}/launch/upcoming/?is_crewed=true&limit=1`);
    const launch = result.data.results[0]
    const data = {
      launchName: launch.name,
      status: launch.status.abbrev,
      day: launch.net.split('T')[0],
      rocketName: launch.rocket.configuration.name,
      missionName: launch.mission.name,
      missionType: launch.mission.type,
      missionDescription: launch.mission.description,
      missionOrbit: launch.mission.orbit.name,
      agencyName: launch.mission.agencies[0].name,
      agencyCountryCode: launch.mission.agencies[0].country_code,
      agencyLogo: launch.mission.agencies[0].logo_url,
      agencyImage: launch.mission.agencies[0].image_url
    }
    res.render("index.ejs", { data: data });
  } catch (error) {
    console.log(error)
    res.render("index.ejs", { data: error.data });
  }

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
