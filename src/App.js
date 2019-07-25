import React, { Component } from "react"
// import Video from "./components/Video"
import getId from "./components/YouTubeId"
// import { getCaptions } from "./components/CleanData.js";
import "./App.css"
import FaceTest from './components/FaceTrack'

let testData = [
  {
    dur: 334,
    newSpeaker: true,
    start: 1084,
    text: "Captain,"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 1418,
    text: "sorry"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 1752,
    text: "to"
  },
  {
    dur: 111,
    newSpeaker: false,
    start: 2086,
    text: "int-"
  },
  {
    dur: 111,
    newSpeaker: false,
    start: 2197,
    text: "-err-"
  },
  {
    dur: 111,
    newSpeaker: false,
    start: 2308,
    text: "-upt"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 2669,
    text: "I"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 2844,
    text: "just"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 3019,
    text: "got"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 3194,
    text: "off"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 3369,
    text: "the"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 3544,
    text: "phone"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 3719,
    text: "with"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 3894,
    text: "the"
  },
  {
    dur: 58,
    newSpeaker: false,
    start: 4069,
    text: "Dep-"
  },
  {
    dur: 58,
    newSpeaker: false,
    start: 4127,
    text: "-art-"
  },
  {
    dur: 58,
    newSpeaker: false,
    start: 4185,
    text: "-ment"
  },
  {
    dur: 175,
    newSpeaker: false,
    start: 4244,
    text: "of"
  },
  {
    dur: 58,
    newSpeaker: false,
    start: 4419,
    text: "Cor-"
  },
  {
    dur: 58,
    newSpeaker: false,
    start: 4477,
    text: "-rec-"
  },
  {
    dur: 58,
    newSpeaker: false,
    start: 4535,
    text: "-tions"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 4587,
    text: "They"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 4914,
    text: "wanted"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 5241,
    text: "me"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 5568,
    text: "to"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 5895,
    text: "let"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 6222,
    text: "you"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 6549,
    text: "know"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 6876,
    text: "that"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 7203,
    text: "Ernest"
  },
  {
    dur: 109,
    newSpeaker: false,
    start: 7530,
    text: "Zu-"
  },
  {
    dur: 109,
    newSpeaker: false,
    start: 7639,
    text: "-mo-"
  },
  {
    dur: 109,
    newSpeaker: false,
    start: 7748,
    text: "-wski"
  },
  {
    dur: 327,
    newSpeaker: false,
    start: 7857,
    text: "died."
  },
  {
    dur: 835,
    newSpeaker: true,
    start: 8174,
    text: "My"
  },
  {
    dur: 417,
    newSpeaker: false,
    start: 9009,
    text: "good-"
  },
  {
    dur: 417,
    newSpeaker: false,
    start: 9426,
    text: "-ness"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 9843,
    text: "It's"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 10052,
    text: "been"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 10261,
    text: "a"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 10470,
    text: "while"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 10679,
    text: "since"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 10888,
    text: "I've"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 11097,
    text: "heard"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 11306,
    text: "that"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 11515,
    text: "name."
  },
  {
    dur: 342,
    newSpeaker: false,
    start: 11720,
    text: "I"
  },
  {
    dur: 342,
    newSpeaker: false,
    start: 12062,
    text: "hunted"
  },
  {
    dur: 342,
    newSpeaker: false,
    start: 12404,
    text: "him"
  },
  {
    dur: 342,
    newSpeaker: false,
    start: 12746,
    text: "for"
  },
  {
    dur: 342,
    newSpeaker: false,
    start: 13088,
    text: "years"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 13430,
    text: "and"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 13764,
    text: "finally"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 14098,
    text: "caught"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 14432,
    text: "him"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 14766,
    text: "and"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 15100,
    text: "put"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 15434,
    text: "an"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 15768,
    text: "end"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 16102,
    text: "to"
  },
  {
    dur: 334,
    newSpeaker: false,
    start: 16436,
    text: "his"
  },
  {
    dur: 167,
    newSpeaker: false,
    start: 16770,
    text: "bloo-"
  },
  {
    dur: 167,
    newSpeaker: false,
    start: 16937,
    text: "-dlust"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 17100,
    text: "In"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 17447,
    text: "some"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 17794,
    text: "sick"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 18141,
    text: "way,"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 18488,
    text: "I"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 18835,
    text: "am"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 19182,
    text: "who"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 19529,
    text: "I"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 19876,
    text: "am"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 20223,
    text: "because"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 20570,
    text: "of"
  },
  {
    dur: 347,
    newSpeaker: false,
    start: 20917,
    text: "Ernest"
  },
  {
    dur: 115,
    newSpeaker: false,
    start: 21264,
    text: "Zu-"
  },
  {
    dur: 115,
    newSpeaker: false,
    start: 21379,
    text: "-mo-"
  },
  {
    dur: 115,
    newSpeaker: false,
    start: 21494,
    text: "-wski"
  },
  {
    dur: 647,
    newSpeaker: true,
    start: 21604,
    text: "AKA"
  },
  {
    dur: 647,
    newSpeaker: false,
    start: 22251,
    text: "The"
  },
  {
    dur: 647,
    newSpeaker: false,
    start: 22898,
    text: "Disco"
  },
  {
    dur: 323,
    newSpeaker: false,
    start: 23545,
    text: "Stra-"
  },
  {
    dur: 323,
    newSpeaker: false,
    start: 23868,
    text: "-ngler"
  },
  {
    dur: 195,
    newSpeaker: true,
    start: 24190,
    text: "Oh,"
  },
  {
    dur: 195,
    newSpeaker: false,
    start: 24385,
    text: "so"
  },
  {
    dur: 195,
    newSpeaker: false,
    start: 24580,
    text: "you"
  },
  {
    dur: 195,
    newSpeaker: false,
    start: 24775,
    text: "knew"
  },
  {
    dur: 195,
    newSpeaker: false,
    start: 24970,
    text: "who"
  },
  {
    dur: 195,
    newSpeaker: false,
    start: 25165,
    text: "I"
  },
  {
    dur: 195,
    newSpeaker: false,
    start: 25360,
    text: "was"
  },
  {
    dur: 195,
    newSpeaker: false,
    start: 25555,
    text: "talking"
  },
  {
    dur: 195,
    newSpeaker: false,
    start: 25750,
    text: "about"
  },
  {
    dur: 204,
    newSpeaker: true,
    start: 25942,
    text: "Yeah,"
  },
  {
    dur: 204,
    newSpeaker: false,
    start: 26146,
    text: "sir,"
  },
  {
    dur: 204,
    newSpeaker: false,
    start: 26350,
    text: "you"
  },
  {
    dur: 204,
    newSpeaker: false,
    start: 26554,
    text: "talk"
  },
  {
    dur: 204,
    newSpeaker: false,
    start: 26758,
    text: "about"
  },
  {
    dur: 204,
    newSpeaker: false,
    start: 26962,
    text: "him"
  },
  {
    dur: 204,
    newSpeaker: false,
    start: 27166,
    text: "a"
  },
  {
    dur: 204,
    newSpeaker: false,
    start: 27370,
    text: "lot."
  },
  {
    dur: 237,
    newSpeaker: true,
    start: 27569,
    text: "-"
  },
  {
    dur: 237,
    newSpeaker: false,
    start: 27806,
    text: "You"
  },
  {
    dur: 237,
    newSpeaker: false,
    start: 28043,
    text: "know,"
  },
  {
    dur: 237,
    newSpeaker: false,
    start: 28280,
    text: "the"
  },
  {
    dur: 237,
    newSpeaker: false,
    start: 28517,
    text: "yo-yo"
  },
  {
    dur: 237,
    newSpeaker: false,
    start: 28754,
    text: "was"
  },
  {
    dur: 237,
    newSpeaker: false,
    start: 28991,
    text: "his--"
  },
  {
    dur: 237,
    newSpeaker: false,
    start: 29228,
    text: "Calling"
  },
  {
    dur: 237,
    newSpeaker: false,
    start: 29465,
    text: "card."
  },
  {
    dur: 251,
    newSpeaker: true,
    start: 29696,
    text: "Oh,"
  },
  {
    dur: 251,
    newSpeaker: false,
    start: 29947,
    text: "I"
  },
  {
    dur: 125,
    newSpeaker: false,
    start: 30198,
    text: "ment-"
  },
  {
    dur: 125,
    newSpeaker: false,
    start: 30323,
    text: "-ioned"
  },
  {
    dur: 251,
    newSpeaker: false,
    start: 30449,
    text: "that"
  },
  {
    dur: 251,
    newSpeaker: false,
    start: 30700,
    text: "too"
  },
  {
    dur: 251,
    newSpeaker: false,
    start: 30951,
    text: "So"
  },
  {
    dur: 251,
    newSpeaker: false,
    start: 31202,
    text: "how'd"
  },
  {
    dur: 251,
    newSpeaker: false,
    start: 31453,
    text: "he"
  },
  {
    dur: 251,
    newSpeaker: false,
    start: 31704,
    text: "die"
  },
  {
    dur: 239,
    newSpeaker: true,
    start: 31948,
    text: "He"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 32187,
    text: "was"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 32426,
    text: "in"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 32665,
    text: "a"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 32904,
    text: "prison"
  },
  {
    dur: 119,
    newSpeaker: false,
    start: 33143,
    text: "tran-"
  },
  {
    dur: 119,
    newSpeaker: false,
    start: 33262,
    text: "-sport"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 33382,
    text: "van,"
  },
  {
    dur: 215,
    newSpeaker: false,
    start: 33616,
    text: "and"
  },
  {
    dur: 215,
    newSpeaker: false,
    start: 33831,
    text: "he"
  },
  {
    dur: 215,
    newSpeaker: false,
    start: 34046,
    text: "got"
  },
  {
    dur: 215,
    newSpeaker: false,
    start: 34261,
    text: "in"
  },
  {
    dur: 215,
    newSpeaker: false,
    start: 34476,
    text: "a"
  },
  {
    dur: 71,
    newSpeaker: false,
    start: 34691,
    text: "te-"
  },
  {
    dur: 71,
    newSpeaker: false,
    start: 34762,
    text: "-rr-"
  },
  {
    dur: 71,
    newSpeaker: false,
    start: 34833,
    text: "-ible"
  },
  {
    dur: 71,
    newSpeaker: false,
    start: 34906,
    text: "ac-"
  },
  {
    dur: 71,
    newSpeaker: false,
    start: 34977,
    text: "-ci-"
  },
  {
    dur: 71,
    newSpeaker: false,
    start: 35048,
    text: "-dent"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 35118,
    text: "It"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 35341,
    text: "burst"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 35564,
    text: "into"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 35787,
    text: "flames,"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 36010,
    text: "and"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 36233,
    text: "he"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 36456,
    text: "was"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 36679,
    text: "trapped"
  },
  {
    dur: 223,
    newSpeaker: false,
    start: 36902,
    text: "inside."
  },
  {
    dur: 304,
    newSpeaker: false,
    start: 39831,
    text: "Well,"
  },
  {
    dur: 304,
    newSpeaker: false,
    start: 40135,
    text: "well,"
  },
  {
    dur: 304,
    newSpeaker: false,
    start: 40439,
    text: "well,"
  },
  {
    dur: 304,
    newSpeaker: false,
    start: 40743,
    text: "he"
  },
  {
    dur: 304,
    newSpeaker: false,
    start: 41047,
    text: "finally"
  },
  {
    dur: 304,
    newSpeaker: false,
    start: 41351,
    text: "did"
  },
  {
    dur: 304,
    newSpeaker: false,
    start: 41655,
    text: "it."
  },
  {
    dur: 932,
    newSpeaker: true,
    start: 41958,
    text: "Died"
  },
  {
    dur: 310,
    newSpeaker: false,
    start: 42890,
    text: "ho-"
  },
  {
    dur: 310,
    newSpeaker: false,
    start: 43200,
    text: "-rr-"
  },
  {
    dur: 310,
    newSpeaker: false,
    start: 43510,
    text: "-ibly"
  },
  {
    dur: 932,
    newSpeaker: false,
    start: 43822,
    text: "Escaped."
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 44753,
    text: "Just"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 44987,
    text: "like"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 45221,
    text: "he"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 45455,
    text: "said"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 45689,
    text: "he"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 45923,
    text: "would"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 46157,
    text: "all"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 46391,
    text: "those"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 46625,
    text: "years"
  },
  {
    dur: 234,
    newSpeaker: false,
    start: 46859,
    text: "ago."
  },
  {
    dur: 265,
    newSpeaker: true,
    start: 47088,
    text: "I'll"
  },
  {
    dur: 265,
    newSpeaker: false,
    start: 47353,
    text: "be"
  },
  {
    dur: 265,
    newSpeaker: false,
    start: 47618,
    text: "coming"
  },
  {
    dur: 265,
    newSpeaker: false,
    start: 47883,
    text: "back"
  },
  {
    dur: 265,
    newSpeaker: false,
    start: 48148,
    text: "for"
  },
  {
    dur: 265,
    newSpeaker: false,
    start: 48413,
    text: "you."
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 48673,
    text: "I'm"
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 49063,
    text: "just"
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 49453,
    text: "like"
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 49843,
    text: "disco,"
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 50233,
    text: "baby."
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 50623,
    text: "I"
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 51013,
    text: "will"
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 51403,
    text: "never"
  },
  {
    dur: 390,
    newSpeaker: false,
    start: 51793,
    text: "die."
  },
  {
    dur: 433,
    newSpeaker: true,
    start: 52177,
    text: "True,"
  },
  {
    dur: 433,
    newSpeaker: false,
    start: 52610,
    text: "disco"
  },
  {
    dur: 433,
    newSpeaker: false,
    start: 53043,
    text: "will"
  },
  {
    dur: 433,
    newSpeaker: false,
    start: 53476,
    text: "never"
  },
  {
    dur: 433,
    newSpeaker: false,
    start: 53909,
    text: "die,"
  },
  {
    dur: 433,
    newSpeaker: false,
    start: 54342,
    text: "but"
  },
  {
    dur: 433,
    newSpeaker: false,
    start: 54775,
    text: "you"
  },
  {
    dur: 433,
    newSpeaker: false,
    start: 55208,
    text: "will"
  },
  {
    dur: 491,
    newSpeaker: true,
    start: 55638,
    text: "In"
  },
  {
    dur: 491,
    newSpeaker: false,
    start: 56129,
    text: "your"
  },
  {
    dur: 491,
    newSpeaker: false,
    start: 56620,
    text: "cell,"
  },
  {
    dur: 491,
    newSpeaker: false,
    start: 57111,
    text: "punk."
  },
  {
    dur: 236,
    newSpeaker: true,
    start: 57599,
    text: "Oh,"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 57835,
    text: "so"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 58071,
    text: "I've"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 58307,
    text: "told"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 58543,
    text: "that"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 58779,
    text: "part"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 59015,
    text: "of"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 59251,
    text: "the"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 59487,
    text: "story"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 59723,
    text: "as"
  },
  {
    dur: 236,
    newSpeaker: false,
    start: 59959,
    text: "well"
  },
  {
    dur: 501,
    newSpeaker: true,
    start: 60185,
    text: "Yes,"
  },
  {
    dur: 501,
    newSpeaker: false,
    start: 60686,
    text: "at"
  },
  {
    dur: 501,
    newSpeaker: false,
    start: 61187,
    text: "every"
  },
  {
    dur: 250,
    newSpeaker: false,
    start: 61688,
    text: "Chri-"
  },
  {
    dur: 250,
    newSpeaker: false,
    start: 61938,
    text: "-stmas"
  },
  {
    dur: 501,
    newSpeaker: false,
    start: 62189,
    text: "party."
  },
  {
    dur: 239,
    newSpeaker: true,
    start: 62687,
    text: "Sir,"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 62926,
    text: "I"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 63165,
    text: "am"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 63404,
    text: "the"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 63643,
    text: "first"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 63882,
    text: "to"
  },
  {
    dur: 239,
    newSpeaker: false,
    start: 64121,
    text: "tout"
  },
  {
    dur: 368,
    newSpeaker: false,
    start: 64356,
    text: "the"
  },
  {
    dur: 73,
    newSpeaker: false,
    start: 64724,
    text: "ca-"
  },
  {
    dur: 73,
    newSpeaker: false,
    start: 64797,
    text: "-pa-"
  },
  {
    dur: 73,
    newSpeaker: false,
    start: 64870,
    text: "-bi-"
  },
  {
    dur: 73,
    newSpeaker: false,
    start: 64943,
    text: "-li-"
  },
  {
    dur: 73,
    newSpeaker: false,
    start: 65016,
    text: "-ties"
  },
  {
    dur: 368,
    newSpeaker: false,
    start: 65092,
    text: "of"
  },
  {
    dur: 368,
    newSpeaker: false,
    start: 65460,
    text: "senior"
  },
  {
    dur: 122,
    newSpeaker: false,
    start: 65827,
    text: "ci-"
  },
  {
    dur: 122,
    newSpeaker: false,
    start: 65949,
    text: "-ti-"
  },
  {
    dur: 122,
    newSpeaker: false,
    start: 66071,
    text: "-zen"
  },
  {
    dur: 278,
    newSpeaker: false,
    start: 66191,
    text: "I"
  },
  {
    dur: 278,
    newSpeaker: false,
    start: 66469,
    text: "have"
  },
  {
    dur: 278,
    newSpeaker: false,
    start: 66747,
    text: "made"
  },
  {
    dur: 278,
    newSpeaker: false,
    start: 67025,
    text: "love"
  },
  {
    dur: 278,
    newSpeaker: false,
    start: 67303,
    text: "to"
  },
  {
    dur: 278,
    newSpeaker: false,
    start: 67581,
    text: "many,"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 67859,
    text: "but"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 68068,
    text: "the"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 68277,
    text: "Disco"
  },
  {
    dur: 104,
    newSpeaker: false,
    start: 68486,
    text: "Stra-"
  },
  {
    dur: 104,
    newSpeaker: false,
    start: 68590,
    text: "-ngler"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 68695,
    text: "is"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 68904,
    text: "over"
  },
  {
    dur: 209,
    newSpeaker: false,
    start: 69113,
    text: "."
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 69319,
    text: "I"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 69501,
    text: "doubt"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 69683,
    text: "that"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 69865,
    text: "he"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 70047,
    text: "could"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 70229,
    text: "pull"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 70411,
    text: "off"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 70593,
    text: "an"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 70775,
    text: "escape"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 70957,
    text: "like"
  },
  {
    dur: 182,
    newSpeaker: false,
    start: 71139,
    text: "this."
  },
  {
    dur: 214,
    newSpeaker: true,
    start: 71321,
    text: "Oh,"
  },
  {
    dur: 214,
    newSpeaker: false,
    start: 71535,
    text: "that's"
  },
  {
    dur: 214,
    newSpeaker: false,
    start: 71749,
    text: "what"
  },
  {
    dur: 214,
    newSpeaker: false,
    start: 71963,
    text: "he"
  },
  {
    dur: 214,
    newSpeaker: false,
    start: 72177,
    text: "wants"
  },
  {
    dur: 214,
    newSpeaker: false,
    start: 72391,
    text: "you"
  },
  {
    dur: 214,
    newSpeaker: false,
    start: 72605,
    text: "to"
  },
  {
    dur: 214,
    newSpeaker: false,
    start: 72819,
    text: "think."
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 73031,
    text: "You're"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 73480,
    text: "both"
  },
  {
    dur: 74,
    newSpeaker: false,
    start: 73929,
    text: "un-"
  },
  {
    dur: 74,
    newSpeaker: false,
    start: 74003,
    text: "-de-"
  },
  {
    dur: 74,
    newSpeaker: false,
    start: 74077,
    text: "-re-"
  },
  {
    dur: 74,
    newSpeaker: false,
    start: 74151,
    text: "-st-"
  },
  {
    dur: 74,
    newSpeaker: false,
    start: 74225,
    text: "-im-"
  },
  {
    dur: 74,
    newSpeaker: false,
    start: 74299,
    text: "-ating"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 74378,
    text: "him."
  },
  {
    dur: 286,
    newSpeaker: false,
    start: 74824,
    text: "I"
  },
  {
    dur: 286,
    newSpeaker: false,
    start: 75110,
    text: "know"
  },
  {
    dur: 286,
    newSpeaker: false,
    start: 75396,
    text: "other"
  },
  {
    dur: 286,
    newSpeaker: false,
    start: 75682,
    text: "people"
  },
  {
    dur: 286,
    newSpeaker: false,
    start: 75968,
    text: "who"
  },
  {
    dur: 286,
    newSpeaker: false,
    start: 76254,
    text: "did"
  },
  {
    dur: 286,
    newSpeaker: false,
    start: 76540,
    text: "that,"
  },
  {
    dur: 197,
    newSpeaker: false,
    start: 76826,
    text: "and"
  },
  {
    dur: 197,
    newSpeaker: false,
    start: 77023,
    text: "they"
  },
  {
    dur: 197,
    newSpeaker: false,
    start: 77220,
    text: "all"
  },
  {
    dur: 197,
    newSpeaker: false,
    start: 77417,
    text: "ended"
  },
  {
    dur: 197,
    newSpeaker: false,
    start: 77614,
    text: "up"
  },
  {
    dur: 197,
    newSpeaker: false,
    start: 77811,
    text: "with"
  },
  {
    dur: 197,
    newSpeaker: false,
    start: 78008,
    text: "yo-yos"
  },
  {
    dur: 317,
    newSpeaker: true,
    start: 78203,
    text: "around"
  },
  {
    dur: 317,
    newSpeaker: false,
    start: 78520,
    text: "their"
  },
  {
    dur: 317,
    newSpeaker: false,
    start: 78837,
    text: "throats."
  },
  {
    dur: 317,
    newSpeaker: false,
    start: 79154,
    text: "both"
  },
  {
    dur: 317,
    newSpeaker: false,
    start: 79471,
    text: "Necks."
  },
  {
    dur: 244,
    newSpeaker: true,
    start: 79788,
    text: "Nope,"
  },
  {
    dur: 244,
    newSpeaker: false,
    start: 80032,
    text: "I"
  },
  {
    dur: 244,
    newSpeaker: false,
    start: 80276,
    text: "said"
  },
  {
    dur: 244,
    newSpeaker: false,
    start: 80520,
    text: "throats,"
  },
  {
    dur: 244,
    newSpeaker: false,
    start: 80764,
    text: "not"
  },
  {
    dur: 244,
    newSpeaker: false,
    start: 81008,
    text: "necks,"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 81247,
    text: "which"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 81514,
    text: "means"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 81781,
    text: "I"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 82048,
    text: "haven't"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 82315,
    text: "told"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 82582,
    text: "that"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 82849,
    text: "story"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 83116,
    text: "too"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 83383,
    text: "many"
  },
  {
    dur: 267,
    newSpeaker: false,
    start: 83650,
    text: "times."
  },
  {
    dur: 400,
    newSpeaker: false,
    start: 83917,
    text: "All"
  },
  {
    dur: 400,
    newSpeaker: false,
    start: 84317,
    text: "right,"
  },
  {
    dur: 400,
    newSpeaker: false,
    start: 84717,
    text: "lace"
  },
  {
    dur: 400,
    newSpeaker: false,
    start: 85117,
    text: "up"
  },
  {
    dur: 400,
    newSpeaker: false,
    start: 85517,
    text: "your"
  },
  {
    dur: 400,
    newSpeaker: false,
    start: 85917,
    text: "dancing"
  },
  {
    dur: 400,
    newSpeaker: false,
    start: 86317,
    text: "shoes"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 86711,
    text: "because"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 87160,
    text: "it's"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 87609,
    text: "time"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 88058,
    text: "to"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 88507,
    text: "catch"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 88956,
    text: "this"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 89405,
    text: "disco"
  },
  {
    dur: 449,
    newSpeaker: false,
    start: 89854,
    text: "bastard."
  }
]

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

  // test data
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      loadVideo: true,
      captions: testData
    })
  }

  //live server data
  // handleSubmit = event => {
  //   event.preventDefault()
  //   fetch(`/scrape/id?id=${encodeURIComponent(this.state.id)}`)
  //     .then(response => response.json())
  //     .then(captionsRaw => getCaptions(captionsRaw)
  //     .then( captions =>
  //       this.setState({
  //       loadVideo: true,
  //       captions: captions
  //     })
  //     )
  //   )
  // }

  render() {
    return (
      <div className="App">
        <FaceTest/>
        {/* {this.state.loadVideo ? (
          <>
            <Video id={this.state.id} captions={this.state.captions}/>
          </>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="url">Enter YouTube URL:</label>
            <input id="url" type="text" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        )} */}
      </div>
    )
  }
}

export default App
