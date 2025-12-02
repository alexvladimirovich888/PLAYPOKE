
import { Article, GalleryCollection, VideoContent } from './types';

// Fallback image for when external links fail
export const FALLBACK_IMAGE = "https://placehold.co/600x900/18181b/dc2626?text=Image+Unavailable";

// --- NEW IMAGE COLLECTIONS BASED ON USER PROVIDED LINKS ---

export const DIVINE_IMAGES = [
  { 
    id: 1, 
    url: 'https://img2.joyreactor.cc/pics/post/Hatterene-Pokedex-Pokemon-Characters-5604321.jpeg', 
    caption: 'Hatterene exudes an aura of silence and overwhelming beauty.' 
  },
  { 
    id: 2, 
    url: 'https://i.pinimg.com/736x/8c/79/cb/8c79cbbf23d34115029c02e06ba6d175.jpg', 
    caption: 'A vision of elegance in a stunning, high-fashion ensemble.' 
  },
  { 
    id: 3, 
    url: 'https://i.pinimg.com/474x/77/f7/d5/77f7d5079ee43702547155e6b59269f4.jpg', 
    caption: 'Soft curves and pastel tones create a dreamlike allure.' 
  },
  { 
    id: 4, 
    url: 'https://i.pinimg.com/736x/c2/84/47/c28447b7514bdff29bfac0f20fb54e70.jpg', 
    caption: 'Graceful and poised, a true masterpiece of character design.' 
  }
];

export const TRAINER_IMAGES = [
  { 
    id: 5, 
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da4d1635-7151-47ec-a7ec-1b6ecdce68bf/ddribbj-91b80217-4bd2-4401-a0b9-09142a66f068.jpg/v1/fill/w_703,h_1137,q_70,strp/pokemon___team_magma_admin_courtney_by_vivivoodeux_ddribbj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQwMCIsInBhdGgiOiIvZi9kYTRkMTYzNS03MTUxLTQ3ZWMtYTdlYy0xYjZlY2RjZTY4YmYvZGRyaWJiai05MWI4MDIxNy00YmQyLTQ0MDEtYTBiOS0wOTE0MmE2NmYwNjguanBnIiwid2lkdGgiOiI8PTg2NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EuCntS6uilIPA0-OMqJnnNX-urdX4iPmGdy_6b4Q4eQ', 
    caption: 'Team Magma Admin Courtney brings the heat with her stoic gaze.' 
  },
  { 
    id: 6, 
    url: 'http://img10.reactor.cc/pics/post/full/Pokémon-фэндомы-rurina-%28pokemon%29-Pokemon-trainers-5660119.jpeg', 
    caption: 'Nessa (Rurina) commands the tides with effortless confidence.' 
  },
  { 
    id: 7, 
    url: 'https://static.zerochan.net/Pokémon.full.4173805.jpg', 
    caption: 'A stunning duo showcasing the bond between trainer and power.' 
  },
  { 
    id: 8, 
    url: 'https://static.wikia.nocookie.net/recast-and-roleswap/images/f/f8/94789079_p0_master1200.jpg/revision/latest?cb=20230225231457', 
    caption: 'Playful energy and vibrant colors define this trainer style.' 
  }
];

export const SHADOW_IMAGES = [
  { 
    id: 9, 
    url: 'https://i.pinimg.com/736x/e0/a9/e3/e0a9e3b45885f499e06c4aca35b8cfa6.jpg', 
    caption: 'A dark, brooding aesthetic for those who prefer the shadows.' 
  },
  { 
    id: 10, 
    url: 'https://i.pinimg.com/originals/86/b5/57/86b557e70536dd9d5628a0bee28377c9.jpg', 
    caption: 'Mysterious and captivating, hiding secrets behind a smile.' 
  },
  { 
    id: 11, 
    url: 'https://masterpiecer-images.s3.yandex.net/526b24892ef111ee9b143a06614cf266:upscaled', 
    caption: 'Detailed artistry bringing a darker fantasy to life.' 
  },
  { 
    id: 12, 
    url: 'https://sp.eosai.chat/storage/v1/object/public/bot-avatars/ce907b26-6276-41d3-ac44-6ea04a5bb052.jpg', 
    caption: 'A portrait of intense allure and sophisticated charm.' 
  }
];

