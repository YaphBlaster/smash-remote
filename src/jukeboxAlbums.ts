const removeMp3FromTrackTitle = (album: Album): Album => {
  const { tracks } = album;

  return {
    ...album,
    tracks: tracks.map((track) => {
      return { ...track, title: track.title.replace(".mp3", "") };
    }),
  };
};

export const pocketMonstersAnimeOST: Album = {
  artist: "Shinji Miyazaski",
  name: "Pocket Monsters OST",
  imageURI:
    "https://archive.org/download/Pocket-Monsters_Anime-OST_Vol-2/flac/Booklet/BOX.jpg",
  baseURI:
    "https://archive.org/download/Pocket-Monsters_Anime-OST_Vol-2/flac/Disc%201/",
  tracks: [
    {
      title: "To Be Continued (1997-1998-M02)",
      url: "1.%20To%20Be%20Continued%20%281997-1998-M02%29.mp3",
      number: 1,
    },
    {
      title: "Grabbing Victory (1997-1998-M03)",
      url: "2.%20Grabbing%20Victory%20%281997-1998-M03%29.mp3",
      number: 2,
    },
    {
      title: "Meeting and Parting (1997-1998-M04)",
      url: "3.%20Meeting%20and%20Parting%20%281997-1998-M04%29.mp3",
      number: 3,
    },
    {
      title: "The Ghost at Maiden's Peak (1997-1998-M05)",
      url: "4.%20The%20Ghost%20at%20Maiden%27s%20Peak%20%281997-1998-M05%29.mp3",
      number: 4,
    },
    {
      title: "Tears (1997-1998-M06)",
      url: "5.%20Tears%20%281997-1998-M06%29.mp3",
      number: 5,
    },
    {
      title: "Mysterious Lighthouse (1997-1998-M07)",
      url: "6.%20Mysterious%20Lighthouse%20%281997-1998-M07%29.mp3",
      number: 6,
    },
    {
      title: "Sneaking in the Shadows (1997-1998-M08)",
      url: "7.%20Sneaking%20in%20the%20Shadows%20%281997-1998-M08%29.mp3",
      number: 7,
    },
    {
      title: "Ash's Realization (1997-1998-M09)",
      url: "8.%20Ash%27s%20Realization%20%281997-1998-M09%29.mp3",
      number: 8,
    },
    {
      title: "Pikachu Enters (1997-1998-M10)",
      url: "9.%20Pikachu%20Enters%20%281997-1998-M10%29.mp3",
      number: 9,
    },
    {
      title: " League Round 3 Win (1997-1998-M11)",
      url: "10.%20League%20Round%203%20Win%20%281997-1998-M11%29.mp3",
      number: 10,
    },
    {
      title: " Colossal Battle (1997-1998-M14)",
      url: "11.%20Colossal%20Battle%20%281997-1998-M14%29.mp3",
      number: 11,
    },
    {
      title: " Swarm of Beedrills (1997-1998-M15)",
      url: "12.%20Swarm%20of%20Beedrills%20%281997-1998-M15%29.mp3",
      number: 12,
    },
    {
      title: " A Formidable Opponent Appears (1997-1998-M16)",
      url: "13.%20A%20Formidable%20Opponent%20Appears%20%281997-1998-M16%29.mp3",
      number: 13,
    },
    {
      title: " Desperate Situation (1997-1998-M17)",
      url: "14.%20Desperate%20Situation%20%281997-1998-M17%29.mp3",
      number: 14,
    },
    {
      title: " Prepare for Trouble! (1997-1998-M20)",
      url: "15.%20Prepare%20for%20Trouble%21%20%281997-1998-M20%29.mp3",
      number: 15,
    },
    {
      title: " Prepare for Trouble! 2 (1997-1998-M20B)",
      url: "16.%20Prepare%20for%20Trouble%21%202%20%281997-1998-M20B%29.mp3",
      number: 16,
    },
    {
      title: " The Rocket Gang Boss' Theme (1997-1998-M22)",
      url: "17.%20The%20Rocket%20Gang%20Boss%27%20Theme%20%281997-1998-M22%29.mp3",
      number: 17,
    },
    {
      title: " Vacant Shelter (1997-1998-M23)",
      url: "18.%20Vacant%20Shelter%20%281997-1998-M23%29.mp3",
      number: 18,
    },
    {
      title: " Danger Unfolding (1997-1998-M24)",
      url: "19.%20Danger%20Unfolding%20%281997-1998-M24%29.mp3",
      number: 19,
    },
    {
      title: " Awaiting for Wild Pokemon (1997-1998-M25)",
      url: "20.%20Awaiting%20for%20Wild%20Pokemon%20%281997-1998-M25%29.mp3",
      number: 20,
    },
    {
      title: " Team Rocket's Secret Scheme (1997-1998-M26)",
      url: "21.%20Team%20Rocket%27s%20Secret%20Scheme%20%281997-1998-M26%29.mp3",
      number: 21,
    },
    {
      title: " Team Rocket's Secret Scheme 2 (1997-1998-M26B)",
      url: "22.%20Team%20Rocket%27s%20Secret%20Scheme%202%20%281997-1998-M26B%29.mp3",
      number: 22,
    },
    {
      title: " Run Away! (1997-1998-M27)",
      url: "23.%20Run%20Away%21%20%281997-1998-M27%29.mp3",
      number: 23,
    },
    {
      title: " Pokemon Curiousity (1997-1998-M28)",
      url: "24.%20Pokemon%20Curiousity%20%281997-1998-M28%29.mp3",
      number: 24,
    },
    {
      title: " Ash Argues with Misty (1997-1998-M29)",
      url: "25.%20Ash%20Argues%20with%20Misty%20%281997-1998-M29%29.mp3",
      number: 25,
    },
    {
      title: " Battle Begin! (1997-1998-M30)",
      url: "26.%20Battle%20Begin%21%20%281997-1998-M30%29.mp3",
      number: 26,
    },
    {
      title: " Legend (1997-1998-M31)",
      url: "27.%20Legend%20%281997-1998-M31%29.mp3",
      number: 27,
    },
    {
      title: " Peaceful Journeying (1997-1998-M31B)",
      url: "28.%20Peaceful%20Journeying%20%281997-1998-M31B%29.mp3",
      number: 28,
    },
    {
      title: " Commercial Bumper (1997-1998-M33A)",
      url: "29.%20Commercial%20Bumper%20%281997-1998-M33A%29.mp3",
      number: 29,
    },
    {
      title: " Commercial Bumper 2 (1997-1998-M34)",
      url: "30.%20Commercial%20Bumper%202%20%281997-1998-M34%29.mp3",
      number: 30,
    },
    {
      title: " Pokemon Chant (1997-1998-M38)",
      url: "31.%20Pokemon%20Chant%20%281997-1998-M38%29.mp3",
      number: 31,
    },
    {
      title: " The Moon Stone (1997-1998-M39)",
      url: "32.%20The%20Moon%20Stone%20%281997-1998-M39%29.mp3",
      number: 32,
    },
    {
      title: " Exploring the Town (1997-1998-M41)",
      url: "33.%20Exploring%20the%20Town%20%281997-1998-M41%29.mp3",
      number: 33,
    },
    {
      title: " Under the Moonlight (1997-1998-M42)",
      url: "34.%20Under%20the%20Moonlight%20%281997-1998-M42%29.mp3",
      number: 34,
    },
    {
      title: " Realization (1997-1998-M43)",
      url: "35.%20Realization%20%281997-1998-M43%29.mp3",
      number: 35,
    },
    {
      title: " Commercial Cue (1997-1998-M44)",
      url: "36.%20Commercial%20Cue%20%281997-1998-M44%29.mp3",
      number: 36,
    },
    {
      title: " Scenery (1997-1998-M45)",
      url: "37.%20Scenery%20%281997-1998-M45%29.mp3",
      number: 37,
    },
    {
      title: " To Be Continued (1997-1998-M46)",
      url: "38.%20To%20Be%20Continued%20%281997-1998-M46%29.mp3",
      number: 38,
    },
    {
      title: " Goodbye Friends (1997-1998-M47)",
      url: "39.%20Goodbye%20Friends%20%281997-1998-M47%29.mp3",
      number: 39,
    },
    {
      title: " Bittersweet Memories (1997-1998-M48)",
      url: "40.%20Bittersweet%20Memories%20%281997-1998-M48%29.mp3",
      number: 40,
    },
    {
      title: " Mysterious Legend (1997-1998-M49)",
      url: "41.%20Mysterious%20Legend%20%281997-1998-M49%29.mp3",
      number: 41,
    },
    {
      title: " Spooky Place (1997-1998-M50)",
      url: "42.%20Spooky%20Place%20%281997-1998-M50%29.mp3",
      number: 42,
    },
    {
      title: " Team Rocket Appears (1997-1998-M51)",
      url: "43.%20Team%20Rocket%20Appears%20%281997-1998-M51%29.mp3",
      number: 43,
    },
    {
      title: " Episode Titles (1997-1998-M52)",
      url: "44.%20Episode%20Titles%20%281997-1998-M52%29.mp3",
      number: 44,
    },
    {
      title: " Episode Titles 2 (1997-1998-M53)",
      url: "45.%20Episode%20Titles%202%20%281997-1998-M53%29.mp3",
      number: 45,
    },
    {
      title: " Episode Titles 3 (1997-1998-M54)",
      url: "46.%20Episode%20Titles%203%20%281997-1998-M54%29.mp3",
      number: 46,
    },
    {
      title: " I Got a Victory Badge! (1997-1998-M62)",
      url: "47.%20I%20Got%20a%20Victory%20Badge%21%20%281997-1998-M62%29.mp3",
      number: 47,
    },
    {
      title: " Psyduck and Slowpoke Interacting (1997-1998-M63)",
      url: "48.%20Psyduck%20and%20Slowpoke%20Interacting%20%281997-1998-M63%29.mp3",
      number: 48,
    },
    {
      title: " Exquisite Jazz (1997-1998-M64)",
      url: "49.%20Exquisite%20Jazz%20%281997-1998-M64%29.mp3",
      number: 49,
    },
    {
      title: " Psyduck, the Confused (1997-1998-M65A)",
      url: "50.%20Psyduck%2C%20the%20Confused%20%281997-1998-M65A%29.mp3",
      number: 50,
    },
    {
      title: " Observing Newfound Pokemon (1997-1998-M66)",
      url: "51.%20Observing%20Newfound%20Pokemon%20%281997-1998-M66%29.mp3",
      number: 51,
    },
    {
      title: " Loopy Chase (1997-1998-M67)",
      url: "52.%20Loopy%20Chase%20%281997-1998-M67%29.mp3",
      number: 52,
    },
    {
      title: " Pokemon League Opening Ceremonies (1997-1998-M68)",
      url: "53.%20Pokemon%20League%20Opening%20Ceremonies%20%281997-1998-M68%29.mp3",
      number: 53,
    },
    {
      title: " Extravagant Place (1997-1998-M69B)",
      url: "54.%20Extravagant%20Place%20%281997-1998-M69B%29.mp3",
      number: 54,
    },
    {
      title: " The Beach (1997-1998-M70)",
      url: "55.%20The%20Beach%20%281997-1998-M70%29.mp3",
      number: 55,
    },
    {
      title: " Oden (1997-1998-M71A)",
      url: "56.%20Oden%20%281997-1998-M71A%29.mp3",
      number: 56,
    },
    {
      title: " Oden 2 (1997-1998-M71B)",
      url: "57.%20Oden%202%20%281997-1998-M71B%29.mp3",
      number: 57,
    },
    {
      title: " Huge Pokemon Appears (1997-1998-M72)",
      url: "58.%20Huge%20Pokemon%20Appears%20%281997-1998-M72%29.mp3",
      number: 58,
    },
    {
      title: " Venusaur Appears (1997-1998-M72A)",
      url: "59.%20Venusaur%20Appears%20%281997-1998-M72A%29.mp3",
      number: 59,
    },
    {
      title: " Flashback Memories (1997-1998-M73)",
      url: "60.%20Flashback%20Memories%20%281997-1998-M73%29.mp3",
      number: 60,
    },
    {
      title: " Bridge Bike Gang (1997-1998-M74)",
      url: "61.%20Bridge%20Bike%20Gang%20%281997-1998-M74%29.mp3",
      number: 61,
    },
    {
      title: " A Brutal Pokemon Appears (1997-1998-M75)",
      url: "62.%20A%20Brutal%20Pokemon%20Appears%20%281997-1998-M75%29.mp3",
      number: 62,
    },
    {
      title: " A Brutal Pokemon Appears 2 (1997-1998-M75B)",
      url: "63.%20A%20Brutal%20Pokemon%20Appears%202%20%281997-1998-M75B%29.mp3",
      number: 63,
    },
    {
      title: " Masaki's Lighthouse (1997-1998-M76A)",
      url: "64.%20Masaki%27s%20Lighthouse%20%281997-1998-M76A%29.mp3",
      number: 64,
    },
    {
      title: " Playing with Togepi (1997-1998-M80)",
      url: "65.%20Playing%20with%20Togepi%20%281997-1998-M80%29.mp3",
      number: 65,
    },
  ],
};

