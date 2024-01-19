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
  baseURI:
    "https://archive.org/download/Pocket-Monsters_Anime-OST_Vol-2/flac/Disc%201/",
  tracks: [
    {
      title: "1. To Be Continued (1997-1998-M02)",
      url: "1.%20To%20Be%20Continued%20%281997-1998-M02%29.mp3",
      number: 1,
    },
    {
      title: "2. Grabbing Victory (1997-1998-M03)",
      url: "2.%20Grabbing%20Victory%20%281997-1998-M03%29.mp3",
      number: 2,
    },
    {
      title: "3. Meeting and Parting (1997-1998-M04)",
      url: "3.%20Meeting%20and%20Parting%20%281997-1998-M04%29.mp3",
      number: 3,
    },
    {
      title: "4. The Ghost at Maiden's Peak (1997-1998-M05)",
      url: "4.%20The%20Ghost%20at%20Maiden%27s%20Peak%20%281997-1998-M05%29.mp3",
      number: 4,
    },
    {
      title: "5. Tears (1997-1998-M06)",
      url: "5.%20Tears%20%281997-1998-M06%29.mp3",
      number: 5,
    },
    {
      title: "6. Mysterious Lighthouse (1997-1998-M07)",
      url: "6.%20Mysterious%20Lighthouse%20%281997-1998-M07%29.mp3",
      number: 6,
    },
    {
      title: "7. Sneaking in the Shadows (1997-1998-M08)",
      url: "7.%20Sneaking%20in%20the%20Shadows%20%281997-1998-M08%29.mp3",
      number: 7,
    },
    {
      title: "8. Ash's Realization (1997-1998-M09)",
      url: "8.%20Ash%27s%20Realization%20%281997-1998-M09%29.mp3",
      number: 8,
    },
    {
      title: "9. Pikachu Enters (1997-1998-M10)",
      url: "9.%20Pikachu%20Enters%20%281997-1998-M10%29.mp3",
      number: 9,
    },
    {
      title: "10. League Round 3 Win (1997-1998-M11)",
      url: "10.%20League%20Round%203%20Win%20%281997-1998-M11%29.mp3",
      number: 10,
    },
    {
      title: "11. Colossal Battle (1997-1998-M14)",
      url: "11.%20Colossal%20Battle%20%281997-1998-M14%29.mp3",
      number: 11,
    },
    {
      title: "12. Swarm of Beedrills (1997-1998-M15)",
      url: "12.%20Swarm%20of%20Beedrills%20%281997-1998-M15%29.mp3",
      number: 12,
    },
    {
      title: "13. A Formidable Opponent Appears (1997-1998-M16)",
      url: "13.%20A%20Formidable%20Opponent%20Appears%20%281997-1998-M16%29.mp3",
      number: 13,
    },
    {
      title: "14. Desperate Situation (1997-1998-M17)",
      url: "14.%20Desperate%20Situation%20%281997-1998-M17%29.mp3",
      number: 14,
    },
    {
      title: "15. Prepare for Trouble! (1997-1998-M20)",
      url: "15.%20Prepare%20for%20Trouble%21%20%281997-1998-M20%29.mp3",
      number: 15,
    },
    {
      title: "16. Prepare for Trouble! 2 (1997-1998-M20B)",
      url: "16.%20Prepare%20for%20Trouble%21%202%20%281997-1998-M20B%29.mp3",
      number: 16,
    },
    {
      title: "17. The Rocket Gang Boss' Theme (1997-1998-M22)",
      url: "17.%20The%20Rocket%20Gang%20Boss%27%20Theme%20%281997-1998-M22%29.mp3",
      number: 17,
    },
    {
      title: "18. Vacant Shelter (1997-1998-M23)",
      url: "18.%20Vacant%20Shelter%20%281997-1998-M23%29.mp3",
      number: 18,
    },
    {
      title: "19. Danger Unfolding (1997-1998-M24)",
      url: "19.%20Danger%20Unfolding%20%281997-1998-M24%29.mp3",
      number: 19,
    },
    {
      title: "20. Awaiting for Wild Pokemon (1997-1998-M25)",
      url: "20.%20Awaiting%20for%20Wild%20Pokemon%20%281997-1998-M25%29.mp3",
      number: 20,
    },
    {
      title: "21. Team Rocket's Secret Scheme (1997-1998-M26)",
      url: "21.%20Team%20Rocket%27s%20Secret%20Scheme%20%281997-1998-M26%29.mp3",
      number: 21,
    },
    {
      title: "22. Team Rocket's Secret Scheme 2 (1997-1998-M26B)",
      url: "22.%20Team%20Rocket%27s%20Secret%20Scheme%202%20%281997-1998-M26B%29.mp3",
      number: 22,
    },
    {
      title: "23. Run Away! (1997-1998-M27)",
      url: "23.%20Run%20Away%21%20%281997-1998-M27%29.mp3",
      number: 23,
    },
    {
      title: "24. Pokemon Curiousity (1997-1998-M28)",
      url: "24.%20Pokemon%20Curiousity%20%281997-1998-M28%29.mp3",
      number: 24,
    },
    {
      title: "25. Ash Argues with Misty (1997-1998-M29)",
      url: "25.%20Ash%20Argues%20with%20Misty%20%281997-1998-M29%29.mp3",
      number: 25,
    },
    {
      title: "26. Battle Begin! (1997-1998-M30)",
      url: "26.%20Battle%20Begin%21%20%281997-1998-M30%29.mp3",
      number: 26,
    },
    {
      title: "27. Legend (1997-1998-M31)",
      url: "27.%20Legend%20%281997-1998-M31%29.mp3",
      number: 27,
    },
    {
      title: "28. Peaceful Journeying (1997-1998-M31B)",
      url: "28.%20Peaceful%20Journeying%20%281997-1998-M31B%29.mp3",
      number: 28,
    },
    {
      title: "29. Commercial Bumper (1997-1998-M33A)",
      url: "29.%20Commercial%20Bumper%20%281997-1998-M33A%29.mp3",
      number: 29,
    },
    {
      title: "30. Commercial Bumper 2 (1997-1998-M34)",
      url: "30.%20Commercial%20Bumper%202%20%281997-1998-M34%29.mp3",
      number: 30,
    },
    {
      title: "31. Pokemon Chant (1997-1998-M38)",
      url: "31.%20Pokemon%20Chant%20%281997-1998-M38%29.mp3",
      number: 31,
    },
    {
      title: "32. The Moon Stone (1997-1998-M39)",
      url: "32.%20The%20Moon%20Stone%20%281997-1998-M39%29.mp3",
      number: 32,
    },
    {
      title: "33. Exploring the Town (1997-1998-M41)",
      url: "33.%20Exploring%20the%20Town%20%281997-1998-M41%29.mp3",
      number: 33,
    },
    {
      title: "34. Under the Moonlight (1997-1998-M42)",
      url: "34.%20Under%20the%20Moonlight%20%281997-1998-M42%29.mp3",
      number: 34,
    },
    {
      title: "35. Realization (1997-1998-M43)",
      url: "35.%20Realization%20%281997-1998-M43%29.mp3",
      number: 35,
    },
    {
      title: "36. Commercial Cue (1997-1998-M44)",
      url: "36.%20Commercial%20Cue%20%281997-1998-M44%29.mp3",
      number: 36,
    },
    {
      title: "37. Scenery (1997-1998-M45)",
      url: "37.%20Scenery%20%281997-1998-M45%29.mp3",
      number: 37,
    },
    {
      title: "38. To Be Continued (1997-1998-M46)",
      url: "38.%20To%20Be%20Continued%20%281997-1998-M46%29.mp3",
      number: 38,
    },
    {
      title: "39. Goodbye Friends (1997-1998-M47)",
      url: "39.%20Goodbye%20Friends%20%281997-1998-M47%29.mp3",
      number: 39,
    },
    {
      title: "40. Bittersweet Memories (1997-1998-M48)",
      url: "40.%20Bittersweet%20Memories%20%281997-1998-M48%29.mp3",
      number: 40,
    },
    {
      title: "41. Mysterious Legend (1997-1998-M49)",
      url: "41.%20Mysterious%20Legend%20%281997-1998-M49%29.mp3",
      number: 41,
    },
    {
      title: "42. Spooky Place (1997-1998-M50)",
      url: "42.%20Spooky%20Place%20%281997-1998-M50%29.mp3",
      number: 42,
    },
    {
      title: "43. Team Rocket Appears (1997-1998-M51)",
      url: "43.%20Team%20Rocket%20Appears%20%281997-1998-M51%29.mp3",
      number: 43,
    },
    {
      title: "44. Episode Titles (1997-1998-M52)",
      url: "44.%20Episode%20Titles%20%281997-1998-M52%29.mp3",
      number: 44,
    },
    {
      title: "45. Episode Titles 2 (1997-1998-M53)",
      url: "45.%20Episode%20Titles%202%20%281997-1998-M53%29.mp3",
      number: 45,
    },
    {
      title: "46. Episode Titles 3 (1997-1998-M54)",
      url: "46.%20Episode%20Titles%203%20%281997-1998-M54%29.mp3",
      number: 46,
    },
    {
      title: "47. I Got a Victory Badge! (1997-1998-M62)",
      url: "47.%20I%20Got%20a%20Victory%20Badge%21%20%281997-1998-M62%29.mp3",
      number: 47,
    },
    {
      title: "48. Psyduck and Slowpoke Interacting (1997-1998-M63)",
      url: "48.%20Psyduck%20and%20Slowpoke%20Interacting%20%281997-1998-M63%29.mp3",
      number: 48,
    },
    {
      title: "49. Exquisite Jazz (1997-1998-M64)",
      url: "49.%20Exquisite%20Jazz%20%281997-1998-M64%29.mp3",
      number: 49,
    },
    {
      title: "50. Psyduck, the Confused (1997-1998-M65A)",
      url: "50.%20Psyduck%2C%20the%20Confused%20%281997-1998-M65A%29.mp3",
      number: 50,
    },
    {
      title: "51. Observing Newfound Pokemon (1997-1998-M66)",
      url: "51.%20Observing%20Newfound%20Pokemon%20%281997-1998-M66%29.mp3",
      number: 51,
    },
    {
      title: "52. Loopy Chase (1997-1998-M67)",
      url: "52.%20Loopy%20Chase%20%281997-1998-M67%29.mp3",
      number: 52,
    },
    {
      title: "53. Pokemon League Opening Ceremonies (1997-1998-M68)",
      url: "53.%20Pokemon%20League%20Opening%20Ceremonies%20%281997-1998-M68%29.mp3",
      number: 53,
    },
    {
      title: "54. Extravagant Place (1997-1998-M69B)",
      url: "54.%20Extravagant%20Place%20%281997-1998-M69B%29.mp3",
      number: 54,
    },
    {
      title: "55. The Beach (1997-1998-M70)",
      url: "55.%20The%20Beach%20%281997-1998-M70%29.mp3",
      number: 55,
    },
    {
      title: "56. Oden (1997-1998-M71A)",
      url: "56.%20Oden%20%281997-1998-M71A%29.mp3",
      number: 56,
    },
    {
      title: "57. Oden 2 (1997-1998-M71B)",
      url: "57.%20Oden%202%20%281997-1998-M71B%29.mp3",
      number: 57,
    },
    {
      title: "58. Huge Pokemon Appears (1997-1998-M72)",
      url: "58.%20Huge%20Pokemon%20Appears%20%281997-1998-M72%29.mp3",
      number: 58,
    },
    {
      title: "59. Venusaur Appears (1997-1998-M72A)",
      url: "59.%20Venusaur%20Appears%20%281997-1998-M72A%29.mp3",
      number: 59,
    },
    {
      title: "60. Flashback Memories (1997-1998-M73)",
      url: "60.%20Flashback%20Memories%20%281997-1998-M73%29.mp3",
      number: 60,
    },
    {
      title: "61. Bridge Bike Gang (1997-1998-M74)",
      url: "61.%20Bridge%20Bike%20Gang%20%281997-1998-M74%29.mp3",
      number: 61,
    },
    {
      title: "62. A Brutal Pokemon Appears (1997-1998-M75)",
      url: "62.%20A%20Brutal%20Pokemon%20Appears%20%281997-1998-M75%29.mp3",
      number: 62,
    },
    {
      title: "63. A Brutal Pokemon Appears 2 (1997-1998-M75B)",
      url: "63.%20A%20Brutal%20Pokemon%20Appears%202%20%281997-1998-M75B%29.mp3",
      number: 63,
    },
    {
      title: "64. Masaki's Lighthouse (1997-1998-M76A)",
      url: "64.%20Masaki%27s%20Lighthouse%20%281997-1998-M76A%29.mp3",
      number: 64,
    },
    {
      title: "65. Playing with Togepi (1997-1998-M80)",
      url: "65.%20Playing%20with%20Togepi%20%281997-1998-M80%29.mp3",
      number: 65,
    },
  ],
};

