import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

const json_of_progrmmmatic_data = [
  {
      "artist name": "AKMU",
      "title": "AKMU Albums",
      "descriptionHtml": "<p>AKMU, a sibling duo known for their unique blend of folk, pop, and acoustic music, has made a significant impact on the K-pop scene. Their popular albums, such as <strong>PLAY</strong> and <strong>WINTER</strong>, showcase their ability to craft heartfelt and whimsical melodies that resonate with a wide audience.</p>\n\n<p>Their songs, like the hit single <em>200%</em>, have been praised for their lyrical depth and originality, setting them apart in the industry. AKMU's influence is evident as they continuously challenge the boundaries of Korean pop music, earning a devoted fanbase worldwide.</p>",
      "ruleSet": "akmu",
      "description_bottom": "AKMU, also known as Akdong Musician, is a South Korean sibling duo consisting of Lee Chan-hyuk and Lee Su-hyun. They first gained widespread recognition after winning the second season of the reality competition show 'K-pop Star' in 2012. Known for their unique blend of folk, pop, and acoustic sounds, AKMU has carved a niche for themselves in the K-pop industry with their distinct musical style and heartfelt lyrics. Their discography is marked by a series of successful albums and singles that have resonated with fans both in South Korea and internationally.\n\nThe duo debuted under YG Entertainment with their first studio album, 'Play,' released in April 2014. The album was a commercial success and well-received by critics, featuring hit tracks such as '200%' and 'Melted.' Their second studio album, 'Winter,' released in January 2017, continued to showcase their musical versatility and lyrical depth. 'Dinosaur,' a single released in 2017, marked the duo's first foray into electronic dance music, further expanding their artistic range. In September 2019, AKMU released their third studio album, 'Sailing,' which included the popular track 'How Can I Love the Heartbreak, You're the One I Love.' Their most recent work, the 2021 album 'Next Episode,' features collaborations with various artists and was praised for its innovative concept and diverse sound.\n\nAKMU's impact on the K-pop scene is significant, as they have consistently pushed the boundaries of the genre with their innovative approach to music creation. Their ability to blend lyrical storytelling with diverse musical influences has earned them a dedicated fan base and critical acclaim. Their songs often tackle themes of love, youth, and self-discovery, resonating with listeners of all ages. Despite the rapidly changing trends in the K-pop industry, AKMU has maintained a consistent presence, proving their adaptability and artistic integrity. With their refreshing sound and relatable lyrics, AKMU continues to influence the K-pop landscape and inspire a new generation of artists.",
      "seo_title": "Buy AKMU Albums Online",
      "seo_description": "Discover and purchase AKMU albums online for the best prices. Explore their unique sound and enjoy fast shipping. Shop now and add AKMU's music to your collection today!"
  },
  {
      "artist name": "ARTMS",
      "title": "ARTMS Albums",
      "descriptionHtml": "<p>ARTMS is a renowned Kpop artist known for their unique blend of pop and electronic music, creating a sound that resonates with a wide audience. Their popular albums, such as <strong>Stellar Voyage</strong> and <strong>Celestial Echoes</strong>, showcase a diverse range of tracks, with standout songs like <em>Galactic Dream</em> and <em>Cosmic Dance</em>.</p>\n\n<p>The impact of ARTMS's albums on the Kpop music scene is significant, as they have continually pushed the boundaries of genre conventions. Their innovative approach to music production and captivating visuals have inspired both fans and fellow artists, cementing their place in the global Kpop industry.</p>",
      "ruleSet": "artms",
      "description_bottom": "As of my last update, ARTMS is a relatively new name in the K-pop scene, and it is an intriguing project associated with the previously established girl group LOONA. ARTMS is not a traditional K-pop group but rather a project unit that focuses on promoting individual members of LOONA and their unique talents and styles. The members involved in ARTMS include Kim Lip, JinSoul, and Choerry, all of whom were originally part of LOONA, which debuted in 2018 under Blockberry Creative. This trio has been active in various subunit activities within LOONA, known for their distinct musical color and strong visual performances.\n\nARTMS’s music, much like LOONA’s, tends to blend various styles, showcasing K-pop’s diverse range. While the discography under the ARTMS name may not be vast, it emphasizes the individual strengths of its members. Their music often combines elements of pop, electronic, and dance, creating a dynamic and engaging sound that appeals to both domestic and international audiences. The releases under ARTMS have been well-received, appreciated for their catchy hooks and polished production, though tracking specific reception details requires looking at individual projects the members are part of.\n\nThe impact of ARTMS and its members on the K-pop scene is multifaceted. They carry forward the legacy of LOONA, known for its unique pre-debut project and concept-heavy approach, which captured a significant following worldwide. ARTMS contributes to the evolving narrative of K-pop, where individuality within group dynamics is increasingly celebrated. By highlighting the distinct artistry of Kim Lip, JinSoul, and Choerry, ARTMS enriches the landscape of K-pop, inspiring both fans and fellow artists with their innovative approach to music and performance. As they continue to develop their artistic identities, ARTMS stands as a testament to the versatility and global appeal of K-pop.",
      "seo_title": "Official ARTMS Albums online",
      "seo_description": "Explore and listen to official ARTMS albums online. Discover their latest music, hit singles, and timeless tracks. Stay updated with ARTMS and enjoy their diverse musical journey."
  },
  {
      "artist name": "Astro",
      "title": "Astro Albums",
      "descriptionHtml": "<p>Astro, a South Korean boy band formed by Fantagio, has made significant waves in the K-pop industry with their vibrant and youthful image. Their music primarily falls under the genres of pop and dance, often featuring catchy melodies and dynamic choreography.</p>\n\n<p>Popular albums like <strong>All Light</strong> and <strong>Gateway</strong> showcase their versatility, with tracks such as <em>All Night</em> and <em>Knock</em> resonating well with audiences. Astro's albums have contributed to the evolving landscape of K-pop by blending traditional elements with innovative sounds, further solidifying their place in the global music scene.</p>",
      "ruleSet": "astro",
      "description_bottom": "Astro is a South Korean boy band formed by Fantagio, debuting in 2016. The group consists of six members: MJ, JinJin, Cha Eun-woo, Moonbin, Rocky, and Sanha. Known for their vibrant and youthful image, Astro quickly gained popularity with their catchy tunes and energetic performances. Their music primarily falls within the pop genre, often infused with elements of dance-pop and electropop, showcasing upbeat and refreshing melodies that resonate well with their younger audience.\n\nAstro made their debut on February 23, 2016, with the release of their first extended play (EP) titled 'Spring Up.' The album, featuring the lead single 'Hide & Seek,' was well-received and charted at number six on the Billboard World Albums Chart. Following this, they released several successful EPs, including 'Summer Vibes' in July 2016 and 'Autumn Story' in November 2016, each further cementing their position in the Kpop industry. Their first full-length album, 'All Light,' was released in January 2019 and topped the Gaon Album Chart, showcasing their growing influence.\n\nAstro's impact on the Kpop scene is significant, as they have successfully carved out a niche with their 'bright and cheerful' concept, which provides a refreshing contrast to the often intense and dramatic themes prevalent in Kpop. Their music and performances have not only garnered a strong domestic fanbase but have also attracted international attention, contributing to the global spread of Kpop. Each member brings unique talents, from Cha Eun-woo's acting and visual appeal to JinJin's and Rocky's musical compositions, enhancing the group's versatility and appeal. Their diverse skills, along with their harmonious group dynamic, have helped Astro maintain a steady presence in the highly competitive Kpop industry.",
      "seo_title": "Astro Albums | Buy Online Worldwide Delivery",
      "seo_description": "Shop Astro Albums with worldwide delivery. Discover a wide selection of albums from your favorite artists, available online for purchase. Get yours today!"
  },
  {
      "artist name": "ATBO",
      "title": "ATBO Albums",
      "descriptionHtml": "<p>ATBO, a rising force in the K-pop scene, is known for their dynamic and versatile musical style, blending elements of pop, hip-hop, and R&B. Their popular albums, such as <strong>‘The Beginning: Opening Your Eyes’</strong> and <strong>‘The Beginning: Take Off’</strong>, showcase their ability to craft addictive melodies and powerful performances.</p>\n\n<p>These albums have left a significant impact on the K-pop industry, introducing fresh sounds and innovative concepts. With tracks like <em>‘Monochrome (Color)’</em> and <em>‘Graffiti’</em>, ATBO continues to capture the attention of a global audience, solidifying their place in the ever-evolving world of K-pop.</p>",
      "ruleSet": "atbo",
      "description_bottom": "ATBO, short for 'At the Beginning of Originality,' is a rising South Korean boy group formed through the survival show 'The Origin – A, B, Or What?' and managed by IST Entertainment. The group officially debuted on July 27, 2022, with their first mini-album 'The Beginning: 開化 (Kha),' marking a significant entry into the competitive world of K-pop. The debut album featured a mix of genres, predominantly focusing on pop and dance tracks with energetic beats, reflecting the group's youthful and dynamic spirit. The title track, 'Monochrome (Color),' was well-received for its catchy hook and impressive choreography, showcasing the members' skills and potential as performers.\n\nATBO's lineup consists of seven talented members: Oh Jun-seok, Ryu Jun-min, Bae Hyun-jun, Seok Rak-won, Jeong Seung-hwan, Kim Yeon-kyu, and Won Bin. Each member brings a unique set of talents, from powerful vocals to sharp dance moves, contributing to the group's overall chemistry and appeal. Their diverse talents and teamwork have quickly garnered a loyal fanbase both domestically and internationally, highlighting their potential to make a significant impact in the K-pop industry. The group's interaction with fans and active presence on social media platforms have also helped in building a strong connection with their audience.\n\nSince their debut, ATBO has been recognized as one of the promising rookie groups to watch, with their music and performances resonating well with fans of high-energy K-pop tracks. Their ability to blend different musical styles while maintaining a cohesive group identity has set them apart in the crowded K-pop scene. As they continue to grow and release new music, ATBO is expected to further establish their presence and leave a lasting mark on the industry, contributing to the Hallyu wave that continues to spread across the globe.",
      "seo_title": "Buy ATBO Albums Online at Best Prices",
      "seo_description": "Discover the best prices on ATBO albums online. Shop now for a wide selection and enjoy unbeatable deals on your favorite music. Don't miss out on these amazing offers!"
  },
  {
      "artist name": "B1A4",
      "title": "B1A4 Albums",
      "descriptionHtml": "<p>B1A4, known for their unique blend of pop and electronic elements, has made a significant impact on the K-pop scene with their catchy melodies and heartfelt lyrics. Some of their popular albums include <strong>Ignition</strong> and <strong>Good Timing</strong>, which showcase their evolving sound and lyrical depth.</p>\n\n<p>Their music, often characterized by its uplifting and relatable themes, has resonated with fans worldwide, establishing them as a staple in the industry. Hits like <em>Baby Good Night</em> and <em>A Lie</em> have further solidified their influence, influencing a new wave of artists in the genre.</p>",
      "ruleSet": "b1a4",
      "description_bottom": "B1A4 is a South Korean boy group formed by WM Entertainment, debuting on April 23, 2011, with their first extended play (EP), 'Let's Fly.' The album was well-received, with the lead single 'OK' showing off their fresh and youthful image and earning them a solid fanbase. Their second EP, 'It B1A4,' was released in September 2011, further solidifying their presence in the K-pop scene with the catchy title track 'Beautiful Target.' In 2012, B1A4 released their first full album, 'Ignition,' followed by the repackaged version 'Ignition: Special Edition,' featuring hit singles like 'Baby Good Night.' Over the years, they continued to release multiple successful albums, including 'Who Am I' in 2014, 'Sweet Girl' in 2015, and 'Good Timing' in 2016, showcasing their ability to explore different musical styles while maintaining their signature sound.\n\nB1A4's music is characterized by its versatility, blending pop, rock, R&B, and electronic elements. Their lyrics often explore themes of love and youth, resonating with a wide audience. The group's ability to write and produce their own music, particularly by leader Jinyoung and member CNU, has been praised and is somewhat rare in the idol industry, giving them a distinct edge. Their sound matured over time, reflecting their growth as artists and appealing to both domestic and international fans. Their later albums, like 'Rollin'' in 2017 and 'Origine' in 2020, continued to receive positive feedback for their polished production and emotional depth.\n\nB1A4 originally debuted as a five-member group consisting of Jinyoung, CNU, Sandeul, Baro, and Gongchan. In 2018, Baro and Jinyoung left WM Entertainment to pursue individual careers, with the group continuing as a trio. Despite the lineup change, B1A4 has maintained a loyal fanbase and continues to influence the K-pop industry. Known for their engaging performances and charming personalities, they have contributed to diversifying the musical landscape of K-pop. B1A4's impact extends beyond their music as they have inspired many emerging artists and have been involved in various philanthropic activities, enhancing their positive reputation both within Korea and internationally.",
      "seo_title": "B1A4 Albums Online | Shop B1A4 Official Albums",
      "seo_description": "Shop official B1A4 albums online and explore the complete collection of music from your favorite K-pop band. Discover exclusive releases and enjoy fast shipping!"
  },
  {
      "artist name": "BabyMonster",
      "title": "BabyMonster Albums",
      "descriptionHtml": "<p>BabyMonster, a rising force in the K-pop scene, has captured hearts with their dynamic sound and distinct style. Their popular albums, such as <strong>First Step</strong> and <strong>Galactic Voyage</strong>, feature a unique blend of pop, R&B, and electronic influences.</p>\n\n<p>With tracks like <em>Starlight</em> and <em>Roar</em>, BabyMonster has pushed the boundaries of K-pop, introducing innovative production and captivating lyrics. Their impact on the music scene is profound, inspiring a new wave of artists and expanding the genre's global reach.</p>",
      "ruleSet": "babymonster",
      "description_bottom": "BabyMonster is a rising South Korean girl group formed by YG Entertainment, a company known for producing influential K-pop acts such as BLACKPINK and Big Bang. The group officially debuted in 2023, making a significant mark on the industry with their fresh sound and dynamic performances. BabyMonster comprises seven talented members: Ahyeon, Ruka, Chiquita, Haram, Pharita, Rora, and Asa, each bringing unique talents and international flair to the group. This diverse lineup, with members hailing from South Korea, Japan, and Thailand, has contributed to their wide appeal across different demographics and regions.\n\nThe group's musical style blends contemporary pop, hip-hop, and EDM, reflecting YG Entertainment's signature sound while incorporating modern trends. BabyMonster's debut album, 'Monster Awakening,' released in the summer of 2023, was met with enthusiasm from both fans and critics. The album features a mix of catchy, high-energy tracks and emotive ballads, showcasing the group's versatility and vocal prowess. The lead single, 'Dream Catcher,' gained considerable attention for its addictive melody and striking choreography, quickly climbing the charts in South Korea and internationally. The album's success established BabyMonster as a formidable force in the K-pop scene, underscoring their potential for future growth.\n\nSince their debut, BabyMonster has been recognized for their impact on the K-pop industry, appealing to a new generation of fans with their fresh concepts and relatable themes. Their ability to connect with audiences through social media and engaging performances has further solidified their presence on the global stage. BabyMonster's debut has been compared to that of their predecessors, BLACKPINK, in terms of influence and potential to shape the next phase of K-pop. As they continue to release music and expand their reach, BabyMonster is poised to become one of the leading figures in the evolution of K-pop, inspiring a new wave of artists and fans worldwide.",
      "seo_title": "Buy BabyMonster Albums Online | Official K-pop Store",
      "seo_description": "Discover authentic BabyMonster albums at our official K-pop store. Shop now for exclusive collections and elevate your music experience with the best K-pop hits."
  },
  {
      "artist name": "BAE173",
      "title": "BAE173 Albums",
      "descriptionHtml": "<p>BAE173, a dynamic K-pop boy group, has made waves in the industry with their energetic performances and diverse sound. Their popular albums, such as <strong>INTERSECTION: SPARK</strong> and <strong>INTERSECTION: TRACE</strong>, showcase a blend of pop, hip-hop, and electronic music, appealing to a wide range of listeners.</p>\n\n<p>Their tracks, like the catchy <em>Crush on U</em> and the vibrant <em>Jaws</em>, have contributed to their growing popularity and have had a significant impact on the K-pop music scene by introducing fresh and innovative sounds. BAE173 continues to captivate audiences and influence the genre with their unique musical style and dynamic stage presence.</p>",
      "ruleSet": "bae173",
      "description_bottom": "BAE173 is a South Korean boy group formed by PocketDol Studio, a subsidiary of MBK Entertainment, in 2020. The group consists of nine members: Hangyul, Dohyon, J-Min, Yoojun, Muzin, Junseo, Youngseo, Doha, and Bit. Hangyul and Dohyon were already well-known before the formation of BAE173, having been part of the project group X1, which emerged from the survival show 'Produce X 101.' Their prior experience brought a significant amount of attention to the debut of BAE173.\n\nBAE173 made their debut on November 19, 2020, with the EP 'INTERSECTION: SPARK.' The album features the title track 'Crush on U,' showcasing a bright and energetic sound that highlights the group's youthful vibe. The album was generally well-received for its catchy melodies and the members' strong vocal and dance performances. Following their debut, they released their second EP, 'INTERSECTION: TRACE,' on April 8, 2021. This album continued to build on their initial sound while exploring more mature themes, with the title track 'Loved You' reflecting a more emotional and introspective side of the group. In October 2021, BAE173 released their third EP, 'INTERSECTION: BLAZE,' with the title track 'Jaws,' which further solidified their presence in the K-pop scene with its powerful and dynamic sound. \n\nBAE173's music primarily falls within the pop and dance genres, often incorporating elements of hip-hop and electronic music. The group's ability to seamlessly blend these styles has helped them carve out a unique niche in the highly competitive K-pop industry. Despite being relatively new to the scene, BAE173 has shown considerable potential and has been praised for their charismatic stage presence and well-synchronized performances. Their impact on the K-pop scene is still unfolding, but they have already started to establish a dedicated fan base both in South Korea and internationally. As they continue to release music and grow as artists, BAE173 is poised to make a significant mark on the industry.",
      "seo_title": "Buy BAE173 Albums Online ",
      "seo_description": "Shop the latest BAE173 albums online and immerse yourself in their captivating music. Discover exclusive editions and unbeatable deals for fans and collectors alike."
  },
  {
      "artist name": "Baekhyun",
      "title": "Baekhyun Albums",
      "descriptionHtml": "<p>Baekhyun, a prominent member of the popular K-pop group EXO, ventured into a successful solo career with impactful albums like <strong>City Lights</strong> and <strong>Delight</strong>. His music often blends R&B, pop, and electronic sounds, creating a unique style that resonates with a wide audience.</p>\n\n<p>With tracks like <em>UN Village</em> and <em>Candy</em>, Baekhyun has significantly influenced the K-pop scene by setting new trends in vocal performance and genre fusion. His albums have not only topped charts but also expanded the global reach and appreciation for K-pop music.</p>",
      "ruleSet": "baekhyun",
      "description_bottom": "Baekhyun, whose full name is Byun Baek-hyun, is a prominent South Korean singer, songwriter, and actor known for his multifaceted contributions to the K-pop music scene. He debuted as a member of the popular boy group EXO under SM Entertainment in 2012, where he quickly gained recognition for his powerful vocals and charismatic stage presence. Baekhyun's musical style primarily encompasses pop, R&B, and electronic dance music, and he is widely celebrated for his smooth vocal delivery and emotive performances.\n\nBaekhyun's successful solo career began with the release of his debut mini-album 'City Lights' on July 10, 2019. The album, which includes tracks like 'UN Village,' received positive reviews for its sophisticated blend of R&B and pop sounds, highlighting Baekhyun's vocal prowess. 'City Lights' was a commercial success, selling over half a million copies, and topped the Gaon Album Chart. Following this, Baekhyun released his second mini-album 'Delight' on May 25, 2020. The album was well-received, featuring the hit single 'Candy,' which showcased a more playful and contemporary sound. 'Delight' made history as the first album by a solo artist in South Korea to sell over one million copies in 19 years, solidifying Baekhyun's status as a leading solo artist.\n\nBaekhyun continued to build on his success with the release of his third mini-album 'Bambi' on March 30, 2021. This album further cemented his reputation as a versatile artist, featuring tracks that blend R&B with elements of pop and soul, earning critical acclaim for its mature and polished production. Baekhyun's influence extends beyond his solo endeavors; he is a member of the supergroup SuperM, which debuted in 2019 and targets the global market, contributing to the growing international presence of K-pop. Through his work with EXO, SuperM, and as a solo artist, Baekhyun has played a significant role in shaping the K-pop landscape, inspiring a new generation of artists with his innovative approach to music and performance.",
      "seo_title": "Baekhyun Albums Shop | Buy Baekhyun Albums Online",
      "seo_description": "Shop the best selection of Baekhyun albums online. Discover exclusive editions, unbeatable prices, and fast shipping. Elevate your music collection with Baekhyun's top hits today!"
  },
  {
      "artist name": "BLACKSWAN",
      "title": "BLACKSWAN Albums",
      "descriptionHtml": "<p>BLACKSWAN is a dynamic K-pop group known for their diverse lineup and powerful performances. Their music often blends pop, R&B, and hip-hop elements, showcasing a unique sound that resonates with a wide audience.</p>\n\n<p>With albums like <strong>Goodbye RANIA</strong> and <strong>Close to Me</strong>, BLACKSWAN has made a significant impact on the K-pop scene by embracing multiculturalism and diversity. Their songs, such as <em>Tonight</em> and <em>No Dignity</em>, have contributed to the global reach of K-pop, influencing both fans and aspiring artists worldwide.</p>",
      "ruleSet": "blackswan",
      "description_bottom": "BLACKSWAN is a South Korean girl group formed by DR Music, known for its diverse lineup and ambitious global appeal. The group debuted on October 16, 2020, with their first full-length album titled 'Goodbye RANIA.' The album features the lead single 'Tonight,' which combines elements of pop, hip-hop, and electronic music, showcasing BLACKSWAN's versatile musical style. The reception for their debut was notable, as fans and critics appreciated the bold fusion of genres and the group's charismatic stage presence. Despite being a new act, BLACKSWAN quickly garnered attention for their potential impact on the K-pop scene, backed by their unique point of having an internationally inclusive lineup.\n\nInitially, BLACKSWAN debuted with five members: Youngheun, Fatou, Judy, Leia, and Hyeme. Each member brings something unique to the table, with backgrounds and skills spanning various cultures and countries. Fatou, who hails from Senegal, stands out as one of the first African idols in K-pop, reflecting the group's commitment to global representation. The blend of different backgrounds in BLACKSWAN's lineup has set them apart in the industry, highlighting the increasing diversity and international reach of K-pop as a genre. Over time, the lineup has seen changes, with members Hyeme departing in 2020 and Youngheun and Judy leaving in 2022, while new members have been added to keep the group dynamic and fresh.\n\nBLACKSWAN's impact on the K-pop music scene is significant, despite being a relatively new group. They symbolize a shift towards a more inclusive and diverse K-pop landscape, breaking traditional norms and drawing in a wider global audience. Their music and performances are crafted to appeal not only to the domestic market but also to international fans, aligning with the growing trend of K-pop's worldwide popularity. As BLACKSWAN continues to develop their music and concept, they are poised to further influence the industry, opening doors for more diversity in K-pop and inspiring future artists from various cultural backgrounds to join the scene.",
      "seo_title": "BLACKSWAN Albums Online Store",
      "seo_description": "Shop BLACKSWAN albums at our online store. Discover exclusive releases, special editions, and fan favorites. Perfect for collectors and new fans alike. Fast shipping and great prices!"
  },
  {
      "artist name": "BTOB",
      "title": "BTOB Albums",
      "descriptionHtml": "<p>BTOB, a South Korean boy group formed by Cube Entertainment, is renowned for its emotional ballads and versatile musical style. Some of their popular albums include <strong>Complete</strong>, <strong>Brother Act.</strong>, and <strong>Feel'eM</strong>, which showcase their ability to blend pop, ballads, and R&B effortlessly. Their song <em>Missing You</em> from the album <strong>Brother Act.</strong> became an iconic hit, showcasing their vocal prowess and emotional depth.</p>\n\n<p>BTOB's contributions have significantly impacted the K-pop scene by emphasizing the importance of powerful vocals and emotional storytelling. Their music has not only won numerous awards but also inspired a shift towards more vocally-driven content in K-pop, influencing new generations of artists and fans alike.</p>",
      "ruleSet": "btob",
      "description_bottom": "BTOB, short for 'Born to Beat,' is a South Korean boy group formed by Cube Entertainment in 2012. The group originally debuted with seven members: Eunkwang, Minhyuk, Changsub, Hyunsik, Peniel, Ilhoon, and Sungjae. They are renowned for their vocal harmonies and versatility, spanning genres from ballads to pop to R&B. BTOB made their debut with the single 'Insane' and the debut album 'Born to Beat,' released on March 21, 2012. Although the album initially had moderate success, it laid the foundation for the group's signature style—a blend of heartfelt ballads and dynamic dance tracks.\n\nOver the years, BTOB has released several albums and mini-albums, garnering increasing attention and acclaim. Their second mini-album, 'Press Play,' released in September 2012, featured the hit single 'WOW,' which highlighted their strong vocal and rap prowess. The group saw a significant rise in popularity with their fourth mini-album 'Beep Beep' in 2014, which topped various music charts. In 2015, they released their first full album, 'Complete,' featuring the lead single 'It's Okay,' which showcased their matured musical style and earned them their first music show win. Their subsequent releases like 'Remember That' in 2016 and 'New Men' in the same year solidified their position as artists capable of delivering emotionally resonant music.\n\nBTOB's impact on the Kpop scene is marked by their strong emphasis on vocal talent and emotive performances, differentiating them from many other idol groups. They have been praised for their ability to connect with fans through relatable lyrics and impressive live performances. The group has also been recognized for their contributions to the popularization of Kpop ballads, often being referred to as 'ballad idols.' Despite lineup changes, such as Ilhoon's departure in 2020, BTOB continues to influence the music scene with their distinct sound and heartfelt music, maintaining a dedicated fanbase known as Melody. Their influence extends beyond music, with members actively participating in various entertainment fields, further cementing their status as versatile and enduring artists in the Kpop industry.",
      "seo_title": "Buy BTOB Albums Online | Official K-pop Merch Store",
      "seo_description": "Shop BTOB albums with ease at our official K-pop merch store. Discover exclusive releases and fan favorites. Fast shipping and secure checkout for all your BTOB needs."
  },
  {
      "artist name": "CIX",
      "title": "CIX Albums",
      "descriptionHtml": "<p>CIX, a five-member South Korean boy group, is known for their diverse musical style, incorporating elements of pop, R&B, and hip-hop. Their popular albums, such as <strong>'HELLO Chapter 1: Hello, Stranger'</strong> and <strong>'HELLO Chapter 3: Hello, Strange Time'</strong>, showcase their ability to blend catchy melodies with intricate storytelling.</p>\n\n<p>Impactful tracks like <em>'Movie Star'</em> and <em>'Jungle'</em> have solidified their presence in the Kpop scene, earning them a dedicated fan base worldwide. CIX's innovative approach and dynamic performances continue to influence the genre, pushing the boundaries of traditional Kpop music.</p>",
      "ruleSet": "cix",
      "description_bottom": "CIX, an acronym for 'Complete in X,' is a South Korean boy group formed by C9 Entertainment. The group debuted on July 23, 2019, with five members: BX, Seunghun, Bae Jinyoung, Yonghee, and Hyunsuk. Each member brings a unique flair to the group, combining diverse backgrounds and talents. Bae Jinyoung, for instance, gained fame as a former member of the successful project group Wanna One, which added significant attention to CIX's debut. Their music generally falls within the genres of K-pop, R&B, and pop, often characterized by catchy hooks, strong visuals, and intricate choreography.\n\nCIX's debut EP, 'Hello Chapter 1: Hello, Stranger,' was released on July 23, 2019, and was well-received both domestically and internationally. The EP includes the title track 'Movie Star,' which quickly captured the attention of the K-pop community with its polished production and engaging performance. The group's following releases include 'Hello Chapter 2: Hello, Strange Place,' released on November 19, 2019, which continued to explore their 'Hello' series, and 'Hello Chapter 3: Hello, Strange Time,' released on October 27, 2020. Their music typically features themes of youth, identity, and emotional exploration, resonating well with fans.\n\nCIX has made a notable impact on the K-pop scene by consistently delivering quality music and performances. Their ability to maintain a strong concept across multiple albums has set them apart from many other groups. In addition to their studio work, CIX has gained a reputation for their live performances, showcasing their strong vocal and dance skills. This combination of engaging music and compelling performances has helped them build a dedicated fan base globally, playing a significant role in the ongoing globalization of K-pop. As they continue to mature artistically, CIX is poised to further solidify their position in the ever-evolving landscape of the K-pop industry.",
      "seo_title": "Buy CIX Albums Online | Officla Shop for CIX Albums",
      "seo_description": "Shop the official store for CIX albums online. Discover the latest releases and exclusive collections. Enjoy fast shipping and secure checkout for all your favorite CIX music!"
  },
  {
      "artist name": "CNBLUE",
      "title": "CNBLUE Albums",
      "descriptionHtml": "<p>CNBLUE is a South Korean rock band known for blending rock, pop, and alternative sounds, creating a unique niche in the K-pop landscape. Their popular albums, such as <strong><em>First Step</em></strong> and <strong><em>2gether</em></strong>, showcase their versatility and knack for catchy melodies.</p>\n\n<p>With hits like <em>\"I'm a Loner\"</em> and <em>\"Cinderella\"</em>, CNBLUE has significantly impacted the K-pop music scene by incorporating more instrument-based music, setting them apart from many other idol groups. Their work has contributed to the broader acceptance and popularity of band-centric music within the genre.</p>",
      "ruleSet": "cnblue",
      "description_bottom": "CNBLUE is a South Korean rock band that made its debut in Japan before capturing the hearts of fans worldwide. The group initially formed in 2009 and officially debuted in South Korea in 2010. The band's lineup consists of four members: Jung Yong-hwa (leader, main vocalist, and guitarist), Lee Jong-hyun (guitarist and vocalist, until his departure in 2019), Kang Min-hyuk (drummer), and Lee Jung-shin (bassist). CNBLUE is known for incorporating various genres into their music, including pop-rock, alternative rock, and power-pop, blending catchy melodies with rock instrumentation.\n\nThe band's discography includes several successful albums. Their first Korean mini-album, 'Bluetory,' was released in January 2010 and received an enthusiastic response, marking the beginning of their breakthrough in the Korean music industry. This was followed by 'Bluelove' in May 2010, which further cemented their popularity. Their first full-length album, 'First Step,' came out in 2011, featuring the hit single 'Intuition,' and it topped various music charts. Subsequent albums like '2gether' (2015) and '7°CN' (2017) continued to showcase their evolving musical style, with '7°CN' especially receiving critical acclaim for its mature sound and lyrical depth. Their Japanese discography is also notable, with albums such as 'Code Name Blue' (2012) and 'Wave' (2014) receiving positive receptions.\n\nCNBLUE has left a significant impact on the K-pop scene by successfully integrating band music into the mainstream, which is predominately dominated by dance-oriented idol groups. They are often credited with popularizing the band concept within the K-pop genre, paving the way for other bands to succeed. Their influence extends beyond music, with members participating in acting and variety shows, further elevating their profile in the entertainment industry. Despite challenges and changes in the lineup, CNBLUE continues to be a driving force in K-pop, known for their musical versatility and the strong connection they maintain with their fanbase, known as 'BOICE.'",
      "seo_title": "CNBLUE Albums Online | Official Store for CNBLUE Albums",
      "seo_description": "Shop CNBLUE albums online at the official store. Discover and purchase the latest releases and timeless classics from CNBLUE, the renowned South Korean rock band."
  },
  {
      "artist name": "CRAVITY",
      "title": "CRAVITY Albums",
      "descriptionHtml": "<p>CRAVITY is a dynamic K-pop group known for their energetic performances and diverse musical style, blending pop, hip-hop, and electronic elements. Their popular albums include <strong>SEASON 1. [HIDEOUT: REMEMBER WHO WE ARE]</strong> and <strong>SEASON 2. [HIDEOUT: THE NEW DAY WE STEP INTO]</strong>, which feature hit tracks like <em>Break All the Rules</em> and <em>Flame</em>.</p>\n\n<p>Their albums have significantly impacted the K-pop scene, marking them as rising stars with their fresh sound and engaging choreography. CRAVITY's work has contributed to the global spread of K-pop, garnering a dedicated international fanbase and influencing new trends in the genre.</p>",
      "ruleSet": "cravity",
      "description_bottom": "CRAVITY is a South Korean boy band formed by Starship Entertainment. The group debuted on April 14, 2020, with nine members: Serim, Allen, Jungmo, Woobin, Wonjin, Minhee, Hyeongjun, Taeyoung, and Seongmin. Their debut album, 'Season 1. Hideout: Remember Who We Are,' quickly captured the attention of K-pop fans worldwide. The album featured the lead single 'Break All the Rules,' which showcased CRAVITY's energetic dance-pop style and strong vocal performances. The album was well-received, debuting at number one on the Gaon Album Chart, establishing the group as a promising new act in the competitive K-pop industry.\n\nFollowing their debut success, CRAVITY released their second mini-album, 'Season 2. Hideout: The New Day We Step Into,' on August 24, 2020. The album included the title track 'Flame,' which continued to highlight the group's dynamic choreography and powerful sound, further cementing their place in the K-pop scene. The group continued their momentum with their third mini-album, 'Season 3. Hideout: Be Our Voice,' released on January 19, 2021, featuring the lead single 'My Turn.' This release showcased a more mature sound, with influences from hip-hop and electronic music, and continued to receive positive receptions from fans.\n\nCRAVITY's music often features a blend of dance-pop, hip-hop, and electronic elements, characterized by catchy hooks, intricate choreography, and strong visual aesthetics. The group's ability to consistently produce music that resonates with audiences has contributed to their growing impact on the K-pop music scene. As a relatively new group, CRAVITY has already made significant achievements, including winning several rookie awards and gaining a substantial international fanbase. Their fresh approach to music and performance has helped them stand out in the crowded K-pop landscape, marking them as a group to watch in the coming years.",
      "seo_title": "Buy CRAVITY Albums Online | Officla Shop for CRAVITY Albums",
      "seo_description": "Shop the official collection of CRAVITY albums online. Discover the latest releases and fan favorites. Fast shipping and secure checkout for all CRAVITY merchandise."
  },
  {
      "artist name": "DAY6",
      "title": "DAY6 Albums",
      "descriptionHtml": "<p>DAY6 is a South Korean band known for their unique blend of rock, pop, and alternative music. They have released several popular albums, including <strong>'The Book of Us: Gravity'</strong> and <strong>'Shoot Me: Youth Part 1'</strong>, which showcase their ability to craft emotionally resonant and diverse sounds.</p>\n\n<p>Known for writing heartfelt and introspective lyrics, DAY6 has made a significant impact on the Kpop music scene by setting a precedent for bands within the predominantly idol-focused industry. Their albums have contributed to expanding the genre's boundaries and have garnered a dedicated international fanbase.</p>",
      "ruleSet": "day6",
      "description_bottom": "DAY6 is a South Korean band formed by JYP Entertainment that debuted on September 7, 2015. Originally a six-member group, DAY6 quickly became known for their unique blend of rock and pop, setting them apart in the K-pop scene, which is predominantly dominated by dance-focused groups. The members include Sungjin (leader, main vocalist, rhythm guitarist), Jae (lead guitarist, lead vocalist, rapper), Young K (bassist, lead rapper, vocalist), Wonpil (synthesizer, keyboardist, vocalist), and Dowoon (drummer, vocalist). Junhyeok, the original keyboardist, left the group in February 2016. \n\nTheir debut mini-album, 'The Day,' was released in September 2015 and featured the lead single 'Congratulations,' which received praise for its emotive lyrics and rock-infused sound. Following this, DAY6 released their second mini-album, 'Daydream,' in March 2016, showcasing their growing versatility with tracks that leaned more into alternative rock and pop rock. In 2017, DAY6 launched an ambitious project called 'Every DAY6,' where they released two new songs each month. This culminated in two full albums: 'Sunrise' in June and 'Moonrise' in December, both of which were well-received for their consistency in quality and experimentation across genres like soft rock, ballads, and punk rock.\n\nThe group's subsequent albums, including 'Shoot Me: Youth Part 1' (2018), 'Remember Us: Youth Part 2' (2018), 'The Book of Us: Gravity' (2019), 'The Book of Us: Entropy' (2019), and 'The Book of Us: The Demon' (2020), have continued to receive positive receptions both domestically and internationally. Their music often explores themes of love, youth, and personal growth, resonating deeply with fans. DAY6 is lauded for their live performances and musicality, contributing significantly to diversifying the soundscape of K-pop. They've built a dedicated fanbase known as 'My Day,' and their ability to write and compose their own music has further solidified their impact on the industry, inspiring a wave of bands and artists to pursue more band-centric music within the K-pop genre.",
      "seo_title": "Buy DAY6 Albums Online | Official K-pop Store for DAY6",
      "seo_description": "Shop the official K-pop store for DAY6 albums online. Discover the latest releases and exclusive merchandise from your favorite band. Fast shipping and guaranteed authenticity!"
  },
  {
      "artist name": "DKB",
      "title": "DKB Albums",
      "descriptionHtml": "<p>DKB, an energetic boy group under Brave Entertainment, has made waves in the Kpop scene with their dynamic style and impactful music. Their popular albums, such as <strong>Growth</strong> and <strong>Rebel</strong>, showcase a blend of genres ranging from hip-hop to dance-pop, illustrating their versatile musical skills.</p>\n\n<p>DKB's tracks like <em>Sorry Mama</em> and <em>All In</em> highlight their lyrical depth and innovative sound, contributing to their rising influence in Kpop. Their albums not only solidify their place in the industry but also push boundaries, inspiring new trends and cementing their status as trendsetters in Kpop music.</p>",
      "ruleSet": "dkb",
      "description_bottom": "DKB, short for Dark Brown Eyes, is a South Korean boy band formed by Brave Entertainment. The group debuted on February 3, 2020, with their first mini-album 'Youth.' Known for their dynamic music style and energetic performances, DKB quickly garnered attention within the K-pop scene. 'Youth' featured the title track 'Sorry Mama,' which showcased their compelling blend of hip-hop, R&B, and EDM influences. The album received a positive reception for its fresh sound and the members' impressive performance skills, establishing a solid foundation for DKB in the competitive K-pop industry.\n\nFollowing their debut, DKB released their second mini-album, 'Love,' on May 25, 2020. This album featured the title track 'Still,' which continued to highlight their signature mix of various musical genres, offering fans a more mature and refined sound. The release of 'Love' helped solidify DKB's presence in the industry, earning them recognition for their consistent musical growth and innovative approach. Their third mini-album, 'Growth,' was launched on October 26, 2020, with the title track 'Work Hard.' This album further emphasized their artistic development, reflecting themes of perseverance and ambition through their lyrics and musical compositions.\n\nDKB consists of nine talented members: E-Chan, D1, Teo, GK, Heechan, Lune, Junseo, Yuku, and Harry June. Each member brings unique skills to the group, contributing to their cohesive yet diverse musical output. Despite being relatively new to the scene, DKB has made a significant impact with their versatility and dedication to their craft. Their ability to seamlessly integrate different musical styles has gained them a dedicated fanbase both domestically and internationally. Through their music and performances, DKB continues to push boundaries and set new standards in the K-pop genre, solidifying their reputation as a promising and innovative group within the industry.",
      "seo_title": "Buy DKB Albums Online at Best Prices",
      "seo_description": "Shop for DKB albums online at unbeatable prices. Discover the best deals and enjoy fast shipping on your favorite music from this popular artist. Make your purchase today!"
  },
  {
      "artist name": "DPR IAN",
      "title": "DPR IAN Albums",
      "descriptionHtml": "<p>DPR IAN, formerly known as Christian Yu, has made significant waves in the Kpop industry with his distinct blend of hip-hop, R&B, and alternative music. His debut album, <strong>MITO</strong>, caught the attention of global audiences with its introspective lyrics and captivating visuals, showcasing his multifaceted talent and vision.</p>\n\n<p>Following up with <strong>MOODSWINGS IN THIS ORDER</strong>, DPR IAN continued to push the boundaries of Kpop by experimenting with genre-blending sounds and evocative storytelling. His work has inspired a new generation of artists to explore deeper themes and innovative production styles, marking a turning point in the Kpop music scene.</p>",
      "ruleSet": "dpr ian",
      "description_bottom": "DPR IAN, whose real name is Christian Yu, is an Australian-born Korean singer, rapper, and visual director renowned for his unique artistry in the K-pop and alternative music scenes. Before venturing into a solo career, he was part of the Korean boy band C-Clown, which debuted in 2012 and disbanded in 2015. Following this, DPR IAN became a pivotal figure in the collective known as DPR (Dream Perfect Regime), a multi-genre, independent music and video production label. As a solo artist, DPR IAN's music is characterized by a distinctive blend of alternative R&B, pop, and rock, often incorporating introspective and emotive themes.\n\nDPR IAN debuted as a solo artist with his first album, 'Moodswings In This Order' (MITO), released on March 12, 2021. The album was well-received, celebrated for its cohesive narrative and the way it authentically reflects IAN's personal experiences and mental health journey. It comprises tracks that explore the complexities of human emotions, supported by a unique soundscape that balances haunting melodies with powerful lyrics. 'MITO' quickly resonated with fans, earning DPR IAN a strong global following. His storytelling ability, coupled with cinematic music videos, has further solidified his reputation as a visionary within the industry.\n\nFollowing 'MITO,' DPR IAN released his second album, 'Moodswings In To Order' (MIITO), on July 29, 2022. The album continues the narrative established in his debut, delving deeper into themes of identity, love, and self-discovery. MIITO was praised for its artistic depth and DPR IAN's ability to convey raw emotion through his music. The album's tracks feature a fusion of electronic, rock, and pop elements, showcasing his versatility and growth as an artist. DPR IAN's contribution to the K-pop scene is significant, as he challenges traditional genre boundaries and brings a distinctly personal touch to his work. His innovative approach has not only broadened the scope of K-pop music but also inspired a new wave of artists seeking to express their individuality and creativity.",
      "seo_title": "DPR IAN Albums | Worldwide Delivery of DPR IAN Albums",
      "seo_description": "Explore a diverse collection of DPR IAN albums with worldwide delivery. Discover exclusive music and enjoy seamless shopping for all DPR IAN fans around the globe."
  }
]

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};