const homeAlone: Album = {
  artist: "John Williams",
  name: "Home Alone Soundtrack",
  imageURI:
    "https://archive.org/18/items/home-alone-soundtrack/Home%20Alone/2794x2794.jpg",
  baseURI: "https://archive.org/download/home-alone-soundtrack/Home%20Alone/",
  tracks: [
    {
      title: "Somewhere In My Memory",
      url: "01%20Somewhere%20In%20My%20Memory.mp3",
      number: 1,
    },
    {
      title: "Star of Bethlehem (Orchestral Version)",
      url: "02%20Star%20of%20Bethlehem%20%28Orchestral%20Version%29.mp3",
      number: 2,
    },
    {
      title: "Home Alone (Main Theme)",
      url: "03%20Home%20Alone%20%28Main%20Theme%29.mp3",
      number: 3,
    },
    {
      title: "Go Pack Your Suitcase - Introducing Marley - In Good Hands",
      url: "04%20Go%20Pack%20Your%20Suitcase%20-%20Introducing%20Marley%20-%20In%20Good%20Hands.mp3",
      number: 4,
    },
    {
      title: "Banished To the Attick",
      url: "05%20Banished%20To%20the%20Attick.mp3",
      number: 5,
    },
    {
      title: "We Slept In - Hard Count",
      url: "06%20We%20Slept%20In%20-%20Hard%20Count.mp3",
      number: 6,
    },
    {
      title: "Making the Plane",
      url: "07%20Making%20the%20Plane.mp3",
      number: 7,
    },
    {
      title: "The Basement",
      url: "08%20The%20Basement.mp3",
      number: 8,
    },
    {
      title: "Target Practice - Sledding On the Stairs",
      url: "09%20Target%20Practice%20-%20Sledding%20On%20the%20Stairs.mp3",
      number: 9,
    },
    {
      title: "Lights On - Guess Who's Home - Paris Arrival",
      url: "10%20Lights%20On%20-%20Guess%20Who%27s%20Home%20-%20Paris%20Arrival.mp3",
      number: 10,
    },
    {
      title: "The Man of the House - Police Check",
      url: "11%20The%20Man%20of%20the%20House%20-%20Police%20Check.mp3",
      number: 11,
    },
    {
      title: "The Bookshelf",
      url: "12%20The%20Bookshelf.mp3",
      number: 12,
    },
    {
      title: "Phone Machine - Drug Store - Escape Across the Ice",
      url: "13%20Phone%20Machine%20-%20Drug%20Store%20-%20Escape%20Across%20the%20Ice.mp3",
      number: 13,
    },
    {
      title: "Follow That Kid!",
      url: "14%20Follow%20That%20Kid%21.mp3",
      number: 14,
    },
    {
      title: "Listening To Carson",
      url: "15%20Listening%20To%20Carson.mp3",
      number: 15,
    },
    {
      title: "Cleaning Clothes - Kitchen",
      url: "16%20Cleaning%20Clothes%20-%20Kitchen.mp3",
      number: 16,
    },
    {
      title: "Scammed By a Kindergartner",
      url: "17%20Scammed%20By%20a%20Kindergartner.mp3",
      number: 17,
    },
    {
      title: "Walking Home (Somewhere In My Memory)",
      url: "18%20Walking%20Home%20%28Somewhere%20In%20My%20Memory%29.mp3",
      number: 18,
    },
    {
      title: "O Holy Night",
      url: "19%20O%20Holy%20Night.mp3",
      number: 19,
    },
    {
      title: "Star of Bethlehem",
      url: "20%20Star%20of%20Bethlehem.mp3",
      number: 20,
    },
    {
      title: "Carol of the Bells",
      url: "21%20Carol%20of%20the%20Bells.mp3",
      number: 21,
    },
    {
      title: "Setting the Trap",
      url: "22%20Setting%20the%20Trap.mp3",
      number: 22,
    },
    {
      title: "The Attack Begins",
      url: "23%20The%20Attack%20Begins.mp3",
      number: 23,
    },
    {
      title: "Marv Enters the Basement - A Hot Hand - Sore Head",
      url: "24%20Marv%20Enters%20the%20Basement%20-%20A%20Hot%20Hand%20-%20Sore%20Head.mp3",
      number: 24,
    },
    {
      title: "Paint Cans",
      url: "25%20Paint%20Cans.mp3",
      number: 25,
    },
    {
      title: "Clothesline Trapeze - Marley To the Rescue",
      url: "26%20Clothesline%20Trapeze%20-%20Marley%20To%20the%20Rescue.mp3",
      number: 26,
    },
    {
      title: "The Next Morning - Mom Returns - Finale",
      url: "27%20The%20Next%20Morning%20-%20Mom%20Returns%20-%20Finale.mp3",
      number: 27,
    },
    {
      title:
        "28 We Wish You a Merry Christmas - End Title (Somewhere In My Memory)",
      url: "28%20We%20Wish%20You%20a%20Merry%20Christmas%20-%20End%20Title%20%28Somewhere%20In%20My%20Memory%29.mp3",
      number: 28,
    },
    {
      title: "Walking Home (Without Chorus)",
      url: "29%20Walking%20Home%20%28Without%20Chorus%29.mp3",
      number: 29,
    },
    {
      title: "Clothesline Trapeze (Film Version Insert)",
      url: "30%20Clothesline%20Trapeze%20%28Film%20Version%20Insert%29.mp3",
      number: 30,
    },
    {
      title: "Jingle Bells",
      url: "31%20Jingle%20Bells.mp3",
      number: 31,
    },
    {
      title: "Christmas Carol Medley",
      url: "32%20Christmas%20Carol%20Medley.mp3",
      number: 32,
    },
    {
      title: "Finale (Alternate - O Holy Night)",
      url: "33%20Finale%20%28Alternate%20-%20O%20Holy%20Night%29.mp3",
      number: 33,
    },
    {
      title:
        "We Wish You a Merry Christmas - End Title (Somewhere In My Memory) [Original Soundtrack Version]",
      url: "34%20We%20Wish%20You%20a%20Merry%20Christmas%20-%20End%20Title%20%28Somewhere%20In%20My%20Memory%29%20%5BOriginal%20Soundtrack%20Version%5D.mp3",
      number: 34,
    },
  ],
};