const homeAlone: Album = {
  artist: "John Williams",
  name: "Home Alone Soundtrack",
  baseURI: "https://archive.org/download/home-alone-soundtrack/Home%20Alone/",
  tracks: [
    {
      title: "01 Somewhere In My Memory",
      url: "01%20Somewhere%20In%20My%20Memory.mp3",
      number: 1,
    },
    {
      title: "02 Star of Bethlehem (Orchestral Version)",
      url: "02%20Star%20of%20Bethlehem%20%28Orchestral%20Version%29.mp3",
      number: 2,
    },
    {
      title: "03 Home Alone (Main Theme)",
      url: "03%20Home%20Alone%20%28Main%20Theme%29.mp3",
      number: 3,
    },
    {
      title: "04 Go Pack Your Suitcase - Introducing Marley - In Good Hands",
      url: "04%20Go%20Pack%20Your%20Suitcase%20-%20Introducing%20Marley%20-%20In%20Good%20Hands.mp3",
      number: 4,
    },
    {
      title: "05 Banished To the Attick",
      url: "05%20Banished%20To%20the%20Attick.mp3",
      number: 5,
    },
    {
      title: "06 We Slept In - Hard Count",
      url: "06%20We%20Slept%20In%20-%20Hard%20Count.mp3",
      number: 6,
    },
    {
      title: "07 Making the Plane",
      url: "07%20Making%20the%20Plane.mp3",
      number: 7,
    },
    {
      title: "08 The Basement",
      url: "08%20The%20Basement.mp3",
      number: 8,
    },
    {
      title: "09 Target Practice - Sledding On the Stairs",
      url: "09%20Target%20Practice%20-%20Sledding%20On%20the%20Stairs.mp3",
      number: 9,
    },
    {
      title: "10 Lights On - Guess Who's Home - Paris Arrival",
      url: "10%20Lights%20On%20-%20Guess%20Who%27s%20Home%20-%20Paris%20Arrival.mp3",
      number: 10,
    },
    {
      title: "11 The Man of the House - Police Check",
      url: "11%20The%20Man%20of%20the%20House%20-%20Police%20Check.mp3",
      number: 11,
    },
    {
      title: "12 The Bookshelf",
      url: "12%20The%20Bookshelf.mp3",
      number: 12,
    },
    {
      title: "13 Phone Machine - Drug Store - Escape Across the Ice",
      url: "13%20Phone%20Machine%20-%20Drug%20Store%20-%20Escape%20Across%20the%20Ice.mp3",
      number: 13,
    },
    {
      title: "14 Follow That Kid!",
      url: "14%20Follow%20That%20Kid%21.mp3",
      number: 14,
    },
    {
      title: "15 Listening To Carson",
      url: "15%20Listening%20To%20Carson.mp3",
      number: 15,
    },
    {
      title: "16 Cleaning Clothes - Kitchen",
      url: "16%20Cleaning%20Clothes%20-%20Kitchen.mp3",
      number: 16,
    },
    {
      title: "17 Scammed By a Kindergartner",
      url: "17%20Scammed%20By%20a%20Kindergartner.mp3",
      number: 17,
    },
    {
      title: "18 Walking Home (Somewhere In My Memory)",
      url: "18%20Walking%20Home%20%28Somewhere%20In%20My%20Memory%29.mp3",
      number: 18,
    },
    {
      title: "19 O Holy Night",
      url: "19%20O%20Holy%20Night.mp3",
      number: 19,
    },
    {
      title: "20 Star of Bethlehem",
      url: "20%20Star%20of%20Bethlehem.mp3",
      number: 20,
    },
    {
      title: "21 Carol of the Bells",
      url: "21%20Carol%20of%20the%20Bells.mp3",
      number: 21,
    },
    {
      title: "22 Setting the Trap",
      url: "22%20Setting%20the%20Trap.mp3",
      number: 22,
    },
    {
      title: "23 The Attack Begins",
      url: "23%20The%20Attack%20Begins.mp3",
      number: 23,
    },
    {
      title: "24 Marv Enters the Basement - A Hot Hand - Sore Head",
      url: "24%20Marv%20Enters%20the%20Basement%20-%20A%20Hot%20Hand%20-%20Sore%20Head.mp3",
      number: 24,
    },
    {
      title: "25 Paint Cans",
      url: "25%20Paint%20Cans.mp3",
      number: 25,
    },
    {
      title: "26 Clothesline Trapeze - Marley To the Rescue",
      url: "26%20Clothesline%20Trapeze%20-%20Marley%20To%20the%20Rescue.mp3",
      number: 26,
    },
    {
      title: "27 The Next Morning - Mom Returns - Finale",
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
      title: "29 Walking Home (Without Chorus)",
      url: "29%20Walking%20Home%20%28Without%20Chorus%29.mp3",
      number: 29,
    },
    {
      title: "30 Clothesline Trapeze (Film Version Insert)",
      url: "30%20Clothesline%20Trapeze%20%28Film%20Version%20Insert%29.mp3",
      number: 30,
    },
    {
      title: "31 Jingle Bells",
      url: "31%20Jingle%20Bells.mp3",
      number: 31,
    },
    {
      title: "32 Christmas Carol Medley",
      url: "32%20Christmas%20Carol%20Medley.mp3",
      number: 32,
    },
    {
      title: "33 Finale (Alternate - O Holy Night)",
      url: "33%20Finale%20%28Alternate%20-%20O%20Holy%20Night%29.mp3",
      number: 33,
    },
    {
      title:
        "34 We Wish You a Merry Christmas - End Title (Somewhere In My Memory) [Original Soundtrack Version]",
      url: "34%20We%20Wish%20You%20a%20Merry%20Christmas%20-%20End%20Title%20%28Somewhere%20In%20My%20Memory%29%20%5BOriginal%20Soundtrack%20Version%5D.mp3",
      number: 34,
    },
  ],
};

