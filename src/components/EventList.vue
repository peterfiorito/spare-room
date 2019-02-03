<template>
  <div class="event-list">
    <div class="event-list__static-data">
      <div class="event-list__static-data--column --right">
        <img class="event-list__sr-logo" src="/static/SRM-logo.png" />
        <div class="event-list__static-data--column --left --small">
          <img src="/static/attendees.jpg" class="event-list__atendees-small"/>
        </div>
        <p class="event-list__sub-title">Roommates sorted in one fun evening</p>
        <p class="event-list__paragraph">
          It's not about what you share it's about who you're sharing it with,
          so it makes sense to check out the people first. By coming to a
          SpeedRoommating event you get the chance to meet loads of potential
          new roommates in the time it would take you to travel to and look
          around a singl;e apartment. It really couldn't be easier! <a>More info</a>
        </p>
      </div>
      <div class="event-list__static-data--column --left">
        <img src="/static/attendees.jpg" class="event-list__atendees-big"/>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(event, id) in events" :key="id" class="event-list__list">
          <div class="event-list__list-item">
            <div class="--first">
              <p>{{formatMonth(event.date)}}</p>
            </div>
            <div class="--col">
              <div class="--second">
                <p><b>{{formatPlace(event["areas-convered"])}}</b></p>
                <p>{{formatVenue(event["venue_id"])}}</p>
              </div>
              <div class="--third">
                <div class="--date">
                  <p>{{formatDate(event.date, event["start-time"], event["end-time"])}}</p>
                  <p>Free</p>
                </div>
                <div class="--action">
                  <button @click="goTo(event.venue_id)">Book</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MockRequests from '../services/MockRequests'
import { dayDictionary, hourFormatter } from '../services/utils'

const req = new MockRequests;

export default {
  name: 'EventList',
  created () {
    this.requestEvents();
    this.requestVenues();
  },
  data () {
    return {
      events: [],
      venues: []
    }
  },
  methods: {
    requestEvents(){
      req.getEvents().then((res) => {
      this.events = res.data;
      }).catch((err) => {
        throw new Error ('EventList: Error retrieving events');
      })
    },
    requestVenues(){
      req.getVenues().then((res) => {
        this.venues = res.data;
      }).catch((err) => {
        throw new Error ('EventList: Error retrieving venues');
      })
    },
    formatDate(date, startTime, endTime){
      /* Heavy formatting of the data in the FE logic is not optimal,
        our API should offer the data ready to consume, but for practical
        purposes is done here */
      let formatDate = new Date(date);
      let first = dayDictionary((String(formatDate).split(" ").slice(0,1).join(" ")));
      let second = hourFormatter(startTime.split(":").slice(0,2).join(":"));
      let third = hourFormatter(endTime.split(":").slice(0,2).join(":"));
      return String(first + " " + second + " - " + third);
    },
    formatMonth(date){
      let formatDate = new Date(date);
      return (String(formatDate).split(" ").slice(1,3).reverse()).join(" ");
    },
    formatPlace(place){
      return place.split(",")[0]
    },
    formatVenue(venue) {
      if(this.venues.length < 1){
        return
      }
      let tempArray = this.venues.slice();
      return tempArray.map(x=> x.id == venue ? x.name : false).filter(x=>x!==false)[0];
    },
    goTo(id){
      return this.$router.push('/EventDetails/' + id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.event-list{
  background-color: white;
  padding: 30px;
  max-width: 1200px;
  margin: 35px auto;
  text-align: left;
}
.event-list__static-data{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.event-list__static-data--column{
  flex-direction: column;
  width: 50%;
  &.--right{
    width: 55%;
  }
  &.--left{
    justify-content: flex-end;
    text-align: right;
    img{
      max-width: max-content;
    }
  }
}
.event-list__sr-logo{
  max-width: 350px;
}
.event-list__sub-title{
  color: #003D5D;
  font-weight: bold;
}
.event-list__static-data--column {
  &.--left{ 
    &.--small{
      display: none;
    }
  }
}
.event-list__list{
  display: flex;
  flex-direction: column;
}
ul{
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
.event-list__list-item{
  display: flex;
  flex-direction: row;
  .--col{
    display: flex;
    flex-direction: row;
    width: 90%;
  }
  p{
    margin: 5px 0px;
  }
  .--first{
    width: 10%;
    background-color: #003D5D;
    border: solid 1px #003D5D;
    margin: 10px 0px;
    color: white;
    font-weight: bold;
    padding: 10px;
    p{
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
  .--second{
    width: 50%;
    border: solid 1px #e5e5e5;
    margin: 10px 0px;
    padding: 10px;
  }
  .--third{
    width: 50%;
    display: flex;
    flex-direction: row;
    border: solid 1px #e5e5e5;
    margin: 10px 0px;
    padding: 10px;
    .--date{
      width: 70%;
    }
    .--action{
      width: 30%;
      margin: auto;
      justify-content: center;
      display: flex;
      button{
        background-color: #FF9600;
        color: white;
        border: #FF9600 1px solid;
        font-size: 16px;
        padding: 10px;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .event-list{
    padding: 30px 0px;
  }
  .event-list__sub-title{
    padding-left: 10px;
  }
  .event-list__paragraph{
    padding: 0px 10px;
  }
  .event-list__static-data--column {
    &.--right{
      width: 100%;
    }
  }
  .event-list__sr-logo{
    max-width: 250px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  .event-list__atendees-small{
    width:100%;
  }
  .event-list__static-data{
    flex-direction: column;
  }
  .event-list__static-data--column{
    &.--left{
      display: none;
    }
  }
  .event-list__static-data--column {
    &.--left {
      &.--small{
        display: block;
        width: 100%;
      }
    }
  }
  .event-list__list{
  margin: 0px 10px;
}
.event-list__list-item{
  .--col{
    flex-direction: column;
  }
  .--first{
    width: 20%;
  }
  .--second{
    margin-bottom: 0px;
    width: 90%;
  }
  .--third{
    margin-top: 0px;
    width: 90%;
    flex-direction: column;
    .--date{
      width: 100%;
    }
  }
}
}
</style>
