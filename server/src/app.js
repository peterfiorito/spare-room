const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/events', (req, res) => {
    res.send(
      [{
        "type": "event",
        "id": 1,
        "date": "2019-04-11",
        "start-time": "19:00:00",
        "end-time": "21:00:00",
        "areas-convered": "Manhattan, Queens, Bronx, Staten Island, New Jersey, Long Island.",
        "venue_id": 1
    },
    {
        "type": "event",
        "id": 2,
        "date": "2019-04-17",
        "start-time": "19:00:00",
        "end-time": "21:00:00",
        "areas-convered": "Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.",
        "venue_id": 3
    },
    {
        "type": "event",
        "id": 3,
        "date": "2019-04-13",
        "start-time": "19:00:00",
        "end-time": "21:00:00",
        "areas-convered": "Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.",
        "venue_id": 6
    },
    {
        "type": "event",
        "id": 4,
        "date": "2019-04-21",
        "start-time": "19:00:00",
        "end-time": "21:00:00",
        "areas-convered": "Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.",
        "venue_id": 9
    }]
    )
})
app.get('/venues', (req, res) => {
    res.send(
      [{
        "type": "venue",
        "id": 1,
        "name": "Gossip Bar",
        "street": "733 Ninth Avenue",
        "town": "New York",
        "zip-code": "10019",
        "geo":{
            "latitude": "40.76336",
            "longitude": "-73.98923"
        },
        "transport-station": "50 St",
        "directions": "From the 50 St subway head southwest on 8th Ave (towards W 50th St). Turn right onto W 50th St and walk down to 9th Ave. Turn left onto 9th Ave and Gossip is on your right. The 9 Av - W 50 St bus stop is right by the venue.",
        "url": "http://www.gossipbarnyc.com/"
    },
    {
        "type": "venue",
        "id": 3,
        "name": "The Montrose, Brooklyn",
        "street": "47 5th Ave, Brooklyn",
        "town": "New York",
        "zip-code": "11217",
        "geo": {
            "latitude": "40.681344",
            "longitude": "-73.976957"
        },
        "transport-station": "Bergen Street on the 2/3 and Long Island Railroad or Pacific Street-Atlantic Avenue-Barclays Center.",
        "directions": "1. If you exit onto Fourth Avenue, simply walk south to Bergen Street (between 3-5 blocks depending which exit you use). Turn left/east onto Bergen and walk one block. The Duke will be across Fifth Avenue on the right.\n2. If you exit onto Atlantic or Flatbush Avenues, walk east/south-east to the intersection of Atlantic and Flatbush, then either turn onto or continue on Flatbush as it passes Barclays Center. Turn right onto Fifth Avenue, and proceed two blocks to Bergen Street. The Duke will be on the far side of the light, on the south-east corner of Fifth and Bergen.",
        "url": "http://www.themontrosebk.com/"
    },
    {
        "type": "venue",
        "id": 6,
        "name": "FADA",
        "street": "530 Driggs Avenue",
        "town": "Brooklyn",
        "geo": {
            "latitude": "40.717574",
            "longitude": "-73.95608"
        },
        "zip-code": "11211",
        "transport-station": "Bedford Ave (L train)",
        "directions": "Take the Driggs exit from Bedford Ave - Fada is on the corner of N 8th & Driggs.",
        "url": "http://www.fadany.com/"
    },
    {
        "type": "venue",
        "id": 9,
        "name": "Matt Torrey's",
        "street": "46 Bushwick Ave, Ainslie Street",
        "town": "Brooklyn",
        "geo": {
            "latitude": "40.7134658",
            "longitude": "-73.9415119"
        },
        "zip-code": "11211",
        "transport-station": "Grand Street (L train)",
        "directions": "L train to Grand Avenue. Walk 2 blocks north on Bushwick Avenue, bar is on the left on the corner of Bushwick and Ainslie.",
        "url": "https://www.matttorreysbar.com/"
    }]
    )
})
app.post('/eventId', (req,res) => {
    let eventId = req.body.id;
    let allEvents = [{
        "type": "venue",
        "id": 1,
        "name": "Gossip Bar",
        "street": "733 Ninth Avenue",
        "town": "New York",
        "zip-code": "10019",
        "geo":{
            "latitude": "40.76336",
            "longitude": "-73.98923"
        },
        "transport-station": "50 St",
        "directions": "From the 50 St subway head southwest on 8th Ave (towards W 50th St). Turn right onto W 50th St and walk down to 9th Ave. Turn left onto 9th Ave and Gossip is on your right. The 9 Av - W 50 St bus stop is right by the venue.",
        "url": "http://www.gossipbarnyc.com/"
    },
    {
        "type": "venue",
        "id": 3,
        "name": "The Montrose, Brooklyn",
        "street": "47 5th Ave, Brooklyn",
        "town": "New York",
        "zip-code": "11217",
        "geo": {
            "latitude": "40.681344",
            "longitude": "-73.976957"
        },
        "transport-station": "Bergen Street on the 2/3 and Long Island Railroad or Pacific Street-Atlantic Avenue-Barclays Center.",
        "directions": "1. If you exit onto Fourth Avenue, simply walk south to Bergen Street (between 3-5 blocks depending which exit you use). Turn left/east onto Bergen and walk one block. The Duke will be across Fifth Avenue on the right.\n2. If you exit onto Atlantic or Flatbush Avenues, walk east/south-east to the intersection of Atlantic and Flatbush, then either turn onto or continue on Flatbush as it passes Barclays Center. Turn right onto Fifth Avenue, and proceed two blocks to Bergen Street. The Duke will be on the far side of the light, on the south-east corner of Fifth and Bergen.",
        "url": "http://www.themontrosebk.com/"
    },
    {
        "type": "venue",
        "id": 6,
        "name": "FADA",
        "street": "530 Driggs Avenue",
        "town": "Brooklyn",
        "geo": {
            "latitude": "40.717574",
            "longitude": "-73.95608"
        },
        "zip-code": "11211",
        "transport-station": "Bedford Ave (L train)",
        "directions": "Take the Driggs exit from Bedford Ave - Fada is on the corner of N 8th & Driggs.",
        "url": "http://www.fadany.com/"
    },
    {
        "type": "venue",
        "id": 9,
        "name": "Matt Torrey's",
        "street": "46 Bushwick Ave, Ainslie Street",
        "town": "Brooklyn",
        "geo": {
            "latitude": "40.7134658",
            "longitude": "-73.9415119"
        },
        "zip-code": "11211",
        "transport-station": "Grand Street (L train)",
        "directions": "L train to Grand Avenue. Walk 2 blocks north on Bushwick Avenue, bar is on the left on the corner of Bushwick and Ainslie.",
        "url": "https://www.matttorreysbar.com/"
    }];
    let event = allEvents.map(x=> x.id == eventId ? x : false).filter(x => x != false);
    res.send(event);
})
app.get('/key', (req,res) => {
    let key = "AlAsAn5AWl9QJxfxOV0rsVIwFwFwXHSLDRpbl2m3NVAUscJEwk129kXpUr_q35sO";
    res.send(key);
})
app.listen(process.env.PORT || 8081)