const sonicAdventure2OST: Album = {
  artist: "TOKYOPOP",
  name: "Sonic Adventure 2 OST",
  imageURI:
    "https://archive.org/download/sonic-adventure-2-official-soundtrack/Front.jpg",
  baseURI:
    "https://archive.org/download/sonic-adventure-2-official-soundtrack/",
  tracks: [
    {
      title: "It Doesn't Matter ...theme of sonic",
      url: "01%20It%20Doesn%27t%20Matter%20...theme%20of%20sonic.mp3",
      number: 1,
    },
    {
      title: "event- Let's Make It!",
      url: "02%20event-%20Let%27s%20Make%20It%21.mp3",
      number: 2,
    },
    {
      title: "Escape From The City ...city escape",
      url: "03%20Escape%20From%20The%20City%20...city%20escape.mp3",
      number: 3,
    },
    {
      title: "Vengeance Is Mine ...radical highway",
      url: "04%20Vengeance%20Is%20Mine%20...radical%20highway.mp3",
      number: 4,
    },
    {
      title: "Lovely Gate 3 ...egg quarters",
      url: "05%20Lovely%20Gate%203%20...egg%20quarters.mp3",
      number: 5,
    },
    {
      title: "Unknown From M.E. ...theme of knuckles",
      url: "06%20Unknown%20From%20M.E.%20...theme%20of%20knuckles.mp3",
      number: 6,
    },
    {
      title: "This Way Out ...prison lane",
      url: "07%20This%20Way%20Out%20...prison%20lane.mp3",
      number: 7,
    },
    {
      title: "I'm a Spy ...security hall",
      url: "08%20I%27m%20a%20Spy%20...security%20hall.mp3",
      number: 8,
    },
    {
      title: "That's The Way I Like It ...metal harbor",
      url: "09%20That%27s%20The%20Way%20I%20Like%20It%20...metal%20harbor.mp3",
      number: 9,
    },
    {
      title: "Rhythm And Balance ...white jungle",
      url: "10%20Rhythm%20And%20Balance%20...white%20jungle.mp3",
      number: 10,
    },
    {
      title: "Won't Stop, Just Go! ...green forest",
      url: "11%20Won%27t%20Stop%2C%20Just%20Go%21%20...green%20forest.mp3",
      number: 11,
    },
    {
      title: "E.G.G.M.A.N. ...theme of dr. eggman",
      url: "12%20E.G.G.M.A.N.%20...theme%20of%20dr.%20eggman.mp3",
      number: 12,
    },
    {
      title: "Dive Into The Mellow ...aquatic mine",
      url: "13%20Dive%20Into%20The%20Mellow%20...aquatic%20mine.mp3",
      number: 13,
    },
    {
      title: "Rumbling HWY ...mission street",
      url: "14%20Rumbling%20HWY%20...mission%20street.mp3",
      number: 14,
    },
    {
      title: "Fly In The Freedom ...theme of rouge",
      url: "15%20Fly%20In%20The%20Freedom%20...theme%20of%20rouge.mp3",
      number: 15,
    },
    {
      title: "Advertise- SA2 ...in the groove",
      url: "16%20Advertise-%20SA2%20...in%20the%20groove.mp3",
      number: 16,
    },
    {
      title: "Space Trip Steps ...meteor herd",
      url: "17%20Space%20Trip%20Steps%20...meteor%20herd.mp3",
      number: 17,
    },
    {
      title: "Soarin' Over The Space ...cosmic wall",
      url: "18%20Soarin%27%20Over%20The%20Space%20...cosmic%20wall.mp3",
      number: 18,
    },
    {
      title: "Believe In Myself ...theme of tails",
      url: "19%20Believe%20In%20Myself%20...theme%20of%20tails.mp3",
      number: 19,
    },
    {
      title: "Highway In The Sky ...final rush",
      url: "20%20Highway%20In%20The%20Sky%20...final%20rush.mp3",
      number: 20,
    },
    {
      title: "Throw It All Away ...theme of shadow",
      url: "21%20Throw%20It%20All%20Away%20...theme%20of%20shadow.mp3",
      number: 21,
    },
    {
      title: "Deep Inside Of... ...cannon's core #3",
      url: "22%20Deep%20Inside%20Of...%20...cannon%27s%20core%20%233.mp3",
      number: 22,
    },
    {
      title: "Supporting Me ...biolizard",
      url: "23%20Supporting%20Me%20...biolizard.mp3",
      number: 23,
    },
    {
      title: "event- The Last Scene",
      url: "24%20event-%20The%20Last%20Scene.mp3",
      number: 24,
    },
    {
      title: "Live &amp; Learn ...main theme of SA2",
      url: "25%20Live%20%26%20Learn%20...main%20theme%20of%20SA2.mp3",
      number: 25,
    },
    {
      title: "Chao Race Extended Remix (Chao's Doki-Doki Banana Chips Run Mix)",
      url: "26%20Chao%20Race%20Extended%20Remix%20%28Chao%27s%20Doki-Doki%20Banana%20Chips%20Run%20Mix%29.mp3",
      number: 26,
    },
  ],
};
const ultraball: Album = {
  artist: "GameChops",
  name: "Ultraball",
  imageURI: "https://archive.org/download/ultraball/Ultraball%20Day.jpg",
  baseURI: "https://archive.org/download/ultraball/",
  tracks: [
    {
      title:
        "CG5 feat. GlitchxCity - Vast Poni Canyon (Pokémon Sun &amp; Moon)",
      url: "01%20CG5%20feat.%20GlitchxCity%20-%20Vast%20Poni%20Canyon%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 1,
    },
    {
      title: "Tokyo Elvis - Malie City Reimagined (Pokémon Sun &amp; Moon)",
      url: "02%20Tokyo%20Elvis%20-%20Malie%20City%20Reimagined%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 2,
    },
    {
      title: "Mykah - Mahalo Trail (Pokémon Sun &amp; Moon)",
      url: "03%20Mykah%20-%20Mahalo%20Trail%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 3,
    },
    {
      title: "Tetracase - Lake Verity (Pokémon Diamond &amp; Pearl)",
      url: "04%20Tetracase%20-%20Lake%20Verity%20%28Pok%C3%A9mon%20Diamond%20%26%20Pearl%29.mp3",
      number: 4,
    },
    {
      title: "VGR - Battle with Gladion (Pokémon Sun &amp; Moon)",
      url: "05%20VGR%20-%20Battle%20with%20Gladion%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 5,
    },
    {
      title: "RoboRob - Team Rocket Hideout (Pokémon Red &amp; Blue)",
      url: "06%20RoboRob%20-%20Team%20Rocket%20Hideout%20%28Pok%C3%A9mon%20Red%20%26%20Blue%29.mp3",
      number: 6,
    },
    {
      title: "QORA - Encounter with Gladion (Pokémon Sun &amp; Moon)",
      url: "07%20QORA%20-%20Encounter%20with%20Gladion%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 7,
    },
    {
      title: "James Landino - Lavender Town (Pokémon Red &amp; Blue)",
      url: "08%20James%20Landino%20-%20Lavender%20Town%20%28Pok%C3%A9mon%20Red%20%26%20Blue%29.mp3",
      number: 8,
    },
    {
      title:
        "Dj CUTMAN feat. Belthesar - Trapped in a Pokeball [Pokémon Trading Card Game]",
      url: "09%20Dj%20CUTMAN%20feat.%20Belthesar%20-%20Trapped%20in%20a%20Pokeball%20%5BPok%C3%A9mon%20Trading%20Card%20Game%5D.mp3",
      number: 9,
    },
    {
      title:
        "Mykah - Kanto Trainer Battle (Pokémon Heart Gold &amp; Soul Silver)",
      url: "10%20Mykah%20-%20Kanto%20Trainer%20Battle%20%28Pok%C3%A9mon%20Heart%20Gold%20%26%20Soul%20Silver%29.mp3",
      number: 10,
    },
    {
      title:
        "GlitchxCity feat. Dj CUTMAN - Hau'oli City (Pokémon Sun &amp; Moon)",
      url: "11%20GlitchxCity%20feat.%20Dj%20CUTMAN%20-%20Hau%27oli%20City%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 11,
    },
    {
      title:
        "Grimecraft feat. Wishlyst - Malie City at Night (Pokémon Sun &amp; Moon",
      url: "12%20Grimecraft%20feat.%20Wishlyst%20-%20Malie%20City%20at%20Night%20%28Pok%C3%A9mon%20Sun%20%26%20Moon.mp3",
      number: 12,
    },
    {
      title: "RoBKTA - Goldenrod Game Corner (Pokémon Gold &amp; Silver)",
      url: "13%20RoBKTA%20-%20Goldenrod%20Game%20Corner%20%28Pok%C3%A9mon%20Gold%20%26%20Silver%29.mp3",
      number: 13,
    },
    {
      title: "Ben Briggs feat. Voia - Azalea (Pokémon Gold &amp; Silver)",
      url: "14%20Ben%20Briggs%20feat.%20Voia%20-%20Azalea%20%28Pok%C3%A9mon%20Gold%20%26%20Silver%29.mp3",
      number: 14,
    },
    {
      title: "Curly - Route 1 (Pokémon Sun &amp; Moon)",
      url: "15%20Curly%20-%20Route%201%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 15,
    },
  ],
};
const smoothMcGroove2: Album = {
  artist: "GameChops",
  name: "Smooth McGroove Remixed 2",
  imageURI:
    "https://archive.org/20/items/smooth-mcgroove-remixed-2/Smooth%20McGroove%20Remixed%202%20cover.jpg",
  baseURI: "https://archive.org/download/smooth-mcgroove-remixed-2/",
  tracks: [
    {
      title: "A_Rival - Guile's Theme (Street Fighter 2)",
      url: "01%20A_Rival%20-%20Guile%27s%20Theme%20%28Street%20Fighter%202%29.mp3",
      number: 1,
    },
    {
      title: "Voia - Bonetrousle (Undertale)",
      url: "02%20Voia%20-%20Bonetrousle%20%28Undertale%29.mp3",
      number: 2,
    },
    {
      title: "James Landino - Vampire Killer (Castlevania 1)",
      url: "03%20James%20Landino%20-%20Vampire%20Killer%20%28Castlevania%201%29.mp3",
      number: 3,
    },
    {
      title: "dj-Jo - Dire Dire Docks (Super Mario 64)",
      url: "04%20dj-Jo%20-%20Dire%20Dire%20Docks%20%28Super%20Mario%2064%29.mp3",
      number: 4,
    },
    {
      title: "Dj CUTMAN - Might Fight Sans (Undertale)",
      url: "05%20Dj%20CUTMAN%20-%20Might%20Fight%20Sans%20%28Undertale%29.mp3",
      number: 5,
    },
    {
      title: "Grimecraft - Lavender Town (Pokemon Red and Blue)",
      url: "06%20Grimecraft%20-%20Lavender%20Town%20%28Pokemon%20Red%20and%20Blue%29.mp3",
      number: 6,
    },
    {
      title: "Chjolo - Abyss Watchers (Dark Souls 3)",
      url: "07%20Chjolo%20-%20Abyss%20Watchers%20%28Dark%20Souls%203%29.mp3",
      number: 7,
    },
    {
      title: "VGR - Overworld (Light World) [Zelda Link To The Past]",
      url: "08%20VGR%20-%20Overworld%20%28Light%20World%29%20%5BZelda%20Link%20To%20The%20Past%5D.mp3",
      number: 8,
    },
    {
      title: "Steven Silo - Rainbow Road (Smooth Mix) [Super Mario Kart]",
      url: "09%20Steven%20Silo%20-%20Rainbow%20Road%20%28Smooth%20Mix%29%20%5BSuper%20Mario%20Kart%5D.mp3",
      number: 9,
    },
    {
      title: "Ben Briggs - Onett (Earthbound)",
      url: "10%20Ben%20Briggs%20-%20Onett%20%28Earthbound%29.mp3",
      number: 10,
    },
    {
      title: "Joshua Morse - Chemical Plant Zone (Sonic 2)",
      url: "11%20Joshua%20Morse%20-%20Chemical%20Plant%20Zone%20%28Sonic%202%29.mp3",
      number: 11,
    },
    {
      title: "Ralfington - Pursuit ~ Cornered (Phoenix Wright)",
      url: "12%20Ralfington%20-%20Pursuit%20~%20Cornered%20%28Phoenix%20Wright%29.mp3",
      number: 12,
    },
    {
      title: "Ephixa - Dr Wily Stage 1 (Mega Man 2)",
      url: "13%20Ephixa%20-%20Dr%20Wily%20Stage%201%20%28Mega%20Man%202%29.mp3",
      number: 13,
    },
    {
      title: "Holder - Aquatic Ambience (Donkey Kong Country)",
      url: "14%20Holder%20-%20Aquatic%20Ambience%20%28Donkey%20Kong%20Country%29.mp3",
      number: 14,
    },
  ],
};
export const smoothMcGroove3: Album = {
  artist: "GameChops",
  name: "Smooth McGroove Remixed 3",
  imageURI:
    "https://archive.org/7/items/smooth-mcgroove-remixed-3/SmoothMcGrooveRemixed_3.jpg",
  baseURI: "https://archive.org/download/smooth-mcgroove-remixed-3/",
  tracks: [
    {
      title: "A_Rival - Gusty Garden Galaxy",
      url: "Smooth%20McGroove%20Remixed%203%20-%2001%20A_Rival%20-%20Gusty%20Garden%20Galaxy.mp3",
      number: 1,
    },
    {
      title: "Funk Fiction - Ken's Theme",
      url: "Smooth%20McGroove%20Remixed%203%20-%2002%20Funk%20Fiction%20-%20Ken%27s%20Theme.mp3",
      number: 2,
    },
    {
      title: "Tee Lopes - Frappe Snowland",
      url: "Smooth%20McGroove%20Remixed%203%20-%2003%20Tee%20Lopes%20-%20Frappe%20Snowland.mp3",
      number: 3,
    },
    {
      title: "Dj Cutman - Wii Shop",
      url: "Smooth%20McGroove%20Remixed%203%20-%2004%20Dj%20Cutman%20-%20Wii%20Shop.mp3",
      number: 4,
    },
    {
      title: "Rymdkraft - Birabuto Kingdom",
      url: "Smooth%20McGroove%20Remixed%203%20-%2005%20Rymdkraft%20-%20Birabuto%20Kingdom.mp3",
      number: 5,
    },
    {
      title: "Player2 - Mii Channel",
      url: "Smooth%20McGroove%20Remixed%203%20-%2006%20Player2%20-%20Mii%20Channel.mp3",
      number: 6,
    },
    {
      title: "Kabuki - Ryu's Theme",
      url: "Smooth%20McGroove%20Remixed%203%20-%2007%20Kabuki%20-%20Ryu%27s%20Theme.mp3",
      number: 7,
    },
    {
      title: "Arcien - Stickerbush Symphony",
      url: "Smooth%20McGroove%20Remixed%203%20-%2008%20Arcien%20-%20Stickerbush%20Symphony.mp3",
      number: 8,
    },
    {
      title: "Grimecraft, CG5 - Outset Island",
      url: "Smooth%20McGroove%20Remixed%203%20-%2009%20Grimecraft%2C%20CG5%20-%20Outset%20Island.mp3",
      number: 9,
    },
    {
      title: "GlitchXCity -  UN Owen Was Her",
      url: "Smooth%20McGroove%20Remixed%203%20-%2010%20GlitchXCity%20-%20%20UN%20Owen%20Was%20Her.mp3",
      number: 10,
    },
    {
      title: "2ToneDisco - Issac's Theme",
      url: "Smooth%20McGroove%20Remixed%203%20-%2011%202ToneDisco%20-%20Issac%27s%20Theme.mp3",
      number: 11,
    },
    {
      title: "Curly - Red Soil",
      url: "Smooth%20McGroove%20Remixed%203%20-%2012%20Curly%20-%20Red%20Soil.mp3",
      number: 12,
    },
    {
      title: "Chjolo - A Bell is Tolling",
      url: "Smooth%20McGroove%20Remixed%203%20-%2013%20Chjolo%20-%20A%20Bell%20is%20Tolling.mp3",
      number: 13,
    },
    {
      title: "Tokyo Elvis - Ice Cap Zone",
      url: "Smooth%20McGroove%20Remixed%203%20-%2014%20Tokyo%20Elvis%20-%20Ice%20Cap%20Zone.mp3",
      number: 14,
    },
    {
      title: "Helynt, Dj Cutman - Wet Hands",
      url: "Smooth%20McGroove%20Remixed%203%20-%2015%20Helynt%2C%20Dj%20Cutman%20-%20Wet%20Hands.mp3",
      number: 15,
    },
    {
      title: "Duzzled - Piranha Plant's Lullaby",
      url: "Smooth%20McGroove%20Remixed%203%20-%2016%20Duzzled%20-%20Piranha%20Plant%27s%20Lullaby.mp3",
      number: 16,
    },
  ],
};
const furi: Album = {
  artist: "Furi",
  name: "Furi OST",
  imageURI:
    "https://archive.org/28/items/furi_soundtrack/Furi%20by%20VA%20%282016%29%20%5BFLAC%2C%2024%20bit%5D/Cover.jpg",
  baseURI:
    "https://archive.org/download/furi_soundtrack/Furi%20by%20VA%20%282016%29%20%5BFLAC%2C%2024%20bit%5D/",
  tracks: [
    {
      title: "Carpenter Brut - Time to Wake Up",
      url: "01.%20Carpenter%20Brut%20-%20Time%20to%20Wake%20Up.mp3",
      number: 1,
    },
    {
      title: "Danger - Danger 6.24",
      url: "02.%20Danger%20-%20Danger%206.24.mp3",
      number: 2,
    },
    {
      title: "Carpenter Brut - Enraged",
      url: "03.%20Carpenter%20Brut%20-%20Enraged.mp3",
      number: 3,
    },
    {
      title: "Waveshaper - A Picture in Motion",
      url: "04.%20Waveshaper%20-%20A%20Picture%20in%20Motion.mp3",
      number: 4,
    },
    {
      title: "Waveshaper - Wisdom of Rage",
      url: "05.%20Waveshaper%20-%20Wisdom%20of%20Rage.mp3",
      number: 5,
    },
    {
      title: "Lorn - Unraveled",
      url: "06.%20Lorn%20-%20Unraveled.mp3",
      number: 6,
    },
    {
      title: "Lorn - Set Me Free",
      url: "07.%20Lorn%20-%20Set%20Me%20Free.mp3",
      number: 7,
    },
    {
      title: "Carpenter Brut - What We Fight For",
      url: "08.%20Carpenter%20Brut%20-%20What%20We%20Fight%20For.mp3",
      number: 8,
    },
    {
      title: "The Toxic Avenger - Make This Right",
      url: "09.%20The%20Toxic%20Avenger%20-%20Make%20This%20Right.mp3",
      number: 9,
    },
    {
      title: "The Toxic Avenger - Make This Right (Remix)",
      url: "10.%20The%20Toxic%20Avenger%20-%20Make%20This%20Right%20%28Remix%29.mp3",
      number: 10,
    },
    {
      title: "Scattle - Love and Madness",
      url: "11.%20Scattle%20-%20Love%20and%20Madness.mp3",
      number: 11,
    },
    {
      title: "Carpenter Brut - You're Mine",
      url: "12.%20Carpenter%20Brut%20-%20You%27re%20Mine.mp3",
      number: 12,
    },
    {
      title: "Kn1ght - A Big Day",
      url: "13.%20Kn1ght%20-%20A%20Big%20Day.mp3",
      number: 13,
    },
    {
      title: "Kn1ght - Something Memorable",
      url: "14.%20Kn1ght%20-%20Something%20Memorable.mp3",
      number: 14,
    },
    {
      title: "Waveshaper - A Monster",
      url: "15.%20Waveshaper%20-%20A%20Monster.mp3",
      number: 15,
    },
    {
      title: "Waveshaper - You Are the End",
      url: "16.%20Waveshaper%20-%20You%20Are%20the%20End.mp3",
      number: 16,
    },
    {
      title: "The Toxic Avenger - My Only Chance",
      url: "17.%20The%20Toxic%20Avenger%20-%20My%20Only%20Chance.mp3",
      number: 17,
    },
    {
      title: "Scattle - Shambles",
      url: "18.%20Scattle%20-%20Shambles.mp3",
      number: 18,
    },
    {
      title: "Danger - Danger 7.53",
      url: "19.%20Danger%20-%20Danger%207.53.mp3",
      number: 19,
    },
    {
      title: "Danger - Danger 8.02",
      url: "20.%20Danger%20-%20Danger%208.02.mp3",
      number: 20,
    },
    {
      title: "Danger - Danger 19.06",
      url: "21.%20Danger%20-%20Danger%2019.06.mp3",
      number: 21,
    },
    {
      title: "Danger - Danger 19.07",
      url: "22.%20Danger%20-%20Danger%2019.07.mp3",
      number: 22,
    },
  ],
};
const bossBeats: Album = {
  artist: "GameChops",
  name: "Boss Beats",
  imageURI:
    "https://archive.org/25/items/boss-beats/ABSRDST%20Boss%20Beats%202018.jpg",
  baseURI: "https://archive.org/download/boss-beats/",
  tracks: [
    {
      title: "Time Stopper",
      url: "Boss%20Beats%2001%20Time%20Stopper.mp3",
      number: 1,
    },
    {
      title: "Robot Stunt Club",
      url: "Boss%20Beats%2002%20Robot%20Stunt%20Club.mp3",
      number: 2,
    },
    {
      title: "ABCDE 12345",
      url: "Boss%20Beats%2003%20ABCDE%2012345.mp3",
      number: 3,
    },
    {
      title: "Bubbleman",
      url: "Boss%20Beats%2004%20Bubbleman.mp3",
      number: 4,
    },
    {
      title: "Fiber Clone",
      url: "Boss%20Beats%2005%20Fiber%20Clone.mp3",
      number: 5,
    },
    {
      title: "The Inventor",
      url: "Boss%20Beats%2006%20The%20Inventor.mp3",
      number: 6,
    },
    {
      title: "We're The Robots",
      url: "Boss%20Beats%2007%20We%27re%20The%20Robots.mp3",
      number: 7,
    },
  ],
};

