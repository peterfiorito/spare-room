<template>
  <div class="event-info">
    <h1>SpeedRoomMating {{this.venueData.town}} @ {{this.venueData.name}}</h1>
    <div class="event-info__banner">
      <img src="/static/bar-photo.jpg" class=""/>
    </div>
    <div class="event-info__g--wrapper">
      <div class="event-info__g--col --left">
        <div class="event-info__reserve">
          <p class="event-info__reserve--title">Reserve your place now</p>
          <div class="event-info__radio">
            <input type="radio" />
            <label>I need a room</label>
          </div>
          <div class="event-info__radio">
            <input type="radio" />
            <label>I have a room</label>
          </div>
        </div>
        <div class="event-info__middle">
          <div class="event-info__middle--fields">
            <label>Name</label>
            <input type="text" placeholder="Please enter your name"/>
          </div>
          <div class="event-info__middle--fields">
            <label>Email</label>
            <input type="email" placeholder="Please enter you email"/>
          </div>
          <p>We won't give your email address to anyone else
            <br>
            See our <a>Privacy policy</a> for more details
          </p>
          <button>Book</button>
        </div>
        <div class="event-info__end">
          <button>Book</button>
          <p class="event-info__disclaimer"><b>All our events are licensed venues, so bring some ID just in case
            you are lucky enough to be asked your age!</b>
          </p>
        </div>
      </div>
      <div class="event-info__g--col --right">
        <div class="event-info__data-pill">
          <p class="event-info__title"><b>What areas does this event cover?</b></p>
          <p class="event-info__description">Event areas</p>
        </div>
        <div class="event-info__data-pill">
          <p class="event-info__title"><b>Venue address</b></p>
          <p class="event-info__description">{{this.venueData.street}}</p>
        </div>
        <div class="event-info__data-pill">
          <p class="event-info__title"><b>Venue Directions</b></p>
          <p class="event-info__description">{{this.venueData.directions}}</p>
        </div>
        <div class="event-info__data-pill">
          <p class="event-info__title"><b>Nearest subway</b></p>
          <p class="event-info__description">{{this.venueData["transport-station"]}}</p>
        </div>
        <div class="event-info__data-pill">
          <p class="event-info__title"><b>Map</b></p>
          <div v-html="this.injectMap" class="event-info__map"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MockRequests from '../services/MockRequests';
const req = new MockRequests;
export default {
  name: 'EventInfo',
  created(){
  },
  mounted () {
    let id = this.$route.params.EventId;
    this.requestEvents(id);
  },
  data () {
    return {
      venueData: {},
      injectMap: '<img>'
    }
  },
  methods: {
    requestEvents(id){
      req.getEventDetails(id).then((res) => {
      this.venueData = res.data[0];
      this.getMap(res.data[0]["geo"]["latitude"], res.data[0]["geo"]["longitude"]);
      }).catch((err) => {
        throw new Error ('EventList: Error retrieving events');
      })
    },
    async getMap(lat, long){
      let key;
      await req.getMapsKey().then(res => key = res.data).catch((err) => { throw new Error ('Error retrieving key') });
      let source = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${lat},${long}/15?mapSize=600,600&pushpin=${lat},${long};37&key=${key}`
      this.injectMap = `<img src=${source}>`;
    }
  }
}
</script>

<style scoped lang="scss">
.event-info{
  background-color: white;
  padding: 15px 30px;
  max-width: 1200px;
  margin: 35px auto;
  text-align: left;
  h1{
    color: #003D5D;
    font-weight: bold;
    margin: 10px 0px;
  }
}
.event-info__banner{
  img{
    width: 100%;
  }
}
.event-info__g--wrapper{
  display: flex;
  flex-direction: row;
}
.event-info__g--col{
  width: 50%;
  &.--right{
    margin-left: 10px;
  }
  &.--left{
    margin-right: 10px;
    border: 1px solid #e5e5e5;
    padding: 0px 15px;
  }
}
.event-info__description{
  margin-top: 0px;
}
.event-info__title{
  margin-bottom: 0px;
}
.event-info__reserve--title{
  color: #003D5D;
  font-weight: bold;
}
.event-info__radio{
  padding: 5px 0px;
  input{
    height: 18px;
    width: 18px;
  }
  label{
    font-size: 18px;
  }
}
.event-info__middle{
  margin-top: 20px;
  border-top: solid 1px #e5e5e5;
  border-bottom: solid 1px #e5e5e5;
  button{
    display: none;
  }
}
.event-info__middle--fields{
  label{
    display: block;
    font-weight: bold;
    padding-top: 10px;
    font-size: 18px;
  }
  input{
    font-size: 18px;
    padding: 7px 5px;
    border: 1px solid #c1c1c1;
    width: 90%;
  }
}
.event-info__end{
  margin-top: 15px;
  button{
    background-color: #FF9600;
    color: white;
    border: #FF9600 1px solid;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    margin: 10px 0px;
  }
}
.event-info__map{
  display: flex;
  overflow: auto;
  img{
    width: 100%;
    height: auto;
  }
}
@media screen and (max-width:600px){
  .event-info{
    padding: 15px 0px;
    h1{
      padding: 0px 15px;
      font-size: 25px;
    }
  }
  .event-info__g--wrapper{
    display: flex;
    flex-direction: column;
  }
  .event-info__g--col{
    width: 100%;
    &.--right{
      margin-left: 0px;
    }
    &.--left{
      margin-right: 0px;
      border: 1px solid #e5e5e5;
      padding: 0px;
    }
  }
  .event-info__end{
    button{
      display: none;
    }
  }
  .event-info__middle{
    border-bottom: none;
    padding: 0px 15px;
    button{
      display: inline-block;
      background-color: #FF9600;
      color: white;
      border: #FF9600 1px solid;
      font-size: 16px;
      padding: 10px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      margin: 10px 0px;
    }
  }
  .event-info__reserve{
    padding: 0px 15px;
  }
  .event-info__disclaimer{
    display: none;
  }
  .event-info__data-pill{
    padding: 0px 15px;
  }
}
</style>