export const EXOTIC_IMAGES = [
  { 
    id: 13, 
    url: 'https://img10.joyreactor.cc/pics/post/full/Pokémon-Ero-Pokémon-фэндомы-6275180.jpeg', 
    caption: 'The cover star: A breathtaking blend of power and beauty.' 
  },
  { 
    id: 14, 
    url: 'https://img2.rule34.us/images/8c/17/8c17e9a587f555b3e226d5fc47590adf.jpeg', 
    caption: 'Wild, untamed, and impossible to look away from.' 
  },
  { 
    id: 15, 
    url: 'https://furrycdn.org/img/2022/3/5/147620/large.jpg', 
    caption: 'Embracing the wild side with stunning detail.' 
  },
  { 
    id: 16, 
    url: 'https://w.wallhaven.cc/full/zm/wallhaven-zm3xmg.jpg', 
    caption: 'Atmospheric and deep, a scene that tells a thousand words.' 
  },
  {
     id: 17,
     url: 'https://i.pinimg.com/736x/8f/a2/eb/8fa2eb9c154975f1d9fab3b07dfaf0d9.jpg',
     caption: 'A classic pose reinterpreted with modern glamour.'
  },
  {
      id: 18,
      url: 'https://yandex-images.clstorage.net/n49U2sp48/21d9dbj0IhH/RnY14HK3zCeYZYQ9oHXAJ3-TreiYfuR5nqFOpjpAWhC_Xi3kFKAWtp46LaDycYSJA_Di1E0DqwnltYnvdQFYVsJgMmfzs8w22TdWurf0RCHtUrg_mKykOdtmHKg0zQEc8pSgbxju2HONrfh0ojYWGhps8JMID_KdsakIfiGZSQ6Oped9NnAJptVkS-tncM9y-9fi5NA5v7mUIBXheE7C2DWaZ6CcLZpzTOJ3OGRjk5Ef5qQVwAb83fctzrJj3slBQmFt_jtxzOATq4KiJb8IdjRRreVUtTU51GYfbDOMyp53FOGmU-XYvsSmOP-trlOfH2Ng1UWEupt9YA2-JZCJAgrgY787NEahEWxNrSj2SrV9nmSokfFzv1bunqw2AcXWNRKlL9chE3DHJfJ-7e8WldlooNeJgPUVsyHC_SuZywPM4q2_-zNGJNNtiGPpOYn2PNdmKBVwv36XKtWrs8UFWXdaJi2U71B4TuW0fGqlEFWRamJWTk0xXTrnhP6jnweGySwoe_ixSWMSYcnnaP0KtrLZKmNV-H50mWyVprVIxRY5H-rh2-KR_MOmPTUiYZFfni_hXoaO-xk6bUK44peGToAk7_M0-Ijq0S2IKKNxCPn4mqokHX16N9yp1uw_Rk2ZPhwnJRGnmv4P6Di3Ji0c3ZMrYt2KTf-Z9KhG9yBXyQkKIu52_3IE5JMqRS-qOk-xvdOla1A5vLybLVAtsACH3vjZ6GPULB5xiOWzta9pEBMTJikaTYh22vIji_hlE4GHjuTjfrY5TWcTrYOmZ3eC8XqaLegfOzZw1CDR4b0JAZr3EuBmk6FRN8fo-zTnrpvf3mdo0s5O_pH8p4z2I9bLCwghLr3w_o3rU-rCZSf9xXYw2uzgWbl6OxOlVq82w8geuV5kp5usVr2JqP2wLGSXHJ6nbN4KTb4bu-FOPiKeAIYCamq48D_GplUkQmWoMEc_N9Om61T0dfBT5dMp8M',
      caption: 'A complex, vibrant composition of color and form.'
  }
];