const donkeyKongCountryOST: Album = {
  artist: "Rare",
  name: "Donkey Kong Country OST",
  imageURI:
    "https://archive.org/32/items/DonkeyKongCountryOST/001DonkeyKongCountry.png",
  baseURI: "https://archive.org/download/DonkeyKongCountryOST/",
  tracks: [
    {
      title: "theme",
      url: "01-theme.mp3",
      number: 1,
    },
    {
      title: "simian-segue",
      url: "02-simian-segue.mp3",
      number: 2,
    },
    {
      title: "opening-fanfare",
      url: "03-opening-fanfare.mp3",
      number: 3,
    },
    {
      title: "dk-island-swing",
      url: "04-dk-island-swing.mp3",
      number: 4,
    },
    {
      title: "cranky-s-theme",
      url: "05-cranky-s-theme.mp3",
      number: 5,
    },
    {
      title: "cave-dweller-concert",
      url: "06-cave-dweller-concert.mp3",
      number: 6,
    },
    {
      title: "bonus-room-blitz",
      url: "07-bonus-room-blitz.mp3",
      number: 7,
    },
    {
      title: "aquatic-ambiance",
      url: "08-aquatic-ambiance.mp3",
      number: 8,
    },
    {
      title: "candy-s-love-song",
      url: "09-candy-s-love-song.mp3",
      number: 9,
    },
    {
      title: "bad-boss-boogie",
      url: "10-bad-boss-boogie.mp3",
      number: 10,
    },
    {
      title: "mine-cart-madness",
      url: "11-mine-cart-madness.mp3",
      number: 11,
    },
    {
      title: "life-in-the-mines",
      url: "12-life-in-the-mines.mp3",
      number: 12,
    },
    {
      title: "voices-of-the-temple",
      url: "13-voices-of-the-temple.mp3",
      number: 13,
    },
    {
      title: "forest-frenzy",
      url: "14-forest-frenzy.mp3",
      number: 14,
    },
    {
      title: "treetop-rock",
      url: "15-treetop-rock.mp3",
      number: 15,
    },
    {
      title: "funky-s-fugue",
      url: "16-funky-s-fugue.mp3",
      number: 16,
    },
    {
      title: "misty-menace",
      url: "17-misty-menace.mp3",
      number: 17,
    },
    {
      title: "northern-hemispheres",
      url: "18-northern-hemispheres.mp3",
      number: 18,
    },
    {
      title: "ice-cave-chant",
      url: "19-ice-cave-chant.mp3",
      number: 19,
    },
    {
      title: "fear-factory",
      url: "20-fear-factory.mp3",
      number: 20,
    },
    {
      title: "gang-plank-galleon",
      url: "21-gang-plank-galleon.mp3",
      number: 21,
    },
    {
      title: "k.-rool-s-cacophony",
      url: "22-k.-rool-s-cacophony.mp3",
      number: 22,
    },
    {
      title: "the-credits-concerto",
      url: "23-the-credits-concerto.mp3",
      number: 23,
    },
  ],
};

