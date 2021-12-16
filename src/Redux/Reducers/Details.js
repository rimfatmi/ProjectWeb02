import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  GET_ITEM
} from "./Actions/ActionTypes";

const initialState = {
  movies: [
    {
      Title: "Home Alone",
      posterUrl: "https://image.jeuxvideo.com/images-sm/pc/h/o/hoalpc0f.jpg",
      rate: 3,
      video: "https://www.disneyplus.com/en-gb/movies/home-alone/3v4vqKPG2jSr",
      description:
        "Home Alone is a series of American Christmas family comedy films originally created by John Hughes, and directed by Chris Columbus (1 and 2), Raja Gosnell (3), Rod Daniel (4), Peter Hewitt (5), and Dan Mazer (6). The films revolve around the adventures surrounding children who find themselves alone during the holiday season and are faced with the challenge of defending their family's house or themselves from invading burglars and criminals."
    },
    {
      Title: "a walk to remember",

      posterUrl:
        "https://www.cdiscount.com/pdt2/6/1/2/1/1200x1200/auc7429731699612/rw/a-walk-to-remember-impression-d-affiche-68-58-x-1.jpg",
      rate: 5,
      video: "https://www.imdb.com/title/tt0281358/",
      description:
        "A Walk to Remember is a 2002 American coming-of-age romantic drama film directed by Adam Shankman and written by Karen Janszen, based on Nicholas Sparks' 1999 novel of the same name. The film stars Shane West, Mandy Moore, Peter Coyote and Daryl Hannah, and was produced by Denise Di Novi and Hunt Lowry for Warner Bros"
    },

    {
      Title: "Yes Man",

      posterUrl:
        "https://www.imdb.com/title/tt1068680/mediaviewer/rm359602176/",
      rate: 4,
      description:
        "Yes Man is a 2008 comedy film directed by Peyton Reed, written by Nicholas Stoller, Jarrad Paul, and Andrew Mogel and starring Jim Carrey and co-starring Zooey Deschanel. The film is based loosely on the 2005 memoir of the same name by humorist Danny Wallace, who also makes a cameo appearance in the film."
    },
    {
      Title: "Pretty Woman",
      posterUrl:
        "https://m.media-amazon.com/images/I/612oWOnZ5LL._AC_SL1024_.jpg",
      rate: 5,
      video: "https://moviesanywhere.com/movie/pretty-woman",
      description:
        "Pretty Woman is a 1990 American romantic comedy film directed by Garry Marshall, from a screenplay by J. F. Lawton. The film stars Richard Gere and Julia Roberts, and features Héctor Elizondo, Ralph Bellamy (in his final performance), Laura San Giacomo, and Jason Alexander in supporting roles."
    }
  ]
};
export const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, movies: [...state.movies, action.payload] };
    case EDIT_ITEM:
      return {};
    case GET_ITEM:
      return { ...state, id: action.payload };
    case DELETE_ITEM:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload)
      };

    default:
      return state;
  }
};