const sonicAdventure2OST: Album = {
  artist: "TOKYOPOP",
  name: "Sonic Adventure 2 OST",
  baseURI:
    "https://archive.org/download/sonic-adventure-2-official-soundtrack/",
  tracks: [
    {
      title: "01 It Doesn't Matter ...theme of sonic",
      url: "01%20It%20Doesn%27t%20Matter%20...theme%20of%20sonic.mp3",
      number: 1,
    },
    {
      title: "02 event- Let's Make It!",
      url: "02%20event-%20Let%27s%20Make%20It%21.mp3",
      number: 2,
    },
    {
      title: "03 Escape From The City ...city escape",
      url: "03%20Escape%20From%20The%20City%20...city%20escape.mp3",
      number: 3,
    },
    {
      title: "04 Vengeance Is Mine ...radical highway",
      url: "04%20Vengeance%20Is%20Mine%20...radical%20highway.mp3",
      number: 4,
    },
    {
      title: "05 Lovely Gate 3 ...egg quarters",
      url: "05%20Lovely%20Gate%203%20...egg%20quarters.mp3",
      number: 5,
    },
    {
      title: "06 Unknown From M.E. ...theme of knuckles",
      url: "06%20Unknown%20From%20M.E.%20...theme%20of%20knuckles.mp3",
      number: 6,
    },
    {
      title: "07 This Way Out ...prison lane",
      url: "07%20This%20Way%20Out%20...prison%20lane.mp3",
      number: 7,
    },
    {
      title: "08 I'm a Spy ...security hall",
      url: "08%20I%27m%20a%20Spy%20...security%20hall.mp3",
      number: 8,
    },
    {
      title: "09 That's The Way I Like It ...metal harbor",
      url: "09%20That%27s%20The%20Way%20I%20Like%20It%20...metal%20harbor.mp3",
      number: 9,
    },
    {
      title: "10 Rhythm And Balance ...white jungle",
      url: "10%20Rhythm%20And%20Balance%20...white%20jungle.mp3",
      number: 10,
    },
    {
      title: "11 Won't Stop, Just Go! ...green forest",
      url: "11%20Won%27t%20Stop%2C%20Just%20Go%21%20...green%20forest.mp3",
      number: 11,
    },
    {
      title: "12 E.G.G.M.A.N. ...theme of dr. eggman",
      url: "12%20E.G.G.M.A.N.%20...theme%20of%20dr.%20eggman.mp3",
      number: 12,
    },
    {
      title: "13 Dive Into The Mellow ...aquatic mine",
      url: "13%20Dive%20Into%20The%20Mellow%20...aquatic%20mine.mp3",
      number: 13,
    },
    {
      title: "14 Rumbling HWY ...mission street",
      url: "14%20Rumbling%20HWY%20...mission%20street.mp3",
      number: 14,
    },
    {
      title: "15 Fly In The Freedom ...theme of rouge",
      url: "15%20Fly%20In%20The%20Freedom%20...theme%20of%20rouge.mp3",
      number: 15,
    },
    {
      title: "16 Advertise- SA2 ...in the groove",
      url: "16%20Advertise-%20SA2%20...in%20the%20groove.mp3",
      number: 16,
    },
    {
      title: "17 Space Trip Steps ...meteor herd",
      url: "17%20Space%20Trip%20Steps%20...meteor%20herd.mp3",
      number: 17,
    },
    {
      title: "18 Soarin' Over The Space ...cosmic wall",
      url: "18%20Soarin%27%20Over%20The%20Space%20...cosmic%20wall.mp3",
      number: 18,
    },
    {
      title: "19 Believe In Myself ...theme of tails",
      url: "19%20Believe%20In%20Myself%20...theme%20of%20tails.mp3",
      number: 19,
    },
    {
      title: "20 Highway In The Sky ...final rush",
      url: "20%20Highway%20In%20The%20Sky%20...final%20rush.mp3",
      number: 20,
    },
    {
      title: "21 Throw It All Away ...theme of shadow",
      url: "21%20Throw%20It%20All%20Away%20...theme%20of%20shadow.mp3",
      number: 21,
    },
    {
      title: "22 Deep Inside Of... ...cannon's core #3",
      url: "22%20Deep%20Inside%20Of...%20...cannon%27s%20core%20%233.mp3",
      number: 22,
    },
    {
      title: "23 Supporting Me ...biolizard",
      url: "23%20Supporting%20Me%20...biolizard.mp3",
      number: 23,
    },
    {
      title: "24 event- The Last Scene",
      url: "24%20event-%20The%20Last%20Scene.mp3",
      number: 24,
    },
    {
      title: "25 Live &amp; Learn ...main theme of SA2",
      url: "25%20Live%20%26%20Learn%20...main%20theme%20of%20SA2.mp3",
      number: 25,
    },
    {
      title:
        "26 Chao Race Extended Remix (Chao's Doki-Doki Banana Chips Run Mix)",
      url: "26%20Chao%20Race%20Extended%20Remix%20%28Chao%27s%20Doki-Doki%20Banana%20Chips%20Run%20Mix%29.mp3",
      number: 26,
    },
  ],
};
const ultraball: Album = {
  artist: "GameChops",
  name: "Ultraball",
  baseURI: "https://archive.org/download/ultraball/",
  tracks: [
    {
      title:
        "01 CG5 feat. GlitchxCity - Vast Poni Canyon (Pokémon Sun &amp; Moon)",
      url: "01%20CG5%20feat.%20GlitchxCity%20-%20Vast%20Poni%20Canyon%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 1,
    },
    {
      title: "02 Tokyo Elvis - Malie City Reimagined (Pokémon Sun &amp; Moon)",
      url: "02%20Tokyo%20Elvis%20-%20Malie%20City%20Reimagined%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 2,
    },
    {
      title: "03 Mykah - Mahalo Trail (Pokémon Sun &amp; Moon)",
      url: "03%20Mykah%20-%20Mahalo%20Trail%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 3,
    },
    {
      title: "04 Tetracase - Lake Verity (Pokémon Diamond &amp; Pearl)",
      url: "04%20Tetracase%20-%20Lake%20Verity%20%28Pok%C3%A9mon%20Diamond%20%26%20Pearl%29.mp3",
      number: 4,
    },
    {
      title: "05 VGR - Battle with Gladion (Pokémon Sun &amp; Moon)",
      url: "05%20VGR%20-%20Battle%20with%20Gladion%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 5,
    },
    {
      title: "06 RoboRob - Team Rocket Hideout (Pokémon Red &amp; Blue)",
      url: "06%20RoboRob%20-%20Team%20Rocket%20Hideout%20%28Pok%C3%A9mon%20Red%20%26%20Blue%29.mp3",
      number: 6,
    },
    {
      title: "07 QORA - Encounter with Gladion (Pokémon Sun &amp; Moon)",
      url: "07%20QORA%20-%20Encounter%20with%20Gladion%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 7,
    },
    {
      title: "08 James Landino - Lavender Town (Pokémon Red &amp; Blue)",
      url: "08%20James%20Landino%20-%20Lavender%20Town%20%28Pok%C3%A9mon%20Red%20%26%20Blue%29.mp3",
      number: 8,
    },
    {
      title:
        "09 Dj CUTMAN feat. Belthesar - Trapped in a Pokeball [Pokémon Trading Card Game]",
      url: "09%20Dj%20CUTMAN%20feat.%20Belthesar%20-%20Trapped%20in%20a%20Pokeball%20%5BPok%C3%A9mon%20Trading%20Card%20Game%5D.mp3",
      number: 9,
    },
    {
      title:
        "10 Mykah - Kanto Trainer Battle (Pokémon Heart Gold &amp; Soul Silver)",
      url: "10%20Mykah%20-%20Kanto%20Trainer%20Battle%20%28Pok%C3%A9mon%20Heart%20Gold%20%26%20Soul%20Silver%29.mp3",
      number: 10,
    },
    {
      title:
        "11 GlitchxCity feat. Dj CUTMAN - Hau'oli City (Pokémon Sun &amp; Moon)",
      url: "11%20GlitchxCity%20feat.%20Dj%20CUTMAN%20-%20Hau%27oli%20City%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 11,
    },
    {
      title:
        "12 Grimecraft feat. Wishlyst - Malie City at Night (Pokémon Sun &amp; Moon",
      url: "12%20Grimecraft%20feat.%20Wishlyst%20-%20Malie%20City%20at%20Night%20%28Pok%C3%A9mon%20Sun%20%26%20Moon.mp3",
      number: 12,
    },
    {
      title: "13 RoBKTA - Goldenrod Game Corner (Pokémon Gold &amp; Silver)",
      url: "13%20RoBKTA%20-%20Goldenrod%20Game%20Corner%20%28Pok%C3%A9mon%20Gold%20%26%20Silver%29.mp3",
      number: 13,
    },
    {
      title: "14 Ben Briggs feat. Voia - Azalea (Pokémon Gold &amp; Silver)",
      url: "14%20Ben%20Briggs%20feat.%20Voia%20-%20Azalea%20%28Pok%C3%A9mon%20Gold%20%26%20Silver%29.mp3",
      number: 14,
    },
    {
      title: "15 Curly - Route 1 (Pokémon Sun &amp; Moon)",
      url: "15%20Curly%20-%20Route%201%20%28Pok%C3%A9mon%20Sun%20%26%20Moon%29.mp3",
      number: 15,
    },
  ],
};
const smoothMcGroove2: Album = {
  artist: "GameChops",
  name: "Smooth McGroove Remixed 2",
  baseURI: "https://archive.org/download/smooth-mcgroove-remixed-2/",
  tracks: [
    {
      title: "01 A_Rival - Guile's Theme (Street Fighter 2)",
      url: "01%20A_Rival%20-%20Guile%27s%20Theme%20%28Street%20Fighter%202%29.mp3",
      number: 1,
    },
    {
      title: "02 Voia - Bonetrousle (Undertale)",
      url: "02%20Voia%20-%20Bonetrousle%20%28Undertale%29.mp3",
      number: 2,
    },
    {
      title: "03 James Landino - Vampire Killer (Castlevania 1)",
      url: "03%20James%20Landino%20-%20Vampire%20Killer%20%28Castlevania%201%29.mp3",
      number: 3,
    },
    {
      title: "04 dj-Jo - Dire Dire Docks (Super Mario 64)",
      url: "04%20dj-Jo%20-%20Dire%20Dire%20Docks%20%28Super%20Mario%2064%29.mp3",
      number: 4,
    },
    {
      title: "05 Dj CUTMAN - Might Fight Sans (Undertale)",
      url: "05%20Dj%20CUTMAN%20-%20Might%20Fight%20Sans%20%28Undertale%29.mp3",
      number: 5,
    },
    {
      title: "06 Grimecraft - Lavender Town (Pokemon Red and Blue)",
      url: "06%20Grimecraft%20-%20Lavender%20Town%20%28Pokemon%20Red%20and%20Blue%29.mp3",
      number: 6,
    },
    {
      title: "07 Chjolo - Abyss Watchers (Dark Souls 3)",
      url: "07%20Chjolo%20-%20Abyss%20Watchers%20%28Dark%20Souls%203%29.mp3",
      number: 7,
    },
    {
      title: "08 VGR - Overworld (Light World) [Zelda Link To The Past]",
      url: "08%20VGR%20-%20Overworld%20%28Light%20World%29%20%5BZelda%20Link%20To%20The%20Past%5D.mp3",
      number: 8,
    },
    {
      title: "09 Steven Silo - Rainbow Road (Smooth Mix) [Super Mario Kart]",
      url: "09%20Steven%20Silo%20-%20Rainbow%20Road%20%28Smooth%20Mix%29%20%5BSuper%20Mario%20Kart%5D.mp3",
      number: 9,
    },
    {
      title: "10 Ben Briggs - Onett (Earthbound)",
      url: "10%20Ben%20Briggs%20-%20Onett%20%28Earthbound%29.mp3",
      number: 10,
    },
    {
      title: "11 Joshua Morse - Chemical Plant Zone (Sonic 2)",
      url: "11%20Joshua%20Morse%20-%20Chemical%20Plant%20Zone%20%28Sonic%202%29.mp3",
      number: 11,
    },
    {
      title: "12 Ralfington - Pursuit ~ Cornered (Phoenix Wright)",
      url: "12%20Ralfington%20-%20Pursuit%20~%20Cornered%20%28Phoenix%20Wright%29.mp3",
      number: 12,
    },
    {
      title: "13 Ephixa - Dr Wily Stage 1 (Mega Man 2)",
      url: "13%20Ephixa%20-%20Dr%20Wily%20Stage%201%20%28Mega%20Man%202%29.mp3",
      number: 13,
    },
    {
      title: "14 Holder - Aquatic Ambience (Donkey Kong Country)",
      url: "14%20Holder%20-%20Aquatic%20Ambience%20%28Donkey%20Kong%20Country%29.mp3",
      number: 14,
    },
  ],
};
export const smoothMcGroove3: Album = {
  artist: "GameChops",
  name: "Smooth McGroove Remixed 3",
  baseURI: "https://archive.org/download/smooth-mcgroove-remixed-3/",
  tracks: [
    {
      title: "Smooth McGroove Remixed 3 - 01 A_Rival - Gusty Garden Galaxy",
      url: "Smooth%20McGroove%20Remixed%203%20-%2001%20A_Rival%20-%20Gusty%20Garden%20Galaxy.mp3",
      number: 1,
    },
    {
      title: "Smooth McGroove Remixed 3 - 02 Funk Fiction - Ken's Theme",
      url: "Smooth%20McGroove%20Remixed%203%20-%2002%20Funk%20Fiction%20-%20Ken%27s%20Theme.mp3",
      number: 2,
    },
    {
      title: "Smooth McGroove Remixed 3 - 03 Tee Lopes - Frappe Snowland",
      url: "Smooth%20McGroove%20Remixed%203%20-%2003%20Tee%20Lopes%20-%20Frappe%20Snowland.mp3",
      number: 3,
    },
    {
      title: "Smooth McGroove Remixed 3 - 04 Dj Cutman - Wii Shop",
      url: "Smooth%20McGroove%20Remixed%203%20-%2004%20Dj%20Cutman%20-%20Wii%20Shop.mp3",
      number: 4,
    },
    {
      title: "Smooth McGroove Remixed 3 - 05 Rymdkraft - Birabuto Kingdom",
      url: "Smooth%20McGroove%20Remixed%203%20-%2005%20Rymdkraft%20-%20Birabuto%20Kingdom.mp3",
      number: 5,
    },
    {
      title: "Smooth McGroove Remixed 3 - 06 Player2 - Mii Channel",
      url: "Smooth%20McGroove%20Remixed%203%20-%2006%20Player2%20-%20Mii%20Channel.mp3",
      number: 6,
    },
    {
      title: "Smooth McGroove Remixed 3 - 07 Kabuki - Ryu's Theme",
      url: "Smooth%20McGroove%20Remixed%203%20-%2007%20Kabuki%20-%20Ryu%27s%20Theme.mp3",
      number: 7,
    },
    {
      title: "Smooth McGroove Remixed 3 - 08 Arcien - Stickerbush Symphony",
      url: "Smooth%20McGroove%20Remixed%203%20-%2008%20Arcien%20-%20Stickerbush%20Symphony.mp3",
      number: 8,
    },
    {
      title: "Smooth McGroove Remixed 3 - 09 Grimecraft, CG5 - Outset Island",
      url: "Smooth%20McGroove%20Remixed%203%20-%2009%20Grimecraft%2C%20CG5%20-%20Outset%20Island.mp3",
      number: 9,
    },
    {
      title: "Smooth McGroove Remixed 3 - 10 GlitchXCity -  UN Owen Was Her",
      url: "Smooth%20McGroove%20Remixed%203%20-%2010%20GlitchXCity%20-%20%20UN%20Owen%20Was%20Her.mp3",
      number: 10,
    },
    {
      title: "Smooth McGroove Remixed 3 - 11 2ToneDisco - Issac's Theme",
      url: "Smooth%20McGroove%20Remixed%203%20-%2011%202ToneDisco%20-%20Issac%27s%20Theme.mp3",
      number: 11,
    },
    {
      title: "Smooth McGroove Remixed 3 - 12 Curly - Red Soil",
      url: "Smooth%20McGroove%20Remixed%203%20-%2012%20Curly%20-%20Red%20Soil.mp3",
      number: 12,
    },
    {
      title: "Smooth McGroove Remixed 3 - 13 Chjolo - A Bell is Tolling",
      url: "Smooth%20McGroove%20Remixed%203%20-%2013%20Chjolo%20-%20A%20Bell%20is%20Tolling.mp3",
      number: 13,
    },
    {
      title: "Smooth McGroove Remixed 3 - 14 Tokyo Elvis - Ice Cap Zone",
      url: "Smooth%20McGroove%20Remixed%203%20-%2014%20Tokyo%20Elvis%20-%20Ice%20Cap%20Zone.mp3",
      number: 14,
    },
    {
      title: "Smooth McGroove Remixed 3 - 15 Helynt, Dj Cutman - Wet Hands",
      url: "Smooth%20McGroove%20Remixed%203%20-%2015%20Helynt%2C%20Dj%20Cutman%20-%20Wet%20Hands.mp3",
      number: 15,
    },
    {
      title: "Smooth McGroove Remixed 3 - 16 Duzzled - Piranha Plant's Lullaby",
      url: "Smooth%20McGroove%20Remixed%203%20-%2016%20Duzzled%20-%20Piranha%20Plant%27s%20Lullaby.mp3",
      number: 16,
    },
  ],
};
const furi: Album = {
  artist: "Furi",
  name: "Furi OST",
  baseURI:
    "https://archive.org/download/furi_soundtrack/Furi%20by%20VA%20%282016%29%20%5BFLAC%2C%2024%20bit%5D/",
  tracks: [
    {
      title: "01. Carpenter Brut - Time to Wake Up",
      url: "01.%20Carpenter%20Brut%20-%20Time%20to%20Wake%20Up.mp3",
      number: 1,
    },
    {
      title: "02. Danger - Danger 6.24",
      url: "02.%20Danger%20-%20Danger%206.24.mp3",
      number: 2,
    },
    {
      title: "03. Carpenter Brut - Enraged",
      url: "03.%20Carpenter%20Brut%20-%20Enraged.mp3",
      number: 3,
    },
    {
      title: "04. Waveshaper - A Picture in Motion",
      url: "04.%20Waveshaper%20-%20A%20Picture%20in%20Motion.mp3",
      number: 4,
    },
    {
      title: "05. Waveshaper - Wisdom of Rage",
      url: "05.%20Waveshaper%20-%20Wisdom%20of%20Rage.mp3",
      number: 5,
    },
    {
      title: "06. Lorn - Unraveled",
      url: "06.%20Lorn%20-%20Unraveled.mp3",
      number: 6,
    },
    {
      title: "07. Lorn - Set Me Free",
      url: "07.%20Lorn%20-%20Set%20Me%20Free.mp3",
      number: 7,
    },
    {
      title: "08. Carpenter Brut - What We Fight For",
      url: "08.%20Carpenter%20Brut%20-%20What%20We%20Fight%20For.mp3",
      number: 8,
    },
    {
      title: "09. The Toxic Avenger - Make This Right",
      url: "09.%20The%20Toxic%20Avenger%20-%20Make%20This%20Right.mp3",
      number: 9,
    },
    {
      title: "10. The Toxic Avenger - Make This Right (Remix)",
      url: "10.%20The%20Toxic%20Avenger%20-%20Make%20This%20Right%20%28Remix%29.mp3",
      number: 10,
    },
    {
      title: "11. Scattle - Love and Madness",
      url: "11.%20Scattle%20-%20Love%20and%20Madness.mp3",
      number: 11,
    },
    {
      title: "12. Carpenter Brut - You're Mine",
      url: "12.%20Carpenter%20Brut%20-%20You%27re%20Mine.mp3",
      number: 12,
    },
    {
      title: "13. Kn1ght - A Big Day",
      url: "13.%20Kn1ght%20-%20A%20Big%20Day.mp3",
      number: 13,
    },
    {
      title: "14. Kn1ght - Something Memorable",
      url: "14.%20Kn1ght%20-%20Something%20Memorable.mp3",
      number: 14,
    },
    {
      title: "15. Waveshaper - A Monster",
      url: "15.%20Waveshaper%20-%20A%20Monster.mp3",
      number: 15,
    },
    {
      title: "16. Waveshaper - You Are the End",
      url: "16.%20Waveshaper%20-%20You%20Are%20the%20End.mp3",
      number: 16,
    },
    {
      title: "17. The Toxic Avenger - My Only Chance",
      url: "17.%20The%20Toxic%20Avenger%20-%20My%20Only%20Chance.mp3",
      number: 17,
    },
    {
      title: "18. Scattle - Shambles",
      url: "18.%20Scattle%20-%20Shambles.mp3",
      number: 18,
    },
    {
      title: "19. Danger - Danger 7.53",
      url: "19.%20Danger%20-%20Danger%207.53.mp3",
      number: 19,
    },
    {
      title: "20. Danger - Danger 8.02",
      url: "20.%20Danger%20-%20Danger%208.02.mp3",
      number: 20,
    },
    {
      title: "21. Danger - Danger 19.06",
      url: "21.%20Danger%20-%20Danger%2019.06.mp3",
      number: 21,
    },
    {
      title: "22. Danger - Danger 19.07",
      url: "22.%20Danger%20-%20Danger%2019.07.mp3",
      number: 22,
    },
  ],
};
const bossBeats: Album = {
  artist: "GameChops",
  name: "Boss Beats",
  baseURI: "https://archive.org/download/boss-beats/",
  tracks: [
    {
      title: "01 Time Stopper",
      url: "Boss%20Beats%2001%20Time%20Stopper.mp3",
      number: 1,
    },
    {
      title: "02 Robot Stunt Club",
      url: "Boss%20Beats%2002%20Robot%20Stunt%20Club.mp3",
      number: 2,
    },
    {
      title: "03 ABCDE 12345",
      url: "Boss%20Beats%2003%20ABCDE%2012345.mp3",
      number: 3,
    },
    {
      title: "04 Bubbleman",
      url: "Boss%20Beats%2004%20Bubbleman.mp3",
      number: 4,
    },
    {
      title: "05 Fiber Clone",
      url: "Boss%20Beats%2005%20Fiber%20Clone.mp3",
      number: 5,
    },
    {
      title: "06 The Inventor",
      url: "Boss%20Beats%2006%20The%20Inventor.mp3",
      number: 6,
    },
    {
      title: "07 We're The Robots",
      url: "Boss%20Beats%2007%20We%27re%20The%20Robots.mp3",
      number: 7,
    },
  ],
};