const mvcOST: Album = {
  artist: "Yuko Takehara, Masato Kouda",
  name: "Marvel Vs. Capcom: Clash Of Super Heroes OST",
  imageURI: "https://archive.org/19/items/mvc1ostflac/folder.jpg",
  baseURI: "https://archive.org/download/mvc1ostflac/",
  tracks: [
    {
      title: " Opening",
      url: "01.%20Opening.mp3",
      number: 1,
    },
    {
      title: " Player Select",
      url: "02.%20Player%20Select.mp3",
      number: 2,
    },
    {
      title: " Vs.",
      url: "03.%20Vs..mp3",
      number: 3,
    },
    {
      title: " Theme of War Machine",
      url: "04.%20Theme%20of%20War%20Machine.mp3",
      number: 4,
    },
    {
      title: " Theme of Captain America",
      url: "05.%20Theme%20of%20Captain%20America.mp3",
      number: 5,
    },
    {
      title: "ThemeOfHulk",
      url: "06.ThemeOfHulk.mp3",
      number: 6,
    },
    {
      title: "HurryUp",
      url: "07.HurryUp.mp3",
      number: 7,
    },
    {
      title: "Win",
      url: "08.Win.mp3",
      number: 8,
    },
    {
      title: "ThemeOfWolverine",
      url: "09.ThemeOfWolverine.mp3",
      number: 9,
    },
    {
      title: "ThemeOfGambit",
      url: "10.ThemeOfGambit.mp3",
      number: 10,
    },
    {
      title: "ThemeOfSpider-man",
      url: "11.ThemeOfSpider-man.mp3",
      number: 11,
    },
    {
      title: "ThemeOfVenom",
      url: "12.ThemeOfVenom.mp3",
      number: 12,
    },
    {
      title: "HereComesANewChallenger",
      url: "13.HereComesANewChallenger.mp3",
      number: 13,
    },
    {
      title: "Ranking",
      url: "14.Ranking.mp3",
      number: 14,
    },
    {
      title: "VariableCross",
      url: "15.VariableCross.mp3",
      number: 15,
    },
    {
      title: "ThemeOfRyu",
      url: "16.ThemeOfRyu.mp3",
      number: 16,
    },
    {
      title: "ThemeOfCaptainCommando",
      url: "17.ThemeOfCaptainCommando.mp3",
      number: 17,
    },
    {
      title: "ThemeOfChun-li",
      url: "18.ThemeOfChun-li.mp3",
      number: 18,
    },
    {
      title: "ThemeOfJin",
      url: "19.ThemeOfJin.mp3",
      number: 19,
    },
    {
      title: "ThemeOfZangief",
      url: "20.ThemeOfZangief.mp3",
      number: 20,
    },
    {
      title: "Continue",
      url: "21.Continue.mp3",
      number: 21,
    },
    {
      title: "GameOver",
      url: "22.GameOver.mp3",
      number: 22,
    },
    {
      title: "ThemeOfStriderHiryu",
      url: "23.ThemeOfStriderHiryu.mp3",
      number: 23,
    },
    {
      title: "ThemeOfMorrigan",
      url: "24.ThemeOfMorrigan.mp3",
      number: 24,
    },
    {
      title: "ThemeOfRockman",
      url: "25.ThemeOfRockman.mp3",
      number: 25,
    },
    {
      title: "ThemeOfRoll",
      url: "26.ThemeOfRoll.mp3",
      number: 26,
    },
    {
      title: "ThemeOfHiddenCharacter",
      url: "27.ThemeOfHiddenCharacter.mp3",
      number: 27,
    },
    {
      title: "BossIntroduction",
      url: "28.BossIntroduction.mp3",
      number: 28,
    },
    {
      title: "ThemeOfOnslaughtI",
      url: "29.ThemeOfOnslaughtI.mp3",
      number: 29,
    },
    {
      title: "ThemeOfOnslaughtIi",
      url: "30.ThemeOfOnslaughtIi.mp3",
      number: 30,
    },
    {
      title: "Ending-afterTheBattle-",
      url: "31.Ending-afterTheBattle-.mp3",
      number: 31,
    },
    {
      title: "Ending-peace-",
      url: "32.Ending-peace-.mp3",
      number: 32,
    },
    {
      title: "Ending-tension-",
      url: "33.Ending-tension-.mp3",
      number: 33,
    },
    {
      title: "Ending-grief-",
      url: "34.Ending-grief-.mp3",
      number: 34,
    },
    {
      title: "Ending-gambit",
      url: "35.Ending-gambit.mp3",
      number: 35,
    },
    {
      title: "Ending-venom-",
      url: "36.Ending-venom-.mp3",
      number: 36,
    },
    {
      title: "Ending-roll1-",
      url: "37.Ending-roll1-.mp3",
      number: 37,
    },
    {
      title: "Ending-roll2-",
      url: "38.Ending-roll2-.mp3",
      number: 38,
    },
    {
      title: "Ending-ryu-",
      url: "39.Ending-ryu-.mp3",
      number: 39,
    },
    {
      title: "Ending-striderHiryu-",
      url: "40.Ending-striderHiryu-.mp3",
      number: 40,
    },
    {
      title: "Ending-morrigan-",
      url: "41.Ending-morrigan-.mp3",
      number: 41,
    },
    {
      title: "Ending-rockman1-",
      url: "42.Ending-rockman1-.mp3",
      number: 42,
    },
    {
      title: "Ending-rockman2-",
      url: "43.Ending-rockman2-.mp3",
      number: 43,
    },
    {
      title: "StaffRoll",
      url: "44.StaffRoll.mp3",
      number: 44,
    },
  ],
};

const hpPhilosophersStone: Album = {
  artist: "J. K. Rowling, Narrated by Jim Dale ",
  name: "Harry Potter and the Sorcerer's Stone",
  imageURI: "https://m.media-amazon.com/images/I/51xJbFMRsxL._SL500_.jpg",
  baseURI: "https://archive.org/download/Chapter5_201510/",
  tracks: [
    {
      title: "CH01",
      url: "CH01.mp3",
      number: 1,
    },
    {
      title: "CH02",
      url: "CH02.mp3",
      number: 2,
    },
    {
      title: "CH03",
      url: "CH03.mp3",
      number: 3,
    },
    {
      title: "CH04",
      url: "CH04.mp3",
      number: 4,
    },
    {
      title: "CH05",
      url: "CH05.mp3",
      number: 5,
    },
    {
      title: "CH06",
      url: "CH06.mp3",
      number: 6,
    },
    {
      title: "CH07",
      url: "CH07.mp3",
      number: 7,
    },
    {
      title: "CH08",
      url: "CH08.mp3",
      number: 8,
    },
    {
      title: "CH09",
      url: "CH09.mp3",
      number: 9,
    },
    {
      title: "CH10",
      url: "CH10.mp3",
      number: 10,
    },
    {
      title: "CH11",
      url: "CH11.mp3",
      number: 11,
    },
    {
      title: "CH12",
      url: "CH12.mp3",
      number: 12,
    },
    {
      title: "CH13",
      url: "CH13.mp3",
      number: 13,
    },
    {
      title: "CH14",
      url: "CH14.mp3",
      number: 14,
    },
    {
      title: "CH15",
      url: "CH15.mp3",
      number: 15,
    },
    {
      title: "CH16",
      url: "CH16.mp3",
      number: 16,
    },
    {
      title: "CH17",
      url: "CH17.mp3",
      number: 17,
    },
  ],
};
const hpChamberOfSecrets: Album = {
  artist: "J. K. Rowling, Narrated by Jim Dale ",
  name: "Harry Potter and the Chamber of Secrets",
  imageURI: "https://m.media-amazon.com/images/I/61fmfnA-uCL._SL250_.jpg",
  baseURI: "https://archive.org/download/luckduvell_gmail_CH11/",
  tracks: [
    {
      title: "CH01",
      url: "CH01.mp3",
      number: 1,
    },
    {
      title: "CH02",
      url: "CH02.mp3",
      number: 2,
    },
    {
      title: "CH03",
      url: "CH03.mp3",
      number: 3,
    },
    {
      title: "CH04",
      url: "CH04.mp3",
      number: 4,
    },
    {
      title: "CH05",
      url: "CH05.mp3",
      number: 5,
    },
    {
      title: "CH06",
      url: "CH06.mp3",
      number: 6,
    },
    {
      title: "CH07",
      url: "CH07.mp3",
      number: 7,
    },
    {
      title: "CH08",
      url: "CH08.mp3",
      number: 8,
    },
    {
      title: "CH09",
      url: "CH09.mp3",
      number: 9,
    },
    {
      title: "CH10",
      url: "CH10.mp3",
      number: 10,
    },
    {
      title: "CH11",
      url: "CH11.mp3",
      number: 11,
    },
    {
      title: "CH12",
      url: "CH12.mp3",
      number: 12,
    },
    {
      title: "CH13",
      url: "CH13.mp3",
      number: 13,
    },
    {
      title: "CH14",
      url: "CH14.mp3",
      number: 14,
    },
    {
      title: "CH15",
      url: "CH15.mp3",
      number: 15,
    },
    {
      title: "CH16",
      url: "CH16.mp3",
      number: 16,
    },
    {
      title: "CH17",
      url: "CH17.mp3",
      number: 17,
    },
    {
      title: "CH18",
      url: "CH18.mp3",
      number: 18,
    },
  ],
};

