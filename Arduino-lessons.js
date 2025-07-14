export const course = {
  title: "The Playful Arduino.",
  sections: [ 
  {  //section 1 
      title: "A Little Bit About The Guy.",
      modules: [
        { //module 1 in section 1 
          title: "The Awakening of Arduino: Your Robot’s Tiny Brain",
          lessons: [
            { // lesson 1 in module 1 in section 1 
              title: "What is Arduino? And Why is it So Cool?",
              content: "Welcome to Module 1 of our awesome Arduino adventure!\nYou made it here — and you’re about to discover something super cool.\n\nSo… what’s this weird name… Arduino?\nIs it a superhero?\nA robot?\nA pizza topping?\nNope — it’s even cooler than that.\n\nArduino is a tiny little computer that can fit in your hand.\nIt’s like a brain for your robots, gadgets, and cool inventions!\n\nImagine you want to make a robot car, or a light that switches on when you clap, or a plant pot that tells you when it’s thirsty — Arduino makes all of that happen.\n\nAnd the best part?\nYou don’t need to be a boring scientist in a white coat.\nEven you, sitting right there in your room, can start making stuff move, blink, beep and dance!\n\nBut wait… how does it work?\nWell — Arduino talks to the real world using sensors (like eyes and ears for your robot), and it controls things like LEDs, motors and screens.\nYou tell it what to do using simple code — and magic happens.\n\nOver the next few modules, we’re gonna build, code, and have so much fun that you won’t even realize you’re learning real electronics and coding stuff.\n\nSo buckle up, scientist… your journey into the world of Arduino starts now!",
              image: "URL",
              audio: "URL"
            }
          ]
        },
        { // module 2 in section 1 
          title: "Meet the Family: Types of Arduino Boards",
          lessons: [
            { // lesson 1 in module 2 in section 1 
              title: "Different Arduino Boards — Which One’s Your Buddy?",
              content: "Alright, scientist — you now know what an Arduino is.\nBut guess what? There’s not just one Arduino… there’s a whole family of them!\n\nJust like how in your house you have big people, tiny people, and maybe even a noisy pet — Arduino has its own gang of boards.\nEach one has its own size, power, and special skills.\n\nLet’s meet some of them!\n\n1️⃣ Arduino Uno\nThis is the most famous one. It’s like the big brother of the family.\nPerfect for beginners, projects, and learning how to blink those first LEDs.\n\n2️⃣ Arduino Nano\nThis one’s the tiny ninja. Super small, but still powerful.\nGreat when you don’t have much space.\n\n3️⃣ Arduino Mega\nWhoa — this one’s huge!\nIt has lots more pins and memory.\nPerfect for when you want to connect loads of sensors and make something epic.\n\n4️⃣ Arduino Leonardo\nThis cool dude can pretend to be a computer keyboard or mouse.\nYup — it can type stuff for you or move your mouse cursor!\n\nAnd there are many more — but these are the ones you’ll hear about a lot.\n\nSo, next time you see a tiny green board with black chips on it — you can proudly say,\n“Hey! That’s an Arduino Uno!” or “Look! It’s a Nano!”\n\nPretty cool, huh?\nAlright — let’s move on and see how to set up your very own Arduino next!",
              image: "url",
              audio: "url"
            },
            { // lesson 2 in module 2 in section 1.
                title:"Types of Arduinos — Which Tribe Does Your Board Belong To?",
                content:"Alright scientist — now that you’ve met a few popular Arduino boards, it’s time to learn about the different categories they belong to.\nYep — not all Arduinos are made for the same job.\nSome are for learning, some for factories, some for tiny gadgets you can wear, and some for controlling entire homes!\nLet’s check out the types:\n\n1️⃣ Classic Arduino Boards\nThese are the most famous and beginner-friendly boards.\nPerfect for learning electronics, making robots, and building fun DIY projects.\nExamples: Arduino Uno, Nano, Mega, Leonardo.\n\n2️⃣ Enhanced & Powerful Boards\nThese are advanced boards with faster processors and extra memory.\nThey’re great when your project needs more speed or handles lots of data.\nExamples: Arduino Due, Portenta H7.\n\n3️⃣ IoT (Internet of Things) Boards\nThese boards can connect to WiFi or Bluetooth.\nThey’re perfect for projects like smart lights, remote robot control, or plant watering systems you control from your phone.\nExamples: Arduino MKR1000, MKR WiFi 1010, Nano 33 IoT.\n\n4️⃣ Wearable Boards\nTiny boards you can attach to clothes or toys.\nGreat for smart jackets, glowing caps, or motion-sensing bracelets.\nExamples: Arduino Gemma, LilyPad.\n\n5️⃣ Industrial Boards\nTough boards made for factories and big machines.\nThey can work in hot, dusty places without getting tired.\nExamples: Arduino Nicla Vision, Arduino Edge Control.\n\n6️⃣ Special-Purpose Boards\nBoards designed for special tricks like voice control, AI, or computer vision.\nExamples: Arduino Nicla Voice, Arduino Nicla Sense ME.\n\nNow you know — every Arduino board belongs to a type.\nSome are for learning, some for smart homes, and some for robot factories!\nWhen you pick a board, check which type it belongs to — and you’ll know if it’s perfect for your job!",
                image:"url",
                audio:"url"
            }

          ]
        },{//module 3 in section 1 
title: "Know Your Robot Brain: Arduino Uno and Its Labels",
lessons: [
  { // lesson 1 in module 3 in section 1 
title: "The Parts of an Arduino Uno — What’s That Part For?",
content:"Okay scientist — time to meet your robot's brain up close!\nThis little green board is called the **Arduino Uno**, and it's packed with tiny parts that work together like a team.\nLet’s learn what each part is called and what it does!\n\n1️⃣ **USB Port**\nThis is where you plug in the USB cable to connect your Arduino to your computer.\nIt sends your code to the board and powers it up.\n\n2️⃣ **Power Jack**\nThis is where you can connect a battery or power adapter if you don’t want to use USB.\nIt’s handy when your project needs to run without a computer.\n\n3️⃣ **Digital Pins (0 to 13)**\nThese are little holes where you connect wires.\nThey can be used to turn LEDs on and off, read buttons, or send signals.\n\n4️⃣ **Analog Pins (A0 to A5)**\nThese pins read values like temperature, light, or sound.\nThey’re perfect for sensors.\n\n5️⃣ **GND (Ground)**\nThese are the black pins you connect to complete your circuit.\nWithout these, your LEDs and sensors won’t work.\n\n6️⃣ **5V and 3.3V Pins**\nThese give power to your sensors, LEDs, and other parts.\nUse 5V for most things, and 3.3V for some special modules.\n\n7️⃣ **Reset Button**\nIf your board gets stuck or acts weird, press this to restart it.\nIt’s like a mini refresh button.\n\n8️⃣ **ATmega328P Chip**\nThis tiny black chip is the real brain of the board.\nIt stores your code and controls everything.\n\n9️⃣ **TX and RX LEDs**\nThese tiny lights blink when your board is sending or receiving data.\nThey’re like the board’s little mouths and ears.\n\nAnd that’s it — now you know the main parts of your Arduino Uno!\nNext time you hold it, you can proudly point to a part and say, \"Hey, that’s the ATmega chip!\"\nReady to plug it in and make it blink? Let’s go!",
image: "url",
audio:"url"
  }
]
        }
      ]
    },
    { //section 2
      title: "The Ashes of Mechronix",
      modules: [
        { // module 1 in section 2 
          title: "The Awakening of Aeron Voss",
          lessons: [
            { //lesson 1 in module 1 in section 2 
              title: "The Last Name on the Terminal",
              content: "...lore-rich story or educational content...",
              image: "URL",
              audio: "URL"
            }
          ]
        }
      ]
    }
  ]
};
