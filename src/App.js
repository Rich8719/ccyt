import React, { Component } from "react"
import Video from "./components/Video"
import getId from "./components/YouTubeId"
import { getCaptions } from "./components/CleanData.js";
import "./App.css"
// import FaceTest from './components/FaceTrack'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadVideo: false,
      id: "",
      captions: ""
    }
  }

  handleChange = event => {
    this.setState({
      id: getId.youTubeGetId(event.target.value)
    })
  }

  handleSubmit = event => {
    //Test Data function.
    let testData = [
      {
        dur: 334,
        newSpeaker: true,
        numberOfSyllables: 2,
        start: 1084,
        syllables: "Captain,",
        text: "Captain,"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 1418,
        syllables: "sorry",
        text: "sorry"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 1752,
        syllables: "to",
        text: "to"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 2086,
        syllables: ["int-", "-err-", "-upt"],
        text: "interrupt."
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 2669,
        syllables: "I",
        text: "I"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 2844,
        syllables: "just",
        text: "just"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 3019,
        syllables: "got",
        text: "got"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 3194,
        syllables: "off",
        text: "off"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 3369,
        syllables: "the",
        text: "the"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 3544,
        syllables: "phone",
        text: "phone"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 3719,
        syllables: "with",
        text: "with"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 3894,
        syllables: "the",
        text: "the"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 4069,
        syllables: ["Dep-", "-art-", "-ment"],
        text: "Department"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 4244,
        syllables: "of",
        text: "of"
      },
      {
        dur: 175,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 4419,
        syllables: ["Cor-", "-rec-", "-tions"],
        text: "Corrections."
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 4587,
        syllables: "They",
        text: "They"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 4914,
        syllables: "wanted",
        text: "wanted"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 5241,
        syllables: "me",
        text: "me"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 5568,
        syllables: "to",
        text: "to"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 5895,
        syllables: "let",
        text: "let"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 6222,
        syllables: "you",
        text: "you"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 6549,
        syllables: "know",
        text: "know"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 6876,
        syllables: "that",
        text: "that"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 7203,
        syllables: "Ernest",
        text: "Ernest"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 7530,
        syllables: ["Zu-", "-mo-", "-wski"],
        text: "Zumowski"
      },
      {
        dur: 327,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 7857,
        syllables: "died.",
        text: "died."
      },
      {
        dur: 835,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 8174,
        syllables: "My",
        text: "My"
      },
      {
        dur: 835,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 9009,
        syllables: ["good-", "-ness"],
        text: "goodness."
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 9843,
        syllables: "It's",
        text: "It's"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 10052,
        syllables: "been",
        text: "been"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 10261,
        syllables: "a",
        text: "a"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 10470,
        syllables: "while",
        text: "while"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 10679,
        syllables: "since",
        text: "since"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 10888,
        syllables: "I've",
        text: "I've"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 11097,
        syllables: "heard",
        text: "heard"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 11306,
        syllables: "that",
        text: "that"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 11515,
        syllables: "name.",
        text: "name."
      },
      {
        dur: 342,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 11720,
        syllables: "I",
        text: "I"
      },
      {
        dur: 342,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 12062,
        syllables: "hunted",
        text: "hunted"
      },
      {
        dur: 342,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 12404,
        syllables: "him",
        text: "him"
      },
      {
        dur: 342,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 12746,
        syllables: "for",
        text: "for"
      },
      {
        dur: 342,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 13088,
        syllables: "years",
        text: "years"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 13430,
        syllables: "and",
        text: "and"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 13764,
        syllables: "finally",
        text: "finally"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 14098,
        syllables: "caught",
        text: "caught"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 14432,
        syllables: "him",
        text: "him"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 14766,
        syllables: "and",
        text: "and"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 15100,
        syllables: "put",
        text: "put"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 15434,
        syllables: "an",
        text: "an"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 15768,
        syllables: "end",
        text: "end"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 16102,
        syllables: "to",
        text: "to"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 16436,
        syllables: "his",
        text: "his"
      },
      {
        dur: 334,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 16770,
        syllables: ["bloo-", "-dlust"],
        text: "bloodlust."
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 17100,
        syllables: "In",
        text: "In"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 17447,
        syllables: "some",
        text: "some"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 17794,
        syllables: "sick",
        text: "sick"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 18141,
        syllables: "way,",
        text: "way,"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 18488,
        syllables: "I",
        text: "I"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 18835,
        syllables: "am",
        text: "am"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 19182,
        syllables: "who",
        text: "who"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 19529,
        syllables: "I",
        text: "I"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 19876,
        syllables: "am",
        text: "am"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 20223,
        syllables: "because",
        text: "because"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 20570,
        syllables: "of",
        text: "of"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 20917,
        syllables: "Ernest",
        text: "Ernest"
      },
      {
        dur: 347,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 21264,
        syllables: ["Zu-", "-mo-", "-wski"],
        text: "Zumowski"
      },
      {
        dur: 647,
        newSpeaker: true,
        numberOfSyllables: 2,
        start: 21604,
        syllables: "AKA",
        text: "AKA"
      },
      {
        dur: 647,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 22251,
        syllables: "The",
        text: "The"
      },
      {
        dur: 647,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 22898,
        syllables: "Disco",
        text: "Disco"
      },
      {
        dur: 647,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 23545,
        syllables: ["Stra-", "-ngler"],
        text: "Strangler."
      },
      {
        dur: 195,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 24190,
        syllables: "Oh,",
        text: "Oh,"
      },
      {
        dur: 195,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 24385,
        syllables: "so",
        text: "so"
      },
      {
        dur: 195,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 24580,
        syllables: "you",
        text: "you"
      },
      {
        dur: 195,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 24775,
        syllables: "knew",
        text: "knew"
      },
      {
        dur: 195,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 24970,
        syllables: "who",
        text: "who"
      },
      {
        dur: 195,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 25165,
        syllables: "I",
        text: "I"
      },
      {
        dur: 195,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 25360,
        syllables: "was",
        text: "was"
      },
      {
        dur: 195,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 25555,
        syllables: "talking",
        text: "talking"
      },
      {
        dur: 195,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 25750,
        syllables: "about",
        text: "about"
      },
      {
        dur: 204,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 25942,
        syllables: "Yeah,",
        text: "Yeah,"
      },
      {
        dur: 204,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 26146,
        syllables: "sir,",
        text: "sir,"
      },
      {
        dur: 204,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 26350,
        syllables: "you",
        text: "you"
      },
      {
        dur: 204,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 26554,
        syllables: "talk",
        text: "talk"
      },
      {
        dur: 204,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 26758,
        syllables: "about",
        text: "about"
      },
      {
        dur: 204,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 26962,
        syllables: "him",
        text: "him"
      },
      {
        dur: 204,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 27166,
        syllables: "a",
        text: "a"
      },
      {
        dur: 204,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 27370,
        syllables: "lot.",
        text: "lot."
      },
      {
        dur: 237,
        newSpeaker: true,
        numberOfSyllables: 0,
        start: 27569,
        syllables: "-",
        text: "-"
      },
      {
        dur: 237,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 27806,
        syllables: "You",
        text: "You"
      },
      {
        dur: 237,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 28043,
        syllables: "know,",
        text: "know,"
      },
      {
        dur: 237,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 28280,
        syllables: "the",
        text: "the"
      },
      {
        dur: 237,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 28517,
        syllables: "yo-yo",
        text: "yo-yo"
      },
      {
        dur: 237,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 28754,
        syllables: "was",
        text: "was"
      },
      {
        dur: 237,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 28991,
        syllables: "his--",
        text: "his--"
      },
      {
        dur: 237,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 29228,
        syllables: "Calling",
        text: "Calling"
      },
      {
        dur: 237,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 29465,
        syllables: "card.",
        text: "card."
      },
      {
        dur: 251,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 29696,
        syllables: "Oh,",
        text: "Oh,"
      },
      {
        dur: 251,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 29947,
        syllables: "I",
        text: "I"
      },
      {
        dur: 251,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 30198,
        syllables: ["ment-", "-ioned"],
        text: "mentioned"
      },
      {
        dur: 251,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 30449,
        syllables: "that",
        text: "that"
      },
      {
        dur: 251,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 30700,
        syllables: "too",
        text: "too"
      },
      {
        dur: 251,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 30951,
        syllables: "So",
        text: "So"
      },
      {
        dur: 251,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 31202,
        syllables: "how'd",
        text: "how'd"
      },
      {
        dur: 251,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 31453,
        syllables: "he",
        text: "he"
      },
      {
        dur: 251,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 31704,
        syllables: "die",
        text: "die"
      },
      {
        dur: 239,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 31948,
        syllables: "He",
        text: "He"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 32187,
        syllables: "was",
        text: "was"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 32426,
        syllables: "in",
        text: "in"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 32665,
        syllables: "a",
        text: "a"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 32904,
        syllables: "prison",
        text: "prison"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 33143,
        syllables: ["tran-", "-sport"],
        text: "transport"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 33382,
        syllables: "van,",
        text: "van,"
      },
      {
        dur: 215,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 33616,
        syllables: "and",
        text: "and"
      },
      {
        dur: 215,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 33831,
        syllables: "he",
        text: "he"
      },
      {
        dur: 215,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 34046,
        syllables: "got",
        text: "got"
      },
      {
        dur: 215,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 34261,
        syllables: "in",
        text: "in"
      },
      {
        dur: 215,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 34476,
        syllables: "a",
        text: "a"
      },
      {
        dur: 215,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 34691,
        syllables: ["te-", "-rr-", "-ible"],
        text: "terrible"
      },
      {
        dur: 215,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 34906,
        syllables: ["ac-", "-ci-", "-dent"],
        text: "accident."
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 35118,
        syllables: "It",
        text: "It"
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 35341,
        syllables: "burst",
        text: "burst"
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 35564,
        syllables: "into",
        text: "into"
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 35787,
        syllables: "flames,",
        text: "flames,"
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 36010,
        syllables: "and",
        text: "and"
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 36233,
        syllables: "he",
        text: "he"
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 36456,
        syllables: "was",
        text: "was"
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 36679,
        syllables: "trapped",
        text: "trapped"
      },
      {
        dur: 223,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 36902,
        syllables: "inside.",
        text: "inside."
      },
      {
        dur: 304,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 39831,
        syllables: "Well,",
        text: "Well,"
      },
      {
        dur: 304,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 40135,
        syllables: "well,",
        text: "well,"
      },
      {
        dur: 304,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 40439,
        syllables: "well,",
        text: "well,"
      },
      {
        dur: 304,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 40743,
        syllables: "he",
        text: "he"
      },
      {
        dur: 304,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 41047,
        syllables: "finally",
        text: "finally"
      },
      {
        dur: 304,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 41351,
        syllables: "did",
        text: "did"
      },
      {
        dur: 304,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 41655,
        syllables: "it.",
        text: "it."
      },
      {
        dur: 932,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 41958,
        syllables: "Died",
        text: "Died"
      },
      {
        dur: 932,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 42890,
        syllables: ["ho-", "-rr-", "-ibly"],
        text: "horribly"
      },
      {
        dur: 932,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 43822,
        syllables: "Escaped.",
        text: "Escaped."
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 44753,
        syllables: "Just",
        text: "Just"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 44987,
        syllables: "like",
        text: "like"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 45221,
        syllables: "he",
        text: "he"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 45455,
        syllables: "said",
        text: "said"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 45689,
        syllables: "he",
        text: "he"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 45923,
        syllables: "would",
        text: "would"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 46157,
        syllables: "all",
        text: "all"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 46391,
        syllables: "those",
        text: "those"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 46625,
        syllables: "years",
        text: "years"
      },
      {
        dur: 234,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 46859,
        syllables: "ago.",
        text: "ago."
      },
      {
        dur: 265,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 47088,
        syllables: "I'll",
        text: "I'll"
      },
      {
        dur: 265,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 47353,
        syllables: "be",
        text: "be"
      },
      {
        dur: 265,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 47618,
        syllables: "coming",
        text: "coming"
      },
      {
        dur: 265,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 47883,
        syllables: "back",
        text: "back"
      },
      {
        dur: 265,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 48148,
        syllables: "for",
        text: "for"
      },
      {
        dur: 265,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 48413,
        syllables: "you.",
        text: "you."
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 48673,
        syllables: "I'm",
        text: "I'm"
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 49063,
        syllables: "just",
        text: "just"
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 49453,
        syllables: "like",
        text: "like"
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 49843,
        syllables: "disco,",
        text: "disco,"
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 50233,
        syllables: "baby.",
        text: "baby."
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 50623,
        syllables: "I",
        text: "I"
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 51013,
        syllables: "will",
        text: "will"
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 51403,
        syllables: "never",
        text: "never"
      },
      {
        dur: 390,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 51793,
        syllables: "die.",
        text: "die."
      },
      {
        dur: 433,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 52177,
        syllables: "True,",
        text: "True,"
      },
      {
        dur: 433,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 52610,
        syllables: "disco",
        text: "disco"
      },
      {
        dur: 433,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 53043,
        syllables: "will",
        text: "will"
      },
      {
        dur: 433,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 53476,
        syllables: "never",
        text: "never"
      },
      {
        dur: 433,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 53909,
        syllables: "die,",
        text: "die,"
      },
      {
        dur: 433,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 54342,
        syllables: "but",
        text: "but"
      },
      {
        dur: 433,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 54775,
        syllables: "you",
        text: "you"
      },
      {
        dur: 433,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 55208,
        syllables: "will",
        text: "will"
      },
      {
        dur: 491,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 55638,
        syllables: "In",
        text: "In"
      },
      {
        dur: 491,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 56129,
        syllables: "your",
        text: "your"
      },
      {
        dur: 491,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 56620,
        syllables: "cell,",
        text: "cell,"
      },
      {
        dur: 491,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 57111,
        syllables: "punk.",
        text: "punk."
      },
      {
        dur: 236,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 57599,
        syllables: "Oh,",
        text: "Oh,"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 57835,
        syllables: "so",
        text: "so"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 58071,
        syllables: "I've",
        text: "I've"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 58307,
        syllables: "told",
        text: "told"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 58543,
        syllables: "that",
        text: "that"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 58779,
        syllables: "part",
        text: "part"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 59015,
        syllables: "of",
        text: "of"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 59251,
        syllables: "the",
        text: "the"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 59487,
        syllables: "story",
        text: "story"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 59723,
        syllables: "as",
        text: "as"
      },
      {
        dur: 236,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 59959,
        syllables: "well",
        text: "well"
      },
      {
        dur: 501,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 60185,
        syllables: "Yes,",
        text: "Yes,"
      },
      {
        dur: 501,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 60686,
        syllables: "at",
        text: "at"
      },
      {
        dur: 501,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 61187,
        syllables: "every",
        text: "every"
      },
      {
        dur: 501,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 61688,
        syllables: ["Chri-", "-stmas"],
        text: "Christmas"
      },
      {
        dur: 501,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 62189,
        syllables: "party.",
        text: "party."
      },
      {
        dur: 239,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 62687,
        syllables: "Sir,",
        text: "Sir,"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 62926,
        syllables: "I",
        text: "I"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 63165,
        syllables: "am",
        text: "am"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 63404,
        syllables: "the",
        text: "the"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 63643,
        syllables: "first",
        text: "first"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 63882,
        syllables: "to",
        text: "to"
      },
      {
        dur: 239,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 64121,
        syllables: "tout",
        text: "tout"
      },
      {
        dur: 368,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 64356,
        syllables: "the",
        text: "the"
      },
      {
        dur: 368,
        newSpeaker: false,
        numberOfSyllables: 5,
        start: 64724,
        syllables: ["ca-", "-pa-", "-bi-", "-li-", "-ties"],
        text: "capabilities"
      },
      {
        dur: 368,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 65092,
        syllables: "of",
        text: "of"
      },
      {
        dur: 368,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 65460,
        syllables: "senior",
        text: "senior"
      },
      {
        dur: 368,
        newSpeaker: false,
        numberOfSyllables: 3,
        start: 65827,
        syllables: ["ci-", "-ti-", "-zen"],
        text: "citizens."
      },
      {
        dur: 278,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 66191,
        syllables: "I",
        text: "I"
      },
      {
        dur: 278,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 66469,
        syllables: "have",
        text: "have"
      },
      {
        dur: 278,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 66747,
        syllables: "made",
        text: "made"
      },
      {
        dur: 278,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 67025,
        syllables: "love",
        text: "love"
      },
      {
        dur: 278,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 67303,
        syllables: "to",
        text: "to"
      },
      {
        dur: 278,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 67581,
        syllables: "many,",
        text: "many,"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 67859,
        syllables: "but",
        text: "but"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 68068,
        syllables: "the",
        text: "the"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 68277,
        syllables: "Disco",
        text: "Disco"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 68486,
        syllables: ["Stra-", "-ngler"],
        text: "Strangler"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 68695,
        syllables: "is",
        text: "is"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 68904,
        syllables: "over",
        text: "over"
      },
      {
        dur: 209,
        newSpeaker: false,
        numberOfSyllables: 0,
        start: 69113,
        syllables: ".",
        text: "."
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 69319,
        syllables: "I",
        text: "I"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 69501,
        syllables: "doubt",
        text: "doubt"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 69683,
        syllables: "that",
        text: "that"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 69865,
        syllables: "he",
        text: "he"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 70047,
        syllables: "could",
        text: "could"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 70229,
        syllables: "pull",
        text: "pull"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 70411,
        syllables: "off",
        text: "off"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 70593,
        syllables: "an",
        text: "an"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 70775,
        syllables: "escape",
        text: "escape"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 70957,
        syllables: "like",
        text: "like"
      },
      {
        dur: 182,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 71139,
        syllables: "this.",
        text: "this."
      },
      {
        dur: 214,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 71321,
        syllables: "Oh,",
        text: "Oh,"
      },
      {
        dur: 214,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 71535,
        syllables: "that's",
        text: "that's"
      },
      {
        dur: 214,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 71749,
        syllables: "what",
        text: "what"
      },
      {
        dur: 214,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 71963,
        syllables: "he",
        text: "he"
      },
      {
        dur: 214,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 72177,
        syllables: "wants",
        text: "wants"
      },
      {
        dur: 214,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 72391,
        syllables: "you",
        text: "you"
      },
      {
        dur: 214,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 72605,
        syllables: "to",
        text: "to"
      },
      {
        dur: 214,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 72819,
        syllables: "think.",
        text: "think."
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 73031,
        syllables: "You're",
        text: "You're"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 73480,
        syllables: "both",
        text: "both"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 6,
        start: 73929,
        syllables: ["un-", "-de-", "-re-", "-st-", "-im-", "-ating"]
        , text: "underestimating"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 74378,
        syllables: "him.",
        text: "him."
      },
      {
        dur: 286,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 74824,
        syllables: "I",
        text: "I"
      },
      {
        dur: 286,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 75110,
        syllables: "know",
        text: "know"
      },
      {
        dur: 286,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 75396,
        syllables: "other",
        text: "other"
      },
      {
        dur: 286,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 75682,
        syllables: "people",
        text: "people"
      },
      {
        dur: 286,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 75968,
        syllables: "who",
        text: "who"
      },
      {
        dur: 286,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 76254,
        syllables: "did",
        text: "did"
      },
      {
        dur: 286,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 76540,
        syllables: "that,",
        text: "that,"
      },
      {
        dur: 197,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 76826,
        syllables: "and",
        text: "and"
      },
      {
        dur: 197,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 77023,
        syllables: "they",
        text: "they"
      },
      {
        dur: 197,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 77220,
        syllables: "all",
        text: "all"
      },
      {
        dur: 197,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 77417,
        syllables: "ended",
        text: "ended"
      },
      {
        dur: 197,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 77614,
        syllables: "up",
        text: "up"
      },
      {
        dur: 197,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 77811,
        syllables: "with",
        text: "with"
      },
      {
        dur: 197,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 78008,
        syllables: "yo-yos",
        text: "yo-yos"
      },
      {
        dur: 317,
        newSpeaker: true,
        numberOfSyllables: 2,
        start: 78203,
        syllables: "around",
        text: "around"
      },
      {
        dur: 317,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 78520,
        syllables: "their",
        text: "their"
      },
      {
        dur: 317,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 78837,
        syllables: "throats.",
        text: "throats."
      },
      {
        dur: 317,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 79154,
        syllables: "both",
        text: "both"
      },
      {
        dur: 317,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 79471,
        syllables: "Necks.",
        text: "Necks."
      },
      {
        dur: 244,
        newSpeaker: true,
        numberOfSyllables: 1,
        start: 79788,
        syllables: "Nope,",
        text: "Nope,"
      },
      {
        dur: 244,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 80032,
        syllables: "I",
        text: "I"
      },
      {
        dur: 244,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 80276,
        syllables: "said",
        text: "said"
      },
      {
        dur: 244,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 80520,
        syllables: "throats,",
        text: "throats,"
      },
      {
        dur: 244,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 80764,
        syllables: "not",
        text: "not"
      },
      {
        dur: 244,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 81008,
        syllables: "necks,",
        text: "necks,"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 81247,
        syllables: "which",
        text: "which"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 81514,
        syllables: "means",
        text: "means"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 81781,
        syllables: "I",
        text: "I"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 82048,
        syllables: "haven't",
        text: "haven't"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 82315,
        syllables: "told",
        text: "told"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 82582,
        syllables: "that",
        text: "that"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 82849,
        syllables: "story",
        text: "story"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 83116,
        syllables: "too",
        text: "too"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 83383,
        syllables: "many",
        text: "many"
      },
      {
        dur: 267,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 83650,
        syllables: "times.",
        text: "times."
      },
      {
        dur: 400,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 83917,
        syllables: "All",
        text: "All"
      },
      {
        dur: 400,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 84317,
        syllables: "right,",
        text: "right,"
      },
      {
        dur: 400,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 84717,
        syllables: "lace",
        text: "lace"
      },
      {
        dur: 400,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 85117,
        syllables: "up",
        text: "up"
      },
      {
        dur: 400,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 85517,
        syllables: "your",
        text: "your"
      },
      {
        dur: 400,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 85917,
        syllables: "dancing",
        text: "dancing"
      },
      {
        dur: 400,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 86317,
        syllables: "shoes",
        text: "shoes"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 86711,
        syllables: "because",
        text: "because"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 87160,
        syllables: "it's",
        text: "it's"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 87609,
        syllables: "time",
        text: "time"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 88058,
        syllables: "to",
        text: "to"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 88507,
        syllables: "catch",
        text: "catch"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 1,
        start: 88956,
        syllables: "this",
        text: "this"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 89405,
        syllables: "disco",
        text: "disco"
      },
      {
        dur: 449,
        newSpeaker: false,
        numberOfSyllables: 2,
        start: 89854,
        syllables: "bastard.",
        text: "bastard."
      }
    ]
    
    event.preventDefault()
    this.setState({
      loadVideo: true,
      captions: testData
    })
    // Call to server.
    // event.preventDefault()
    // fetch(`/scrape/id?id=${encodeURIComponent(this.state.id)}`)
    //   .then(response => response.json())
    //   .then(captionsRaw => getCaptions(captionsRaw)
    //   .then( captions =>
    //     this.setState({
    //     loadVideo: true,
    //     captions: captions
    //   })
    //   )
    // )
  }

  render() {
    return (
      <div className="App">
        {/* <FaceTest/> */}
        {this.state.loadVideo ? (
          <>
            <Video id={this.state.id} captions={this.state.captions}/>
          </>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="url">Enter YouTube URL:</label>
            <input id="url" type="text" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}

export default App