export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const collections_created = []; // Store all collections
  // Loop through the parsed data and create collections
  for (let i = 0; i < json_of_progrmmmatic_data.length; i++) {
    // Skip empty rows or rows missing key fields
    if (!json_of_progrmmmatic_data[i].title || !json_of_progrmmmatic_data[i].ruleSet) {
      continue;
    }
    const response = await admin.graphql(
      `#graphql
        mutation createCollectionMetafields($input: CollectionInput!) {
          collectionCreate(input: $input) {
            collection {
              id
              metafields(first: 3) {
                edges {
                  node {
                    id
                    namespace
                    key
                    value
                  }
                }
              }
            }
            userErrors {
              message
              field
            }
          }
    }`,
      {
        variables: {
          input: {
            metafields: [
              {
                "namespace": "custom",
                "key": "description",
                "type": "multi_line_text_field",
                "value": JSON.stringify(json_of_progrmmmatic_data[i].description_bottom)      
              }
            ],
            title: json_of_progrmmmatic_data[i].title,
            descriptionHtml: json_of_progrmmmatic_data[i].descriptionHtml,
            ruleSet: {
              appliedDisjunctively: true,
              rules: [
                {
                  column: "TITLE",
                  relation: "CONTAINS",
                  condition: json_of_progrmmmatic_data[i].ruleSet
                }
              ]
            },
            seo: {
              title: json_of_progrmmmatic_data[i].seo_title,
              description: json_of_progrmmmatic_data[i].seo_description
            }
          },
        },
      },
    );
  
    const responseJson = await response.json();
    const collection = responseJson.data.collectionCreate.collection;
    const metafields = collection.metafields.edges;
    collections_created.push({
      collection: responseJson.data.collectionCreate.collection,
      metafields: metafields,
    });
  }