const hpPrisonerOfAzkaban: Album = {
  artist: "J. K. Rowling, Narrated by Jim Dale ",
  name: "Harry Potter and the Prisoner of Azkaban",
  imageURI: "https://m.media-amazon.com/images/I/51O29wSqEsL._SL250_.jpg",
  baseURI: "https://archive.org/download/luckduvell_gmail_CH21/",
  tracks: [
    {
      title: "CH01",
      url: "CH01.mp3",
      number: 1,
    },
    {
      title: "CH02",
      url: "CH02.mp3",
      number: 2,
    },
    {
      title: "CH03",
      url: "CH03.mp3",
      number: 3,
    },
    {
      title: "CH04",
      url: "CH04.mp3",
      number: 4,
    },
    {
      title: "CH05",
      url: "CH05.mp3",
      number: 5,
    },
    {
      title: "CH06",
      url: "CH06.mp3",
      number: 6,
    },
    {
      title: "CH07",
      url: "CH07.mp3",
      number: 7,
    },
    {
      title: "CH08",
      url: "CH08.mp3",
      number: 8,
    },
    {
      title: "CH09",
      url: "CH09.mp3",
      number: 9,
    },
    {
      title: "CH10",
      url: "CH10.mp3",
      number: 10,
    },
    {
      title: "CH11",
      url: "CH11.mp3",
      number: 11,
    },
    {
      title: "CH12",
      url: "CH12.mp3",
      number: 12,
    },
    {
      title: "CH13",
      url: "CH13.mp3",
      number: 13,
    },
    {
      title: "CH14",
      url: "CH14.mp3",
      number: 14,
    },
    {
      title: "CH15",
      url: "CH15.mp3",
      number: 15,
    },
    {
      title: "CH16",
      url: "CH16.mp3",
      number: 16,
    },
    {
      title: "CH17",
      url: "CH17.mp3",
      number: 17,
    },
    {
      title: "CH18",
      url: "CH18.mp3",
      number: 18,
    },
    {
      title: "CH19",
      url: "CH19.mp3",
      number: 19,
    },
    {
      title: "CH20",
      url: "CH20.mp3",
      number: 20,
    },
    {
      title: "CH21",
      url: "CH21.mp3",
      number: 21,
    },
    {
      title: "CH22",
      url: "CH22.mp3",
      number: 22,
    },
  ],
};

const hpGobletOfFire: Album = {
  artist: "J. K. Rowling, Narrated by Jim Dale ",
  name: "Harry Potter and the Goblet of Fire",
  imageURI: "https://m.media-amazon.com/images/I/61m99NmM4jL._SL500_.jpg",
  baseURI: "https://archive.org/download/GobletOfFire_20151103/",
  tracks: [
    {
      title: "CH01",
      url: "CH01.mp3",
      number: 1,
    },
    {
      title: "CH02",
      url: "CH02.mp3",
      number: 2,
    },
    {
      title: "CH03",
      url: "CH03.mp3",
      number: 3,
    },
    {
      title: "CH04",
      url: "CH04.mp3",
      number: 4,
    },
    {
      title: "CH05",
      url: "CH05.mp3",
      number: 5,
    },
    {
      title: "CH06",
      url: "CH06.mp3",
      number: 6,
    },
    {
      title: "CH07",
      url: "CH07.mp3",
      number: 7,
    },
    {
      title: "CH08",
      url: "CH08.mp3",
      number: 8,
    },
    {
      title: "CH09",
      url: "CH09.mp3",
      number: 9,
    },
    {
      title: "CH10",
      url: "CH10.mp3",
      number: 10,
    },
    {
      title: "CH11",
      url: "CH11.mp3",
      number: 11,
    },
    {
      title: "CH12",
      url: "CH12.mp3",
      number: 12,
    },
    {
      title: "CH13",
      url: "CH13.mp3",
      number: 13,
    },
    {
      title: "CH14",
      url: "CH14.mp3",
      number: 14,
    },
    {
      title: "CH15",
      url: "CH15.mp3",
      number: 15,
    },
    {
      title: "CH16",
      url: "CH16.mp3",
      number: 16,
    },
    {
      title: "CH17",
      url: "CH17.mp3",
      number: 17,
    },
    {
      title: "CH18",
      url: "CH18.mp3",
      number: 18,
    },
    {
      title: "CH19",
      url: "CH19.mp3",
      number: 19,
    },
    {
      title: "CH20",
      url: "CH20.mp3",
      number: 20,
    },
    {
      title: "CH21",
      url: "CH21.mp3",
      number: 21,
    },
    {
      title: "CH22",
      url: "CH22.mp3",
      number: 22,
    },
    {
      title: "CH23",
      url: "CH23.mp3",
      number: 23,
    },
    {
      title: "CH24",
      url: "CH24.mp3",
      number: 24,
    },
    {
      title: "CH25",
      url: "CH25.mp3",
      number: 25,
    },
    {
      title: "CH26",
      url: "CH26.mp3",
      number: 26,
    },
    {
      title: "CH27",
      url: "CH27.mp3",
      number: 27,
    },
    {
      title: "CH28",
      url: "CH28.mp3",
      number: 28,
    },
    {
      title: "CH29",
      url: "CH29.mp3",
      number: 29,
    },
    {
      title: "CH30",
      url: "CH30.mp3",
      number: 30,
    },
    {
      title: "CH31",
      url: "CH31.mp3",
      number: 31,
    },
    {
      title: "CH32",
      url: "CH32.mp3",
      number: 32,
    },
    {
      title: "CH33",
      url: "CH33.mp3",
      number: 33,
    },
    {
      title: "CH34",
      url: "CH34.mp3",
      number: 34,
    },
    {
      title: "CH35",
      url: "CH35.mp3",
      number: 35,
    },
    {
      title: "CH36",
      url: "CH36.mp3",
      number: 36,
    },
    {
      title: "CH37",
      url: "CH37.mp3",
      number: 37,
    },
  ],
};
const hpOrderOfThePhoenix: Album = {
  artist: "J. K. Rowling, Narrated by Jim Dale ",
  name: "Harry Potter and the Order of the Phoenix",
  imageURI: "https://m.media-amazon.com/images/I/51KHVovUpGL._SL250_.jpg",
  baseURI: "https://archive.org/download/Orderjde/",
  tracks: [
    {
      title: "CH01",
      url: "CH01.mp3",
      number: 1,
    },
    {
      title: "CH02",
      url: "CH02.mp3",
      number: 2,
    },
    {
      title: "CH03",
      url: "CH03.mp3",
      number: 3,
    },
    {
      title: "CH04",
      url: "CH04.mp3",
      number: 4,
    },
    {
      title: "CH05",
      url: "CH05.mp3",
      number: 5,
    },
    {
      title: "CH06",
      url: "CH06.mp3",
      number: 6,
    },
    {
      title: "CH07",
      url: "CH07.mp3",
      number: 7,
    },
    {
      title: "CH08",
      url: "CH08.mp3",
      number: 8,
    },
    {
      title: "CH09",
      url: "CH09.mp3",
      number: 9,
    },
    {
      title: "CH10",
      url: "CH10.mp3",
      number: 10,
    },
    {
      title: "CH11",
      url: "CH11.mp3",
      number: 11,
    },
    {
      title: "CH12",
      url: "CH12.mp3",
      number: 12,
    },
    {
      title: "CH13",
      url: "CH13.mp3",
      number: 13,
    },
    {
      title: "CH14",
      url: "CH14.mp3",
      number: 14,
    },
    {
      title: "CH15",
      url: "CH15.mp3",
      number: 15,
    },
    {
      title: "CH16",
      url: "CH16.mp3",
      number: 16,
    },
    {
      title: "CH17",
      url: "CH17.mp3",
      number: 17,
    },
    {
      title: "CH18",
      url: "CH18.mp3",
      number: 18,
    },
    {
      title: "CH19",
      url: "CH19.mp3",
      number: 19,
    },
    {
      title: "CH20",
      url: "CH20.mp3",
      number: 20,
    },
    {
      title: "CH21",
      url: "CH21.mp3",
      number: 21,
    },
    {
      title: "CH22",
      url: "CH22.mp3",
      number: 22,
    },
    {
      title: "CH23",
      url: "CH23.mp3",
      number: 23,
    },
    {
      title: "CH25",
      url: "CH25.mp3",
      number: 25,
    },
  ],
};

const hpHalfBloodPrince: Album = {
  artist: "J. K. Rowling, Narrated by Jim Dale ",
  name: "Harry Potter and the Half-Blood Prince",
  imageURI: "https://m.media-amazon.com/images/I/51sImF7gqML._SL250_.jpg",
  baseURI: "https://archive.org/download/luckduvell_gmail_CH07/",
  tracks: [
    {
      title: "CH01",
      url: "CH01.mp3",
      number: 1,
    },
    {
      title: "CH02",
      url: "CH02.mp3",
      number: 2,
    },
    {
      title: "CH03",
      url: "CH03.mp3",
      number: 3,
    },
    {
      title: "CH04",
      url: "CH04.mp3",
      number: 4,
    },
    {
      title: "CH05",
      url: "CH05.mp3",
      number: 5,
    },
    {
      title: "CH06",
      url: "CH06.mp3",
      number: 6,
    },
    {
      title: "CH07",
      url: "CH07.mp3",
      number: 7,
    },
    {
      title: "CH08",
      url: "CH08.mp3",
      number: 8,
    },
    {
      title: "CH09",
      url: "CH09.mp3",
      number: 9,
    },
    {
      title: "CH10",
      url: "CH10.mp3",
      number: 10,
    },
    {
      title: "CH11",
      url: "CH11.mp3",
      number: 11,
    },
    {
      title: "CH12",
      url: "CH12.mp3",
      number: 12,
    },
    {
      title: "CH13",
      url: "CH13.mp3",
      number: 13,
    },
    {
      title: "CH14",
      url: "CH14.mp3",
      number: 14,
    },
    {
      title: "CH15",
      url: "CH15.mp3",
      number: 15,
    },
    {
      title: "CH16",
      url: "CH16.mp3",
      number: 16,
    },
    {
      title: "CH17",
      url: "CH17.mp3",
      number: 17,
    },
    {
      title: "CH18",
      url: "CH18.mp3",
      number: 18,
    },
    {
      title: "CH19",
      url: "CH19.mp3",
      number: 19,
    },
    {
      title: "CH20",
      url: "CH20.mp3",
      number: 20,
    },
    {
      title: "CH21",
      url: "CH21.mp3",
      number: 21,
    },
    {
      title: "CH22",
      url: "CH22.mp3",
      number: 22,
    },
    {
      title: "CH23",
      url: "CH23.mp3",
      number: 23,
    },
    {
      title: "CH24",
      url: "CH24.mp3",
      number: 24,
    },
    {
      title: "CH25",
      url: "CH25.mp3",
      number: 25,
    },
    {
      title: "CH26",
      url: "CH26.mp3",
      number: 26,
    },
    {
      title: "CH27",
      url: "CH27.mp3",
      number: 27,
    },
    {
      title: "CH28",
      url: "CH28.mp3",
      number: 28,
    },
    {
      title: "CH29",
      url: "CH29.mp3",
      number: 29,
    },
    {
      title: "CH30",
      url: "CH30.mp3",
      number: 30,
    },
  ],
};

