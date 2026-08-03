import stexupImage from "../assets/images/stexup.png";
import denissowImage from "../assets/images/denissow.png";

import {
  getPoems,
  getComments,
  getEssays,
  getGraphic,
  getQuotes,
  getNovels,
  getMusic
} from "../api/contentApi";


export const contentConfig = {

  essays: {
    image: {
      src1: stexupImage,
      src2: denissowImage,
      alt1: "stexup",
      alt2: "denissow",
    },
    type: "essays",
    title: "essays_presentation.title",
    author: "",
    description: "essays_presentation.description",
    footer: false,
    reverse: false,
    dark: true,
    getData: getEssays,
  },


  poems: {
    image: {
      src1: stexupImage,
      src2: denissowImage,
      alt1: "stexup",
      alt2: "denissow",
    },
    type: "poems",
    title: "poems_presentation.title",
    author: "",
    description: "poems_presentation.description",
    footer: false,
    reverse: false,
    dark: true,
    getData: getPoems,
  },


  graphic: {
    image: {
      src1: stexupImage,
      src2: denissowImage,
      alt1: "stexup",
      alt2: "denissow",
    },
    type: "graphic",
    title: "graphic_presentation.title",
    author: "",
    description: "graphic_presentation.description",
    footer: false,
    reverse: false,
    dark: true,
    getData: getGraphic
  },


  quotes: {
    image: {
      src1: stexupImage,
      src2: denissowImage,
      alt1: "stexup",
      alt2: "denissow",
    },
    type: "quotes",
    title: "quotes_presentation.title",
    author: "",
    description: "quotes_presentation.description",
    footer: false,
    reverse: false,
    dark: true,
    getData: getQuotes
  },


  novels: {
    image: {
      src1: stexupImage,
      src2: denissowImage,
      alt1: "stexup",
      alt2: "denissow",
    },
    type: "novels",
    title: "novels_presentation.title",
    author: "",
    description: "novels_presentation.description",
    footer: false,
    reverse: false,
    dark: true,
    getData: getNovels
  },


  music: {
    image: {
      src1: stexupImage,
      src2: denissowImage,
      alt1: "stexup",
      alt2: "denissow",
    },
    type: "music",
    title: "music_presentation.title",
    author: "",
    description: "music_presentation.description",
    footer: false,
    reverse: false,
    dark: true,
    getData: getMusic
  },


  comments: {
    image: {
      src1: stexupImage,
      src2: denissowImage,
      alt1: "stexup",
      alt2: "denissow",
    },
    type: "comments",
    title: "comments_presentation.title",
    author: "",
    description: "comments_presentation.description",
    footer: false,
    reverse: false,
    dark: true,
    getData: getComments
  },

};