const donkeyKongCountryOST: Album = {
  artist: "Rare",
  name: "Donkey Kong Country OST",
  baseURI: "https://archive.org/download/DonkeyKongCountryOST/",
  tracks: [
    {
      title: "01-theme",
      url: "01-theme.mp3",
      number: 1,
    },
    {
      title: "02-simian-segue",
      url: "02-simian-segue.mp3",
      number: 2,
    },
    {
      title: "03-opening-fanfare",
      url: "03-opening-fanfare.mp3",
      number: 3,
    },
    {
      title: "04-dk-island-swing",
      url: "04-dk-island-swing.mp3",
      number: 4,
    },
    {
      title: "05-cranky-s-theme",
      url: "05-cranky-s-theme.mp3",
      number: 5,
    },
    {
      title: "06-cave-dweller-concert",
      url: "06-cave-dweller-concert.mp3",
      number: 6,
    },
    {
      title: "07-bonus-room-blitz",
      url: "07-bonus-room-blitz.mp3",
      number: 7,
    },
    {
      title: "08-aquatic-ambiance",
      url: "08-aquatic-ambiance.mp3",
      number: 8,
    },
    {
      title: "09-candy-s-love-song",
      url: "09-candy-s-love-song.mp3",
      number: 9,
    },
    {
      title: "10-bad-boss-boogie",
      url: "10-bad-boss-boogie.mp3",
      number: 10,
    },
    {
      title: "11-mine-cart-madness",
      url: "11-mine-cart-madness.mp3",
      number: 11,
    },
    {
      title: "12-life-in-the-mines",
      url: "12-life-in-the-mines.mp3",
      number: 12,
    },
    {
      title: "13-voices-of-the-temple",
      url: "13-voices-of-the-temple.mp3",
      number: 13,
    },
    {
      title: "14-forest-frenzy",
      url: "14-forest-frenzy.mp3",
      number: 14,
    },
    {
      title: "15-treetop-rock",
      url: "15-treetop-rock.mp3",
      number: 15,
    },
    {
      title: "16-funky-s-fugue",
      url: "16-funky-s-fugue.mp3",
      number: 16,
    },
    {
      title: "17-misty-menace",
      url: "17-misty-menace.mp3",
      number: 17,
    },
    {
      title: "18-northern-hemispheres",
      url: "18-northern-hemispheres.mp3",
      number: 18,
    },
    {
      title: "19-ice-cave-chant",
      url: "19-ice-cave-chant.mp3",
      number: 19,
    },
    {
      title: "20-fear-factory",
      url: "20-fear-factory.mp3",
      number: 20,
    },
    {
      title: "21-gang-plank-galleon",
      url: "21-gang-plank-galleon.mp3",
      number: 21,
    },
    {
      title: "22-k.-rool-s-cacophony",
      url: "22-k.-rool-s-cacophony.mp3",
      number: 22,
    },
    {
      title: "23-the-credits-concerto",
      url: "23-the-credits-concerto.mp3",
      number: 23,
    },
  ],
};

