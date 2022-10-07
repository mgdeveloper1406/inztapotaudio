import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"The Crock Pot Episode",
            artist: "Instant Pot Tips",
            cover: "https://m.media-amazon.com/images/I/71WB4VhGY-L._AC_SS450_.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://stitcher2.acast.com/livestitches/ffedeba51c2c161bc0ff35d17f2ae365.mp3?aid=0b88f20e-3dd6-4efd-aa4e-6ae0667e2ade&chid=65728665-4cff-429d-b336-1e34548b49c0&ci=xkXTvh2BJMJ2UmXv20edofMoXKlmiNSEZcKqdlPhkCrIBw0C3EMLQQ%3D%3D&pf=embed&sv=sphinx%401.114.0&uid=73c5f04a9f500744495b5e317ec513c9&Expires=1661886973638&Key-Pair-Id=K38CTQXUSD0VVB&Signature=kz-WDhvF~eO9TuevoepAOG7yCOI0gKcQLdSf26HhvDwCewSFeX~qAiaRe6VGmTNojjivxDRobtaok5NkFulhbkdnh7wT-cq4rADFUsefNBb39aEBMYCWwyc-NiMz1UUKPPGxuJk1hw9pYU2PCElXN2bF-d-oaTW0aZBU3yR3yr7e1rR9O31usFky8gVoQXF-7KJh-24RlAh45Ro52xMCEFZW~rBt38ewv9op1l-l7LsUkAbn5Rgs-DgpflSQ-BZzaj3qid8IioN0xZl0hcPShDzSfrXp8ax-tqhGUEW9ckl4GoxlrGqUYRIz9pgjJC6XwnE1s6vzkHYy99lLB4mtIg__",
            active: true,       
         },
        {   
            name:"Crock Pot Utilities",
            artist: "Instant Pot Tips",
            cover: "https://m.media-amazon.com/images/I/71WB4VhGY-L._AC_SS450_.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://traffic.libsyn.com/secure/force-cdn/highwinds/kitchencounterpodcast/090_TKC_Instant_Pot.mp3",
            active: false,
        },
        {
            name:"How to Put a Crock Pot to Work in your Homestead Kitchen",
            artist: "Instant Pot Tips",
            cover: "https://m.media-amazon.com/images/I/71WB4VhGY-L._AC_SS450_.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://www.buzzsprout.com/469465/4051100-129-how-to-put-a-instant-pot-to-work-in-your-homestead-kitchen.mp3?_=2",
            active: false,
        },
        {
            name:"In an Crock (Pot) | Bruce Weinstein plus Instant Pot Red Beans and Rice",
            artist: "Instant Pot Tips",
            cover: "https://m.media-amazon.com/images/I/71WB4VhGY-L._AC_SS450_.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://traffic.libsyn.com/secure/force-cdn/highwinds/smidgen/S1E4_Smidgen.mp3?stats-code=RedStickSpice",
            active: false,
        },
        {
            name:"Crock Pot 101",
            artist: "Instant Pot Tips",
            cover: "https://m.media-amazon.com/images/I/71WB4VhGY-L._AC_SS450_.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://traffic.libsyn.com/secure/plantpoweredpodcast/Instant_Pot_101_Mixdown.mp3?dest-id=801189",
            active: false,
        
        },
    ];
}

export default chillHop;