const hpDeathlyHallows: Album = {
  artist: "J. K. Rowling, Narrated by Jim Dale ",
  name: "Harry Potter and the Deathly Hallows",
  imageURI: "https://m.media-amazon.com/images/I/61yMjtQzKcL._SL250_.jpg",
  baseURI: "https://archive.org/download/luckduvell_gmail_CH23/",
  tracks: [
    {
      title: "CH01",
      url: "CH01.mp3",
      number: 1,
    },
    {
      title: "CH02",
      url: "CH02.mp3",
      number: 2,
    },
    {
      title: "CH03",
      url: "CH03.mp3",
      number: 3,
    },
    {
      title: "CH04",
      url: "CH04.mp3",
      number: 4,
    },
    {
      title: "CH05",
      url: "CH05.mp3",
      number: 5,
    },
    {
      title: "CH06",
      url: "CH06.mp3",
      number: 6,
    },
    {
      title: "CH07",
      url: "CH07.mp3",
      number: 7,
    },
    {
      title: "CH08",
      url: "CH08.mp3",
      number: 8,
    },
    {
      title: "CH09",
      url: "CH09.mp3",
      number: 9,
    },
    {
      title: "CH10",
      url: "CH10.mp3",
      number: 10,
    },
    {
      title: "CH11",
      url: "CH11.mp3",
      number: 11,
    },
    {
      title: "CH12",
      url: "CH12.mp3",
      number: 12,
    },
    {
      title: "CH13",
      url: "CH13.mp3",
      number: 13,
    },
    {
      title: "CH14",
      url: "CH14.mp3",
      number: 14,
    },
    {
      title: "CH15",
      url: "CH15.mp3",
      number: 15,
    },
    {
      title: "CH16",
      url: "CH16.mp3",
      number: 16,
    },
    {
      title: "CH17",
      url: "CH17.mp3",
      number: 17,
    },
    {
      title: "CH18",
      url: "CH18.mp3",
      number: 18,
    },
    {
      title: "CH19",
      url: "CH19.mp3",
      number: 19,
    },
    {
      title: "CH20",
      url: "CH20.mp3",
      number: 20,
    },
    {
      title: "CH21",
      url: "CH21.mp3",
      number: 21,
    },
    {
      title: "CH22",
      url: "CH22.mp3",
      number: 22,
    },
    {
      title: "CH23",
      url: "CH23.mp3",
      number: 23,
    },
    {
      title: "CH24",
      url: "CH24.mp3",
      number: 24,
    },
    {
      title: "CH25",
      url: "CH25.mp3",
      number: 25,
    },
    {
      title: "CH26",
      url: "CH26.mp3",
      number: 26,
    },
    {
      title: "CH27",
      url: "CH27.mp3",
      number: 27,
    },
    {
      title: "CH28",
      url: "CH28.mp3",
      number: 28,
    },
    {
      title: "CH29",
      url: "CH29.mp3",
      number: 29,
    },
    {
      title: "CH30",
      url: "CH30.mp3",
      number: 30,
    },
    {
      title: "CH31",
      url: "CH31.mp3",
      number: 31,
    },
    {
      title: "CH32",
      url: "CH32.mp3",
      number: 32,
    },
    {
      title: "CH33",
      url: "CH33.mp3",
      number: 33,
    },
    {
      title: "CH34",
      url: "CH34.mp3",
      number: 34,
    },
    {
      title: "CH35",
      url: "CH35.mp3",
      number: 35,
    },
    {
      title: "CH36",
      url: "CH36.mp3",
      number: 36,
    },
    {
      title: "CH37",
      url: "CH37.mp3",
      number: 37,
    },
  ],
};

const EightOhEightsAndHeartbreak: Album = {
  artist: "Kanye West",
  name: "808's and Heartbreak",
  baseURI:
    "https://archive.org/download/808s-heartbreak_202307/808%27s%20and%20heartbreak/",
  imageURI:
    "https://archive.org/16/items/808s-heartbreak_202307/808s_%26_Heartbreak.png",
  tracks: [
    {
      title: "Amazing",
      url: "Amazing.mp3",
      number: 1,
    },
    {
      title: "Bad News",
      url: "Bad%20News.mp3",
      number: 2,
    },
    {
      title: "Coldest Winter",
      url: "Coldest%20Winter.mp3",
      number: 3,
    },
    {
      title: "Heartless",
      url: "Heartless.mp3",
      number: 4,
    },
    {
      title: "Love Lockdown",
      url: "Love%20Lockdown.mp3",
      number: 5,
    },
    {
      title: "Paranoid",
      url: "Paranoid.mp3",
      number: 6,
    },
    {
      title: "Pinocchio Story",
      url: "Pinocchio%20Story.mp3",
      number: 7,
    },
    {
      title: "RoboCop",
      url: "RoboCop.mp3",
      number: 8,
    },
    {
      title: "Say You Will",
      url: "Say%20You%20Will.mp3",
      number: 9,
    },
    {
      title: "See You In My Nightmares",
      url: "See%20You%20In%20My%20Nightmares.mp3",
      number: 10,
    },
    {
      title: "Street Lights",
      url: "Street%20Lights.mp3",
      number: 11,
    },
    {
      title: "Welcome To Heartbreak",
      url: "Welcome%20To%20Heartbreak.mp3",
      number: 12,
    },
  ],
};