const mvcOST: Album = {
  artist: "Yuko Takehara, Masato Kouda",
  name: "Marvel Vs. Capcom: Clash Of Super Heroes OST",
  baseURI: "https://archive.org/download/mvc1ostflac/",
  tracks: [
    {
      title: "01. Opening",
      url: "01.%20Opening.mp3",
      number: 1,
    },
    {
      title: "02. Player Select",
      url: "02.%20Player%20Select.mp3",
      number: 2,
    },
    {
      title: "03. Vs.",
      url: "03.%20Vs..mp3",
      number: 3,
    },
    {
      title: "04. Theme of War Machine",
      url: "04.%20Theme%20of%20War%20Machine.mp3",
      number: 4,
    },
    {
      title: "05. Theme of Captain America",
      url: "05.%20Theme%20of%20Captain%20America.mp3",
      number: 5,
    },
    {
      title: "06.ThemeOfHulk",
      url: "06.ThemeOfHulk.mp3",
      number: 6,
    },
    {
      title: "07.HurryUp",
      url: "07.HurryUp.mp3",
      number: 7,
    },
    {
      title: "08.Win",
      url: "08.Win.mp3",
      number: 8,
    },
    {
      title: "09.ThemeOfWolverine",
      url: "09.ThemeOfWolverine.mp3",
      number: 9,
    },
    {
      title: "10.ThemeOfGambit",
      url: "10.ThemeOfGambit.mp3",
      number: 10,
    },
    {
      title: "11.ThemeOfSpider-man",
      url: "11.ThemeOfSpider-man.mp3",
      number: 11,
    },
    {
      title: "12.ThemeOfVenom",
      url: "12.ThemeOfVenom.mp3",
      number: 12,
    },
    {
      title: "13.HereComesANewChallenger",
      url: "13.HereComesANewChallenger.mp3",
      number: 13,
    },
    {
      title: "14.Ranking",
      url: "14.Ranking.mp3",
      number: 14,
    },
    {
      title: "15.VariableCross",
      url: "15.VariableCross.mp3",
      number: 15,
    },
    {
      title: "16.ThemeOfRyu",
      url: "16.ThemeOfRyu.mp3",
      number: 16,
    },
    {
      title: "17.ThemeOfCaptainCommando",
      url: "17.ThemeOfCaptainCommando.mp3",
      number: 17,
    },
    {
      title: "18.ThemeOfChun-li",
      url: "18.ThemeOfChun-li.mp3",
      number: 18,
    },
    {
      title: "19.ThemeOfJin",
      url: "19.ThemeOfJin.mp3",
      number: 19,
    },
    {
      title: "20.ThemeOfZangief",
      url: "20.ThemeOfZangief.mp3",
      number: 20,
    },
    {
      title: "21.Continue",
      url: "21.Continue.mp3",
      number: 21,
    },
    {
      title: "22.GameOver",
      url: "22.GameOver.mp3",
      number: 22,
    },
    {
      title: "23.ThemeOfStriderHiryu",
      url: "23.ThemeOfStriderHiryu.mp3",
      number: 23,
    },
    {
      title: "24.ThemeOfMorrigan",
      url: "24.ThemeOfMorrigan.mp3",
      number: 24,
    },
    {
      title: "25.ThemeOfRockman",
      url: "25.ThemeOfRockman.mp3",
      number: 25,
    },
    {
      title: "26.ThemeOfRoll",
      url: "26.ThemeOfRoll.mp3",
      number: 26,
    },
    {
      title: "27.ThemeOfHiddenCharacter",
      url: "27.ThemeOfHiddenCharacter.mp3",
      number: 27,
    },
    {
      title: "28.BossIntroduction",
      url: "28.BossIntroduction.mp3",
      number: 28,
    },
    {
      title: "29.ThemeOfOnslaughtI",
      url: "29.ThemeOfOnslaughtI.mp3",
      number: 29,
    },
    {
      title: "30.ThemeOfOnslaughtIi",
      url: "30.ThemeOfOnslaughtIi.mp3",
      number: 30,
    },
    {
      title: "31.Ending-afterTheBattle-",
      url: "31.Ending-afterTheBattle-.mp3",
      number: 31,
    },
    {
      title: "32.Ending-peace-",
      url: "32.Ending-peace-.mp3",
      number: 32,
    },
    {
      title: "33.Ending-tension-",
      url: "33.Ending-tension-.mp3",
      number: 33,
    },
    {
      title: "34.Ending-grief-",
      url: "34.Ending-grief-.mp3",
      number: 34,
    },
    {
      title: "35.Ending-gambit",
      url: "35.Ending-gambit.mp3",
      number: 35,
    },
    {
      title: "36.Ending-venom-",
      url: "36.Ending-venom-.mp3",
      number: 36,
    },
    {
      title: "37.Ending-roll1-",
      url: "37.Ending-roll1-.mp3",
      number: 37,
    },
    {
      title: "38.Ending-roll2-",
      url: "38.Ending-roll2-.mp3",
      number: 38,
    },
    {
      title: "39.Ending-ryu-",
      url: "39.Ending-ryu-.mp3",
      number: 39,
    },
    {
      title: "40.Ending-striderHiryu-",
      url: "40.Ending-striderHiryu-.mp3",
      number: 40,
    },
    {
      title: "41.Ending-morrigan-",
      url: "41.Ending-morrigan-.mp3",
      number: 41,
    },
    {
      title: "42.Ending-rockman1-",
      url: "42.Ending-rockman1-.mp3",
      number: 42,
    },
    {
      title: "43.Ending-rockman2-",
      url: "43.Ending-rockman2-.mp3",
      number: 43,
    },
    {
      title: "44.StaffRoll",
      url: "44.StaffRoll.mp3",
      number: 44,
    },
  ],
};

const hpPhilosophersStone: Album = {
  artist: "J. K. Rowling, Narrated by Jim Dale ",
  name: "Harry Potter and the Philosopher's Stone",
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
  ],
  audioBooks: [
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