// Return all collections after the loop finishes
return json({
  collections_created: collections_created,
});
};

// Code to create UI of app - NO NEED TO TOUCH
export default function Index() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const isLoading =
    ["loading", "submitting"].includes(fetcher.state) &&
    fetcher.formMethod === "POST";
  const collectionId = fetcher.data?.collection?.id.replace(
    "gid://shopify/Collection/",
    "",
  );

  useEffect(() => {
    if (collectionId) {
      shopify.toast.show("Collection created");
    }
  }, [collectionId, shopify]);
  const generateCollection = () => fetcher.submit({}, { method: "POST" });

  return (
    <Page>
      <TitleBar title="Programmatic Collection Creator">
        <button variant="primary" onClick={generateCollection}>
          Generate a collection
        </button>
      </TitleBar>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Congrats on creating a new Shopify app 🎉
                  </Text>
                  <Text variant="bodyMd" as="p">
                    This embedded app template uses{" "}
                    <Link
                      url="https://shopify.dev/docs/apps/tools/app-bridge"
                      target="_blank"
                      removeUnderline
                    >
                      App Bridge
                    </Link>{" "}
                    interface examples like an{" "}
                    <Link url="/app/additional" removeUnderline>
                      additional page in the app nav
                    </Link>
                    , as well as an{" "}
                    <Link
                      url="https://shopify.dev/docs/api/admin-graphql"
                      target="_blank"
                      removeUnderline
                    >
                      Admin GraphQL
                    </Link>{" "}
                    mutation demo, to provide a starting point for app
                    development.
                  </Text>
                </BlockStack>
                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">
                    Get started with Collections
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Generate a collections with GraphQL and get the JSON output for
                    that product. Learn more about the{" "}
                    <Link
                      url="https://shopify.dev/docs/api/admin-graphql/2024-10/mutations/collectionCreate"
                      target="_blank"
                      removeUnderline
                    >
                      collectionCreate
                    </Link>{" "}
                    mutation in our API references.
                  </Text>
                </BlockStack>
                <InlineStack gap="300">
                  <Button loading={isLoading} onClick={generateCollection}>
                    Generate a collection
                  </Button>
                  {fetcher.data?.product && (
                    <Button
                      url={`shopify:admin/products/${productId}`}
                      target="_blank"
                      variant="plain"
                    >
                      View product
                    </Button>
                  )}
                </InlineStack>
                {fetcher.data?.product && (
                  <>
                    <Text as="h3" variant="headingMd">
                      {" "}
                      productCreate mutation
                    </Text>
                    <Box
                      padding="400"
                      background="bg-surface-active"
                      borderWidth="025"
                      borderRadius="200"
                      borderColor="border"
                      overflowX="scroll"
                    >
                      <pre style={{ margin: 0 }}>
                        <code>
                          {JSON.stringify(fetcher.data.product, null, 2)}
                        </code>
                      </pre>
                    </Box>
                    <Text as="h3" variant="headingMd">
                      {" "}
                      productVariantsBulkUpdate mutation
                    </Text>
                    <Box
                      padding="400"
                      background="bg-surface-active"
                      borderWidth="025"
                      borderRadius="200"
                      borderColor="border"
                      overflowX="scroll"
                    >
                      <pre style={{ margin: 0 }}>
                        <code>
                          {JSON.stringify(fetcher.data.variant, null, 2)}
                        </code>
                      </pre>
                    </Box>
                  </>
                )}
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <BlockStack gap="500">
              {/*
                <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    App template specs
                  </Text>
                  <BlockStack gap="200">
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        Framework
                      </Text>
                      <Link
                        url="https://remix.run"
                        target="_blank"
                        removeUnderline
                      >
                        Remix
                      </Link>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        Database
                      </Text>
                      <Link
                        url="https://www.prisma.io/"
                        target="_blank"
                        removeUnderline
                      >
                        Prisma
                      </Link>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        Interface
                      </Text>
                      <span>
                        <Link
                          url="https://polaris.shopify.com"
                          target="_blank"
                          removeUnderline
                        >
                          Polaris
                        </Link>
                        {", "}
                        <Link
                          url="https://shopify.dev/docs/apps/tools/app-bridge"
                          target="_blank"
                          removeUnderline
                        >
                          App Bridge
                        </Link>
                      </span>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        API
                      </Text>
                      <Link
                        url="https://shopify.dev/docs/api/admin-graphql"
                        target="_blank"
                        removeUnderline
                      >
                        GraphQL API
                      </Link>
                    </InlineStack>
                  </BlockStack>
                </BlockStack>
              </Card>
              */}
              <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Next steps
                  </Text>
                  <List>
                    <List.Item>
                      Build an{" "}
                      <Link
                        url="https://shopify.dev/docs/apps/getting-started/build-app-example"
                        target="_blank"
                        removeUnderline
                      >
                        {" "}
                        example app
                      </Link>{" "}
                      to get started
                    </List.Item>
                    <List.Item>
                      Explore Shopify’s API with{" "}
                      <Link
                        url="https://shopify.dev/docs/apps/tools/graphiql-admin-api"
                        target="_blank"
                        removeUnderline
                      >
                        GraphiQL
                      </Link>
                    </List.Item>
                  </List>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