const creedDiscography: Album = {
  artist: "Creed",
  name: "Creed Discography",
  baseURI:
    "https://archive.org/download/creed-discography-1997-2015-flac-full-tracks/",
  imageURI:
    "https://archive.org/9/items/creed-discography-1997-2015-flac-full-tracks/(01)%201999%20-%20Human%20Clay.jpg?scale=1&rotate=0&scale=1&rotate=0",
  tracks: [
    {
      title: "Torn",
      url: "%28001%29%20Torn.mp3",
      number: 1,
    },
    {
      title: "Ode",
      url: "%28002%29%20Ode.mp3",
      number: 2,
    },
    {
      title: "My Own Prison",
      url: "%28003%29%20My%20Own%20Prison.mp3",
      number: 3,
    },
    {
      title: "Pity For A Dime",
      url: "%28004%29%20Pity%20For%20A%20Dime.mp3",
      number: 4,
    },
    {
      title: "In America",
      url: "%28005%29%20In%20America.mp3",
      number: 5,
    },
    {
      title: "Illusion",
      url: "%28006%29%20Illusion.mp3",
      number: 6,
    },
    {
      title: "Unforgiven",
      url: "%28007%29%20Unforgiven.mp3",
      number: 7,
    },
    {
      title: "Sister",
      url: "%28008%29%20Sister.mp3",
      number: 8,
    },
    {
      title: "What's This Life For",
      url: "%28009%29%20What%27s%20This%20Life%20For.mp3",
      number: 9,
    },
    {
      title: "One",
      url: "%28010%29%20One.mp3",
      number: 10,
    },
    {
      title: "Are You Ready",
      url: "%28011%29%20Are%20You%20Ready.mp3",
      number: 11,
    },
    {
      title: "What If",
      url: "%28012%29%20What%20If.mp3",
      number: 12,
    },
    {
      title: "Beautiful",
      url: "%28013%29%20Beautiful.mp3",
      number: 13,
    },
    {
      title: "Say I",
      url: "%28014%29%20Say%20I.mp3",
      number: 14,
    },
    {
      title: "Wrong Way",
      url: "%28015%29%20Wrong%20Way.mp3",
      number: 15,
    },
    {
      title: "Faceless Man",
      url: "%28016%29%20Faceless%20Man.mp3",
      number: 16,
    },
    {
      title: "Never Die",
      url: "%28017%29%20Never%20Die.mp3",
      number: 17,
    },
    {
      title: "With Arms Wide Open",
      url: "%28018%29%20With%20Arms%20Wide%20Open.mp3",
      number: 18,
    },
    {
      title: "Higher",
      url: "%28019%29%20Higher.mp3",
      number: 19,
    },
    {
      title: "Wash Away Those Years",
      url: "%28020%29%20Wash%20Away%20Those%20Years.mp3",
      number: 20,
    },
    {
      title: "Inside Us All",
      url: "%28021%29%20Inside%20Us%20All.mp3",
      number: 21,
    },
    {
      title: "Bullets",
      url: "%28022%29%20Bullets.mp3",
      number: 22,
    },
    {
      title: "Freedom Fighter",
      url: "%28023%29%20Freedom%20Fighter.mp3",
      number: 23,
    },
    {
      title: "Who's Got My Back",
      url: "%28024%29%20Who%27s%20Got%20My%20Back.mp3",
      number: 24,
    },
    {
      title: "Signs",
      url: "%28025%29%20Signs.mp3",
      number: 25,
    },
    {
      title: "One Last Breath",
      url: "%28026%29%20One%20Last%20Breath.mp3",
      number: 26,
    },
    {
      title: "My Sacrifice",
      url: "%28027%29%20My%20Sacrifice.mp3",
      number: 27,
    },
    {
      title: "Stand Here With Me",
      url: "%28028%29%20Stand%20Here%20With%20Me.mp3",
      number: 28,
    },
    {
      title: "Weathered",
      url: "%28029%29%20Weathered.mp3",
      number: 29,
    },
    {
      title: "Hide",
      url: "%28030%29%20Hide.mp3",
      number: 30,
    },
    {
      title: "Don't Stop Dancing",
      url: "%28031%29%20Don%27t%20Stop%20Dancing.mp3",
      number: 31,
    },
    {
      title: "Lullaby",
      url: "%28032%29%20Lullaby.mp3",
      number: 32,
    },
    {
      title: "Torn",
      url: "%28033%29%20Torn.mp3",
      number: 33,
    },
    {
      title: "My Own Prison",
      url: "%28034%29%20My%20Own%20Prison.mp3",
      number: 34,
    },
    {
      title: "What's This Life For",
      url: "%28035%29%20What%27s%20This%20Life%20For.mp3",
      number: 35,
    },
    {
      title: "One",
      url: "%28036%29%20One.mp3",
      number: 36,
    },
    {
      title: "Are You Ready",
      url: "%28037%29%20Are%20You%20Ready.mp3",
      number: 37,
    },
    {
      title: "Higher",
      url: "%28038%29%20Higher.mp3",
      number: 38,
    },
    {
      title: "With Arms Wide Open",
      url: "%28039%29%20With%20Arms%20Wide%20Open.mp3",
      number: 39,
    },
    {
      title: "What If",
      url: "%28040%29%20What%20If.mp3",
      number: 40,
    },
    {
      title: "One Last Breath",
      url: "%28041%29%20One%20Last%20Breath.mp3",
      number: 41,
    },
    {
      title: "Don't Stop Dancing",
      url: "%28042%29%20Don%27t%20Stop%20Dancing.mp3",
      number: 42,
    },
    {
      title: "Bullets",
      url: "%28043%29%20Bullets.mp3",
      number: 43,
    },
    {
      title: "My Sacrifice",
      url: "%28044%29%20My%20Sacrifice.mp3",
      number: 44,
    },
    {
      title: "Weathered",
      url: "%28045%29%20Weathered.mp3",
      number: 45,
    },
    {
      title: "Overcome",
      url: "%28046%29%20Overcome.mp3",
      number: 46,
    },
    {
      title: "Bread Of Shame",
      url: "%28047%29%20Bread%20Of%20Shame.mp3",
      number: 47,
    },
    {
      title: "A Thousand Faces",
      url: "%28048%29%20A%20Thousand%20Faces.mp3",
      number: 48,
    },
    {
      title: "Suddenly",
      url: "%28049%29%20Suddenly.mp3",
      number: 49,
    },
    {
      title: "Rain",
      url: "%28050%29%20Rain.mp3",
      number: 50,
    },
    {
      title: "Away In Silence",
      url: "%28051%29%20Away%20In%20Silence.mp3",
      number: 51,
    },
    {
      title: "Fear",
      url: "%28052%29%20Fear.mp3",
      number: 52,
    },
    {
      title: "On My Sleeve",
      url: "%28053%29%20On%20My%20Sleeve.mp3",
      number: 53,
    },
    {
      title: "Full Circle",
      url: "%28054%29%20Full%20Circle.mp3",
      number: 54,
    },
    {
      title: "Time",
      url: "%28055%29%20Time.mp3",
      number: 55,
    },
    {
      title: "Good Fight",
      url: "%28056%29%20Good%20Fight.mp3",
      number: 56,
    },
    {
      title: "The Song You Sing",
      url: "%28057%29%20The%20Song%20You%20Sing.mp3",
      number: 57,
    },
    {
      title: "My Own Prison (Radio Edit)",
      url: "%28058%29%20My%20Own%20Prison%20%28Radio%20Edit%29.mp3",
      number: 58,
    },
    {
      title: "Torn (Radio Edit)",
      url: "%28059%29%20Torn%20%28Radio%20Edit%29.mp3",
      number: 59,
    },
    {
      title: "What's This Life For (Album Edit - Clean)",
      url: "%28060%29%20What%27s%20This%20Life%20For%20%28Album%20Edit%20-%20Clean%29.mp3",
      number: 60,
    },
    {
      title: "One (Radio Edit)",
      url: "%28061%29%20One%20%28Radio%20Edit%29.mp3",
      number: 61,
    },
    {
      title: "What If (Radio Edit)",
      url: "%28062%29%20What%20If%20%28Radio%20Edit%29.mp3",
      number: 62,
    },
    {
      title: "Higher (Top 40 Version)",
      url: "%28063%29%20Higher%20%28Top%2040%20Version%29.mp3",
      number: 63,
    },
    {
      title: "With Arms Wide Open (New Version With Strings)",
      url: "%28064%29%20With%20Arms%20Wide%20Open%20%28New%20Version%20With%20Strings%29.mp3",
      number: 64,
    },
    {
      title: "Are You Ready",
      url: "%28065%29%20Are%20You%20Ready.mp3",
      number: 65,
    },
    {
      title: "My Sacrifice (Radio Edit)",
      url: "%28066%29%20My%20Sacrifice%20%28Radio%20Edit%29.mp3",
      number: 66,
    },
    {
      title: "Bullets",
      url: "%28067%29%20Bullets.mp3",
      number: 67,
    },
    {
      title: "One Last Breath (Radio Version)",
      url: "%28068%29%20One%20Last%20Breath%20%28Radio%20Version%29.mp3",
      number: 68,
    },
    {
      title: "Don't Stop Dancing",
      url: "%28069%29%20Don%27t%20Stop%20Dancing.mp3",
      number: 69,
    },
    {
      title: "Weathered (Edit)",
      url: "%28070%29%20Weathered%20%28Edit%29.mp3",
      number: 70,
    },
    {
      title: "Overcome",
      url: "%28071%29%20Overcome.mp3",
      number: 71,
    },
    {
      title: "Rain (Pop Mix)",
      url: "%28072%29%20Rain%20%28Pop%20Mix%29.mp3",
      number: 72,
    },
    {
      title: "A Thousand Faces (Radio Edit)",
      url: "%28073%29%20A%20Thousand%20Faces%20%28Radio%20Edit%29.mp3",
      number: 73,
    },
    {
      title: "To Whom It May Concern",
      url: "%28074%29%20To%20Whom%20It%20May%20Concern.mp3",
      number: 74,
    },
    {
      title: "Is This The End (Scream 3 Edit)",
      url: "%28075%29%20Is%20This%20The%20End%20%28Scream%203%20Edit%29.mp3",
      number: 75,
    },
    {
      title: "Bound &amp; Tied",
      url: "%28076%29%20Bound%20%26%20Tied.mp3",
      number: 76,
    },
    {
      title: "Young Grow Old",
      url: "%28077%29%20Young%20Grow%20Old.mp3",
      number: 77,
    },
    {
      title: "Silent Teacher",
      url: "%28078%29%20Silent%20Teacher.mp3",
      number: 78,
    },
    {
      title: "I'm Eighteen (Alice Cooper Cover)",
      url: "%28079%29%20I%27m%20Eighteen%20%28Alice%20Cooper%20Cover%29.mp3",
      number: 79,
    },
    {
      title: "Roadhouse Blues (Live At Woodstock 1999) (The Doors Cover)",
      url: "%28080%29%20Roadhouse%20Blues%20%28Live%20At%20Woodstock%201999%29%20%28The%20Doors%20Cover%29.mp3",
      number: 80,
    },
    {
      title: "Riders On The Storm (The Doors Cover)",
      url: "%28081%29%20Riders%20On%20The%20Storm%20%28The%20Doors%20Cover%29.mp3",
      number: 81,
    },
    {
      title: "Blistered (Demo)",
      url: "%28082%29%20Blistered%20%28Demo%29.mp3",
      number: 82,
    },
    {
      title: "More Than This (Demo)",
      url: "%28083%29%20More%20Than%20This%20%28Demo%29.mp3",
      number: 83,
    },
    {
      title: "Why (Demo)",
      url: "%28084%29%20Why%20%28Demo%29.mp3",
      number: 84,
    },
    {
      title: "My Sacrifice (Live Acoustic)",
      url: "%28085%29%20My%20Sacrifice%20%28Live%20Acoustic%29.mp3",
      number: 85,
    },
    {
      title: "My Own Prison (Acoustic Version - Extended)",
      url: "%28086%29%20My%20Own%20Prison%20%28Acoustic%20Version%20-%20Extended%29.mp3",
      number: 86,
    },
    {
      title: "Don't Stop Dancing (Acoustic Version #3)",
      url: "%28087%29%20Don%27t%20Stop%20Dancing%20%28Acoustic%20Version%20%233%29.mp3",
      number: 87,
    },
    {
      title: "With Arms Wide Open (Acoustic Version)",
      url: "%28088%29%20With%20Arms%20Wide%20Open%20%28Acoustic%20Version%29.mp3",
      number: 88,
    },
    {
      title: "What's This Life For (Alternate Version - Clean)",
      url: "%28089%29%20What%27s%20This%20Life%20For%20%28Alternate%20Version%20-%20Clean%29.mp3",
      number: 89,
    },
    {
      title: "Rain (Live Acoustic)",
      url: "%28090%29%20Rain%20%28Live%20Acoustic%29.mp3",
      number: 90,
    },
    {
      title: "My Own Prison (Live Acoustic)",
      url: "%28091%29%20My%20Own%20Prison%20%28Live%20Acoustic%29.mp3",
      number: 91,
    },
    {
      title: "With Arms Wide Open (Live Acoustic)",
      url: "%28092%29%20With%20Arms%20Wide%20Open%20%28Live%20Acoustic%29.mp3",
      number: 92,
    },
    {
      title: "Overcome (Live Acoustic)",
      url: "%28093%29%20Overcome%20%28Live%20Acoustic%29.mp3",
      number: 93,
    },
    {
      title: "One (Live Acoustic)",
      url: "%28094%29%20One%20%28Live%20Acoustic%29.mp3",
      number: 94,
    },
    {
      title: "Torn (Live Acoustic)",
      url: "%28095%29%20Torn%20%28Live%20Acoustic%29.mp3",
      number: 95,
    },
    {
      title: "Higher (Live Acoustic)",
      url: "%28096%29%20Higher%20%28Live%20Acoustic%29.mp3",
      number: 96,
    },
    {
      title: "To Whom It May Concern (Live Acoustic)",
      url: "%28097%29%20To%20Whom%20It%20May%20Concern%20%28Live%20Acoustic%29.mp3",
      number: 97,
    },
  ],
};

const jukebox: {
  albums: Album[];
  audioBooks: Album[];
} = {
  albums: [
    homeAlone,
    pocketMonstersAnimeOST,
    sonicAdventure2OST,
    donkeyKongCountryOST,
    mvcOST,
    furi,
    ultraball,
    bossBeats,
    smoothMcGroove2,
    smoothMcGroove3,
    EightOhEightsAndHeartbreak,
    creedDiscography,
    hpPhilosophersStone,
    hpChamberOfSecrets,
    hpPrisonerOfAzkaban,
    hpGobletOfFire,
    hpOrderOfThePhoenix,
    hpHalfBloodPrince,
    hpDeathlyHallows,
  ],
};

export default jukebox;