export const GALLERIES: GalleryCollection[] = [
  { title: 'Divine & Mythical', slug: 'divine', description: 'Ethereal beauty beyond the mortal realm.', images: DIVINE_IMAGES },
  { title: 'Trainers & Vixens', slug: 'trainers', description: 'The Queens of the Battle Arena.', images: TRAINER_IMAGES },
  { title: 'Shadow & Mystery', slug: 'shadow', description: 'What hides in the darkness is often the most tempting.', images: SHADOW_IMAGES },
  { title: 'Exotic & Wild', slug: 'exotic', description: 'Untamed power and raw aesthetic appeal.', images: EXOTIC_IMAGES },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'The Art of the Gijinka: A Visual Revolution',
    subtitle: 'From pixel sprites to high-fashion masterpieces.',
    author: 'Professor Juniper',
    date: 'October 14, 2023',
    imageUrl: DIVINE_IMAGES[0].url,
    content: [
      "The transformation of pocket monsters into human-like forms—Gijinka—has captivated artists globally. It is more than just anthropomorphism; it is a complete re-imagining of design philosophy.",
      "Take Hatterene, for example. In her natural form, she is mysterious. In her Gijinka form, represented in our latest gallery, she becomes a symbol of silent, overpowering elegance. The flow of hair, the posture, the gaze—everything is calculated.",
      "Our featured artists this month push the boundaries of this genre, blending traditional anime aesthetics with high-concept fashion photography."
    ]
  },
  {
    id: 2,
    title: 'Heat Wave: Why Fire Types Rule the Runway',
    subtitle: 'Team Magma\'s Courtney tells all.',
    author: 'Maxie',
    date: 'November 02, 2023',
    imageUrl: TRAINER_IMAGES[0].url,
    content: [
      "Courtney has always been known for her stoic demeanor, but behind that cold gaze lies a burning passion for style. In this exclusive spread, the Team Magma Admin shows us a different side.",
      "\"Fire is not just about destruction,\" she whispers, adjusting her hood. \"It is about presence. When you walk into a room, you should consume the attention like a flame consumes oxygen.\"",
      "From her signature red hues to the sharp angles of her uniform, Courtney defines the modern villain-chic aesthetic that is taking the underground fashion world by storm."
    ]
  },
  {
    id: 3,
    title: 'Water & Ice: The Coolest Trends for Winter',
    subtitle: 'Nessa brings the tide in.',
    author: 'Sonia',
    date: 'December 10, 2023',
    imageUrl: TRAINER_IMAGES[1].url,
    content: [
      "Gym Leader Nessa is no stranger to the spotlight. As both a powerful trainer and a professional model, she bridges the gap between the stadium and the studio.",
      "This season, it is all about fluidity. \"Water adapts,\" Nessa explains. \"It fits any container. Fashion is the same. You have to flow with the trends but maintain your own crushing pressure.\"",
      "See her exclusive photoshoot in our Trainers & Vixens gallery, where she proves that water types can be just as hot as their fire counterparts."
    ]
  }
];

export const VIDEOS: VideoContent[] = [
  { id: 1, title: 'Pokemon Cosplay Music Video', embedUrl: 'https://www.youtube.com/embed/fJ9rUzIMcZQ' },
  { id: 2, title: 'Poke-Trap Music Remix', embedUrl: 'https://www.youtube.com/embed/D9DkciMTsTk' },
  { id: 3, title: 'Misty Cosplay & Water Types', embedUrl: 'https://www.youtube.com/embed/Z1835gGaz18' },
  { id: 4, title: 'Pikachu Dance Performance', embedUrl: 'https://www.youtube.com/embed/1p2q3h-8-48' },
];
