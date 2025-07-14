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
content:"Okay scientist — it’s time to take a super close look at your robot's brain: the **Arduino Uno** board!\nIt’s filled with tiny parts, each one with its own special job.\nLet’s meet them all!\n\n1️⃣ **USB Port**\nThis is where you plug in the USB cable to connect your Arduino to your computer.\nIt sends your code to the board and powers it up.\n\n2️⃣ **Power Jack**\nThis is where you can connect a battery or power adapter when your Arduino isn’t connected to your computer.\n\n3️⃣ **Digital Pins (0 to 13)**\nLittle holes you connect wires to.\nThey can turn LEDs on and off, read buttons, and send signals.\n\n4️⃣ **Analog Pins (A0 to A5)**\nThese read values from sensors like temperature, light, or sound.\nThey understand signals between 0 to 5 volts.\n\n5️⃣ **GND (Ground Pins)**\nThese are the black pins used to complete your circuits.\nWithout them, nothing will work!\n\n6️⃣ **5V and 3.3V Pins**\nThey give power to your sensors and LEDs.\n5V is for most things, 3.3V is for special modules.\n\n7️⃣ **Reset Button**\nIf your board freezes, press this to restart it.\nLike a tiny refresh button.\n\n8️⃣ **ATmega328P Microcontroller Chip**\nThe black rectangular chip in the middle.\nIt’s the brain of your Arduino that runs your code.\n\n9️⃣ **TX and RX LEDs**\nTiny lights that blink when your board is sending or receiving data.\nThey show your Arduino is talking to your computer.\n\n🔟 **Crystal Oscillator**\nA tiny silver part next to the chip.\nIt keeps time for your Arduino, helping it count seconds and control timing in your code.\nIt runs at 16 MHz — super fast!\n\n1️⃣1️⃣ **Voltage Regulator**\nA tiny black part near the power jack.\nIt controls how much voltage your board gets, keeping it safe from too much power.\n\n1️⃣2️⃣ **Power LED (ON LED)**\nA tiny light that stays on when your Arduino has power.\nIf this is off, something’s wrong!\n\n1️⃣3️⃣ **ICSP (In-Circuit Serial Programming) Header Pins**\nA group of six pins next to the chip.\nThey’re used to program the Arduino chip directly if it stops working.\nThink of it like a secret backdoor.\n\n1️⃣4️⃣ **Resettable Polyfuse**\nA tiny yellow part near the USB port.\nIt protects your Arduino from too much current.\nIf you draw too much power, it’ll disconnect and reconnect when things are safe again.\n\n1️⃣5️⃣ **AREF (Analog Reference) Pin**\nIt’s used to set a custom voltage limit for analog readings.\nYou’ll use this in some advanced projects.\n\n1️⃣6️⃣ **Serial Header Pins**\nThese extra pins connect to the USB chip on your board.\nThey help with serial communication.\n\n1️⃣7️⃣ **Barrel Jack Protection Diode**\nA tiny black part next to the power jack.\nIt stops power from going the wrong way and damaging your board.\n\nAnd that’s it!\nNow you know every tiny part of your Arduino Uno.\nYou’re not just a scientist — you’re officially a robot brain master now!\nLet’s get it blinking!",
image: "url",
audio:"url"
  }
]
        },{//module 4 in section 1 
          title:"Giving Life to Arduino: Powering It Up",
          lesson:[
            {//lesson 1 im module 4 in section 1 
               title:"How to Power Your Arduino the Right Way",
               content:"Alright scientist — now that you know every tiny part on your Arduino, let’s learn how to bring it to life!\nYep, it needs power before it can blink lights or control robots.\nBut did you know there are different ways to power up your Arduino?\nLet’s check them out!\n\n1️⃣ **USB Cable**\nThis is the easiest way.\nYou plug a USB cable from your computer into the Arduino’s USB port.\nIt powers up the board and also lets you send code to it.\nPerfect for coding and testing.\n\n2️⃣ **Power Jack (Barrel Jack)**\nYou can connect a 7 to 12-volt adapter here.\nIt’s great for when your project is running without a computer.\nThe board’s voltage regulator makes sure it gets the right amount of power.\n\n3️⃣ **Vin Pin**\nThis pin lets you connect an external battery or power source directly.\nUse this if you’re powering your Arduino from a battery pack.\nJust remember it needs to be between 7 to 12 volts.\n\n4️⃣ **5V and 3.3V Pins**\nYou can also power tiny modules and sensors from these pins.\nBut careful — they don’t power the whole board, just connected parts.\n5V is for most components, and 3.3V is for sensitive ones.\n\n🟢 **Important:** Never plug in more than one power source at a time unless you know what you’re doing.\nAnd never connect more than 12 volts — it can damage your board.\n\nAnd that’s it!\nNow you know how to safely power up your Arduino and get it ready to blink, beep and control your cool gadgets!\nReady to plug it in? Let’s go!",
               image:"url",
               audio : "url"
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
