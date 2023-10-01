import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const API_URL = "https://ll.thespacedevs.com/2.2.0"

app.use(express.static("public"))

app.get("/", async (req, res) => {

  try {
    //const result = await axios.get(`${API_URL}/launch/upcoming/?is_crewed=true&limit=1`);
    const result = {"count": 8, "next": "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?is_crewed=true&limit=1&offset=1", "previous": null, "results": [ { "id": "b17abaa1-ef18-4c29-9ed9-a02eb4967bfa", "url": "https://ll.thespacedevs.com/2.2.0/launch/b17abaa1-ef18-4c29-9ed9-a02eb4967bfa/", "slug": "spaceshiptwo-galactic-04", "name": "SpaceShipTwo | Galactic 04", "status": { "id": 2, "name": "To Be Determined", "abbrev": "TBD", "description": "Current date is a placeholder or rough estimation based on unreliable or interpreted sources." }, "last_updated": "2023-10-01T16:24:35Z", "net": "2023-10-06T00:00:00Z", "window_end": "2023-10-06T00:00:00Z", "window_start": "2023-10-06T00:00:00Z", "net_precision": { "id": 5, "name": "Day", "abbrev": "DAY", "description": "The T-0 is expected on the given day." }, "probability": null, "weather_concerns": null, "holdreason": "", "failreason": "", "hashtag": null, "launch_service_provider": { "id": 1024, "url": "https://ll.thespacedevs.com/2.2.0/agencies/1024/", "name": "Virgin Galactic", "type": "Private" }, "rocket": { "id": 8026, "configuration": { "id": 465, "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/465/", "name": "SpaceShipTwo", "family": "SpaceShipTwo", "full_name": "SpaceShipTwo", "variant": "" } }, "mission": { "id": 6557, "name": "Galactic 04", "description": "Fourth commercial Virgin Galactic mission.", "launch_designator": null, "type": "Tourism", "orbit": { "id": 15, "name": "Suborbital", "abbrev": "Sub" }, "agencies": [ { "id": 1024, "url": "https://ll.thespacedevs.com/2.2.0/agencies/1024/", "name": "Virgin Galactic", "featured": false, "type": "Private", "country_code": "USA", "abbrev": "VG", "description": "Virgin Galactic is an American spaceflight company within the Virgin Group. It is developing commercial spacecraft and aims to provide suborbital spaceflights to space tourists. Virgin Galactic's suborbital spacecraft are air launched from beneath a carrier airplane known as White Knight Two.", "administrator": "Founder: Richard Branson", "founding_year": "2004", "launchers": "VMS Eve", "spacecraft": "VSS Enterprise | VSS Unity", "launch_library_url": "https://launchlibrary.net/1.4/agency/1024", "total_launch_count": 63, "consecutive_successful_launches": 7, "successful_launches": 58, "failed_launches": 5, "pending_launches": 1, "consecutive_successful_landings": 0, "successful_landings": 0, "failed_landings": 0, "attempted_landings": 0, "info_url": "https://www.virgingalactic.com/", "wiki_url": "https://en.wikipedia.org/wiki/Virgin_Galactic", "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/logo/virgin2520galactic_logo_20230509082346.png", "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/virgin_galactic_image_20210522131723.jpeg", "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/virgin2520galactic_nation_20230617045127.jpg" } ], "info_urls": [], "vid_urls": [] }, "pad": { "id": 191, "url": "https://ll.thespacedevs.com/2.2.0/pad/191/", "agency_id": 1024, "name": "Spaceport America", "description": null, "info_url": "https://www.spaceportamerica.com/", "wiki_url": "https://en.wikipedia.org/wiki/Spaceport_America", "map_url": "https://www.google.com/maps?q=32.9902778,-106.9719162", "latitude": "32.9902778", "longitude": "-106.9719162", "location": { "id": 144, "url": "https://ll.thespacedevs.com/2.2.0/location/144/", "name": "Air launch to Suborbital flight", "country_code": "", "description": null, "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_144_20200803142439.jpg", "timezone_name": "", "total_launch_count": 82, "total_landing_count": 0 }, "country_code": "USA", "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_spaceport_america_20210522162030.jpg", "total_launch_count": 10, "orbital_launch_attempt_count": 0 }, "webcast_live": false, "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/spaceshiptwo_image_20210522140909.jpeg", "infographic": null, "program": [], "orbital_launch_attempt_count": null, "location_launch_attempt_count": 83, "pad_launch_attempt_count": 11, "agency_launch_attempt_count": 64, "orbital_launch_attempt_count_year": 0, "location_launch_attempt_count_year": 6, "pad_launch_attempt_count_year": 6, "agency_launch_attempt_count_year": 6 } ] }
    console.log(result)
    //const launch = result.data.results[0]
    const launch = result.results[0]
    const data = {
      launchName: launch.name,
      status: launch.status.abbrev,
      day: launch.net,
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
