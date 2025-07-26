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
content:"Okay scientist — it’s time to take a super close look at your robot's brain: the **Arduino Uno** board!\nIt’s filled with tiny parts, each one with its own special job.\nLet’s meet them all!\n\n1️⃣ **USB Port**\nThis is where you plug in the USB cable to connect your Arduino to your computer.\nIt sends your code to the board and powers it up.\n\n2️⃣ **Power Jack**\nThis is where you can connect a battery or power adapter when your Arduino isn’t connected to your computer.\n\n3️⃣ **Digital Pins (0 to 13)**\nLittle holes you connect wires to.\nThey can turn LEDs on and off, read buttons, and send signals.\n\n4️⃣ **Analog Pins (A0 to A5)**\nThese read values from sensors like temperature, light, or sound.\nThey understand signals between 0 to 5 volts.\n\n5️⃣ **GND (Ground Pins)**\nThese are the black pins used to complete your circuits.\nWithout them, nothing will work!\n\n6️⃣ **5V and 3.3V Pins**\nThey give power to your sensors and LEDs.\n5V is for most things, 3.3V is for special modules.\n\n7️⃣ **Reset Button**\nIf your board freezes, press this to restart it.\nLike a tiny refresh button.\n\n8️⃣ **ATmega328P Microcontroller Chip**\nThe black rectangular chip in the middle.\nIt’s the brain of your Arduino that runs your code.\n\n9️⃣ **TX and RX LEDs**\nTiny lights that blink when your board is sending or receiving data.\nThey show your Arduino is talking to your computer.\n\n🔟 **Crystal Oscillator**\nA tiny silver part next to the chip.\nIt keeps time for your Arduino, helping it count seconds and control timing in your code.\nIt runs at 16 MHz — super fast!\n\n1️⃣1️⃣ **Voltage Regulator**\nA tiny black part near the power jack.\nIt controls how much voltage your board gets, keeping it safe from too much power.\n\n1️⃣2️⃣ **Power LED (ON LED)**\nA tiny light that stays on when your Arduino has power.\nIf this is off, something’s wrong!\n\n1️⃣3️⃣ **ICSP (In-Circuit Serial Programming) Header Pins**\nA group of six pins next to the chip.\nThey’re used to program the Arduino chip directly if it stops working.\nThink of it like a secret backdoor.\n\n1️⃣4️⃣ **Resettable Polyfuse**\nA tiny yellow part near the USB port.\nIt protects your Arduino from too much current.\nIf you draw too much power, it’ll disconnect and reconnect when things are safe again.\n\n1️⃣5️⃣ **AREF (Analog Reference) Pin**\nIt’s used to set a custom voltage limit for analog readings.\nYou’ll use this in some advanced projects.\n\n1️⃣6️⃣ **Serial Header Pins**\nThese extra pins connect to the USB chip on your board.\nThey help with serial communication.\n\n1️⃣7️⃣ **Barrel Jack Protection Diode**\nA tiny black part next to the power jack.\nIt stops power from going the wrong way and damaging your board.\n\n 1️⃣8️⃣ **Serial Communication Chip**\nThis chip helps your Arduino talk to your computer through USB.\nIn original Arduino Uno, it's a tiny square chip called the **ATmega16U2**.\nIn clone boards, it’s usually a cheaper chip like **CH340G** or **CP2102**.\nWithout this chip, your Arduino can’t upload code or talk to your PC.\n\nAnd that’s it!\nNow you know every tiny part of your Arduino Uno.\nYou’re not just a scientist — you’re officially a robot brain master now!\nLet’s get it blinking!",
image: "url",
audio:"url"
  }
]
        },{//module 4 in section 1 
          title:"Giving Life to Arduino: Powering It Up",
          lessons:[
            {//lesson 1 im module 4 in section 1 
               title:"How to Power Your Arduino the Right Way",
               content:"Alright scientist — now that you know every tiny part on your Arduino, let’s learn how to bring it to life!\nYep, it needs power before it can blink lights or control robots.\nBut did you know there are different ways to power up your Arduino?\nLet’s check them out!\n\n1️⃣ **USB Cable**\nThis is the easiest way.\nYou plug a USB cable from your computer into the Arduino’s USB port.\nIt powers up the board and also lets you send code to it.\nPerfect for coding and testing.\n\n2️⃣ **Power Jack (Barrel Jack)**\nYou can connect a 7 to 12-volt adapter here.\nIt’s great for when your project is running without a computer.\nThe board’s voltage regulator makes sure it gets the right amount of power.\n\n3️⃣ **Vin Pin**\nThis pin lets you connect an external battery or power source directly.\nUse this if you’re powering your Arduino from a battery pack.\nJust remember it needs to be between 7 to 12 volts.\n\n4️⃣ **5V and 3.3V Pins**\nYou can also power tiny modules and sensors from these pins.\nBut careful — they don’t power the whole board, just connected parts.\n5V is for most components, and 3.3V is for sensitive ones.\n\n🟢 **Important:** Never plug in more than one power source at a time unless you know what you’re doing.\nAnd never connect more than 12 volts — it can damage your board.\n\nAnd that’s it!\nNow you know how to safely power up your Arduino and get it ready to blink, beep and control your cool gadgets!\nReady to plug it in? Let’s go!",
               image:"url",
               audio : "url"
            }
          ]

        },{//module 5 in section 1
          title:"Tiny Legs vs Tiny Pads: DIP and SMD Explained",
          lessons:[
            {//lesson 1 in module 5 in section 1 
              title:"What’s the Difference Between DIP and SMD?",
              content:"Alright scientist — today we’re going to talk about the tiny parts that live on your Arduino and other electronic boards.\nYou might have seen some with long metal legs and others like tiny bugs stuck flat on the board.\nThey’re called **DIP** and **SMD** components!\nLet’s see what they are.\n\n1️⃣ **DIP (Dual In-Line Package)**\nThese are the classic electronic parts with two rows of metal legs sticking out.\nThey go through holes on the board and are soldered on the other side.\nDIP parts are big and easy to replace, perfect for beginners.\n**Example:** The ATmega328P chip on your Arduino Uno is a DIP.\n\n2️⃣ **SMD (Surface Mount Device)**\nThese are tiny parts that don’t have legs.\nInstead, they have tiny metal pads and stick flat on the surface of the board.\nThey’re soldered directly onto the board without holes.\nSMD parts are small, light, and used when you want to save space.\n**Example:** The little black chips on your Arduino Nano are SMD.\n\n🟢 **Why Does It Matter?**\nBecause it affects how easy it is to fix or upgrade your board.\nDIP parts are bigger and can be replaced with your hands and a soldering iron.\nSMD parts are tiny and need special tools.\n\nAnd that’s it!\nNow you know the difference between those long-legged parts and the tiny stuck-on bits on your electronics.\nLook at your Arduino and see if you can spot them both!",
              audio:"ul",
              image:"ul"
              
            }
          ]
        },{//module 6 in section 1 
title:"Real vs Copy: Arduino Clone and Original Explained",
lessons:[
  {//lesson1 in module 6 in section 1 
title:"What’s the Difference Between an Original and a Clone Arduino?",
content:"Alright scientist — have you ever seen two Arduinos that look almost the same but one is cheaper?\nThat’s because one is an **Original** and the other is a **Clone**.\nLet’s learn the difference!\n\n1️⃣ **Original Arduino**\nThis is made by the official Arduino company in Italy.\nIt uses high-quality parts, has solid build quality, and comes with official support and updates.\nIt’s reliable and tested.\n\n2️⃣ **Clone Arduino**\nThis is made by other factories copying the original design.\nThey work the same for most projects but might use cheaper components and might not last as long.\nSome have small issues like USB connection problems.\n\n🟢 **Why It Matters**\nIf you’re just learning or making a hobby project, a good quality clone works fine.\nBut for serious projects, school competitions, or robots you’ll sell or keep, go for the Original.\n\nAnd that’s it!\nNow you know how to tell a clone from an original and when to use which one.",
image:"url",
audio:"url"
  },{//lesson 2 in module 6 in section 1 
  title:"Which One Should You Choose?",
  content:"Okay scientist — now that you know about Original and Clone Arduinos, let’s figure out which one is right for you.\n\n🟢 **Go for an Original Arduino if:**\nYou’re working on a serious project that needs to be super reliable.\nYou’re entering a competition or building something important.\nYou want long-term support, updates, and guaranteed quality.\n\n🟢 **Go for a Clone Arduino if:**\nYou’re learning, experimenting, or building simple hobby projects.\nYou’re on a tight budget and want something affordable.\nYou don’t mind fixing little connection issues if they happen.\n\n💡 **Important Tip:** Always buy from trusted sellers, even for clones.\nSome very cheap clones use poor parts and may stop working suddenly.\n\nSo remember — it’s not about which is good or bad.\nIt’s about what your project needs and what you can afford.\nNow you know how to pick the right board for your mission!\nLet’s move to the next adventure!"  ,
  image:"url",
  audio:"urk",
  }
]
        },{//module 7 in section 1
          title:"The Secret Startup Code: What is a Bootloader?",
          lessons:[
            {//lesson 1 in module 7 in section 1 
              title:"Why Your Arduino Needs a Bootloader?",
              content:"Okay scientist — ever wondered how your Arduino knows what code to run when you power it on?\nThat’s thanks to something called a **Bootloader**.\nLet’s see what it does!\n\nA **Bootloader** is a tiny program already stored inside your Arduino’s chip.\nIts job is to wake up the board and get it ready to run your code.\nIt also helps your computer upload new code to the board through USB.\n\nWithout the bootloader, your Arduino wouldn’t know what to do when it’s turned on.\nIt’s like the tiny manager that starts work before the big machines do.\n\n🟢 **Can You Change It?**\nYes — you can erase and install a new bootloader using another Arduino or a special programmer.\nAnd here’s a secret: you can also do it using the **ICSP pins** on your board.\nThese six tiny pins let you connect directly to the chip and upload a fresh bootloader if something goes wrong.\nIt’s like giving your robot brain a fresh memory reset!\n\nBut for now, we’ll leave that to the pros.\nNow you know why that little chip needs a bootloader — it’s the first thing that runs every time you power up your robot brain!",
              image:"url",
              audio:"url"
            }
          ]
        },{//module 8 in section 1 
        title:"The Brain’s Playground: What is a PCB?",
        lessons:[
          {//lesson 1 in module 8 in section 1
            title:"How PCBs Work Inside Your Arduino",
            content:"Alright scientist — have you ever seen that green board under your Arduino’s parts?\nThat’s called a **PCB**, short for **Printed Circuit Board**.\nLet’s learn how it works!\n\nA PCB is a flat board made of plastic or fiberglass with thin copper lines printed on it.\nThose copper lines act like tiny roads carrying electricity between all the parts.\n\nIt holds and connects the microcontroller, LEDs, resistors, and pins without using a bunch of messy wires.\nThis makes your board neat, safe, and fast.\n\n🟢 **Why Use a PCB?**\nIt makes electronics compact, easy to fix, and works faster because everything’s close together.\nIt also stops loose connections and saves tons of space compared to wires.\n\nNow you know — that green board isn’t just for looks.\nIt’s the streets and playground where your Arduino’s tiny parts live and talk to each other!",
            audio:"url",
            image:"url"
          }
        ]  
        },{//module 9 in section 1 
title:"Choose Your Hero: Picking the Right Arduino Board.",
lessons:[
  {//lesson 1 in module 9 in section 1 
  title:"How to Choose the Best Arduino Board for Your Project",
  content:"Okay scientist — there are so many types of Arduino boards.\nBut which one should you use?\nLet’s figure it out!\n\n1️⃣ **Arduino Uno**\nBest for beginners, small robots, and learning.\nIt’s simple, reliable, and has all the basics.\n\n2️⃣ **Arduino Nano**\nGreat for projects where space is tight.\nSame brain as Uno but tiny.\n\n3️⃣ **Arduino Mega**\nUse this when you need lots of sensors or devices connected.\nIt has extra pins and memory.\n\n4️⃣ **Arduino Leonardo**\nPick this if you want your Arduino to act like a keyboard or mouse.\n\n5️⃣ **IoT Boards**\nLike the Nano 33 IoT or MKR WiFi 1010 for WiFi/Bluetooth projects.\n\n6️⃣ **Wearable Boards**\nLike Gemma or LilyPad for projects you wear.\n\n🟢 **Tip:** Check your project’s size, number of connections, and if it needs WiFi or Bluetooth.\nThat’ll tell you which board is your hero.\n\nNow you know how to pick the perfect robot brain for every mission!",
  image:"url",
  audio:"url"  
  }
]
        },{//module 10 in section 1
        title:"Meet the Team: Sensors, Motors, and More",
        lessons:[
          {//lesson 1 in module 10 in section 1 
          title:"What Are the Parts You’ll Use with Arduino?",
          content:"Alright scientist — your Arduino is smart, but it needs teammates to build cool gadgets.\nLet’s meet the types of components you’ll use!\n\n1️⃣ **Sensors**\nThese help your robot sense the world.\nThey detect light, temperature, distance, motion, sound, and more.\n\n2️⃣ **Actuators**\nParts that move or perform actions.\nLike motors, servos, relays, and buzzers.\nThey make stuff move or make noise.\n\n3️⃣ **Displays**\nShow information like numbers, text, or images.\nLike LCD screens or OLED displays.\n\n4️⃣ **LEDs and Lights**\nTiny bulbs that blink, glow, or signal.\n\n5️⃣ **Switches and Buttons**\nLet you give commands to your Arduino by pressing or flipping something.\n\n6️⃣ **Power Modules**\nBatteries, adapters, or solar panels that give power to your projects.\n\n🟢 **Fun Fact:** Combining sensors, actuators, and lights makes smart robots and gadgets.\nNow you know your Arduino’s dream team!\nLet’s get building!"  ,
          image:"url",
          audio:"url"
          }
        ]  
        },{//module 11 in section 1 
        title:"Tiny Computers: What is a Microcontroller?",
        lessons:[
          {//lesson 1 in module 11 in section 1 
            title:"Meet the Brain Behind Your Gadgets",
            content:"Alright scientist — before we dive into coding and gadgets, let’s learn about what makes your Arduino smart.\nIt’s something called a **Microcontroller**.\nSo, what is it?\n\nA **Microcontroller** is a tiny computer inside a small chip.\nIt doesn’t have a keyboard, mouse, or screen like your regular computer.\nBut it can think, remember, and control things like lights, motors, and sensors.\n\nYour Arduino board is built around a microcontroller called the **ATmega328P**.\nIt listens to your code, reads sensors, makes decisions, and controls machines.\n\nYou’ll find microcontrollers everywhere — in cars, toys, TVs, washing machines, drones, and robots.\nThey’re like tiny robot brains inside our gadgets.\n\nAnd that’s it!\nNow you know what a microcontroller is — a mini brain waiting to follow your orders!",
            image:"url",
            audio:"url"
          }
        ]  
        },{//module 12 in section 1 
        title:"The Invisible Team: Voltage, Current, and Resistance",
        lessons:[
{//lesson 1 in module 12 in section 1 
title:"What Are Voltage, Current, and Resistance?",
content:"Okay scientist — before building circuits, let’s meet the invisible players that run inside your wires.\nThey are called **Voltage**, **Current**, and **Resistance**.\nLet’s see what they do!\n\n1️⃣ **Voltage (V)**\nThink of voltage as the pressure pushing electricity through a wire.\nIt’s like the water pressure in a pipe.\nMore voltage means more push.\n\n2️⃣ **Current (A)**\nCurrent is the actual flow of electricity moving through your circuit.\nIt’s like the water flowing inside the pipe.\nMore current means more electricity moving.\n\n3️⃣ **Resistance (Ω)**\nResistance slows down the current.\nIt’s like a narrow spot in the pipe that makes it harder for water to flow.\nResistors, LEDs, and components add resistance to protect your circuits.\n\n🟢 **Fun Fact:**\nVoltage pushes, current flows, and resistance controls the flow.\nThey work together to make your gadgets light up and move safely.\n\nNow you know the invisible team inside every electronic project!",
image:"url",
audio:"url"  
}
        ]  
        },{//module 13 in section 1 
        title:"Making a Loop: What is a Circuit?",
        lessons:[
          {//lesson1 in module 13 in section 1 
          title:"How Electricity Travels Through a Circuit",
          content:"Alright scientist — now that you know about electricity, let’s see how it moves around to make things work.\nIt travels inside something called a **Circuit**.\nLet’s see what that means!\n\nA **Circuit** is a complete loop made by connecting wires, parts, and power.\nElectricity flows from the power source, through your parts like LEDs and motors, and back to the power source.\nThat’s called a closed circuit.\n\nIf there’s a break in the loop, it’s an open circuit, and nothing works.\nLike when you open a switch, the loop breaks, and your light turns off.\n\n🟢 **Important:**\nAlways connect your parts so the power can make a complete circle.\nIf it can’t, your gadgets won’t work.\n\nNow you know how to build a path for electricity and bring your projects to life!",
          image:"url",
          auido:"url"  
          }
        ]  
        },{//module 14 in section 1
          title:"Talking to Robots: What is Programming?" ,
          lessons:[
            {//lesson 1 in module 14 in section 1 
            title:"How Code Tells Your Arduino What to Do",
            content:"Alright scientist — before we can make lights blink and motors move, you need to know what **programming** is.\nProgramming is when you write instructions for your robot brain to follow.\nThese instructions are called **code**.\n\nYour Arduino reads this code and does exactly what you tell it to do.\nYou can make it blink LEDs, play sounds, or control motors.\nIt’s like writing a recipe for your robot.\n\nAnd the cool part?\nEven one line of code can make something happen.\nWe’ll start writing code together very soon.\nNow you know — code is the language your robot brain understands!",
            image:"url",
            audio:"url"  
            }
          ]
          },{//module 15 in section 1
          title:"Your Robot's Workshop: What is the Arduino IDE?",
        lessons:[
            {//lesson 1 in module 15 in section 1
            title:"Where You Write and Send Code to Your Arduino",
            content:"Okay scientist — if you’re going to talk to your robot, you need a place to write your instructions.\nThat place is called the **Arduino IDE**.\nIt stands for **Integrated Development Environment**.\n\nThe IDE is a software on your computer where you type your code.\nIt checks your code for mistakes and sends it to your Arduino through the USB cable.\n\nIt has buttons like **Verify** to check your code, **Upload** to send it to the board, and a **Serial Monitor** to see messages from your Arduino.\n\nNow you know — the IDE is your robot’s control room!\nYou’ll be using it a lot very soon.",
            image:"url",
            audio:"url"
        }
        ]
      },{//module 16 in section 1
        title:"Choosing Your Pins: What is Input and Output?",
        lessons:[
          {//lesson 1 in module 16 in section 1
          title:"How Your Arduino Pins Listen and Talk",
          content:"Alright scientist — your Arduino board has tiny holes called **pins**.\nSome of them listen to the world, and some of them control things.\nLet’s see how that works.\n\nWhen you set a pin as **INPUT**, it listens to buttons, sensors, or signals coming in.\nIt’s like a tiny ear waiting for information.\n\nWhen you set a pin as **OUTPUT**, it controls things like LEDs, buzzers, or motors.\nIt’s like a tiny mouth that gives commands.\n\nYou’ll tell your Arduino what each pin should do in your code.\nNow you know — some pins listen, some pins talk!",
          image:"url",
          audio:"url"  
          }
        ]
      },{//module 17 in section 1
        title:"Circuit Safety: Do’s and Don’ts",
        lessons:[
          {//lesson 1 in module 17 in section 1
            title:"How to Keep Your Arduino and Yourself Safe",
            content:"Okay scientist — before we start wiring things up, let’s learn a few safety tips so you don’t hurt your robot or yourself.\n\n1️⃣ Always double-check your connections before turning on power.\n2️⃣ Never connect power directly to ground — it can damage your board.\n3️⃣ Don’t touch wires or metal parts while power is on.\n4️⃣ Use the right power — never use more than 12 volts on your Arduino.\n5️⃣ Always disconnect your Arduino before changing connections.\n\nFollow these rules and your projects will stay safe and work perfectly!\nNow you’re ready to wire up your first circuit soon!",
            image:"url",
            audio:"url"
          }
        ]
      },{//module 18 in section 1
      title:"Meet the Breadboard: No Solder Needed",
      lessons:[
        {//lesson 1 in module 18 in section 1
        title:"How a Breadboard Connects Wires and Parts",
        content:"Alright scientist — before you start wiring up LEDs and buzzers, you need to meet your new friend: the **Breadboard**.\n\nA **Breadboard** is a plastic board with lots of tiny holes.\nYou can stick wires and parts into these holes to connect them without using solder.\n\nInside, the holes are connected in lines.\nThis lets electricity flow between the parts you plug in.\nIt’s perfect for testing circuits quickly and safely.\n\nYou’ll also use **Jumper Wires** — flexible colored wires you plug into the breadboard and Arduino pins.\nThey let you build your circuits easily.\n\nNow you know — breadboards and jumper wires make connecting parts fast and fun!",
        image:"url",
        audio:"url"  
        }
      ]  
      },{//module 19 in section 1
  title: "Simulating Analog Magic: Understanding PWM",
  lessons: [
    {
      title: "What is PWM and Why Arduino Uses It",
      content: "Alright scientist — ever wondered how your Arduino can fade an LED or control motor speed without real analog output?\nIt’s all thanks to something called **PWM**, or **Pulse Width Modulation**.\n\nPWM is a trick where the Arduino turns a pin on and off very fast.\nBy changing how long the signal stays ON versus OFF, it creates an effect that feels like smooth control.\n\nThink of it like blinking a light so fast that it looks dim or bright.\nThe longer it stays ON in each blink, the brighter it looks — that’s PWM!\n\nPins with a **~** symbol on your Arduino can do PWM.\nThey let you control brightness, motor speed, and even tones!\n\nNow you know — PWM is your secret weapon for controlling analog-like behavior using digital pins!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 20 in section 1
  title: "Arduino Meets Your PC: How They Talk",
  lessons: [
    {
      title: "How Arduino Communicates with Your Computer",
      content: "Okay scientist — ever wondered how your Arduino gets the code from your computer?\nIt talks using something called **Serial Communication**.\n\nYour Arduino has a chip that acts like a translator between USB and its brain.\nOn original Uno, that’s the **ATmega16U2** chip.\nOn clones, it’s often **CH340G** or **CP2102**.\n\nWhen you upload code, your computer sends it through USB.\nThis chip converts the USB data into serial data that the Arduino understands.\n\nYou can also send messages to and from Arduino using the **Serial Monitor** in the Arduino IDE.\n\nNow you know — there’s a tiny translator onboard that helps your robot understand your computer’s language!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 21 in section 1
  title: "Speaking Robot: Arduino Communication Protocols",
  lessons: [
    {
      title: "How Arduinos Talk to Other Devices",
      content: "Alright scientist — Arduinos often need to talk to sensors, displays, or even other robots.\nTo do that, they use **communication protocols** — special rules for how data is sent.\n\nLet’s meet the three most common ones:\n\n1️⃣ **UART (Serial)**\nThis is what Arduino uses to talk to your computer using TX and RX pins.\nSimple and direct, good for short-distance talking.\n\n2️⃣ **I2C (Eye-Squared-C)**\nThis uses just two wires — SDA and SCL — to connect multiple devices.\nEach device has an address so Arduino knows who to talk to.\nGreat for sensors and displays.\n\n3️⃣ **SPI (Serial Peripheral Interface)**\nThis is super fast and uses four wires: MISO, MOSI, SCK, and SS.\nIt’s great for talking to memory cards, displays, and high-speed stuff.\n\nNow you know — Arduino speaks many languages, and each protocol is like a different accent for a different job!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 22 in section 1
  title: "Know Every Pin: The Arduino Uno Pinout",
  lessons: [
    {
      title: "Exploring Every Pin on the Arduino Uno",
      content: "Okay scientist — your Arduino Uno has a lot of tiny holes called **pins**, and each one does something special.\nLet’s go through them all!\n\n🔹 **Digital Pins (0-13)**\nUsed for INPUT or OUTPUT. Pins 0 and 1 are also used for Serial (TX/RX).\n\n🔹 **PWM Pins (~3, ~5, ~6, ~9, ~10, ~11)**\nThese can simulate analog using PWM.\n\n🔹 **Analog Pins (A0-A5)**\nUsed to read analog sensor values like light or temperature.\n\n🔹 **Power Pins**\n- 3.3V: For low-voltage parts\n- 5V: Main power output for components\n- GND: Ground\n- Vin: External power input (7-12V)\n\n🔹 **AREF Pin**\nUsed to set an external reference voltage for analog readings.\n\n🔹 **Reset Pin**\nRestarts your Arduino if you connect it to GND.\n\nNow you know every single pin — time to plug and play like a real engineer!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 23 in section 1
  title: "COM Ports and Virtual Wires",
  lessons: [
    {
      title: "What is a COM Port and Why Arduino Needs It",
      content: "Alright scientist — when you plug your Arduino into your PC, something called a **COM port** appears.\nIt’s a virtual serial port — like an invisible wire between your computer and Arduino.\n\nYour Arduino’s USB-to-Serial chip (like ATmega16U2 or CH340G) creates this COM port.\n\nThe Arduino IDE uses this COM port to upload code and receive data through the **Serial Monitor**.\n\nSometimes your Arduino won’t show up unless drivers are installed (especially for CH340G).\n\nYou can find the COM port number in the Tools > Port menu in the IDE.\nThat’s how the IDE knows where your robot is plugged in!\n\nNow you know — that COM port is your robot’s invisible phone line to your computer!",
      image: "url",
      audio: "url"
    }
  ]
},{//module 24 in section 1
  title: "The Language of Robots: What Code Does Arduino Understand?",
  lessons: [
    {
      title: "What Language is Arduino Coded In?",
      content: "Okay scientist — now that you're almost ready to start coding, let’s answer one big question.\nWhat language does your Arduino speak?\n\nArduino uses a special version of **C++**, a powerful computer language.\nIt’s made super simple for beginners.\nYour files are called **.ino** files — short for ‘Arduino Sketches’.\n\nEvery Arduino sketch has two main parts:\n1️⃣ **setup()** – This runs once when the Arduino starts.\n2️⃣ **loop()** – This keeps running again and again forever.\n\nYou also use **libraries** to get extra powers — like controlling sensors or motors.\nLibraries are like magic toolboxes made by smart engineers.\n\nNow you know — you’ll be writing simplified C++ to make your robot brain follow your instructions!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 25 in section 1
  title: "Behind the Scenes: What Happens When You Upload Code?",
  lessons: [
    {
      title: "From Sketch to Robot Brain: Code Upload Explained",
      content: "Okay scientist — ever wonder what happens when you click that UPLOAD button?\nLet’s break it down.\n\n1️⃣ Your Arduino IDE first checks your code.\nIt looks for mistakes and compiles it into a special machine language called **hex code**.\n\n2️⃣ This hex file is then sent through the USB cable.\nThe tiny chip on your board — called a **USB-to-Serial chip** — changes the data into a format your Arduino understands.\n\n3️⃣ The Arduino's **bootloader** reads the code and saves it into its flash memory.\nIt’s like your robot writing the instructions into its brain.\n\nAnd boom! Your Arduino restarts and begins running your new program instantly.\n\nNow you know — uploading is not just pressing a button, it’s a robot transformation!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 26 in section 1
  title: "Sketchbooks and Storage: Where Your Code Lives",
  lessons: [
    {
      title: "Understanding Arduino Sketches and Folders",
      content: "Alright scientist — when you save your project, where does it all go?\nLet’s explore your robot’s notebook — the **Sketchbook**.\n\nEvery time you save a new Arduino sketch, it gets stored in your **Sketchbook folder**.\nThat’s a special place where the IDE keeps all your `.ino` files.\n\nEach sketch is saved in a folder with the same name.\nExample: `robotlight.ino` will live in a folder called `robotlight/`.\n\nYou can find your Sketchbook folder in the Arduino IDE settings.\nYou can also organize your sketches into folders to keep everything clean.\n\nNow you know — your code has a cozy digital home where all your robot ideas live!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 27 in section 1
  title: "Time Magic: Delays and Waiting Wisely",
  lessons: [
    {
      title: "How Delay and Timing Work on Arduino",
      content: "Okay scientist — when your robot waits or blinks slowly, it’s using a trick called **delay**.\nLet’s understand how Arduino keeps time.\n\n`delay(1000)` means ‘wait 1000 milliseconds’ — or 1 second.\nDuring that time, Arduino does nothing else — it’s frozen!\n\nThat’s why we need to use it carefully.\nToo many delays, and your robot becomes lazy!\n\nFor smarter projects, you’ll later learn how to use **millis()**, which keeps time without freezing the robot.\nBut for now, delay is our beginner tool to control timing.\n\nNow you know — time is in your hands, use it wisely!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 28 in section 1
  title: "Memory Matters: How Your Arduino Stores Stuff",
  lessons: [
    {
      title: "Flash, SRAM, and EEPROM: What's Inside Your Board?",
      content: "Okay scientist — let’s open up your robot brain and see how it stores things.\nYour Arduino Uno has three types of memory:\n\n🔹 **Flash** – This holds your code.\nWhen you upload a sketch, it’s written here.\nIt doesn’t get erased when you unplug your board.\n\n🔹 **SRAM** – This is your robot’s short-term memory.\nIt’s used for variables, calculations, and temporary data.\nWhen power goes off, this memory is lost.\n\n🔹 **EEPROM** – This is tiny long-term memory.\nYou can write data to it and it stays even when power is gone.\nIt’s great for saving settings.\n\nNow you know — your robot brain has different kinds of memory for different jobs!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 29 in section 1
  title: "Resetting the Brain: How Arduino Reboots",
  lessons: [
    {
      title: "How Arduino Starts Over With the Reset Button",
      content: "Okay scientist — sometimes, your robot needs a fresh start.\nThat’s what the **reset button** is for!\n\nPressing the reset button restarts the code from the beginning, just like turning the power off and on.\n\nArduino also resets automatically when you upload new code.\nThis is done through a hidden trick — a small pulse sent over the DTR line and a tiny capacitor connected to the reset pin.\n\nResetting doesn’t erase your code, it just starts it again from the top.\n\nNow you know — when your robot is acting weird, try giving it a gentle reset!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 30 in section 1
  title: "Tiny Symbols, Big Meaning: Code Punctuation",
  lessons: [
    {
      title: "Why Semicolons and Brackets Matter",
      content: "Alright scientist — time to talk about the tiny symbols in your code that hold big power!\nIn Arduino code, these symbols matter a LOT:\n\n🔹 `;` ends a statement. Miss one and your robot won’t understand the code.\n🔹 `{}` wrap blocks of code — like inside setup() and loop().\n🔹 `//` starts a comment — for notes and explanations in your code.\n\nWhen you write good punctuation, your robot reads smoothly.\nWhen you forget one, your IDE throws errors.\n\nNow you know — writing code is like writing a secret letter to your robot, and every dot and bracket counts!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 31 in section 1
  title: "Tiny Computers Everywhere: What is Embedded?",
  lessons: [
    {
      title: "Why Arduino is an Embedded System",
      content: "Okay scientist — let’s zoom out and see where Arduino fits in the world.\nIt’s part of something called **embedded systems**.\n\nAn **embedded system** is a tiny computer built into a machine to do a special job.\nYour washing machine, car, microwave — all have embedded systems.\n\nArduino is also an embedded system — it runs one program at a time and controls hardware.\n\nUnlike full computers, it doesn’t have an operating system.\nIt just does what you told it to in your sketch.\n\nNow you know — your Arduino is part of the hidden world of tiny, smart machines!",
      image: "url",
      audio: "url"
    }
  ]
},{//module 32 in section 1
  title: "Your Control Center: Touring the Arduino IDE",
  lessons: [
    {
      title: "Buttons, Boards, Ports – Know Your IDE",
      content: "Alright scientist — now let’s explore your robot’s mission control: the **Arduino IDE**!\n\n🔹 **Verify (✓):** Checks your code for errors before uploading.\n🔹 **Upload (→):** Sends your code to the Arduino board.\n🔹 **New/Open/Save:** Manage your sketches.\n🔹 **Serial Monitor (🔍):** Lets you talk to your robot.\n\n💡 Go to **Tools → Board** to select your Arduino model.\nGo to **Tools → Port** to choose the COM port.\nThese two settings must match, or your upload won’t work!\n\nNow you know — your IDE is your robot command center. Let’s master it!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 33 in section 1
  title: "Oops! Common Beginner Mistakes",
  lessons: [
    {
      title: "Troubleshooting Your First Uploads",
      content: "Okay scientist — sometimes robots don’t listen. That’s okay!\nHere are common mistakes and how to fix them:\n\n1️⃣ **Wrong Board Selected:** Double check Tools → Board.\n2️⃣ **Wrong COM Port:** Go to Tools → Port and select the one with your Arduino.\n3️⃣ **Missing `setup()` or `loop()`:** Your code must have both!\n4️⃣ **Loose USB or Power Issues:** Try reconnecting or using another cable.\n5️⃣ **Bad Wiring:** Check if LEDs and components are wired right.\n\nNow you know — every scientist makes mistakes. But YOU now know how to fix them!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 34 in section 1
  title: "Under the Hood: What the IDE Really Does",
  lessons: [
    {
      title: "What Happens Behind the Upload Button",
      content: "Okay scientist — let’s peek behind the scenes!\nWhen you click UPLOAD in the Arduino IDE, here’s what happens:\n\n🔹 **Step 1:** The IDE checks and compiles your sketch using a tool called **GCC** (a C++ compiler).\n🔹 **Step 2:** The code turns into a **.hex file** — a special format for your Arduino.\n🔹 **Step 3:** The IDE calls a helper tool called **avrdude** that sends this file to your board.\n🔹 **Step 4:** Your board’s bootloader takes it in and stores it in Flash memory.\n\nNow you know — the IDE is like a factory, and clicking UPLOAD starts a smart robot assembly line!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 35 in section 1
  title: "Arduino vs Raspberry Pi: Two Robot Brains",
  lessons: [
    {
      title: "How Arduino and Pi are Different",
      content: "Alright scientist — people often ask: What’s the difference between Arduino and Raspberry Pi?\nLet’s make it crystal clear.\n\n🔹 **Arduino** is a **microcontroller**. It runs one sketch (program) again and again.\nIt’s great for controlling sensors, motors, and real-time tasks.\n\n🔹 **Raspberry Pi** is a **microprocessor**. It’s like a small computer with an operating system.\nIt can run many programs at once and even has a desktop.\n\nArduino is better for electronics and real-time robot tasks.\nRaspberry Pi is better for apps, internet, or camera projects.\n\nNow you know — both are powerful, but your Arduino is made to control the physical world like a pro!",
      image: "url",
      audio: "url"
    }
  ]
}



      ]
    },
    { //section 2
      title: "The Spark Awakens💡",
      modules: [
        {//module 1 in section 2
  title: "Getting Set for the First Code Zap",
  lessons: [
    {
      title: "Download the Arduino IDE",
      content: "🔧 What You Need: Laptop or PC, Internet access\n\nOkay scientist — let’s start setting up your lab!\n\n1️⃣ Go to [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)\n2️⃣ Scroll down and choose your OS (Windows, Mac, Linux)\n3️⃣ Click DOWNLOAD — you'll get the latest IDE installer\n\nThat’s it! Save the file and we’re ready to install!",
      image: "url",
      audio: "url"
    },
    {
      title: "Install Arduino IDE on Your Computer",
      content: "🔧 What You Need: Arduino IDE Installer, Laptop or PC\n\nLet’s install the software you just downloaded!\n\n**Windows**:\n1️⃣ Double-click the .exe file\n2️⃣ Click ‘I Agree’ → Next → Install\n3️⃣ Allow permissions if asked\n4️⃣ Wait till installation finishes\n\n**Mac**:\n1️⃣ Open the .zip or .dmg file\n2️⃣ Drag Arduino into Applications\n3️⃣ Done!\n\nNow the IDE is ready on your system.",
      image: "url",
      audio: "url"
    },
    {
      title: "Plug In Your Arduino",
      content: "🔧 What You Need: Arduino Uno, USB Cable, Laptop/PC\n\nTime to connect your board!\n\n1️⃣ Use a USB-A to B cable (printer-style)\n2️⃣ Plug one end into your Arduino\n3️⃣ Plug the other into your computer\n\nYou’ll see a green light on the board.\nThat means it’s getting power. It’s alive!",
      image: "url",
      audio: "url"
    },
    {
      title: "Install Drivers for Arduino Uno",
      content: "🔧 What You Need: Internet access, Laptop/PC\n\nLet’s make sure your PC knows how to talk to the Arduino.\n\n✅ For official Arduino Uno:\n- Drivers usually install automatically.\n- Windows should say 'Arduino Uno detected'.\n\n✅ If not:\n1️⃣ Go to Device Manager → Ports\n2️⃣ Right-click 'Unknown Device'\n3️⃣ Click 'Update Driver' and choose Arduino drivers from your install folder\n\nDone? Now the official Uno is ready!",
      image: "url",
      audio: "url"
    },
    {
      title: "Install Drivers for Clone Boards",
      content: "🔧 What You Need: Internet access, Laptop/PC\n\nIf you're using a clone Arduino (common online), you might need CH340 or CP210x drivers.\n\n1️⃣ Goto <a href='https://www.wch-ic.com/downloads/ch341ser_exe.html#:~:text=Tool%20software-,CH341SER.EXE,to%20user%20with%20the%20product'>WCN Website</a>.\n2️⃣ Download the Zip File According To Your System. (Windows, Mac, Linux or Android)\n3️⃣ Install and restart your PC OR Android Phone\n\n✅ For CP210x boards:\n- Goto <a href='https://www.silabs.com/software-and-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads'\n> Silabs Website</a> - Follow installation steps\n\nOnce installed, reconnect your board and check Port again in Tools.\nIt should now appear!",
      image: "url",
      audio: "url"
    },
    {
      title: "First Look at the Arduino IDE",
      content: "🔧 What You Need: Laptop/PC, Installed Arduino IDE\n\nLet’s open the IDE and get familiar!\n\nDouble-click the Arduino icon.\nYou’ll see a blank sketch with this structure:\nvoid setup() {\n  // setup things here\n}\nvoid loop() {\n  // repeat this code forever\n}\n\nOn top, you'll see buttons: Verify ✓, Upload →, Serial Monitor 🔍\nWe’ll use these soon!",
      image: "url",
      audio: "url"
    },
    {
      title: "Select the Right Board",
      content: "🔧 What You Need: Arduino connected, Arduino IDE open\n\nLet’s tell the IDE what board you’re using.\n\n1️⃣ Click **Tools** in the menu\n2️⃣ Go to **Board → Arduino AVR Boards → Arduino Uno**\nThat’s the classic board we’re using for now.\n\nIf you're using another board, select the correct one!",
      image: "url",
      audio: "url"
    },
    {
      title: "Select the Right Port (COM/VCP)",
      content: "🔧 What You Need: Arduino connected to USB\n\nNow pick the USB port your Arduino is using.\n\n1️⃣ Click **Tools → Port**\n2️⃣ Look for something like `COM3 (Arduino Uno)`\n3️⃣ Select it!\n\nNo Arduino listed? Try unplugging and replugging it.\nYour robot must be connected to the right path!",
      image: "url",
      audio: "url"
    },
    {
      title: "Upload the First Blink Sketch",
      content: "🔧 What You Need: Arduino + IDE + Correct port selected\n\nLet’s run your first robot command — BLINK!\n\n1️⃣ Go to **File → Examples → 01.Basics → Blink**\n2️⃣ Click the **Upload (→)** button\n3️⃣ Wait a few seconds\n\nIf everything worked — your onboard LED near pin 13 should start blinking!\nCongratulations, it’s alive!",
      image: "url",
      audio: "url"
    },
    {
      title: "Read the IDE Messages and Errors",
      content: "🔧 What You Need: IDE window\n\nLet’s learn how to read the messages Arduino shows.\n\n1️⃣ Bottom of the screen shows ‘Compiling’ and ‘Uploading’\n2️⃣ If success: it says ‘Done Uploading’\n3️⃣ If error: red message shows up\n\nMost common: wrong board or port, or missing driver\nWe’ll fix them next!",
      image: "url",
      audio: "url"
    },
    {
      title: "Troubleshooting Upload Errors",
      content: "🔧 What You Need: Patience and curiosity\n\nHere’s how to fix upload problems:\n\n🔹 Check USB cable (some are power-only)\n🔹 Recheck **Board** and **Port** under Tools\n🔹 Try a different USB port\n🔹 Close other apps using COM ports (like serial monitors)\n🔹 Reinstall drivers if needed\n\nTry again — this time it’ll work. Your scientist powers are growing!",
      image: "url",
      audio: "url"
    },
{
  title: "Install ArduinoDroid App",
  content: "🔧 What You Need: Android phone or tablet, Internet access\n\nYes — you can code Arduino right from your phone!\n\n1️⃣ Go to Google Play Store\n2️⃣ Search for **ArduinoDroid**\n3️⃣ Install the app — it’s about 200MB\n4️⃣ Open it once to let it set up\n\nReady? Time to add some tools inside the app.",
  image: "url",
  audio: "url"
},
{
  title: "Install Core and Compiler in ArduinoDroid",
  content: "🔧 What You Need: ArduinoDroid installed, Internet access\n\nNow we need the board definitions and compiler.\n\n1️⃣ Open ArduinoDroid\n2️⃣ Tap the ⚙️ gear icon (top right)\n3️⃣ Select ‘Boards’ and install **Arduino AVR Boards**\n4️⃣ Then go to ‘Libraries’ and install **Standard Libraries**\n5️⃣ Tap ‘Sketch → Examples → 01.Basics → Blink’ to try it\n\nThat’s it — your phone can now write code for Arduino!",
  image: "url",
  audio: "url"
},
{
  title: "Connect Arduino to Android Using OTG",
  content: "🔧 What You Need: Arduino Uno, USB cable, Android phone, OTG adapter\n\nLet’s connect the board to your phone.\n\n1️⃣ Plug your USB cable into Arduino\n2️⃣ Connect that to an **OTG adapter**\n3️⃣ Plug OTG into your Android device\n\nYou’ll see a popup: ‘Arduino detected’.\nGive it permission — now you’re connected!",
  image: "url",
  audio: "url"
},
{
  title: "Upload Blink Sketch from Android",
  content: "🔧 What You Need: ArduinoDroid set up, Arduino + OTG connected\n\nLet’s upload the classic blink sketch right from your phone!\n\n1️⃣ Open ArduinoDroid\n2️⃣ Tap the folder 📂 and choose Blink from examples\n3️⃣ Tap the checkmark ✓ to compile\n4️⃣ Tap the arrow → to upload\n\nWait a few seconds... LED should blink on pin 13!\nYou just became a pocket scientist!",
  image: "url",
  audio: "url"
},
{
  title: "Common Errors in Android Uploads",
  content: "🔧 What You Need: Troubleshooting mindset\n\nHere’s what to check if it doesn’t work:\n\n🔸 OTG not detected? Try another adapter\n🔸 Permission denied? Reconnect and re-grant access\n🔸 Upload stuck? Unplug and plug Arduino again\n\nStill stuck? Try rebooting your phone and recompile.\nYou’ll master it in no time!",
  image: "url",
  audio: "url"
}
  ]
},{
  title: "Mastering the IDE: Your Robot's Digital Playground",
  lessons: [
    {
      title: "Welcome to the Playground",
      content: "The Arduino IDE is where the magic happens.\nIt’s where you write, edit, and upload your code.\nThink of it as your robot’s brain gym.\nIn this module, you’ll explore every corner of this software — from writing your first line of code to using built-in tools like Serial Plotter.\nReady to unlock the IDE's full potential?\nLet’s begin!",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Touring the Interface",
      content: "When you launch the IDE, you’re greeted by a sleek editor window.\nAt the top: buttons for Verify, Upload, New, Open, and Save.\nBelow that is your code editor — this is where you’ll spend most of your time.\nAt the bottom, there’s a black console for messages and error logs.\nAnd hidden in the menus are powerful tools — we'll explore those next.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Your First Sketch: setup() and loop()",
      content: "Every Arduino sketch has two main parts:\nvoid setup() {\n  // setup things here\n}\nvoid loop() {\n  // repeat this code forever\n}\nThe setup() runs once when your board powers up.\nThe loop() keeps repeating, like an infinite to-do list.\nWe'll break these down as we go forward, but this is your code’s skeleton.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Verify and Upload: The Two Clicks You’ll Love",
      content: "Once you’ve typed your sketch, click the ✓ (Verify) button.\nThis checks your code for errors — it’s like spell check for robots.\nThen click the → (Upload) button to send it to your Arduino.\nYou’ll see the RX/TX lights blink, and your board comes alive!\nThat’s it. Just two clicks to go from idea to execution.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Serial Monitor: Talk to Your Robot",
      content: "Want your robot to say hello back?\nUse the Serial Monitor.\nGo to Tools > Serial Monitor or press Ctrl+Shift+M.\nThis opens a new window where you can see messages sent from your board using Serial.println().\nIt’s perfect for debugging and checking sensor values in real time.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Serial Plotter: Watch Data Come to Life",
      content: "Imagine visualizing your sensor readings as live graphs.\nThat’s what the Serial Plotter does.\nGo to Tools > Serial Plotter.\nIt transforms your Serial.print data into real-time charts.\nGreat for monitoring temperature changes, motor speeds, or even pulse sensors.\nTrust me, it’s addictive!",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Board Manager: Add More Brains",
      content: "By default, Arduino IDE supports a few official boards.\nBut with the Board Manager, you can unlock tons more.\nGo to Tools > Board > Boards Manager.\nHere, install support for ESP8266, ESP32, ATtiny, and more.\nSearch, click install, done.\nNow your IDE speaks multiple hardware languages.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Installing Boards via URLs",
      content: "Some advanced boards (like ESP32) need you to add a special URL.\nGo to File > Preferences.\nFind 'Additional Board Manager URLs'.\nPaste the board’s URL there (e.g., for ESP32).\nNow reopen Boards Manager, and you’ll see it available.\nThis step expands your Arduino IDE to endless possibilities.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Library Manager: Download Pre-Made Magic",
      content: "Libraries are like code modules made by experts.\nWant to use a servo motor? There's a library for that.\nGo to Sketch > Include Library > Manage Libraries.\nSearch, install, and you’re ready.\nIt’s like downloading superpowers for your code.\nDon’t reinvent the wheel — use libraries!",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Auto Format, Preferences, and Quick Shortcuts",
      content: "Messy code? Click Edit > Auto Format (Ctrl+T).\nCustomize your experience in File > Preferences — like enabling line numbers or increasing font size.\nLearn a few shortcuts too — Ctrl+Shift+M for Serial Monitor, Ctrl+U to Upload.\nThese tiny habits will save you hours!",
      audio: "audio_url_here",
      image: "image_url_here"
    }
  ]
},{
  "title": "Different Flavors of Arduino IDEs!",
  "lessons": [
    {
      "title": "🍦 IDE Flavors? Yep, Arduino Has 3!",
      "content": "<div class=\"card\">\nDid you know Arduino has <b>not just one</b> IDE, but <b>three types</b>?\n</div>\n<div class=\"card\">\nThink of it like:\n<ul><li>Modern IDE (v2+)</li><li>Legacy IDE (v1.x)</li><li>PLC IDE (for industry)</li></ul>\n</div>\n<div class=\"card\">\nLet’s explore each of them like a tasting menu. 🍽️\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🆕 Arduino IDE (Modern)",
      "content": "<div class=\"card\">\nCurrent version: 2.x\n✅ Sleek UI, auto-complete, board manager, library search, and more!\n</div>\n<div class=\"card\">\nFeatures:\n<ul><li>Tabs + File Tree</li><li>Dark Mode</li><li>Integrated Serial Monitor + Plotter</li></ul>\n</div>\n<div class=\"card\">\nGreat for most users, students, and hobbyists.\nDownload from: <a href='https://www.arduino.cc/en/software' target='_blank'>official site</a>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧓 Legacy IDE (1.x)",
      "content": "<div class=\"card\">\nThe OG Arduino IDE. Lightweight, basic, nostalgic.\n</div>\n<div class=\"card\">\nWhy still use it?\n<ul><li>Runs on older PCs</li><li>Used in school labs</li><li>Some tutorials still based on this</li></ul>\n</div>\n<div class=\"card\">\nStill downloadable from Arduino site under 'Legacy Downloads'.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏭 PLC IDE (Ladder Logic + More)",
      "content": "<div class=\"card\">\n<b>PLC IDE</b> is for professional, industrial Arduino users.\nIt supports:\n<ul><li>Ladder Diagrams</li><li>Function Block Diagrams</li><li>Structured Text</li></ul>\n</div>\n<div class=\"card\">\nYou can even control relays, motors, logic-based factories using Arduino Portenta + PLC IDE.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: IDE Speed Match",
      "content": "<div class=\"card\">\nMatch the IDE with the feature:\n<ul><li>Dark mode</li><li>Ladder logic</li><li>Used in schools</li></ul>\n</div>\n<div class=\"card\">\n<input id=\"idespeed\" placeholder=\"Your guess... (modern, plc, legacy)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: modern, plc, legacy!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Compare All IDEs Visually",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/t_2cFwvZB9Q\" title=\"Arduino IDE Versions Compared\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📋 Table: IDEs at a Glance",
      "content": "<div class=\"card\">\n<table border='1' style='width:100%; text-align:center'>\n<tr><th>IDE</th><th>Best For</th><th>UI Level</th><th>Unique Feature</th></tr>\n<tr><td>Modern</td><td>Students</td><td>Sleek</td><td>Autocomplete</td></tr>\n<tr><td>Legacy</td><td>Old PCs</td><td>Basic</td><td>Minimalist</td></tr>\n<tr><td>PLC</td><td>Industry</td><td>Technical</td><td>Ladder Logic</td></tr>\n</table>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Try All 3! (Mini Guide)",
      "content": "<div class=\"card\">\nWhy not try each one once?\n<ul><li><b>Modern:</b> install from official site</li><li><b>Legacy:</b> search 'Arduino IDE 1.8.19'</li><li><b>PLC:</b> for Portenta boards only – get from Arduino Pro site</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 Final Thoughts: Use What Feels Right",
      "content": "<div class=\"card\">\nThere’s no wrong choice. Use the one that makes YOU feel confident.\n</div>\n<div class=\"card\">\nPro Tip:\nUse Legacy for quick testing, Modern for real work, and PLC if you're building robots for a factory 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎉 Poll: Which IDE Will You Use?",
      "content": "<div class=\"card\">\n<input type=\"radio\" name=\"idepoll\"> Modern IDE (v2+)\n<br>\n<input type=\"radio\" name=\"idepoll\"> Legacy (v1.x)\n<br>\n<input type=\"radio\" name=\"idepoll\"> PLC IDE\n<br><br>\n<button class=\"gaming-btn\" onclick=\"alert('🗳️ Vote recorded! No matter what you pick, we’ll support you.')\">Vote!</button>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Code Without Coding: Welcome to ArduBlock!",
  "lessons": [
    {
      "title": "🎨 What is ArduBlock?",
      "content": "<div class=\"card\">\nArduBlock is a visual programming tool — you code by dragging colorful blocks instead of writing code.\n</div>\n<div class=\"card\">\nIt’s perfect for beginners, schools, and anyone scared of semicolons 😄\n</div>\n<div class=\"card\">\nThink of it like LEGO bricks for Arduino code!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🖥️ How to Install ArduBlock",
      "content": "<div class=\"card\">\nStep-by-step:\n1. Install <b>Arduino IDE</b> (legacy version 1.8.x preferred)\n2. Download ArduBlock jar file from <a href='https://github.com/taweili/ardublock/releases'>here</a>\n3. Create a folder: <code>Arduino/tools/ArduBlockTool/tool/</code>\n4. Place the .jar file inside the <code>tool</code> folder\n</div>\n<div class=\"card\">\nNow restart the Arduino IDE → Go to Tools → You’ll see <b>ArduBlock</b>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎥 Video: Installing & Running ArduBlock",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/QqzR4WhV4iE\" title=\"ArduBlock Install Guide\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧱 ArduBlock vs Traditional Code",
      "content": "<div class=\"card\">\n<b>Traditional Arduino:</b>\n<pre>digitalWrite(13, HIGH);</pre>\n</div>\n<div class=\"card\">\n<b>ArduBlock:</b>\nDrag a block: <code>[Set pin 13 HIGH]</code>\n</div>\n<div class=\"card\">\nIt’s easy to learn logic without writing code!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Match the Code to the Block",
      "content": "<div class=\"card\">\nWhat ArduBlock block matches this code?\n<pre>digitalWrite(9, LOW);</pre>\n</div>\n<div class=\"card\">\n<input id=\"abgame\" placeholder=\"Your Answer (e.g. Set pin X to Y)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It is: Set pin 9 LOW')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔁 Looping in ArduBlock",
      "content": "<div class=\"card\">\nYou can use <b>repeat</b> or <b>wait</b> blocks to control time and loops.\n</div>\n<div class=\"card\">\nExample: Blink LED every second.\n- Set pin 13 HIGH\n- Wait 1000 ms\n- Set pin 13 LOW\n- Wait 1000 ms\n</div>\n<div class=\"card\">\nDrag these blocks inside a loop block, and you’ve got a blinker 🔁💡\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: LED Blink Challenge",
      "content": "<div class=\"card\">\nYour goal: blink the LED on pin 10 using blocks.\n</div>\n<div class=\"card\">\nSteps:\n1. Drag <b>Set Pin</b> block to set 10 HIGH\n2. Add <b>Wait 1000 ms</b>\n3. Drag another <b>Set Pin</b> to LOW\n4. Add Wait again\n5. Wrap in <b>loop</b>\n</div>\n<div class=\"card\">\nUpload → Watch the magic ✨\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🤔 Limitations of ArduBlock",
      "content": "<div class=\"card\">\nArduBlock is great for beginners, but limited for advanced projects.\n</div>\n<div class=\"card\">\nYou won’t get custom libraries, advanced hardware access, or fast real-time stuff.\n</div>\n<div class=\"card\">\nEventually, you'll want to switch to C++ Arduino IDE or PlatformIO.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why You Should Try ArduBlock First",
      "content": "<div class=\"card\">\nIt helps you build logic, understand flow, and test real circuits without fear of syntax errors.\n</div>\n<div class=\"card\">\nEven pros recommend it for younger makers or teaching environments 👨‍🏫\n</div>\n<div class=\"card\">\nTry a few projects — it's fun, visual, and very beginner-safe! 🧩\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Iron Man's Lab: Arduino in VS Code!",
  "lessons": [
    {
      "title": "🧠 Why Use VS Code for Arduino?",
      "content": "<div class=\"card\">\nVisual Studio Code (VS Code) is a super-light, super-smart code editor.\nIt has everything Arduino IDE lacks:\n<ul><li>Autocomplete</li><li>Git support</li><li>Debugger</li><li>Multiple tabs</li></ul>\n</div>\n<div class=\"card\">\nArduino coding becomes pro-level with extensions like PlatformIO or Arduino IDE extension.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 2 Main Methods: Choose Your Style!",
      "content": "<div class=\"card\">\n1. 🛠️ <b>PlatformIO Extension</b>: Complete Arduino workflow, works with all boards, best for large projects\n</div>\n<div class=\"card\">\n2. 🧪 <b>Arduino Extension by Arduino.cc</b>: Official but simpler, great for Uno/Nano users\n</div>\n<div class=\"card\">\nWe'll explore both — and help you choose!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧰 Install VS Code (Windows/Mac/Linux)",
      "content": "<div class=\"card\">\n1. Go to: <a href='https://code.visualstudio.com/' target='_blank'>https://code.visualstudio.com/</a>\n2. Download & install for your OS\n3. Launch it, and explore the Extensions tab on the left\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚙️ Install PlatformIO Extension",
      "content": "<div class=\"card\">\n1. Click on the <b>Extensions</b> icon\n2. Search: <b>PlatformIO IDE</b>\n3. Install it (big orange icon)\n</div>\n<div class=\"card\">\nPlatformIO installs its own toolchain, including Arduino CLI under the hood!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Install Official Arduino Extension (Optional)",
      "content": "<div class=\"card\">\n1. Click Extensions\n2. Search for: <b>Arduino</b> by Arduino.cc\n3. Install it\n</div>\n<div class=\"card\">\nThis is lighter than PlatformIO, but supports only some boards.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📁 Create Your First PlatformIO Project",
      "content": "<div class=\"card\">\n1. Click PlatformIO icon on left\n2. New Project → Name it\n3. Choose Board (e.g., Arduino Uno)\n4. Framework: Arduino\n5. Create → Project folder created\n</div>\n<div class=\"card\">\nStart editing <b>src/main.cpp</b> — that's your sketch!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Find the Project Folder",
      "content": "<div class=\"card\">\nYour PlatformIO project is saved. Which folder will contain your Arduino sketch?\n</div>\n<div class=\"card\">\n<input id=\"foldergame\" placeholder=\"Type the folder name\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"checkFolderGame()\">Submit</button>\n<script>\nfunction checkFolderGame() {\n  const val = document.getElementById('foldergame').value.toLowerCase();\n  alert(val.includes('src') ? '✅ src/main.cpp is correct!' : '❌ Try again! It’s in src folder.');\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Full PlatformIO + VS Code Setup",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/rJkL60qMNiA\" title=\"VS Code for Arduino with PlatformIO\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔌 Detect & Upload to Board",
      "content": "<div class=\"card\">\n1. Connect your Arduino\n2. Click the tick (✓) to build\n3. Click the right arrow (→) to upload\n</div>\n<div class=\"card\">\nYou can also use Terminal commands:\n<pre>pio run --target upload</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📦 Manage Libraries in PlatformIO",
      "content": "<div class=\"card\">\nClick the PlatformIO sidebar → Libraries\nSearch and install anything (NeoPixel, Servo, etc.)\n</div>\n<div class=\"card\">\nAlternatively, run:\n<pre>pio lib install \"Adafruit NeoPixel\"</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📋 Serial Monitor in VS Code",
      "content": "<div class=\"card\">\nClick <b>Monitor</b> in PlatformIO sidebar — or run:\n<pre>pio device monitor</pre>\n</div>\n<div class=\"card\">\nUse Ctrl+C to close it\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Extension Match!",
      "content": "<div class=\"card\">\nMatch the features with the extension:\n<ul><li>Supports many boards</li><li>Built by Arduino.cc</li><li>Advanced debugging</li><li>CI/CD integration</li></ul>\nPlatformIO or Arduino Extension?\n</div>\n<div class=\"card\">\n<input id=\"matchgame\" placeholder=\"Your answer... (comma-separated)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ If you answered: PlatformIO, Arduino, PlatformIO, PlatformIO — you rock!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Add More Boards to PlatformIO",
      "content": "<div class=\"card\">\nPlatformIO supports ESP32, STM32, Teensy, and more!\nClick PlatformIO > Boards and search what you want.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Debugger and Simulator (Optional)",
      "content": "<div class=\"card\">\nWith advanced boards, PlatformIO can enable hardware debugging, breakpoints, etc.\n</div>\n<div class=\"card\">\nYou can also use simulators like Wokwi with PlatformIO or plain Arduino code.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 VS Code Shortcuts for Arduino Devs",
      "content": "<div class=\"card\">\n<ul><li>Ctrl+Shift+P → Command Palette</li><li>Ctrl+` → Terminal toggle</li><li>Ctrl+S → Save</li><li>Ctrl+Click → Go to definition</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📁 Opening Old Arduino Sketches in VS Code",
      "content": "<div class=\"card\">\nJust open the folder containing your `.ino` file.\n</div>\n<div class=\"card\">\nVS Code (with the Arduino extension) will auto-detect and let you compile/upload.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 PlatformIO vs Arduino Extension",
      "content": "<div class=\"card\">\n<b>Use PlatformIO</b> if:\n<ul><li>You love Git</li><li>You want more features</li><li>You use advanced boards</li></ul>\n<b>Use Arduino Extension</b> if:\n<ul><li>You want it simple</li><li>You use Uno/Nano only</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💥 Quiz: Real or Fake (VS Code Edition)",
      "content": "<div class=\"card\">\n1. PlatformIO supports ESP32 ✅ / ❌\n<br>2. You can’t use serial monitor in VS Code ✅ / ❌\n<br>3. Arduino Extension can compile `.ino` files ✅ / ❌\n</div>\n<div class=\"card\">\n✅, ❌, ✅ — You got it?\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎉 Final Step: Set VS Code as Your Main IDE?",
      "content": "<div class=\"card\">\nYou’re now ready to ditch the basic Arduino IDE and level-up into a VS Code warrior!\n</div>\n<div class=\"card\">\nTry cloning RoboDict’s examples and open them directly in VS Code — edit, compile, upload — all in one click.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

,

{
  "title": "Commanding Arduino: Your CLI Superpower",
  "lessons": [
    {
      "title": "🚀 What is a CLI?",
      "content": "<div class=\"card\">\nCLI stands for <b>Command Line Interface</b>. It’s like chatting with your computer using words instead of buttons!\n</div>\n<div class=\"card\">\nInstead of clicking menus, you type commands. It’s super fast, powerful, and great for automation!\n</div>\n<div class=\"card\">\n🧪 Examples of CLIs:\n<ul><li>Windows Command Prompt</li><li>Linux Terminal</li><li>macOS Terminal</li></ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: CLI or GUI?",
      "content": "<div class=\"card\">\n🧠 GUI means Graphical Interface (like clicking icons), CLI means typing commands.\nDrag these into the right bucket (mentally 😉):\n<ul><li>Terminal</li><li>Arduino IDE</li><li>File Explorer</li><li>Bash Shell</li></ul>\nWhich ones are CLI?</div>\n<div class=\"card\">\n<input id=\"cli-game\" placeholder=\"Your answer...\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert(document.getElementById('cli-game').value.toLowerCase().includes('terminal') ? '✅ Great!' : '❌ Try again!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📦 What is Arduino CLI?",
      "content": "<div class=\"card\">\n<b>Arduino CLI</b> is the command-line version of the Arduino IDE. You can:\n<ul><li>Compile sketches</li><li>Upload to boards</li><li>Install libraries</li><li>List connected devices</li></ul>\nAll with text commands!\n</div>\n<div class=\"card\">\nIt’s perfect for power users, automation lovers, CI/CD, and headless systems like Raspberry Pi!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Why Use Arduino CLI?",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Bb2kJ62WlBE\" title=\"Arduino CLI Explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💻 CLI on Windows: Step-by-Step Install",
      "content": "<div class=\"card\">\n1. Go to: <a href='https://arduino.github.io/arduino-cli/latest/installation/' target='_blank'>arduino-cli download page</a>\n</div>\n<div class=\"card\">\n2. Download the ZIP file for Windows\n3. Extract to any folder like C:/arduino-cli\n4. Add it to PATH (search 'Environment Variables' > Edit PATH > Add that folder)\n5. Open CMD and type:\n<pre>arduino-cli version</pre>\n</div>\n<div class=\"card\">\n🎉 If it prints the version, you’re done!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🐧 CLI on Linux: Easy Setup",
      "content": "<div class=\"card\">\nUse this terminal command:\n<pre>\nwget https://downloads.arduino.cc/arduino-cli/arduino-cli_latest_Linux_64bit.tar.gz\n</pre>\nThen:\n<pre>\ntar -xvzf arduino-cli_*.tar.gz\nsudo mv arduino-cli /usr/local/bin\n</pre>\n</div>\n<div class=\"card\">\n✅ Done! Now run:\n<pre>arduino-cli version</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🍎 CLI on macOS",
      "content": "<div class=\"card\">\nOpen Terminal and run:\n<pre>\nbrew install arduino-cli\n</pre>\n(Hint: Use Homebrew. If you don’t have it, install from brew.sh)\n</div>\n<div class=\"card\">\nCheck install:\n<pre>arduino-cli version</pre>\nThat’s it!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧰 CLI Basics: First-Time Config",
      "content": "<div class=\"card\">\nRun this once:\n<pre>arduino-cli config init</pre>\nIt creates a config file in your home folder. You can edit this to change default board, library path, etc.\n</div>\n<div class=\"card\">\nThen update your core index:\n<pre>arduino-cli core update-index</pre>\nThis downloads the list of supported boards!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 How to Install a Board Core (e.g. Uno)",
      "content": "<div class=\"card\">\nRun:\n<pre>arduino-cli core install arduino:avr</pre>\nThis installs the board support package for Uno, Nano, Mega, etc.\n</div>\n<div class=\"card\">\nList installed cores:\n<pre>arduino-cli core list</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📋 See Connected Devices",
      "content": "<div class=\"card\">\nTo see your Arduino boards connected:\n<pre>arduino-cli board list</pre>\n</div>\n<div class=\"card\">\nIt shows port, board name, and chip — like magic!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Upload a Sketch from CLI",
      "content": "<div class=\"card\">\nCompile the code:\n<pre>arduino-cli compile --fqbn arduino:avr:uno Blink</pre>\n</div>\n<div class=\"card\">\nUpload it:\n<pre>arduino-cli upload -p COM3 --fqbn arduino:avr:uno Blink</pre>\n(Change COM3 to your board's port)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📦 Install Libraries via CLI",
      "content": "<div class=\"card\">\nInstall any Arduino library, like this:\n<pre>arduino-cli lib install \"Adafruit NeoPixel\"</pre>\n</div>\n<div class=\"card\">\nList installed libraries:\n<pre>arduino-cli lib list</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Mini Game: CLI Command Builder",
      "content": "<div class=\"card\">\nYou want to upload to Arduino Uno on COM4. What command will you run?\n</div>\n<div class=\"card\">\n<input id=\"cli-upload\" placeholder=\"Type your command\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"checkCLIUpload()\">Submit</button>\n<script>\nfunction checkCLIUpload() {\n  const v = document.getElementById('cli-upload').value.trim().toLowerCase();\n  if (v.includes(\"upload\") && v.includes(\"--fqbn\") && v.includes(\"arduino:avr:uno\") && v.includes(\"com4\")) {\n    alert('✅ That’s perfect!');\n  } else {\n    alert('❌ Something’s missing!');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 Bonus: CLI in VS Code",
      "content": "<div class=\"card\">\nWant to use CLI inside VS Code? Just open terminal and run CLI commands like normal.\n</div>\n<div class=\"card\">\nYou can even create tasks or use PlatformIO + CLI if you're a pro.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ CLI for CI/CD",
      "content": "<div class=\"card\">\nYou can use Arduino CLI in GitHub Actions, Jenkins, or other automation workflows.\n</div>\n<div class=\"card\">\nThis is perfect for testing and uploading code automatically when changes happen.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 CLI Cheatsheet",
      "content": "<div class=\"card\">\n<ul>\n<li>📥 Install core: <code>core install</code></li>\n<li>📤 Upload code: <code>upload -p PORT</code></li>\n<li>📚 Libraries: <code>lib install</code></li>\n<li>🔍 Devices: <code>board list</code></li>\n<li>🔧 Compile: <code>compile --fqbn</code></li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔬 Quiz: True or False — CLI Edition!",
      "content": "<div class=\"card\">\n1. Arduino CLI supports ESP32. ✅ / ❌\n<br>2. You can upload sketches using CLI. ✅ / ❌\n<br>3. CLI is available only for Windows. ✅ / ❌\n</div>\n<div class=\"card\">\nAnswers:\n✅, ✅, ❌\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📌 Final Tips for Mastering Arduino CLI",
      "content": "<div class=\"card\">\n💪 You now know what CLI is, how to install, use, and automate Arduino with it!\n</div>\n<div class=\"card\">\nExplore more with:\n<pre>arduino-cli help</pre>\nOr check: <a href='https://arduino.github.io/arduino-cli' target='_blank'>Official Docs</a>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

,{
  title: "Arduino in the Cloud: The Web IDE Adventure",
  lessons: [
    {
      title: "Welcome to Arduino Cloud Editor",
      content: "Required Components:\n- Arduino Board\n- USB Cable\n- Laptop/Desktop with Internet\n\nYou're about to enter the cloud side of Arduino — where you don't need to install anything! Just open your browser and code.\nThis lesson introduces the Arduino Cloud Editor (https://create.arduino.cc/editor), a powerful alternative to the offline IDE.\nWe’ll explore what makes it awesome, and why many users are shifting to it — especially for quick, cross-device prototyping.",
      image: "https://example.com/cloud_intro_image.jpg",
      audio: "https://example.com/cloud_intro_audio.mp3"
    },
    {
      title: "Setting Up Arduino Cloud Editor",
      content: "To start using the Arduino Cloud Editor:\n1. Go to https://create.arduino.cc/editor\n2. Sign in with your Arduino account (or create one).\n3. The dashboard will welcome you with the option to install the 'Arduino Create Agent'.\nThat’s a small background service allowing your browser to talk to the Arduino board.",
      image: "https://example.com/setup_cloud_editor.jpg",
      audio: "https://example.com/setup_cloud_editor.mp3"
    },
    {
      title: "Installing the Arduino Create Agent",
      content: "Required: Admin access on your PC\n\n1. Download the Create Agent from the Arduino Editor page.\n2. Run the installer and follow prompts.\n3. Once installed, refresh your browser — your board should now be visible when connected.\nThe Agent bridges your hardware and the web editor — don’t skip this!",
      image: "https://example.com/create_agent_image.jpg",
      audio: "https://example.com/create_agent_audio.mp3"
    },
    {
      title: "Using the Cloud Editor Interface",
      content: "The Arduino Cloud Editor UI is modern and clean:\n- Sketchbook on the left\n- Code editor in the center\n- Serial Monitor & Output at the bottom\n- Tools for board and port selection at the top\nExplore this layout and feel free to tinker — changes are saved automatically to your cloud account!",
      image: "https://example.com/cloud_ui_image.jpg",
      audio: "https://example.com/cloud_ui_audio.mp3"
    },
    {
      title: "Creating and Saving Your First Cloud Sketch",
      content: "Click the '+ New Sketch' button.\nA new tab opens with some default code.\nTry editing it — maybe change the LED blink speed.\nPress 'Upload' to flash your code to the board.\nYour sketch is saved online — access it from any device later. Handy, right?",
      image: "https://example.com/first_cloud_sketch.jpg",
      audio: "https://example.com/first_cloud_sketch.mp3"
    },
    {
      title: "Accessing the Serial Monitor in Cloud Editor",
      content: "Just like in the offline IDE, you can debug via Serial Monitor.\n1. Connect your board.\n2. Press the 'Serial Monitor' button at the bottom right.\n3. Watch your Arduino’s messages stream live!\nSuper helpful when working on cloud-connected IoT stuff.",
      image: "https://example.com/cloud_serial_monitor.jpg",
      audio: "https://example.com/cloud_serial_monitor.mp3"
    },
    {
      title: "Advantages of the Cloud IDE",
      content: "Why Cloud?\n- No installation headaches\n- All projects stored online\n- Accessible across devices\n- Great for Chromebook users or locked-down PCs\n- Integrates with Arduino IoT Cloud\nIt’s perfect for modern makers on the move.",
      image: "https://example.com/cloud_advantages.jpg",
      audio: "https://example.com/cloud_advantages.mp3"
    },
    {
      title: "Using Libraries in Cloud Editor",
      content: "Want to include a library?\nClick 'Libraries' on the left panel.\nSearch by name — for example: 'Adafruit GFX'\nClick 'Include' → It gets added to your sketch automatically.\nNo download or zip file extraction needed. Cloud FTW!",
      image: "https://example.com/cloud_libraries.jpg",
      audio: "https://example.com/cloud_libraries.mp3"
    },
    {
      title: "Cloud Editor Limitations to Know",
      content: "It’s great — but not perfect.\n- Needs internet to work\n- Not all custom boards are supported\n- Limited advanced debugging tools\nBut for daily use, prototyping, and learning — it’s more than sufficient.\nLet’s move ahead with confidence.",
      image: "https://example.com/cloud_limitations.jpg",
      audio: "https://example.com/cloud_limitations.mp3"
    }
  ]
},{
  title: "Simulate Before You Innovate: Arduino and ESP32 Online Labs",
  lessons: [
    {
      title: "Why Simulation Matters in Robotics Learning",
      content: "Before diving into real-world hardware, it's powerful to test and validate your circuits virtually.\nSimulators help reduce hardware burnout, debug logic faster, and prototype without wires or smoke.\nWhether you're afraid of burning a component or just don't have the board yet — simulation has your back!\nAnd hey, RoboDict proudly offers these simulators right on the homepage — free and fast access!",
      audio: "https://example.com/audio/simulation_intro.mp3",
      image: "https://example.com/images/simulator_intro.png"
    },
    {
      title: "Meet the Arena: Popular Arduino Simulators You Should Try",
      content: "Here are some great options to start simulating Arduino and ESP32:\n1. Tinkercad Circuits (great for beginners)\n2. Wokwi (superb for advanced users)\n3. RoboDict Simulator (right inside our app)\n4. Proteus (industry-grade, but needs a license)\nPick the one that fits your level, and start experimenting without fear!",
      audio: "https://example.com/audio/popular_simulators.mp3",
      image: "https://example.com/images/simulator_list.png"
    },
    {
      title: "Simulating Arduino UNO in Wokwi",
      content: "Wokwi is like the boss level of simulation tools.\nYou can simulate LED blinking, sensors, OLEDs, and even full ESP32 projects!\nJust go to wokwi.com, select Arduino Uno, and start wiring virtually.\nBonus: It supports code editing in-browser, and it's super fast.",
      audio: "https://example.com/audio/wokwi_uno.mp3",
      image: "https://example.com/images/wokwi_uno.png"
    },
    {
      title: "ESP32 Simulation: Wokwi vs Real Board",
      content: "Wokwi isn’t just about Arduino — it supports ESP32 too.\nAnd trust me, for Wi-Fi-based testing, it’s a dream!\nYou can check serial output, simulate delays, and test network flows before uploading to your actual device.",
      audio: "https://example.com/audio/wokwi_esp32.mp3",
      image: "https://example.com/images/esp32_sim.png"
    },
    {
      title: "RoboDict Simulators: Fast, Friendly, Free",
      content: "Inside the RoboDict app’s homepage, we’ve embedded a simulator section!\nNo need to go anywhere — it loads fast, supports common components, and is perfect for learning on the go.\nWhether it’s LED blinking or a basic sensor, our simulator makes it hands-on, even on mobile!",
      audio: "https://example.com/audio/robodict_sim.mp3",
      image: "https://example.com/images/robodict_sim_home.png"
    }
  ]
},{
  "title": "Which One Should I Choose?",
  "lessons": [
    {
      "title": "🤔 The Big Question: Which IDE Is Right For You?",
      "content": "<div class=\"card\">\nThere are 5 main ways to code Arduino in 2025:\n<ul><li>Arduino IDE (classic)</li><li>Arduino CLI (command-line power)</li><li>VS Code (pro-style)</li><li>Arduino Cloud</li><li>Simulators like Wokwi</li></ul>\n</div>\n<div class=\"card\">\nLet’s compare them one by one — and help YOU decide what’s best for YOUR brain. 😄\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Arduino IDE: The Old But Gold",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ Easy to install</li><li>✅ Official & beginner-friendly</li><li>✅ One-click upload & Serial Monitor</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ No autocomplete</li><li>❌ No file explorer</li><li>❌ Not good for big projects</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💻 Arduino CLI: For Terminal Ninjas",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ Automation & CI/CD ready</li><li>✅ Super fast</li><li>✅ Scriptable uploads</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ No visual UI</li><li>❌ Needs some terminal knowledge</li><li>❌ Tough for beginners</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "👨‍💻 VS Code (with PlatformIO or Arduino Extension)",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ Autocomplete & IntelliSense</li><li>✅ File tabs, Git, Serial tools</li><li>✅ Great for advanced users</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ Needs extension install</li><li>❌ Can feel overwhelming at first</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "☁️ Arduino Cloud Editor",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ No download needed</li><li>✅ Works in browser</li><li>✅ Syncs sketches, boards, serial monitor</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ Requires internet</li><li>❌ Needs Arduino Create Agent installed</li><li>❌ May feel limited for pros</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Simulators (Wokwi, Tinkercad)",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ No physical board needed</li><li>✅ Test fast</li><li>✅ Try expensive sensors for free</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ Limited hardware support</li><li>❌ Not all libraries work</li><li>❌ Not a replacement for real board</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Match IDE to Personality",
      "content": "<div class=\"card\">\nWho should use what?\n<ul><li>👦 Complete beginner</li><li>🧑‍🔧 Wants fast workflow</li><li>🧙‍♂️ CLI nerd</li><li>🧑‍💻 Loves Git & extensions</li><li>🌍 No board, just testing</li></ul>\nDrag answers (mentally) to these:\n</div>\n<div class=\"card\">\n<input id=\"ide-match\" placeholder=\"Type 5 IDEs in order here\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ IDE order: Arduino IDE, Arduino Cloud, Arduino CLI, VS Code, Simulator')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: IDE Comparison Showdown!",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/4jWaVdGm7qA\" title=\"Which Arduino IDE to choose?\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📋 Cheat Sheet: Which One For What?",
      "content": "<div class=\"card\">\n<b>Use this as your mini decision helper:</b>\n<table border='1' style='width:100%; text-align:center'>\n<tr><th>Tool</th><th>Best For</th><th>Skill Level</th></tr>\n<tr><td>Arduino IDE</td><td>Quick Start</td><td>Beginner</td></tr>\n<tr><td>CLI</td><td>Automation</td><td>Pro</td></tr>\n<tr><td>VS Code</td><td>Power Projects</td><td>Intermediate+</td></tr>\n<tr><td>Cloud</td><td>No Install</td><td>Beginner+</td></tr>\n<tr><td>Simulators</td><td>Testing</td><td>All</td></tr>\n</table>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏁 Final Decision Helper: Choose Your Path!",
      "content": "<div class=\"card\">\nAsk yourself:\n<ul><li>👀 Want visual help? → Arduino IDE / VS Code</li><li>🌩️ Need remote or school PC? → Arduino Cloud</li><li>💡 Love automation or scripting? → Arduino CLI</li><li>🧪 Want to test circuits? → Simulators</li></ul>\n</div>\n<div class=\"card\">\n🎉 No wrong choice — you can switch any time. In fact, try them all!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  title: "Your First Spark: Blinking the LED",
  lessons: [
    {
      title: "The Ritual Begins: Blinking the LED",
      content: "🔌 <b>Required Components:</b>\n- Arduino Uno\n- USB Cable\n- Laptop/PC with Arduino IDE installed\n\n⚡ <b>Welcome to the Ritual</b>\nThis isn't just a lesson. It's a *rite of passage* — the moment every creator remembers. We're about to breathe life into your Arduino, one blink at a time.\n\n🧠 <b>What's Happening?</b>\nWe'll write a program (called a sketch) that tells your Arduino to blink its onboard LED. It's on pin 13 by default.\n\n👨‍💻 <b>The Code:</b>\n<code>void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}</code>\n\n💡 <b>Explanation:</b>\n- <code>setup()</code>: Runs once. Sets pin 13 as an output pin.\n- <code>loop()</code>: Runs again and again. Turns the LED on, waits a second, turns it off, waits again. Rinse and repeat.\n\n🎯 <b>Mission:</b>\n- Copy the code into your Arduino IDE.\n- Click ✅ Verify to check for errors.\n- Hit 🔼 Upload to send it to your Arduino.\n- Watch that LED blink like it's saying “Hello World!” in Morse code.\n\n🥳 <b>You've just completed your first Arduino ritual. Welcome to the tribe. Didn't Understand What Happened Here? No Worries. We'll Learn Basic To Advanced, Trust Us. Just Keep On!</b>",
      image: "https://robodict-assets.s3.amazonaws.com/lessons/blink-led-setup.png",
      audio: "https://robodict-audio.s3.amazonaws.com/lessons/blink-led-intro.mp3"
    }
  ]
},{
  title: "Understanding Digital Pins: Inputs, Outputs & Logic Magic",
  lessons: [
    {
      title: "🧠 Digital Pins Demystified",
      type: "text",
      content: `
<div class="card">
<h3>What are Digital Pins?</h3>
Digital pins on your Arduino are your board’s way of interacting with the physical world — like sending a signal to an LED or listening for a button press.
</div>
<div class="card">
<h3>Output Mode (pinMode: OUTPUT)</h3>
When you set a pin as OUTPUT, your Arduino can send either HIGH (5V) or LOW (0V) from that pin. Use this to control LEDs, buzzers, and more.
</div>
<div class="card">
<h3>Input Mode (pinMode: INPUT)</h3>
Set a pin to INPUT mode when you want your Arduino to "listen" to sensors, buttons, or switches. It reads either HIGH or LOW based on voltage.
</div>
<div class="card">
<h3>Input Pullup (pinMode: INPUT_PULLUP)</h3>
Sometimes a pin floats unpredictably when no voltage is connected. INPUT_PULLUP connects an internal resistor to keep it stable at HIGH until grounded.
</div>
<div class="card">
<h3>Common Mistake to Avoid</h3>
Don’t drive heavy components like motors directly from pins! Use a transistor or driver circuit. The digital pin outputs small current — not enough for power-hungry parts.
</div>
`
    },
    {
      title: "📺 Digital Pin Tutorial (Video)",
      type: "video",
      content: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/VyX4toKZgdo" title="Understanding Arduino Digital Pins" frameborder="0" allowfullscreen></iframe>`
    },
    {
      title: "🔍 Explore the Simulator (Third-Party)",
      type: "text",
      content: `
<div class="card">
Open the simulator from the RoboDict homepage. Use the dropdown to pick an Arduino board.
</div>
<div class="card">
Paste in this example code:
<pre>
void setup() {
  pinMode(13, OUTPUT);
}
void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}
</pre>
</div>
<div class="card">
Now hit "Start Simulation". Watch how the LED toggles ON and OFF.
</div>
<div class="card">
Try changing <code>delay(500)</code> to <code>delay(100)</code> and see what happens!
</div>
<p>✨ You don’t need to install anything. Explore and experiment.</p>
`
    },{
  title: "🎮 PinMode Puzzle",
  type: "game",
  content: `
<style>
  .game-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    font-family: 'Courier New', monospace;
  }
  .card {
    padding: 1rem;
    border: 2px dashed #00ffee;
    background: #111;
    color: #fff;
    border-radius: 1rem;
    width: 200px;
    text-align: center;
  }
  .draggable {
    display: inline-block;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background: #222;
    color: #0ff;
    border: 1px solid #0ff;
    border-radius: 0.5rem;
    cursor: grab;
    user-select: none;
  }
  .droppable {
    background: #222;
    min-height: 40px;
    margin-top: 0.5rem;
    border: 1px solid #555;
    padding: 0.3rem;
    border-radius: 0.4rem;
  }
  .correct {
    background-color: #004400 !important;
    color: #0f0 !important;
  }
  .wrong {
    background-color: #440000 !important;
    color: #f00 !important;
  }
</style>

<div class="game-container">
  <div class="card">
    <strong>LED blinking</strong>
    <div class="droppable" data-answer="OUTPUT">Drop here</div>
  </div>
  <div class="card">
    <strong>Button Press</strong>
    <div class="droppable" data-answer="INPUT">Drop here</div>
  </div>
  <div class="card">
    <strong>Button w/o resistor</strong>
    <div class="droppable" data-answer="INPUT_PULLUP">Drop here</div>
  </div>
</div>

<div style="text-align: center; margin-top: 2rem;" id="drag-area">
  <div class="draggable" draggable="true" data-value="INPUT">INPUT</div>
  <div class="draggable" draggable="true" data-value="OUTPUT">OUTPUT</div>
  <div class="draggable" draggable="true" data-value="INPUT_PULLUP">INPUT_PULLUP</div>
</div>

<script>
  const dragArea = document.getElementById("drag-area");
  const droppables = document.querySelectorAll(".droppable");

  function addDragListeners(elem) {
    elem.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", e.target.dataset.value);
    });
  }

  document.querySelectorAll(".draggable").forEach(addDragListeners);

  droppables.forEach(drop => {
    drop.addEventListener("dragover", e => e.preventDefault());
    drop.addEventListener("drop", e => {
      e.preventDefault();
      const draggedValue = e.dataTransfer.getData("text/plain");
      drop.textContent = draggedValue;

      if (draggedValue === drop.dataset.answer) {
        drop.classList.remove("wrong");
        drop.classList.add("correct");
      } else {
        drop.classList.remove("correct");
        drop.classList.add("wrong");
      }

      // add a new clone to make dragging reusable
      const newDrag = document.createElement("div");
      newDrag.className = "draggable";
      newDrag.setAttribute("draggable", "true");
      newDrag.setAttribute("data-value", draggedValue);
      newDrag.textContent = draggedValue;
      addDragListeners(newDrag);
      dragArea.appendChild(newDrag);
    });
  });
</script>
`
}

  ]
},{
  title: "The Sixth Sense: What Are Sensors?",
  lessons: [

    {
      type: "text",
      title: "👁️ Eyes for the Robot: The Magic of Sensors",
      content: `
        <div class="card">
          Imagine walking through your room with your eyes closed. You wouldn’t know if a chair was in the way or if the lights were on, right?  
          Well, robots are blind too — unless you give them *senses*. That’s where **sensors** come in.
        </div>

        <div class="card">
          Sensors help your Arduino **feel** the world — detect light, sound, movement, distance, temperature, and even gas leaks.  
          They're like **superpowers** for your robots!
        </div>

        <div class="card">
          Some common sensors you'll use:
          <ul>
            <li>🌡️ Temperature Sensor (like DHT11)</li>
            <li>🖐️ Touch Sensor</li>
            <li>🌞 Light Sensor (LDR)</li>
            <li>📢 Sound Sensor (Microphone Module)</li>
            <li>🚶 Motion Sensor (PIR)</li>
            <li>📏 Distance Sensor (Ultrasonic HC-SR04)</li>
          </ul>
        </div>

        <div class="card">
          In the next few lessons, you'll **see** how to connect and read data from these little detectives.  
          🕵️ Get ready to spy the invisible!
        </div>
      `,
      image: "https://robohash.org/sensorbot.png?size=300x300",
      audio: "https://audio.roboacademy.in/lessons/what-are-sensors.mp3"
    },

    {
      type: "game",
      title: "🧠 Sensor Match: Game Time!",
      content: `
        <div class="card">
          Match the sensor with what it detects. Drag and drop to pair them!
        </div>

        <style>
          #game-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 20px;
          }
          .draggable, .droppable {
            padding: 10px 15px;
            border: 2px dashed #aaa;
            cursor: grab;
            background-color: #1a1a1a;
            color: #fff;
            user-select: none;
            border-radius: 8px;
          }
          .droppable {
            min-width: 150px;
            min-height: 40px;
          }
        </style>

        <div id="game-container">
          <div class="draggable" draggable="true" id="temp">Temperature Sensor</div>
          <div class="draggable" draggable="true" id="ldr">LDR</div>
          <div class="draggable" draggable="true" id="pir">PIR Motion Sensor</div>

          <div class="droppable" data-match="temp">Detects: _______</div>
          <div class="droppable" data-match="ldr">Detects: _______</div>
          <div class="droppable" data-match="pir">Detects: _______</div>
        </div>

        <script>
          const draggables = document.querySelectorAll('.draggable');
          const droppables = document.querySelectorAll('.droppable');

          draggables.forEach(drag => {
            drag.addEventListener('dragstart', e => {
              e.dataTransfer.setData("text/plain", drag.id);
            });
          });

          droppables.forEach(drop => {
            drop.addEventListener('dragover', e => e.preventDefault());
            drop.addEventListener('drop', e => {
              const draggedId = e.dataTransfer.getData("text/plain");
              if (drop.dataset.match === draggedId) {
                drop.innerText = "Detects: " + document.getElementById(draggedId).innerText;
                drop.style.borderColor = "lime";
                document.getElementById(draggedId).style.opacity = 0.4;
              } else {
                drop.innerText = "❌ Try again!";
              }
            });
          });
        </script>
      `,
      image: "https://robohash.org/matchgame.png?size=300x300",
      audio: "https://audio.roboacademy.in/games/sensor-match.mp3"
    },

    {
      type: "video",
      title: "🎥 Watch This: How Sensors Work",
      content: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/6Lz5FONXvW8" frameborder="0" allowfullscreen></iframe>`,
      image: "https://img.youtube.com/vi/6Lz5FONXvW8/0.jpg",
      audio: "https://audio.roboacademy.in/videos/sensor-intro-audio.mp3"
    },

    {
      type: "interactive",
      title: "💬 Did You Know? (Reveal Box)",
      content: `
        <div class="card">
          <p>Click the button to reveal an interesting fact about sensors!</p>
          <button onclick="document.getElementById('fact').style.display='block'">Reveal Fact</button>
          <div id="fact" style="display:none; margin-top:10px;">
            <strong>Fact:</strong> Your smartphone has over <u>10 different sensors</u> inside it — including a gyroscope, accelerometer, ambient light sensor, proximity sensor, and even a barometer!
          </div>
        </div>
      `,
      image: "https://robohash.org/sensorfact.png?size=300x300",
      audio: "https://audio.roboacademy.in/facts/sensor-reveal.mp3"
    }

  ]
},{
  title: "Commanding the Physical World: Meet the Actuators",
  lessons: [
    {
      type: "text",
      title: "What is an Actuator?",
      content: `
<div class="card">Imagine your Arduino gets a command — like "turn on the lights", "make a noise", or "move forward". How does it make those things happen?</div>
<div class="card">That's where actuators come in! They’re the output devices that respond to your code and *do something* in the physical world.</div>
<div class="card">From spinning motors to buzzing buzzers, actuators are how your Arduino *talks back* to the real world.</div>
<div class="card">In this module, we're going to learn how to control these devices and bring your robot to life.</div>`,
      audio: "https://example.com/audio/what-is-an-actuator.mp3",
      image: "https://example.com/images/actuator-intro.jpg"
    },
    {
      type: "video",
      title: "Watch Actuators in Action",
      content: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/MY_ACTUATOR_DEMO" frameborder="0" allowfullscreen></iframe>`,
      audio: "https://example.com/audio/watch-actuators.mp3",
      image: "https://example.com/images/actuator-video-cover.jpg"
    },
    {
      type: "game",
      title: "Actuator Matching Game",
      content: `
<style>
  #actuatorGame { display: flex; flex-direction: column; gap: 10px; font-family: sans-serif; }
  .drag-target, .draggable { padding: 10px; border: 1px dashed #888; margin: 5px; cursor: grab; background: #1a1a1a; color: white; }
  .drag-target { background: #111; border-style: solid; }
</style>
<div id="actuatorGame">
  <div>Drag the actuator to its function:</div>
  <div class="draggable" draggable="true" id="motor">Motor</div>
  <div class="draggable" draggable="true" id="buzzer">Buzzer</div>
  <div class="draggable" draggable="true" id="servo">Servo Motor</div>
  <div class="drag-target" data-match="motor">🔄 Rotation</div>
  <div class="drag-target" data-match="buzzer">🔊 Sound</div>
  <div class="drag-target" data-match="servo">🎯 Angular Movement</div>
</div>
<script>
  let drags = document.querySelectorAll(".draggable");
  let targets = document.querySelectorAll(".drag-target");
  drags.forEach(el => {
    el.ondragstart = e => e.dataTransfer.setData("text/plain", el.id);
  });
  targets.forEach(tgt => {
    tgt.ondragover = e => e.preventDefault();
    tgt.ondrop = e => {
      const dropped = e.dataTransfer.getData("text");
      if (dropped === tgt.dataset.match) {
        tgt.innerHTML += " ✅";
        tgt.style.background = "#080";
      } else {
        tgt.innerHTML += " ❌";
        tgt.style.background = "#800";
      }
    };
  });
</script>`,
      audio: "https://example.com/audio/actuator-game.mp3",
      image: "https://example.com/images/actuator-game.jpg"
    },
    {
      type: "text",
      title: "Where You'll Use Actuators",
      content: `
<div class="card">In your future Arduino projects, actuators will be your go-to for making something move, blink, or make noise.</div>
<div class="card">Want to build a robot that walks? You'll need servos and motors.</div>
<div class="card">Need to make sound alerts for your smart weather station? Bring in the buzzer!</div>
<div class="card">Actuators are the *action heroes* of your robotic world.</div>`,
      audio: "https://example.com/audio/where-you-use-actuators.mp3",
      image: "https://example.com/images/actuator-usage.jpg"
    }
  ]
},{
  title: "Digital vs Analog: The Dual Worlds of Arduino Signals",
  lessons: [

    {
      type: "text",
      title: "Digital vs Analog: Two Languages of the Arduino",
      content: `
        <div class="card">Think of Arduino as a multilingual machine. It speaks two languages — Digital and Analog.</div>
        <div class="card">📌 <strong>Digital signals</strong> are either ON (1) or OFF (0). That’s it. Like a switch.</div>
        <div class="card">📈 <strong>Analog signals</strong> can have a range — like brightness levels, sound intensities, etc.</div>
        <div class="card">Digital pins use <code>digitalRead()</code> or <code>digitalWrite()</code>. Analog pins use <code>analogRead()</code> or <code>analogWrite()</code>.</div>
        <div class="card">We'll use <button class="gaming-btn">digitalRead</button> to detect states, and <button class="gaming-btn">analogWrite</button> to control LED brightness and motors later!</div>
      `
    },

    {
      type: "youtube",
      title: "Watch: What is Analog and Digital in Arduino?",
      url: "https://www.youtube.com/watch?v=qJ-KwZ7pSdw"
    },

    {
      type: "game",
      title: "Signal Sorter Mini Game",
      content: `
        <div style="padding: 10px;">
          <p>Click the right button when a signal appears!</p>
          <button class="gaming-btn" onclick="checkSignal('digital')">Digital</button>
          <button class="gaming-btn" onclick="checkSignal('analog')">Analog</button>
          <p id="signal-text" style="font-weight: bold; margin-top: 10px;"></p>
          <p id="feedback" style="color: lime; font-weight: bold;"></p>
        </div>
        <script>
          const signals = ['analog', 'digital', 'analog', 'digital', 'analog'];
          let index = 0;

          function showSignal() {
            document.getElementById('signal-text').textContent = 'Signal: ' + signals[index];
            document.getElementById('feedback').textContent = '';
          }

          function checkSignal(selected) {
            if (signals[index] === selected) {
              document.getElementById('feedback').textContent = '✅ Correct!';
            } else {
              document.getElementById('feedback').textContent = '❌ Wrong, try again.';
            }
            index = (index + 1) % signals.length;
            setTimeout(showSignal, 1000);
          }

          window.onload = showSignal;
        </script>
      `
    },

    {
      type: "interactive",
      title: "Can You Guess The Pin Type?",
      content: `
        <div class="card">Q1: Which function would you use to control brightness of an LED?</div>
        <div class="card"><button class="gaming-btn" onclick="alert('Correct!')">analogWrite()</button> <button class="gaming-btn" onclick="alert('Oops!')">digitalWrite()</button></div>
        <div class="card">Q2: Which pin would you use to connect a temperature sensor?</div>
        <div class="card"><button class="gaming-btn" onclick="alert('Correct!')">A0</button> <button class="gaming-btn" onclick="alert('Not quite.')">D13</button></div>
      `
    }

  ]
}









      ]
    },{
  title: "Arduino Coding: Speak Like a Board",
  modules:[
    {
  title: "Talking to the Board — What is Code, Anyway?",
  lessons: [
    {
      title: "Hey Arduino, Let’s Chat! (Intro to Code)",
      content: `
        <div class="card">
          🧑‍🏫 So… what *is* code?  
          Well, it’s like texting your Arduino — but with a way stricter friend who only understands *very specific* things.  
          <br><br>
          You tell it to blink, and it blinks (if you ask right). You mess up a semicolon? It throws a tantrum.  
          <br><br>
          But that’s what makes it fun 😉
        </div>

        <div class="card">
          🛠 Arduino uses something called <b>C++</b>, but with a lot of helper functions.  
          You don’t need to learn "full" C++, just enough to *boss around a board*.
        </div>

        <div class="card">
          📜 Here's a super simple piece of code:
          <pre><code>
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
          </code></pre>
          Don’t stress! We’ll break all of this down. But first — let’s play a mini game to match parts of this code to what they actually *do*.
        </div>
      `
    },
    {
      title: "Code Match Game: What’s This Line Do?",
      content: `
        <style>
          .card { margin-bottom: 1rem; }
          .option-btn { display: block; margin: 0.5rem 0; padding: 0.6rem; background: #111; color: #0f0; border: 1px solid #0f0; border-radius: 8px; cursor: pointer; }
          .option-btn:hover { background: #0f0; color: #000; }
        </style>

        <div class="card">
          <b>Question:</b> What does <code>pinMode(13, OUTPUT);</code> do?
        </div>
        <div class="card">
          <button class="option-btn" onclick="alert('✅ Correct! This sets pin 13 as an output pin.')">It makes pin 13 an output.</button>
          <button class="option-btn" onclick="alert('❌ Nope. This is used to read input.')">It reads data from pin 13.</button>
          <button class="option-btn" onclick="alert('❌ Not quite. That’s for analog writing.')">It writes analog value to pin 13.</button>
        </div>

        <div class="card">
          🕹 Want more? You’ll find cooler coding games in later lessons. Keep reading!
        </div>
      `
    },
    {
      title: "Watch It: Code is Just a Conversation",
      content: `
        <div class="card">
          📺 Watch this cool 1-minute explanation:
          <br><br>
          <iframe width="100%" height="215" src="https://www.youtube.com/embed/3vNm9jAFnEU" frameborder="0" allowfullscreen></iframe>
        </div>
      `
    },
    {
      title: "Your Turn: Write Your First Code",
      content: `
        <div class="card">
          🧪 <b>Try this:</b> Paste the following code into the Arduino IDE:
          <pre><code>
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}
          </code></pre>
          🔍 Hit verify, then upload it. You should see the onboard LED blink like a party light!
        </div>

        <div class="card">
          <button class="gaming-btn">I Did It! What’s Next?</button>
        </div>
      `
    }
  ]
},{//module 2 in section 3
  title: "The Wizard's Language: Understanding Arduino Code",
  lessons: [
    {
      title: "What's the Language Behind Arduino?",
      content: "<div class='card'>Did you know that your Arduino speaks a magical mix of C and C++? 🤯<br><br>Yup — that little board is powered by one of the most powerful programming languages on the planet. But don’t worry — you don’t need to be a wizard to learn it!</div>\n<div class='card'>Arduino uses a simplified version of C++, meaning you get all the power, but with way fewer headaches. Plus, you get handy functions like <code>digitalWrite()</code>, <code>pinMode()</code>, and <code>delay()</code> — almost like cheat codes!</div>\n<div class='card'>You’ll soon be writing spells (aka code) to control LEDs, sensors, motors, and more — using real programming magic!</div>",
      image: "url",
      audio: "url"
    },
    {
      title: "Watch: What is Arduino Programming?",
      content: "<iframe width='100%' height='215' src='https://www.youtube.com/embed/Yl3j-M2lVSU' frameborder='0' allowfullscreen></iframe>",
      image: "url",
      audio: "url"
    },
    {
      title: "Mini Game: Match the Arduino Commands!",
      content: "<style>.wordbox { display: inline-block; padding: 8px; background: #222; color: #fff; border-radius: 8px; margin: 5px; cursor: pointer; }</style>\n<div class='card'>Match each function to what it does:</div>\n<div class='card'><b><u>Functions:</u></b><br><span class='wordbox'>digitalWrite()</span> <span class='wordbox'>pinMode()</span> <span class='wordbox'>delay()</span></div>\n<div class='card'><b><u>Meanings:</u></b><br><span class='wordbox'>Sets pin behavior</span> <span class='wordbox'>Waits</span> <span class='wordbox'>Sends signal</span></div>\n<div class='card'><button class='gaming-btn'>Check Your Matches</button></div>",
      image: "url",
      audio: "url"
    },
    {
      title: "Card Walkthrough: First Look at Arduino Code",
      content: "<div class='card'>Here’s how every Arduino sketch looks:</div>\n<div class='card'><code>void setup() {\n  // setup things here\n}\n\nvoid loop() {\n  // repeat this code forever\n}</code></div>\n<div class='card'>Let’s understand them one by one. Click to reveal!</div>\n<button class='gaming-btn' onclick='document.getElementById(\"c1\").style.display=\"block\"'>What is setup()?</button>\n<div class='card' id='c1' style='display:none;'>It runs only once when the board powers on. Great for preparing your pins and stuff.</div>\n<button class='gaming-btn' onclick='document.getElementById(\"c2\").style.display=\"block\"'>What is loop()?</button>\n<div class='card' id='c2' style='display:none;'>It keeps running forever. This is where your robot keeps listening, blinking, or doing cool tricks!</div>",
      image: "url",
      audio: "url"
    },
    {
      title: "Quiz Time: Decode the Code!",
      content: "<div class='card'><b>Question:</b> What does <code>delay(1000);</code> do?</div>\n<div class='card'>A) Turn off the board<br>B) Wait 1 second<br>C) Set pin to LOW</div>\n<div class='card'><button class='gaming-btn'>Show Answer</button></div>",
      image: "url",
      audio: "url"
    }
  ]
},{//module 2 in section 3
  title: "🧠 Cracking the Code: Meet Variables",
  lessons: [
    {
      title: "What's a Variable?",
      content: `<div class="card">Let’s imagine your Arduino is a smart little brain. But even brains need a place to remember things, right?</div>
<div class="card">In Arduino coding, <b>variables</b> are like memory slots. You create one, give it a name, and store something inside!</div>
<div class="card">Example:<br><code>int ledPin = 13;</code><br>This creates a variable named <b>ledPin</b> and stores the number 13 inside it.</div>
<div class="card">It helps you reuse the value anytime later in your code. Instead of writing 13 everywhere, you just write <b>ledPin</b>. Way cleaner!</div>
<button class="gaming-btn" onclick="revealNextCard()">Next</button>`,
      image: "url",
      audio: "url"
    },
    {
      title: "Mini Game: Variable Sorter",
      content: `<div class="card">Tap the <b>correct type</b> of variable!</div>
<style>
  .var-btn { margin: 6px; padding: 12px 16px; background: #222; color: white; border-radius: 10px; border: 2px solid #0ff; cursor: pointer; }
  .var-btn:hover { background: #0ff; color: black; }
</style>
<div class="card">
  <p>💡 Value: 250</p>
  <button class="var-btn" onclick="alert('✅ Correct! It’s an int')">int</button>
  <button class="var-btn" onclick="alert('❌ Nope, that’s not correct')">char</button>
  <button class="var-btn" onclick="alert('❌ Nope')">String</button>
</div>
<div class="card">
  <p>💡 Value: 'A'</p>
  <button class="var-btn" onclick="alert('❌ Nope')">String</button>
  <button class="var-btn" onclick="alert('✅ Correct! It’s a char')">char</button>
  <button class="var-btn" onclick="alert('❌')">int</button>
</div>
<button class="gaming-btn" onclick="revealNextCard()">Play Again</button>`,
      image: "url",
      audio: "url"
    },
    {
      title: "Watch: Arduino Variables Explained Visually",
      content: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/8A3p9jdfCek" title="Arduino Variables"></iframe>`,
      image: "url",
      audio: "url"
    },
    {
      title: "Try it Yourself: Modify a Variable",
      content: `<div class="card">Let’s tweak some real code! Copy this into your IDE:</div>
<div class="card"><code>int delayTime = 500;\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(delayTime);\n  digitalWrite(13, LOW);\n  delay(delayTime);\n}</code></div>
<div class="card">Change <code>delayTime</code> to <b>100</b> or <b>1000</b>. What changes do you observe?</div>
<button class="gaming-btn" onclick="revealNextCard()">I Tried It!</button>`,
      image: "url",
      audio: "url"
    }
  ]
}



  ]
    },{
      title: "Arduino Coding: The Serious Mode In The Course",
      modules: [
{
  "title": "loop(): The Heartbeat That Never Stops",
  "lessons": [
    {
      "title": "🫀 The Soul of Every Arduino Project",
      "content": "<div class='card'>\nYou power on your Arduino. A tiny light blinks.\n</div>\n<div class='card'>\nThen... it blinks again.\nAnd again. And again.\nThat’s <code>loop()</code> — the part of your sketch that <b>never stops running</b> until your board is powered off.\n</div>\n<div class='card'>\nIt’s like your heartbeat. The brain is <code>setup()</code>. But <code>loop()</code> is your pulse.💓\n</div>\n<div class='card'>\n<pre>\nvoid loop() {\n   // Your repeating magic goes here\n}\n</pre>\nThis is where your robot moves, sensors react, LEDs flash, buzzers scream — again and again.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎡 A Day in the Life of loop()",
      "content": "<div class='card'>\nImagine loop() as your daily routine:\n<ul>\n<li>Wake up</li>\n<li>Brush your teeth</li>\n<li>Eat breakfast</li>\n<li>Repeat forever (like a robot 🤖)</li>\n</ul>\n</div>\n<div class='card'>\nArduino does the same:\n<pre>\nvoid loop() {\n  checkSensors();\n  updateScreen();\n  blinkLED();\n}\n</pre>\n</div>\n<div class='card'>\nIt repeats this cycle non-stop. Literally thousands of times per second!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: The Infinite Loop Room",
      "content": "<div class='card'>\nYou're trapped in a room. Three doors appear:\n<ul>\n<li>A: A door labeled 'Run Once'</li>\n<li>B: A door labeled 'Run Forever'</li>\n<li>C: A door labeled 'Exit Loop'</li>\n</ul>\n</div>\n<div class='card'>\nWhich one is <code>loop()</code>?\n<input id='loopchoice' placeholder='Type A, B or C' style='width: 100%'/>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! loop() is Door B – it never ends.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: The Power of loop()",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/BvU0g_FxqpM\" title=\"Arduino loop() Explained with Real Projects\" frameborder=\"0\" allowfullscreen></iframe>\n<div class='card'>\nThis video shows how <code>loop()</code> powers real-time Arduino behaviors. Watch closely — you’ll see how timing and repeating patterns matter.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project Challenge: Make Something Loop",
      "content": "<div class='card'>\nYour challenge: Create a simple animation using an LED.\n</div>\n<div class='card'>\nHere’s a head start:\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(300);\n  digitalWrite(13, LOW);\n  delay(300);\n}\n</pre>\n</div>\n<div class='card'>\nTry:\n- Changing the delay to make it blink faster\n- Add a second LED (double trouble!)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Deep Thought: When NOT to Use loop()",
      "content": "<div class='card'>\nSome students put everything inside loop(). Like this:\n<pre>\nvoid loop() {\n  pinMode(13, OUTPUT); // ⚠️ bad!\n  digitalWrite(13, HIGH);\n}\n</pre>\n</div>\n<div class='card'>\nBut <code>pinMode()</code> only needs to run <b>once</b> — it belongs in <code>setup()</code>.\n</div>\n<div class='card'>\nDon’t overload <code>loop()</code> — just put the actions you want to repeat.\n</div>\n<div class='card'>\nYou don’t say “I’m right-handed” 1000x a second. You say it once. Then you write. Same logic. ✍️\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "setup(): The One Who Prepares Everything",
  "lessons": [
    {
      "title": "🛠️ What is setup()?",
      "content": "<div class='card'>\nBefore your Arduino starts its infinite loop, it runs <code>setup()</code> once.\n</div>\n<div class='card'>\nIt's like the person who opens the gates, turns on the lights, and shouts: “Okay, we’re ready!”\n</div>\n<div class='card'>\n<pre>\nvoid setup() {\n  // This runs once when the board powers on\n}\n</pre>\n</div>\n<div class='card'>\nCommon things inside <code>setup()</code>:\n<ul>\n<li><code>pinMode()</code></li>\n<li><code>Serial.begin()</code></li>\n<li>Initializing sensors, displays</li>\n<li>Setting up libraries</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎬 Analogy: Setting Up the Stage",
      "content": "<div class='card'>\nImagine you’re putting on a play. 🎭\n</div>\n<div class='card'>\n- <code>setup()</code> is you arranging the chairs, testing the lights, and putting the actors in place.\n- <code>loop()</code> is the performance.\n</div>\n<div class='card'>\nWithout setup, the show is a disaster.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Setup or Loop?",
      "content": "<div class='card'>\nRead these tasks. Decide if they go in <code>setup()</code> or <code>loop()</code>:\n<pre>\n1. pinMode(13, OUTPUT);\n2. Turn on LED\n3. Serial.begin(9600);\n4. Check sensor value\n</pre>\n</div>\n<div class='card'>\n<input id='setupQuiz' placeholder='Type like: 1-setup, 2-loop...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct: 1-setup, 2-loop, 3-setup, 4-loop')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: setup() Explained with Real Projects",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Mv6AejNhdAM\" title=\"Arduino setup() Tutorial\" frameborder=\"0\" allowfullscreen></iframe>\n<div class='card'>\nThis video shows what goes into <code>setup()</code> and why it matters before your code runs wild.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Mini Project: Blinky with Setup()",
      "content": "<div class='card'>\nTry this simple project:\n</div>\n<div class='card'>\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(300);\n  digitalWrite(13, LOW);\n  delay(300);\n}\n</pre>\n</div>\n<div class='card'>\nWhy is pinMode in <code>setup()</code>? Because you only need to declare it once. ✅\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},
{
  "title": "Meet the Math Squad: Arduino's Arithmetic Operators",
  "lessons": [
    {
      "title": "🧮 Who Are the Arithmetic Operators?",
      "content": "<div class='card'>\nOperators are how we <b>do math in Arduino</b>.\n</div>\n<div class='card'>\nThey let you add, subtract, divide, multiply, and find remainders. They’re the little symbols with BIG power.\n</div>\n<div class='card'>\nHere’s the squad:\n<ul>\n<li><code>+</code> ➜ Add things up</li>\n<li><code>-</code> ➜ Subtract</li>\n<li><code>*</code> ➜ Multiply</li>\n<li><code>/</code> ➜ Divide</li>\n<li><code>%</code> ➜ Remainder after division</li>\n<li><code>=</code> ➜ Assignment (not equal! This gives a value)</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🍕 Pizza Math: Real Examples",
      "content": "<div class='card'>\nYou have 10 slices of pizza. You eat 3.\n<pre>\nint pizza = 10;\npizza = pizza - 3;  // Now you have 7\n</pre>\n</div>\n<div class='card'>\nYou split 12 cookies with 3 friends:\n<pre>\nint perPerson = 12 / 4; // = 3 each\n</pre>\n</div>\n<div class='card'>\nWant to check even/odd?\n<pre>\nif (x % 2 == 0) {\n  // Even number!\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Operator Match Game",
      "content": "<div class='card'>\nMatch the operator to its action:\n<pre>\nA) +     B) %     C) =\nD) *     E) /     F) -\n</pre>\nWhat does each one do?\n</div>\n<div class='card'>\n<input id='opMatch' placeholder='Type like: A-Add, B-Remainder, ...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Nice! That’s how math powers electronics.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Arduino Math Operators in Action",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/T8DKCGbIsqI\" title=\"Arduino Math Operators\" frameborder=\"0\" allowfullscreen></iframe>\n<div class='card'>\nWatch how these simple operators control sensors, servos, and math-based decisions.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Challenge: Pulse Counter",
      "content": "<div class='card'>\nYour mission: Count 10 button presses and reset back to 0 using arithmetic.\n</div>\n<div class='card'>\n<pre>\nint count = 0;\n\nvoid loop() {\n  if (digitalRead(buttonPin) == HIGH) {\n    count = count + 1;\n    if (count >= 10) count = 0;\n  }\n}\n</pre>\n</div>\n<div class='card'>\nThis is the power of simple math!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Mastering Arduino Math: The Complete Arithmetic Operators",
  "lessons": [
    {
      "title": "🤹 Meet the Math Squad",
      "content": "<div class='card'>\nArduino gives you a tiny calculator inside the code.\nYou can add, subtract, divide, multiply, and even find remainders.\n</div>\n<div class='card'>\nLet’s meet the core math operators:\n<ul>\n<li><code>+</code> ➜ Addition</li>\n<li><code>-</code> ➜ Subtraction</li>\n<li><code>*</code> ➜ Multiplication</li>\n<li><code>/</code> ➜ Division</li>\n<li><code>%</code> ➜ Remainder (modulus)</li>\n<li><code>=</code> ➜ Assignment (NOT equality)</li>\n</ul>\n</div>\n<div class='card'>\nYou’ll use them in every project — even blinking LEDs.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🍕 Pizza Math: Real Life Arduino Examples",
      "content": "<div class='card'>\nYou buy 8 LEDs. You burn out 2. What’s left?\n<pre>\nint leds = 8;\nleds = leds - 2;  // 6 left\n</pre>\n</div>\n<div class='card'>\nYour robot has 2 wheels and 3 legs. Total?\n<pre>\nint parts = 2 + 3; // = 5\n</pre>\n</div>\n<div class='card'>\nYou share 10 cookies with 4 sensors:\n<pre>\nint perSensor = 10 / 4; // = 2 (because Arduino ints drop decimals!)\n</pre>\n</div>\n<div class='card'>\nYou want to blink an LED only on even button presses:\n<pre>\nif (pressCount % 2 == 0) {\n   blink();\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Operator!",
      "content": "<div class='card'>\nMatch the code with the right operator:\n<pre>\nA) int x = 5 + 3;\nB) int x = 8 % 3;\nC) int x = 6 / 2;\nD) x = x * 2;\n</pre>\n</div>\n<div class='card'>\n<input id='mathGame' placeholder='Type like: A=Add, B=Modulus...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! A=Add, B=Modulus, C=Divide, D=Multiply')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Arduino Math Operators Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/T8DKCGbIsqI\" title=\"Arduino Math Operators Tutorial\" frameborder=\"0\" allowfullscreen></iframe>\n<div class='card'>\nWatch this video to see real-life applications of each operator — especially for sensors and logic-based systems.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project Challenge: LED Math Display",
      "content": "<div class='card'>\nChallenge: Blink the LED as many times as the result of a math expression.\n</div>\n<div class='card'>\nExample:\n<pre>\nint blinks = 2 + 3 * 2; // = 8\n</pre>\nNow make it blink that many times:\n<pre>\nfor(int i=0; i<blinks; i++) {\n  digitalWrite(13, HIGH);\n  delay(200);\n  digitalWrite(13, LOW);\n  delay(200);\n}\n</pre>\n</div>\n<div class='card'>\nTry changing the math equation and watching the blinks!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💣 Common Mistakes (and how to avoid them)",
      "content": "<div class='card'>\n❌ <code>x = x + 1</code> looks confusing, but it’s correct!\n✔️ It means: take x, add 1, and store it back in x.\n</div>\n<div class='card'>\n❌ Forgetting that Arduino uses <code>int</code> for whole numbers.\n<pre>\nint result = 7 / 2; // NOT 3.5 ➜ it's 3\n</pre>\n✔️ Want decimals? Use <code>float</code> instead.\n</div>\n<div class='card'>\n❌ Using <code>=</code> to compare. That’s wrong!\n✔️ Use <code>==</code> to compare values.\n</div>\n<div class='card'>\n<pre>\nif (x = 5) // wrong! assigns 5 to x\nif (x == 5) // correct! checks if x is 5\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Pointers? Nah, Just Magic Mirrors!",
  "lessons": [
    {
      "title": "🪞 What Are Pointer Operators?",
      "content": "<div class='card'>\nIn Arduino (and C++), pointers are like magic mirrors.\n</div>\n<div class='card'>\nThey don't hold the value — they hold the <i>address</i> of where that value lives in memory.\n</div>\n<div class='card'>\nThere are two main pointer operators:\n<ul>\n<li><code>&</code> ➜ Reference operator — gets the memory address</li>\n<li><code>*</code> ➜ Dereference operator — gets the value from that address</li>\n</ul>\n</div>\n<div class='card'>\nExample:\n<pre>\nint num = 42;\nint* ptr = &num; // ptr holds address of num\nSerial.println(*ptr); // prints 42\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Analogy: Secret House Addresses",
      "content": "<div class='card'>\nImagine variables are houses, and inside each house is a gift 🎁.\n</div>\n<div class='card'>\nThe <code>&</code> operator gives you the <b>address</b> of a house.\n</div>\n<div class='card'>\nThe <code>*</code> operator lets you <b>peek inside</b> that house and see the gift!\n</div>\n<div class='card'>\n<pre>\nint present = 99;\nint* address = &present; // get address\nSerial.println(*address); // peek inside the gift\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Peek Into Memory!",
      "content": "<div class='card'>\nGuess the output of this code:\n<pre>\nint a = 10;\nint* b = &a;\na = a + 5;\nSerial.println(*b);\n</pre>\n</div>\n<div class='card'>\n<input id='ptrQuiz' placeholder='What will be printed?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Answer: 15. Because *b sees what a became!')\">Submit</button>\n</div>\n<div class='card'>\nPointers always see what’s happening at the real location in memory.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Understanding Pointers in Arduino",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/yezzh6tJvGM' title='Pointers in Arduino Hindi' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nA video walkthrough of what pointers are, how to use them, and where they’re useful in Arduino projects.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Mini Project: Control LED Using Pointers",
      "content": "<div class='card'>\nLet’s use a pointer to turn on an LED. It’s weird — but fun!\n</div>\n<div class='card'>\n<pre>\nint ledPin = 13;\nint* ptr = &ledPin;\n\nvoid setup() {\n  pinMode(*ptr, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(*ptr, HIGH);\n  delay(500);\n  digitalWrite(*ptr, LOW);\n  delay(500);\n}\n</pre>\n</div>\n<div class='card'>\nHere, we're indirectly controlling pin 13 using its address!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🤯 Bonus: Where Are Pointers Used?",
      "content": "<div class='card'>\nPointers are used in:\n<ul>\n<li>Custom libraries</li>\n<li>Interrupt routines</li>\n<li>Function parameters (pass-by-reference)</li>\n<li>Dynamic memory tricks</li>\n</ul>\n</div>\n<div class='card'>\nMost beginner projects don’t need them. But as you grow, you’ll LOVE what they let you do. 🧠⚡\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Arduino's Truth Detectors: Comparison Operators",
  "lessons": [
    {
      "title": "⚖️ What Are Comparison Operators?",
      "content": "<div class='card'>\nThese operators help Arduino <b>compare two values</b> and decide if something is true or false.\n</div>\n<div class='card'>\nThey’re the reason your code can say:\n<ul>\n<li>\"If button is pressed...\"</li>\n<li>\"If temperature is too high...\"</li>\n<li>\"If you’ve reached the score...\"</li>\n</ul>\n</div>\n<div class='card'>\nLet’s meet them:\n<ul>\n<li><code>==</code> ➜ Equal to</li>\n<li><code>!=</code> ➜ Not equal to</li>\n<li><code>&gt;</code> ➜ Greater than</li>\n<li><code>&lt;</code> ➜ Less than</li>\n<li><code>&gt;=</code> ➜ Greater than or equal to</li>\n<li><code>&lt;=</code> ➜ Less than or equal to</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🍟 Real-Life Examples: Fries & Scores",
      "content": "<div class='card'>\nExample 1:\n<pre>\nint fries = 10;\nif (fries == 10) {\n  eat();\n}\n</pre>\nChecks if fries are exactly 10.\n</div>\n<div class='card'>\nExample 2:\n<pre>\nint temp = 38;\nif (temp > 37) {\n  soundAlarm();\n}\n</pre>\nScreams if you're too hot 🌡️.\n</div>\n<div class='card'>\nExample 3:\n<pre>\nif (score != 100) {\n  keepTrying();\n}\n</pre>\nOnly rewards you when score hits 100.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Mini Game: True or False?",
      "content": "<div class='card'>\nWhat does this print?\n<pre>\nint a = 3, b = 5;\nSerial.println(a >= b);\n</pre>\n</div>\n<div class='card'>\n<input id='compGame' placeholder='true or false?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('❌ Nope! Answer is false (0) — 3 is not greater or equal to 5.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Comparison Operators in Action",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/WcJUGjhhLAo' title='Arduino Comparison Operators in Hindi' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nSee all six operators in action with sensors, decisions, and logic.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Real Challenge: Temp Checker",
      "content": "<div class='card'>\nTry this logic:\n<pre>\nint temp = analogRead(A0);\nif (temp >= 700) {\n  digitalWrite(13, HIGH);\n} else {\n  digitalWrite(13, LOW);\n}\n</pre>\n</div>\n<div class='card'>\nYou're lighting an LED when a certain threshold is crossed.\nThis is exactly how fire alarms or plant watering systems work!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💣 Common Mistakes to Avoid",
      "content": "<div class='card'>\n<pre>\nif (x = 5) // ❌ This assigns 5 to x — NOT a comparison!\n</pre>\nUse <code>==</code> for comparisons:\n<pre>\nif (x == 5) // ✅ Now it checks equality\n</pre>\n</div>\n<div class='card'>\n<pre>\nif (temp < 50) // ✅ All good\nif (temp =< 50) // ❌ That’s not a valid operator\n</pre>\n</div>\n<div class='card'>\nTip: Always double-check for <b>= vs ==</b> and operator typos!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Bits and Power: Mastering Bitwise Operators in Arduino",
  "lessons": [
    {
      "title": "💡 What Are Bitwise Operators?",
      "content": "<div class='card'>\nBitwise operators let you control data at the BIT level — pure 0s and 1s.\n</div>\n<div class='card'>\nThey work on binary versions of numbers. Like:\n<pre>\nint x = 6;   // 00000110\nint y = 3;   // 00000011\n</pre>\n</div>\n<div class='card'>\nHere's the squad:\n<ul>\n<li><code>&</code> ➜ AND</li>\n<li><code>|</code> ➜ OR</li>\n<li><code>^</code> ➜ XOR</li>\n<li><code>~</code> ➜ NOT</li>\n<li><code>&lt;&lt;</code> ➜ Bitshift Left</li>\n<li><code>&gt;&gt;</code> ➜ Bitshift Right</li>\n</ul>\n</div>\n<div class='card'>\nBitwise is 💥powerful for performance, pin control, memory-efficient tricks.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 Real-Life Example: Control 8 LEDs Using 1 Byte",
      "content": "<div class='card'>\nLet’s say you control 8 LEDs with an 8-bit number:\n<pre>\nb11101101  ➜ Turns ON some LEDs, OFF others\n</pre>\nEach bit = one LED’s state!\n</div>\n<div class='card'>\n<pre>\nint pattern = 0b11101101;\nfor(int i=0; i<8; i++) {\n  digitalWrite(i, (pattern >> i) & 1);\n}\n</pre>\n</div>\n<div class='card'>\nThis loops through each bit and applies it to a pin — pure 🔥!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🕹️ Game: Bitwise Battle!",
      "content": "<div class='card'>\nMatch the operation to its result:\n<pre>\nA = 0b1010 & 0b1100\nB = 0b1010 | 0b1100\nC = 0b1010 ^ 0b1100\n</pre>\n</div>\n<div class='card'>\n<input id='bitBattle' placeholder='Write answers like: A=1000, B=1110...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! A=1000, B=1110, C=0110')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bitwise Operators Simplified",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/OZvwkec8XLs' title='Bitwise operators explained' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nThis video breaks down all the operators with simple charts, fun narrations, and a bit of Arduino demo.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: Bitshift Based LED Animator",
      "content": "<div class='card'>\nUse bit shifting to animate LEDs like a wave:\n</div>\n<div class='card'>\n<pre>\nbyte leds = 0b00000001;\nvoid loop() {\n  for(int i=0; i<8; i++) {\n    digitalWrite(i, (leds >> i) & 1);\n  }\n  delay(100);\n  leds = leds << 1;\n  if (leds == 0) leds = 0b00000001;\n}\n</pre>\n</div>\n<div class='card'>\nThis moves a single ON bit from left to right like KITT from Knight Rider 🚗💨\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💣 Mistakes & Bit Traps",
      "content": "<div class='card'>\n⚠️ <code>~</code> flips ALL bits — even unused ones.\n<pre>\nbyte x = 0b00001111;\nbyte y = ~x; // y = 0b11110000\n</pre>\n</div>\n<div class='card'>\n⚠️ Bitshift left or right too far?\nIt’ll push out bits and lose data.\n<pre>\nx = x << 8; // gone!\n</pre>\n</div>\n<div class='card'>\n✅ Always mask your bits with <code>& 1</code> to isolate bits:\n<pre>\nbit = (x >> i) & 1;\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Thinking Like Arduino: Boolean Logic Mastery",
  "lessons": [
    {
      "title": "🧠 What Are Logical (Boolean) Operators?",
      "content": "<div class='card'>\nThese operators deal with <b>truth</b> — literally.\nThey help Arduino decide what to do based on <b>multiple conditions</b>.\n</div>\n<div class='card'>\n<ul>\n<li><code>&&</code> ➜ Logical AND (both must be true)</li>\n<li><code>||</code> ➜ Logical OR (at least one true)</li>\n<li><code>!</code> ➜ Logical NOT (opposite truth)</li>\n</ul>\n</div>\n<div class='card'>\nThis is Arduino’s way of asking:\n<b>“Should I act?”</b> — based on two sensors, or buttons, or states.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌟 Real-Life Examples with Logic",
      "content": "<div class='card'>\n<pre>\nif (temp > 35 && humidity > 70) {\n  activateCooler();\n}\n</pre>\nThis will only run if <b>both conditions are true</b>.\n</div>\n<div class='card'>\n<pre>\nif (button1Pressed || button2Pressed) {\n  startGame();\n}\n</pre>\nAny one button triggers the game.\n</div>\n<div class='card'>\n<pre>\nif (!isConnected) {\n  reconnect();\n}\n</pre>\nThis checks if <b>NOT connected</b>, then tries again.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Logic Locker Puzzle",
      "content": "<div class='card'>\nImagine a locker with two keys. It opens only if:\nKey A is ON AND Key B is ON.\n</div>\n<div class='card'>\n<input id='logicLocker' placeholder='Write logic expression like: A && B' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! It opens only if A && B are both true.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Boolean Logic Made Simple",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/71eO_v9CcoQ' title='Arduino Boolean Logic' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nA fun visual explanation of Boolean logic in real projects: motion detectors, alarms, safety shutdowns.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: The Dual-Sensor Alarm",
      "content": "<div class='card'>\nHere’s a real circuit with two sensors (like smoke + heat):\n</div>\n<div class='card'>\n<pre>\nint fire = digitalRead(2);\nint heat = digitalRead(3);\nif (fire && heat) {\n  digitalWrite(13, HIGH);\n}\n</pre>\n</div>\n<div class='card'>\nThis will only sound the alarm if BOTH are active.\nUse <code>||</code> if you want either to be enough.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌀 Bonus Lesson: Truth Tables",
      "content": "<div class='card'>\nTruth tables help visualize logic outcomes. Here's one for AND:\n<pre>\nA | B | A && B\n0 | 0 |   0\n0 | 1 |   0\n1 | 0 |   0\n1 | 1 |   1\n</pre>\n</div>\n<div class='card'>\nTry making one for <code>||</code> and <code>!</code> on your own!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Compound Moves: Shortcuts to Powerful Arduino Logic",
  "lessons": [
    {
      "title": "🤔 What Are Compound Operators?",
      "content": "<div class='card'>\nCompound operators are <b>shorthand versions</b> of common arithmetic, logical, and bitwise operations.\n</div>\n<div class='card'>\nInstead of:\n<pre>x = x + 5;</pre>\nYou can write:\n<pre>x += 5;</pre>\n</div>\n<div class='card'>\nThis saves time, memory, and makes your code 💅 cleaner!\n</div>\n<div class='card'>\nPopular compound operators include:\n<ul>\n<li><code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code></li>\n<li><code>&=</code>, <code>|=</code>, <code>^=</code> (bitwise)</li>\n<li><code>++</code> and <code>--</code> (increment/decrement)</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 Real Use Cases in Arduino Projects",
      "content": "<div class='card'>\n🎮 Want to count points?\n<pre>\nscore += 10;  // Add 10 points\n</pre>\n</div>\n<div class='card'>\n🌡️ Gradually reduce a temperature value:\n<pre>\ntemp -= 2;  // cool down\n</pre>\n</div>\n<div class='card'>\n💡 Toggle LED pattern with:\n<pre>\nleds ^= 0b00010000; // Flip bit 4\n</pre>\n</div>\n<div class='card'>\nLoop counter magic:\n<pre>\ni++;\n</pre>\nThis is same as: <code>i = i + 1;</code>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Code Crunch Challenge",
      "content": "<div class='card'>\n🧠 What will this do?\n<pre>\nint x = 4;\nx *= 2;\nx++;\n</pre>\n</div>\n<div class='card'>\n<input id='compoundAnswer' placeholder='Your final value of x?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! x = 9')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Shorthand Superpowers in Arduino",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/Mk39k-YC_Y4' title='Arduino Compound Operators' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nThis visual explainer helps you understand how compound operators speed up loops, counters, and toggling in real projects.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: Automatic LED Dimmer",
      "content": "<div class='card'>\nUse compound operators to gradually dim a light.\n</div>\n<div class='card'>\n<pre>\nint brightness = 255;\nvoid loop() {\n  analogWrite(9, brightness);\n  brightness -= 5;\n  if (brightness <= 0) brightness = 255;\n  delay(100);\n}\n</pre>\n</div>\n<div class='card'>\nThis repeats a dimming animation using <code>-=</code>. You could also try <code>brightness /= 2;</code> for funky effects!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Decisions, Decisions: Understanding the if Statement",
  "lessons": [
    {
      "title": "🧠 Meet the if Statement",
      "content": "<div class='card'>Ever had to decide whether to eat pizza or not? Arduino does the same using the <code>if</code> statement.</div>\n<div class='card'>The basic syntax:\n<pre>\nif (condition) {\n  // code to run if true\n}\n</pre>\n</div>\n<div class='card'>Example:\n<pre>\nif (temperature > 30) {\n  digitalWrite(fanPin, HIGH);\n}\n</pre>\nThis means: If the temperature is more than 30, turn the fan ON!</div>\n<div class='card'>You can use sensors, buttons, or values from anywhere in your code.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/JzF8Izo.png",
      "audio": "https://example.com/audio/if_statement_intro.mp3"
    },
    {
      "title": "🎮 Game: Help Arduino Decide!",
      "content": "<div class='card'>Choose what Arduino should do based on the temperature!</div>\n<script>\nlet temp = Math.floor(Math.random() * 50);\ndocument.write('<div class=\"card\">Temperature is ' + temp + '°C</div>');\nif(temp > 30) {\n  document.write('<div class=\"card\">Arduino turns the FAN ON!</div>');\n} else {\n  document.write('<div class=\"card\">Arduino keeps the FAN OFF.</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Watch: if Statement Explained Simply",
      "content": "<div class='card'>Here's a fun video that visually explains how <code>if</code> works in Arduino!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/fE7HVSHE6zA' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💻 Try It: Write Your Own if Statement",
      "content": "<div class='card'>Type out your first <code>if</code> statement here and test what it does.</div>\n<textarea rows='10' style='width:100%;'>if (digitalRead(buttonPin) == HIGH) {\n  digitalWrite(ledPin, HIGH);\n}</textarea>\n<div class='card'>You can use the Arduino Web Editor to test this, or even the simulator on RoboDict homepage.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "The Power of Else — What If Not?",
  "lessons": [
    {
      "title": "🧩 Meet the else Statement",
      "content": "<div class='card'>Sometimes things don't go as planned. Arduino handles that with <code>else</code>!</div>\n<div class='card'>If the <code>if</code> condition is false, Arduino jumps to the <code>else</code> block.</div>\n<div class='card'>Example:\n<pre>\nif (temp > 30) {\n  fanOn();\n} else {\n  fanOff();\n}\n</pre>\nNow the fan will only run if the temperature is high, otherwise it’ll stay off.</div>\n<div class='card'>You can chain this with <code>if</code> to create alternate paths!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/BYAkUdR.png",
      "audio": "https://example.com/audio/else_explained.mp3"
    },
    {
      "title": "🎮 Game: Arduino Needs a Choice!",
      "content": "<div class='card'>Your robot is standing at a fork. Should it go left or right?</div>\n<script>\nlet batteryLevel = Math.floor(Math.random() * 100);\ndocument.write('<div class=\"card\">Battery: ' + batteryLevel + '%</div>');\nif (batteryLevel > 50) {\n  document.write('<div class=\"card\">Arduino decides to go exploring!</div>');\n} else {\n  document.write('<div class=\"card\">Arduino returns to base for recharge.</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: else in Real Arduino Projects",
      "content": "<div class='card'>This quick video walks through real-life Arduino uses of <code>if...else</code> logic.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/zNQYgky4qv8' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🛠️ Mini Challenge: else in Action",
      "content": "<div class='card'>Write a short code snippet that uses <code>else</code> to blink a red LED if a sensor value is too low.</div>\n<textarea rows='10' style='width:100%;'>if (sensorVal > 500) {\n  digitalWrite(greenLED, HIGH);\n} else {\n  digitalWrite(redLED, HIGH);\n}</textarea>\n<div class='card'>Try it out in your IDE or simulator. What happens when you adjust the sensor?</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Loop Like a Pro — The Mighty for Loop",
  "lessons": [
    {
      "title": "🔁 What is a for Loop?",
      "content": "<div class='card'>Ever wanted your Arduino to do something 10 times without writing it 10 times? Say hello to the <code>for</code> loop!</div>\n<div class='card'>Syntax:\n<pre>\nfor (int i = 0; i < 10; i++) {\n  // run this code\n}\n</pre></div>\n<div class='card'>It has 3 parts:\n<ul>\n<li><b>Start:</b> int i = 0</li>\n<li><b>Condition:</b> i < 10</li>\n<li><b>Update:</b> i++ (means i = i + 1)</li>\n</ul>\n</div>\n<div class='card'>Example:\n<pre>\nfor (int i = 0; i < 5; i++) {\n  digitalWrite(led, HIGH);\n  delay(500);\n  digitalWrite(led, LOW);\n  delay(500);\n}\n</pre>\nThis blinks the LED 5 times!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/PO8bVje.png",
      "audio": "https://example.com/audio/forloop_intro.mp3"
    },
    {
      "title": "🎮 Game: The Loop Counter",
      "content": "<div class='card'>Let’s simulate a countdown using a <code>for</code> loop!</div>\n<script>\nfor (let i = 5; i > 0; i--) {\n  document.write('<div class=\"card\">T-minus ' + i + '...</div>');\n}\ndocument.write('<div class=\"card\">🚀 Lift-off!</div>');\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Watch: Arduino for Loop Explained",
      "content": "<div class='card'>This video covers <code>for</code> loops with LED patterns, sensors, and real projects.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/h2uQU7gYmmY' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💡 Explore: Use for Loop with Arrays",
      "content": "<div class='card'>Use <code>for</code> to control multiple LEDs from an array!</div>\n<pre>\nint leds[] = {2, 3, 4, 5};\nfor (int i = 0; i < 4; i++) {\n  digitalWrite(leds[i], HIGH);\n  delay(200);\n  digitalWrite(leds[i], LOW);\n}\n</pre>\n<div class='card'>That’s how scrolling lights are made! 🔥</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,
{
  "title": "Go With the Flow — Understanding the while Loop",
  "lessons": [
    {
      "title": "🌊 Meet the while Loop",
      "content": "<div class='card'>The <code>while</code> loop keeps running as long as its condition stays true — kind of like your brain thinking about pizza until you eat it.</div>\n<div class='card'>Syntax:\n<pre>\nwhile (condition) {\n  // do this stuff\n}\n</pre></div>\n<div class='card'>Example:\n<pre>\nwhile (digitalRead(buttonPin) == HIGH) {\n  digitalWrite(ledPin, HIGH);\n  delay(200);\n  digitalWrite(ledPin, LOW);\n  delay(200);\n}\n</pre>\nThis keeps blinking the LED while the button is pressed.</div>\n<div class='card'>⚠️ Warning: If the condition never turns false, it loops forever!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/oKRB1Bk.png",
      "audio": "https://example.com/audio/while_loop_intro.mp3"
    },
    {
      "title": "🎮 Game: Button Hold Challenge",
      "content": "<div class='card'>Simulate holding a button to keep the loop going:</div>\n<script>\nlet pressed = Math.random() > 0.5;\nif (pressed) {\n  for (let i = 0; i < 5; i++) {\n    document.write('<div class=\"card\">LED blink #' + (i+1) + '</div>');\n  }\n} else {\n  document.write('<div class=\"card\">Button not pressed — no blinks.</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: while Loops for Motion and Sensors",
      "content": "<div class='card'>Here's how while loops work in robotics and motion sensors. Super fun use cases!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/3VBZTZS3kgI' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📦 DIY Challenge: while Loop with Sensor",
      "content": "<div class='card'>Make a project that runs a motor while a light sensor detects darkness.</div>\n<pre>\nwhile (analogRead(lightSensor) < 300) {\n  digitalWrite(motorPin, HIGH);\n}\n</pre>\n<div class='card'>Try changing the condition to suit different thresholds!</div>",
      "image": "",
      "audio": ""
    }
  ]
},
{
  "title": "One-Time Guarantee — The do...while Loop",
  "lessons": [
    {
      "title": "📍 Why do...while?",
      "content": "<div class='card'>The <code>do...while</code> loop guarantees one execution — no matter what!</div>\n<div class='card'>Syntax:\n<pre>\ndo {\n  // code runs once minimum\n} while (condition);\n</pre></div>\n<div class='card'>Unlike <code>while</code>, the condition is checked <i>after</i> the loop body. That’s why it always runs once.</div>\n<div class='card'>Example:\n<pre>\nint tries = 0;\ndo {\n  Serial.println(\"Trying to connect...\");\n  tries++;\n} while (tries < 3);\n</pre>\nThis will print 3 attempts, even if it connects the first time.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/mUgakAM.png",
      "audio": "https://example.com/audio/do_while_intro.mp3"
    },
    {
      "title": "🎮 Game: How Many Times?",
      "content": "<div class='card'>We will show a random condition and see how many times the loop runs!</div>\n<script>\nlet counter = 0;\nlet shouldContinue = Math.random() > 0.5;\ndo {\n  document.write('<div class=\"card\">Looping... Try #' + (counter+1) + '</div>');\n  counter++;\n} while (shouldContinue && counter < 5);\ndocument.write('<div class=\"card\">Loop ended after ' + counter + ' times.</div>');\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: do...while Explained Visually",
      "content": "<div class='card'>This short animation makes the <code>do...while</code> loop crystal clear!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/l2TfRHfiBfE' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Experiment: Retry Until Connected",
      "content": "<div class='card'>Simulate retrying WiFi connection using <code>do...while</code>:</div>\n<pre>\nbool connected = false;\nint attempts = 0;\ndo {\n  connected = tryConnect();\n  attempts++;\n} while (!connected && attempts < 5);\n</pre>\n<div class='card'>Useful in IOT! Simulate this logic using RoboDict's simulator or serial print.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,
{
  "title": "Switch It Up — Mastering switch...case",
  "lessons": [
    {
      "title": "🎚️ Intro to switch...case",
      "content": "<div class='card'>Ever had a menu where you press 1 for Pizza, 2 for Burger, 3 for Fries? Arduino has one too — it's called <code>switch...case</code>!</div>\n<div class='card'>Syntax:\n<pre>\nswitch (variable) {\n  case 1:\n    // do something\n    break;\n  case 2:\n    // do something else\n    break;\n  default:\n    // fallback if nothing matches\n}\n</pre></div>\n<div class='card'>Use this when you're checking a variable against multiple values.</div>\n<div class='card'>Example:\n<pre>\nswitch (day) {\n  case 1: Serial.println(\"Monday\"); break;\n  case 2: Serial.println(\"Tuesday\"); break;\n  default: Serial.println(\"Weekend!\");\n}\n</pre></div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/ySSooUB.png",
      "audio": "https://example.com/audio/switchcase_intro.mp3"
    },
    {
      "title": "🎮 Game: Choose Your LED",
      "content": "<div class='card'>Pick a number (1-3) to turn ON a different LED!</div>\n<script>\nlet choice = Math.floor(Math.random() * 4);\ndocument.write('<div class=\"card\">Choice: ' + choice + '</div>');\nswitch (choice) {\n  case 1:\n    document.write('<div class=\"card\">Red LED ON</div>');\n    break;\n  case 2:\n    document.write('<div class=\"card\">Green LED ON</div>');\n    break;\n  case 3:\n    document.write('<div class=\"card\">Blue LED ON</div>');\n    break;\n  default:\n    document.write('<div class=\"card\">No LED selected</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: switch...case in Action",
      "content": "<div class='card'>This video breaks down how to use switch...case for buttons, modes, and menus!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/zF5C5VP0nsM' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Project: Mini Menu System",
      "content": "<div class='card'>Let’s simulate a text-based menu using <code>switch</code>:</div>\n<pre>\nint option = 2;\nswitch(option) {\n  case 1:\n    startGame();\n    break;\n  case 2:\n    showSettings();\n    break;\n  default:\n    showError();\n}\n</pre>\n<div class='card'>Use the Serial Monitor to take input and create your own menus!</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Break It Off — Escaping Loops & Cases",
  "lessons": [
    {
      "title": "🛑 Why Use break?",
      "content": "<div class='card'>Imagine you’re in a loop or a <code>switch</code> block and you suddenly want to bail out. That’s what <code>break</code> does.</div>\n<div class='card'>It immediately exits the loop or <code>switch</code> block, skipping anything after it.</div>\n<div class='card'>Syntax:\n<pre>\nfor (int i = 0; i < 10; i++) {\n  if (i == 5) break;\n  Serial.println(i);\n}\n</pre>\nThis loop will print 0 to 4, then exit. ⚡</div>\n<div class='card'>Used in <code>switch</code> to avoid ‘fall-through’ (executing all cases after the match).</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/XUqN5Y9.png",
      "audio": "https://example.com/audio/break_intro.mp3"
    },
    {
      "title": "🎮 Game: Break the Loop!",
      "content": "<div class='card'>Simulate a sensor that breaks a loop early!</div>\n<script>\nfor (let i = 0; i < 10; i++) {\n  if (i === 6) {\n    document.write('<div class=\"card\">Sensor triggered! Breaking loop at ' + i + '.</div>');\n    break;\n  }\n  document.write('<div class=\"card\">Running step ' + i + '</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: break Explained Clearly",
      "content": "<div class='card'>This video explains <code>break</code> in <code>for</code>, <code>while</code>, and <code>switch</code> scenarios. 📺</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/AsDsZXNMmjM' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Activity: break for Safety",
      "content": "<div class='card'>Write an Arduino code that spins a motor, but stops if a sensor value exceeds 600.</div>\n<pre>\nfor (int i = 0; i < 100; i++) {\n  if (analogRead(sensor) > 600) break;\n  spinMotor();\n}\n</pre>\n<div class='card'>Try modifying it for different thresholds!</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Skip Smart — Using the `continue` Statement",
  "lessons": [
    {
      "title": "🏃‍♂️ What is `continue`?",
      "content": "<div class='card'>The <code>continue</code> statement says: \"Skip this round, go to the next one!\" 🌀</div>\n<div class='card'>It’s used inside loops. When encountered, the rest of the current iteration is ignored — and the loop jumps straight to the next cycle.</div>\n<div class='card'>Example:\n<pre>\nfor (int i = 0; i < 10; i++) {\n  if (i % 2 == 0) continue;\n  Serial.println(i);\n}\n</pre>\nThis will print only odd numbers (1, 3, 5, 7, 9).</div>\n<div class='card'>Useful for skipping unwanted cases while keeping the loop running! 🚀</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/CqMAtCJ.png",
      "audio": "https://example.com/audio/continue_intro.mp3"
    },
    {
      "title": "🎮 Game: Even Filter",
      "content": "<div class='card'>Watch how <code>continue</code> skips even numbers 👀</div>\n<script>\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) continue;\n  document.write('<div class=\"card\">Kept: ' + i + '</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: continue Statement Explained",
      "content": "<div class='card'>This fun animation shows how <code>continue</code> behaves differently than <code>break</code>. 🎯</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/vYd6cXJ_rTE' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Try: Skip Sensor Spikes",
      "content": "<div class='card'>Use <code>continue</code> to skip values above 800 (spikes):</div>\n<pre>\nfor (int i = 0; i < 100; i++) {\n  int reading = analogRead(sensor);\n  if (reading > 800) continue;\n  Serial.println(reading);\n}\n</pre>\n<div class='card'>This way you filter out unwanted sensor data without ending the loop. Smart, right?</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Go Where? — The Mysterious `goto` Statement",
  "lessons": [
    {
      "title": "🌀 What is `goto`?",
      "content": "<div class='card'>Think of <code>goto</code> as a portal. When used, your code jumps straight to a labeled section — skipping everything in between.</div>\n<div class='card'>Syntax:\n<pre>\ngoto label;\n...\nlabel:\n  // code here\n</pre></div>\n<div class='card'>But beware! 🛑 It can make your code messy and hard to follow if overused.</div>\n<div class='card'>Example:\n<pre>\nint x = 1;\nif (x == 1) goto skip;\nSerial.println(\"This won’t run\");\nskip:\nSerial.println(\"Jumped here!\");\n</pre></div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/D1wdRKa.png",
      "audio": "https://example.com/audio/goto_intro.mp3"
    },
    {
      "title": "🎮 Game: The Code Jumper",
      "content": "<div class='card'>Try to guess where the code jumps!</div>\n<script>\nlet x = Math.random() > 0.5;\nif (x) {\n  document.write('<div class=\"card\">goto SKIPPED</div>');\n  document.write('<div class=\"card\">Code Block SKIPPED</div>');\n} else {\n  document.write('<div class=\"card\">No goto used — all code runs</div>');\n}\ndocument.write('<div class=\"card\">Final Block Reached ✅</div>');\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: Why `goto` is Rare (but Exists)",
      "content": "<div class='card'>Watch why developers rarely use <code>goto</code>, but why Arduino still allows it.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/o4E1W-ZtkRc' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Lab Test: Panic Exit",
      "content": "<div class='card'>Simulate a panic stop in your code using <code>goto</code>.</div>\n<pre>\nint value = analogRead(A0);\nif (value > 900) goto emergency;\nSerial.println(\"All normal\");\n...\nemergency:\nSerial.println(\"Emergency shutdown!\");\n</pre>\n<div class='card'>But remember — only use it when absolutely needed, like in legacy or hardware failure systems.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Return of the Jedi — Mastering `return` in Arduino",
  "lessons": [
    {
      "title": "🚪 What is `return`?",
      "content": "<div class='card'>The <code>return</code> statement is how a function finishes its job and sends back a result (or exits quietly).</div>\n<div class='card'>Types of return:\n<ul><li><code>return;</code> → Exit with nothing (for <code>void</code> functions)</li><li><code>return value;</code> → Send back a result (for <code>int</code>, <code>bool</code>, etc.)</li></ul></div>\n<div class='card'>Example 1:\n<pre>\nvoid blink() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(100);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(100);\n  return;\n}\n</pre>\nFunction ends silently.</div>\n<div class='card'>Example 2:\n<pre>\nint add(int a, int b) {\n  return a + b;\n}\n</pre>\nReturns the sum to wherever the function was called.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/KUVFPOq.png",
      "audio": "https://example.com/audio/return_intro.mp3"
    },
    {
      "title": "🎮 Game: Who Returns What?",
      "content": "<div class='card'>Guess what this function returns:</div>\n<script>\nfunction multiply(a, b) {\n  return a * b;\n}\nlet result = multiply(4, 3);\ndocument.write('<div class=\"card\">Result: ' + result + '</div>');\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: return Explained Like a Pro",
      "content": "<div class='card'>Here’s a short and fun tutorial on how <code>return</code> works in Arduino sketches.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/0aFUeJFrbgU' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Lab: Smart Temperature Function",
      "content": "<div class='card'>Write a function that returns <code>true</code> if temperature is safe:</div>\n<pre>\nbool isSafe(int temp) {\n  if (temp < 50) return true;\n  return false;\n}\n</pre>\n<div class='card'>Use this to alert or control a fan.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Syntax Secrets — Exploring Hidden Gems of Arduino Language",
  "lessons": [
    {
      "title": "💬 Block Comments (/* ... */)",
      "content": "<div class='card'>Block comments help you hide multiple lines of code from being executed. Great for notes or disabling test code!</div>\n<div class='card'>Syntax:\n<pre>\n/*\nThis is a block comment.\nIt can span multiple lines.\n*/\n</pre></div>\n<div class='card'>Use them wisely to document your complex logic.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/S4HDm3O.png",
      "audio": ""
    },
    {
      "title": "🔍 Curly Braces: { }",
      "content": "<div class='card'>Curly braces define blocks of code, like inside <code>if</code>, <code>for</code>, or <code>void loop()</code>.</div>\n<div class='card'>Example:\n<pre>\nif (temp > 50) {\n  digitalWrite(fan, HIGH);\n}\n</pre></div>\n<div class='card'>Always match your opening <code>{</code> with a closing <code>}</code>. Or expect some errors 😵‍💫</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Game: Match the Braces",
      "content": "<script>\nconst codes = [\n  '{ digitalWrite(13, HIGH); }',\n  'if (x > 0) { y = 1;',\n  'for (int i = 0; i < 5; i++) { Serial.println(i); }'\n];\nfor (let i = 0; i < codes.length; i++) {\n  document.write(`<div class='card'>Code ${i + 1}: <pre>${codes[i]}</pre></div>`);\n  if (codes[i].split('{').length !== codes[i].split('}').length)\n    document.write(`<div class='card'>❌ Unmatched braces!</div>`);\n  else\n    document.write(`<div class='card'>✅ All good!</div>`);\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔠 #define Directive",
      "content": "<div class='card'><code>#define</code> is used to create constants or aliases.</div>\n<div class='card'>Example:\n<pre>#define LED 13\nvoid setup() {\n  pinMode(LED, OUTPUT);\n}</pre></div>\n<div class='card'>It’s like a nickname for a number or text. But beware — it’s not a variable!</div>",
      "image": "https://i.imgur.com/8RnrYQy.png",
      "audio": ""
    },
    {
      "title": "📦 #include Directive",
      "content": "<div class='card'>Use <code>#include</code> to bring in libraries!</div>\n<div class='card'>Example:\n<pre>#include &lt;Servo.h&gt;</pre></div>\n<div class='card'>This line adds code that controls servo motors — without you writing all of it yourself!</div>",
      "image": "https://i.imgur.com/t6cD72K.png",
      "audio": ""
    },
    {
      "title": "🚪 The Mighty Semicolon ( ; )",
      "content": "<div class='card'>The semicolon is like a full stop. It ends every instruction.</div>\n<div class='card'>Example:\n<pre>\nint a = 5;\ndigitalWrite(LED_BUILTIN, HIGH);\n</pre></div>\n<div class='card'>Missing a semicolon? Get ready for errors! 🔥</div>",
      "image": "https://i.imgur.com/g0a0Vmj.png",
      "audio": ""
    },
    {
      "title": "📢 Single Line Comments ( // )",
      "content": "<div class='card'>Use <code>//</code> to comment a single line.</div>\n<div class='card'>Example:\n<pre>\n// This is a comment\nint led = 13; // Set LED pin\n</pre></div>\n<div class='card'>Comments don't affect the program — they're just for humans like us! 👨‍💻</div>",
      "image": "https://i.imgur.com/7eyRMkx.png",
      "audio": ""
    },
    {
      "title": "🎥 Syntax Recap Video",
      "content": "<div class='card'>Here’s a casual video walkthrough of all these symbols and keywords together in a real Arduino sketch.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/N9M4k2W9G7s' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Quiz: Syntax Checker",
      "content": "<div class='card'>Which of these lines has a syntax issue?</div>\n<pre>\n#define LED = 13;\n#include Servo.h\nint a = 5\n</pre>\n<div class='card'>Try fixing them mentally, then click below to reveal answers!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Reveal Fixes</button>\n<div class='card'>✔️ #define should not use '=' or ';'<br>✔️ #include should use &lt;&gt;<br>✔️ int a = 5; needs semicolon</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Locked & Loaded — Constants in Arduino",
  "lessons": [
    {
      "title": "🔒 What are Constants?",
      "content": "<div class='card'>Constants are values that <b>don’t change</b> during the program.</div>\n<div class='card'>They help us write <b>clear and error-proof</b> code.</div>\n<div class='card'>For example, instead of using <code>13</code> directly, we use <code>LED_BUILTIN</code>.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/PLknh0F.png",
      "audio": ""
    },
    {
      "title": "🔌 HIGH and LOW",
      "content": "<div class='card'><code>HIGH</code> = 5V or 3.3V output\n<br><code>LOW</code> = 0V or ground</div>\n<div class='card'>Used with <code>digitalWrite()</code> and <code>digitalRead()</code>.</div>\n<div class='card'>Example:\n<pre>digitalWrite(LED_BUILTIN, HIGH);</pre>\nTurns ON the LED.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔁 INPUT, OUTPUT, INPUT_PULLUP",
      "content": "<div class='card'>Used in <code>pinMode()</code> to set how a pin behaves.</div>\n<div class='card'>\n<ul>\n<li><b>INPUT</b> → Receives signal</li>\n<li><b>OUTPUT</b> → Sends signal</li>\n<li><b>INPUT_PULLUP</b> → Internal resistor enabled (default HIGH)</li>\n</ul></div>\n<div class='card'>Example:\n<pre>pinMode(2, INPUT_PULLUP);</pre></div>",
      "image": "https://i.imgur.com/MVaBZWg.png",
      "audio": ""
    },
    {
      "title": "🎮 Game: Identify the Constants!",
      "content": "<div class='card'>Which of these is NOT a constant?</div>\n<ul>\n<li>HIGH</li>\n<li>digitalWrite</li>\n<li>INPUT</li>\n<li>LED_BUILTIN</li>\n</ul>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Reveal Answer</button>\n<div class='card'>🎯 <code>digitalWrite</code> is a function, not a constant!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧮 Floating Point & Integer Constants",
      "content": "<div class='card'>Floating point constants: like <code>3.14</code> or <code>9.81</code></div>\n<div class='card'>Integer constants: whole numbers like <code>1</code>, <code>255</code>, or <code>0</code></div>\n<div class='card'>These values help with math, sensors, or configuration.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💡 LED_BUILTIN Constant",
      "content": "<div class='card'>Built-in LED? That’s what <code>LED_BUILTIN</code> points to!</div>\n<div class='card'>Different boards have different pin numbers — but this constant always works!</div>\n<div class='card'>Example:\n<pre>pinMode(LED_BUILTIN, OUTPUT);\ndigitalWrite(LED_BUILTIN, HIGH);</pre></div>",
      "image": "https://i.imgur.com/hxj2FPu.png",
      "audio": ""
    },
    {
      "title": "✅ true and false",
      "content": "<div class='card'><code>true</code> = 1, <code>false</code> = 0</div>\n<div class='card'>Used in boolean expressions, conditions, and digital logic.</div>\n<div class='card'>Example:\n<pre>\nbool ledState = true;\ndigitalWrite(13, ledState);\n</pre></div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: Constants in Action",
      "content": "<div class='card'>Watch how constants like <code>HIGH</code>, <code>INPUT</code>, and <code>LED_BUILTIN</code> make Arduino programs readable!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/oH2sXq5lso4' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📚 Quiz: What's That Constant?",
      "content": "<div class='card'>Which constant is used for internal pull-up resistor?</div>\n<ul>\n<li>INPUT</li>\n<li>INPUT_PULLUP</li>\n<li>HIGH</li>\n<li>LED_BUILTIN</li>\n</ul>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Reveal Answer</button>\n<div class='card'>✅ INPUT_PULLUP!</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Types Unleashed — Exploring Data Types in Arduino",
  "lessons": [
    {
      "title": "🔍 Why Do Data Types Matter?",
      "content": "<div class='card'>Have you ever written a number and later wished it could store text? Or tried storing a sentence inside a light switch? 🤯 That’s what happens when you ignore <b>data types</b>.</div>\n<div class='card'>In Arduino, data types tell the microcontroller what kind of value to expect: numbers, text, on/off states, or floating points. It saves memory, increases speed, and prevents chaos!</div>\n<div class='card'>We’re going to explore every type — not just what it is, but <i>why</i> and <i>when</i> to use it.</div>\n<div class='card'>By the end, you’ll know exactly when to say: \"Hey, this variable should be an <code>unsigned long</code> and NOT a <code>float</code>!\"</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/7ug65du.png",
      "audio": ""
    },
    {
      "title": "📦 Whole Numbers: int, long, short, byte",
      "content": "<div class='card'><code>int</code> is your classic whole number. From −32,768 to 32,767. Use it for things like temperature or score counters.</div>\n<div class='card'><code>long</code> handles HUGE numbers. Example: time in milliseconds — use <code>millis()</code>? You'll need <code>long</code>.</div>\n<div class='card'><code>short</code> is a compact <code>int</code> with smaller range. Rarely used. You’re better off with <code>int</code>.</div>\n<div class='card'><code>byte</code> stores 0 to 255. Perfect for RGB values, brightness levels, or small loops.</div>\n<pre class='card'>int score = 120;\nlong duration = 500000;\nbyte ledLevel = 128;</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/VkLHwLr.png",
      "audio": ""
    },
    {
      "title": "💧 float & double — Hello Decimals!",
      "content": "<div class='card'>Numbers with dots! 3.14, 27.5, 0.01 — you’ll need <code>float</code> for these.</div>\n<div class='card'><code>float</code> gives 6-7 digits precision. That’s enough for most sensors, like temperature, voltage, or distance.</div>\n<div class='card'><code>double</code> in most Arduinos is just another <code>float</code>. (On 32-bit boards it may give better precision.)</div>\n<pre class='card'>float temp = 36.7;\ndouble speed = 1.23456;</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/0NSUfb1.png",
      "audio": ""
    },
    {
      "title": "📧 Text Types: char, string, and String()",
      "content": "<div class='card'><code>char</code> holds a single character: 'A', 'B', 'z'. Just one!</div>\n<div class='card'><code>string</code> (lowercase) is a low-level array of <code>char</code> values — not easy to use.</div>\n<div class='card'><code>String()</code> (capital S) is Arduino’s friendly string object. You can use <code>String name = \"Kaustubh\";</code> and even check <code>name.length()</code>.</div>\n<pre class='card'>char letter = 'K';\nString name = \"RoboDict\";</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧠 True or False: bool & boolean",
      "content": "<div class='card'>This type stores <code>true</code> or <code>false</code>. Super useful in logic, buttons, conditions.</div>\n<pre class='card'>bool isOn = true;\nboolean gateOpen = false;</pre>\n<div class='card'><code>boolean</code> is the same as <code>bool</code>. Arduino made it to match C-style readability.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🚀 Unsigned Data Types",
      "content": "<div class='card'>Need only positive numbers? Use <code>unsigned</code> types.</div>\n<ul class='card'>\n<li><code>unsigned char</code>: 0–255</li>\n<li><code>unsigned int</code>: 0–65,535</li>\n<li><code>unsigned long</code>: 0–4,294,967,295</li>\n</ul>\n<div class='card'>Faster, lighter, and memory-friendly if you KNOW you won't go negative.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📐 Special Types: size_t, void, word",
      "content": "<div class='card'><code>size_t</code>: Used internally when dealing with array lengths or sizes. Think: 'how many items?'</div>\n<div class='card'><code>word</code>: Just a fancy way of saying 16-bit unsigned number. (Same as <code>unsigned int</code>)</div>\n<div class='card'><code>void</code>: Used for functions that return nothing. Like <code>setup()</code> or <code>loop()</code>.</div>\n<pre class='card'>void blinkLED() {\n  digitalWrite(13, HIGH);\n}</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini Game: Spot the Type!",
      "content": "<div class='card'>What type would you use for:</div>\n<ul class='card'>\n<li>Pin voltage reading: __________</li>\n<li>Loop counter: __________</li>\n<li>Name of your robot: __________</li>\n<li>Time in ms: __________</li>\n</ul>\n<div class='card'>Answers: float, int, String, unsigned long</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: Arduino Data Types Explained",
      "content": "<div class='card'>Watch this easy-to-understand video that covers everything we’ve just learned about variables and types!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/KY9xOb_X2P4' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Types Unleashed — Exploring Data Types in Arduino",
  "lessons": [
    
    {
      "title": "🔒 Constant Variables with const",
      "content": "<div class='card'>Want to lock a variable so it never changes again? Use <code>const</code>!</div>\n<div class='card'><code>const</code> means constant. Like a rule that can’t be broken.</div>\n<pre class='card'>const int ledPin = 13;\n// You can't reassign ledPin now!</pre>\n<div class='card'>Great for pin numbers, fixed speeds, default values — anything that should remain untouched.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/ABsM3xz.png",
      "audio": ""
    },
    {
      "title": "🌍 Scope — Where Do Variables Live?",
      "content": "<div class='card'>Variables live in different places: globally or locally.</div>\n<div class='card'>A <b>global</b> variable is declared outside any function. It's accessible from anywhere!</div>\n<div class='card'>A <b>local</b> variable lives inside a function. It disappears once the function finishes.</div>\n<pre class='card'>int globalVar = 10;\nvoid loop() {\n  int localVar = 5;\n}</pre>\n<div class='card'>Keep your code tidy: use local when you can!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧊 static — Freeze a Variable in Time",
      "content": "<div class='card'><code>static</code> variables keep their value even after the function ends.</div>\n<div class='card'>It’s like putting the variable in a cryo-freeze and reviving it next time with all its memory intact.</div>\n<pre class='card'>void blinkCounter() {\n  static int count = 0;\n  count++;\n  Serial.println(count);\n}</pre>\n<div class='card'>Every time <code>blinkCounter()</code> runs, <code>count</code> continues from where it left off.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/gPXbJDI.png",
      "audio": ""
    },
    {
      "title": "⚠️ volatile — When Values Can Change Anytime!",
      "content": "<div class='card'><code>volatile</code> tells the compiler: 'This variable might change at any moment!'</div>\n<div class='card'>Used in special cases like interrupts or when hardware updates a variable.</div>\n<pre class='card'>volatile int buttonState = 0;\nvoid ISR() {\n  buttonState = 1;\n}</pre>\n<div class='card'>Without <code>volatile</code>, the compiler may ignore real-time changes.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/OHa9Zxo.png",
      "audio": ""
    }
  ]
},
{
  "title": "Types Unleashed — Exploring Data Types in Arduino",
  "lessons": [
    
    {
      "title": "🔄 Type Conversions — Shape Shifting in Arduino",
      "content": "<div class='card'>Ever needed to turn a decimal into an integer? Or a character into its numeric form? That’s what <b>type conversion</b> is for!</div>\n<div class='card'>In Arduino, you can convert between types using simple functions. But each has its rules — and risks!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/hqTOmOf.png",
      "audio": ""
    },
    {
      "title": "🧱 Convert to byte()",
      "content": "<div class='card'>Use <code>byte()</code> to shrink values to 0–255. Careful! Values beyond that range get trimmed.</div>\n<pre class='card'>int a = 350;\nbyte b = byte(a); // b = 94 (because 350 wraps around)</pre>\n<div class='card'>Great for RGB colors, PWM, or space-saving tricks.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔡 Convert to char()",
      "content": "<div class='card'><code>char()</code> changes numbers into ASCII characters. 65 becomes 'A', 97 becomes 'a'.</div>\n<pre class='card'>int asciiCode = 65;\nchar letter = char(asciiCode);</pre>\n<div class='card'>Fun way to decode or build strings!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/fjDUIZf.png",
      "audio": ""
    },
    {
      "title": "💧 Convert to float()",
      "content": "<div class='card'>Want decimal precision? <code>float()</code> converts any number into float form.</div>\n<pre class='card'>int temp = 25;\nfloat exactTemp = float(temp); // 25.0</pre>\n<div class='card'>Useful for smooth math or sensor blending.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📏 Convert to int() and long()",
      "content": "<div class='card'><code>int()</code> drops decimal part. Use when precision isn't needed.</div>\n<pre class='card'>float reading = 23.78;\nint rounded = int(reading); // 23</pre>\n<div class='card'><code>long()</code> is like int, but stores big values. Useful when storing time or massive counters.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "⚙️ Unsigned Conversions: unsigned int() & unsigned long()",
      "content": "<div class='card'><code>unsigned int()</code> and <code>unsigned long()</code> strip away negatives.</div>\n<pre class='card'>int x = -10;\nunsigned int y = unsigned(x); // y = a very large number</pre>\n<div class='card'>These convert values into positive range — be careful with signed to unsigned!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧙 Convert to word()",
      "content": "<div class='card'><code>word()</code> packs two bytes into a 16-bit number. You can also give it a single 16-bit value.</div>\n<pre class='card'>word w = word(255, 1); // 255 + (1 << 8) = 511</pre>\n<div class='card'>Used in timing, custom binary protocols, etc.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/ZzKP89c.png",
      "audio": ""
    }
  ]
},
{
  "title": "Types Unleashed — Exploring Data Types in Arduino",
  "lessons": [
    
    {
      "title": "🧰 Utilities — sizeof() & PROGMEM Magic",
      "content": "<div class='card'>Let's explore two powerful tools that make your Arduino memory-savvy and smarter: <code>sizeof()</code> and <code>PROGMEM</code>.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📦 sizeof() — Know Your Variable Size",
      "content": "<div class='card'><code>sizeof()</code> tells you how much space (in bytes) a variable or type takes.</div>\n<pre class='card'>int a = 10;\nSerial.println(sizeof(a)); // 2 on most boards</pre>\n<div class='card'>Great for optimizing memory, buffers, or checking array lengths.</div>\n<pre class='card'>char message[] = \"Kaustubh\";\nSerial.println(sizeof(message)); // includes null terminator</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/y9FGVjz.png",
      "audio": ""
    },
    {
      "title": "🗂️ PROGMEM — Save Flash, Not SRAM!",
      "content": "<div class='card'><code>PROGMEM</code> stores constant data in Flash memory instead of precious SRAM.</div>\n<div class='card'>SRAM is very limited on Arduinos. Use <code>PROGMEM</code> for big lookup tables, fonts, and texts.</div>\n<pre class='card'>const char message[] PROGMEM = \"Hello RoboDict!\";</pre>\n<div class='card'>To access PROGMEM data, use special functions like <code>pgm_read_byte()</code>.</div>\n<pre class='card'>char c = pgm_read_byte(&(message[0]));</pre>\n<div class='card'>Advanced tip — works great for menus, sensor maps, or static text screens.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/NHFX1Zk.png",
      "audio": ""
    }
  ]
}




,{
  "title": "Cracking the Code Skeleton: Program Structure",
  "lessons": [
    {
      "title": "🧠 What’s the Structure of an Arduino Program?",
      "content": "<div class=\"card\">\nWelcome, scientist! 🧪 Before you make lights blink or robots dance, let’s learn the secret blueprint of every Arduino sketch.\n</div>\n<div class=\"card\">\nAn Arduino program always has two main blocks: <code>setup()</code> and <code>loop()</code>.\nThink of <b>setup()</b> as morning routines — runs only once.\n<b>loop()</b> is your daily grind — it repeats forever.\n</div>\n<div class=\"card\">\nHere’s the basic structure:\n<pre>void setup() {\n  // things to do ONCE\n}\n\nvoid loop() {\n  // things to do FOREVER\n}</pre>\n</div>\n<div class=\"card\">\nInside <code>setup()</code>, you initialize stuff like pin modes.\nInside <code>loop()</code>, you make your robot act — again and again.\n</div>\n<div class=\"card\">\nEvery line ends with a <code>;</code> — the famous semicolon warrior!\nAnd curly brackets <code>{ }</code> are code containers.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Sketch Scrambler Challenge",
      "content": "<div class=\"card\">Your task: Fix the scrambled sketch!</div>\n<div class=\"card\">\n<pre>\n// Unscramble this!\nvoid loop() {\n}\npinMode(13, OUTPUT);\ndigitalWrite(13, HIGH);\nvoid setup() {\n}\n</pre>\n</div>\n<div class=\"card\">\n<code>\n<script>\nfunction checkSketchOrder() {\n  const answer = document.getElementById('sketch-input').value.trim();\n  if(answer.includes('setup') && answer.includes('pinMode') && answer.includes('loop')) {\n    alert('🎉 Correct! You’ve got the basic structure down.');\n  } else {\n    alert('😬 Not quite. Try again!');\n  }\n}\n</script>\n</code>\n<textarea id=\"sketch-input\" rows=\"8\" style=\"width:100%; font-family:monospace\"></textarea><br>\n<button class=\"gaming-btn\" onclick=\"checkSketchOrder()\">Check My Sketch</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Arduino Sketch Structure Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/0Vq9dHifg0Q\" title=\"Arduino Sketch Structure\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Try It Live: Blink with Basic Skeleton",
      "content": "<div class=\"card\">Time to write your first structured sketch. Try this in RoboDict Simulator or Arduino IDE:</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(500);\n  digitalWrite(13, LOW);\n  delay(500);\n}\n</pre>\n</div>\n<div class=\"card\">Notice the structure? One-time setup. Forever loop. That’s Arduino’s rhythm!</div>\n<div class=\"card\">Change the delay to <code>100</code> and see how fast it blinks!</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Storing Stuff: Understanding Variables",
  "lessons": [
    {
      "title": "📦 What is a Variable and Why Do We Need It?",
      "content": "<div class=\"card\">\nHey scientist! Imagine your robot needs to remember something — like how bright the LED should be. Where does it store that info?\n</div>\n<div class=\"card\">\nThat’s where <b>variables</b> come in. They’re like storage boxes inside your Arduino's brain!\n</div>\n<div class=\"card\">\nYou give each box a name, tell it what type of thing it holds, and boom — your robot remembers stuff.\n</div>\n<div class=\"card\">\nExample:\n<pre>int ledBrightness = 128;</pre>\nHere, <code>int</code> means it stores a number. <code>ledBrightness</code> is the name. And it’s currently 128.\n</div>\n<div class=\"card\">\nThere are many types of variables:\n<ul>\n<li><code>int</code> – whole numbers (e.g., 10, -5)</li>\n<li><code>float</code> – decimals (e.g., 3.14)</li>\n<li><code>char</code> – single letters ('A')</li>\n<li><code>boolean</code> – true or false</li>\n</ul>\n</div>\n<div class=\"card\">\nYou can change a variable later:\n<pre>ledBrightness = 200;</pre>\nNow your LED will shine brighter!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Variable Vault",
      "content": "<div class=\"card\">You’ve got 4 boxes (variables). Can you store the right items in each?</div>\n<div class=\"card\">\n<code>\n<script>\nfunction checkVaultAnswer() {\n  const ans = document.getElementById('vaultInput').value.toLowerCase();\n  if (ans.includes('int age = 12') && ans.includes('float temp = 36.5') && ans.includes(\"char grade = 'A'\") && ans.includes('boolean isOn = true')) {\n    alert('🎉 Well done! Your variables are all safe in the vault.');\n  } else {\n    alert('🧠 Try again! Make sure each variable has the right type and format.');\n  }\n}\n</script>\n</code>\n<pre>\n// Store these in Arduino-style:\n// 1. Age = 12\n// 2. Temp = 36.5\n// 3. Grade = 'A'\n// 4. isOn = true\n</pre>\n<textarea id=\"vaultInput\" rows=\"8\" style=\"width:100%; font-family:monospace\"></textarea><br>\n<button class=\"gaming-btn\" onclick=\"checkVaultAnswer()\">Check My Variables</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Variables Explained in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/BsU-LCWWcFY\" title=\"Arduino Variables - Engineers & Electronics\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Try It Yourself: LED Brightness with Variable",
      "content": "<div class=\"card\">Try controlling the LED using a variable value instead of hardcoding numbers.</div>\n<div class=\"card\">\n<pre>\nint brightness = 100;  // create variable\n\nvoid setup() {\n  pinMode(9, OUTPUT);  // using pin 9 (PWM)\n}\n\nvoid loop() {\n  analogWrite(9, brightness);\n  delay(1000);\n}\n</pre>\n</div>\n<div class=\"card\">Change <code>brightness</code> to other values like 0, 255, or 180 and upload again. Your LED will shine accordingly!</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Let’s Write It: Your First Real Arduino Program",
  "lessons": [
    {
      "title": "✍️ Writing Your First Sketch — Line by Line!",
      "content": "<div class=\"card\">\nAlright scientist — it’s finally time to write your *first full sketch* from scratch.\nWe’re going to make an LED blink with proper structure, comments, and even a variable. 🤓\n</div>\n<div class=\"card\">\nHere’s what our sketch will do:\n✅ Setup pin 13 as output\n✅ Store delay time in a variable\n✅ Turn LED ON and OFF with delay\n</div>\n<div class=\"card\">\n<pre>\nint delayTime = 500;  // delay in milliseconds\n\nvoid setup() {\n  pinMode(13, OUTPUT);  // set pin 13 as output\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);  // turn LED ON\n  delay(delayTime);        // wait\n  digitalWrite(13, LOW);   // turn LED OFF\n  delay(delayTime);        // wait\n}\n</pre>\n</div>\n<div class=\"card\">\nThat’s it! This simple program turns your Arduino into a blinking wizard.\nYou just wrote your first robot command. 🪄\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Sketch Slot Machine",
      "content": "<div class=\"card\">Let’s play: match the code piece to its job!</div>\n<div class=\"card\">\n<code>\n<script>\nfunction checkSlotAnswers() {\n  let q1 = document.getElementById('q1').value.trim().toLowerCase();\n  let q2 = document.getElementById('q2').value.trim().toLowerCase();\n  let q3 = document.getElementById('q3').value.trim().toLowerCase();\n  if(q1.includes('setup') && q2.includes('loop') && q3.includes('digitalwrite')) {\n    alert('🎉 Correct! You know your sketch skeleton!');\n  } else {\n    alert('❌ Try again. Keep learning!');\n  }\n}\n</script>\n</code>\n<div><b>Q1:</b> Which function runs only once?</div>\n<input id=\"q1\" style=\"width:100%\" placeholder=\"Your answer\">\n<div><b>Q2:</b> Which function keeps running forever?</div>\n<input id=\"q2\" style=\"width:100%\" placeholder=\"Your answer\">\n<div><b>Q3:</b> Which command turns a pin ON or OFF?</div>\n<input id=\"q3\" style=\"width:100%\" placeholder=\"Your answer\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkSlotAnswers()\">Submit Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Writing Our First Sketch ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/ZL53o0JRwNg\" title=\"Arduino Programming - First Sketch\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment Time: Custom Delay LED Blink",
      "content": "<div class=\"card\">\nLet’s build a version of the blink sketch where YOU change the delay using Serial Monitor!\n</div>\n<div class=\"card\">\n<pre>\nint blinkTime;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(13, OUTPUT);\n  Serial.println(\"Enter delay in ms:\");\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    blinkTime = Serial.parseInt();\n  }\n\n  digitalWrite(13, HIGH);\n  delay(blinkTime);\n  digitalWrite(13, LOW);\n  delay(blinkTime);\n}\n</pre>\n</div>\n<div class=\"card\">\nUpload this code → Open Serial Monitor → Type a number like <code>100</code> and press Enter. The LED will blink at that speed!\n</div>\n<div class=\"card\">\nTry different values (e.g., 50, 500, 1000) and see how your robot listens to YOU in real time.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Talk to Me, Robot: Serial Monitor Magic",
  "lessons": [
    {
      "title": "🧠 What is the Serial Monitor and Why Use It?",
      "content": "<div class=\"card\">\nHey scientist — wanna know what your robot is thinking?\nMeet your secret window: the <b>Serial Monitor</b>!\n</div>\n<div class=\"card\">\nIt’s a tool inside the Arduino IDE that lets your robot <i>talk back</i> to you — by printing messages, numbers, and even sensor readings.\n</div>\n<div class=\"card\">\nHere’s the basic setup:\n<pre>\nvoid setup() {\n  Serial.begin(9600); // Start communication\n  Serial.println(\"Hello Human!\");\n}\n\nvoid loop() {\n  Serial.println(\"I am looping...\");\n  delay(1000);\n}\n</pre>\n</div>\n<div class=\"card\">\nWhat does it do?\n- <code>Serial.begin(9600)</code>: Starts communication\n- <code>Serial.println()</code>: Prints text with a new line\n- <code>Serial.print()</code>: Prints on same line (no enter)\n</div>\n<div class=\"card\">\nTo use it: Upload the code → Click <b>Tools → Serial Monitor</b> or press <b>Ctrl + Shift + M</b>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Serial Detective",
      "content": "<div class=\"card\">What will the Serial Monitor print?</div>\n<div class=\"card\">\n<pre>\nint count = 0;\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  Serial.println(count);\n  count++;\n  delay(500);\n}\n</pre>\n</div>\n<div class=\"card\">\nWhat’s your guess after 5 seconds?\n<input id=\"serialGuess\" placeholder=\"Enter output here\" style=\"width:100%;\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkSerialGuess()\">Check Answer</button>\n<script>\nfunction checkSerialGuess() {\n  let ans = document.getElementById('serialGuess').value;\n  if (ans.includes('0') && ans.includes('1') && ans.includes('2') && ans.includes('3')) {\n    alert('✅ Yup! It counts upward and prints each number.');\n  } else {\n    alert('❌ Try again! It prints the value of `count` every half second.');\n  }\n}\n</script>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Serial Monitor in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/FZTzcp5uH3Q\" title=\"Arduino Tutorial - Serial Monitor in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Say Hello with Input + Output",
      "content": "<div class=\"card\">\nLet’s make your robot talk AND listen!\nYou’ll type something in the Serial Monitor — and Arduino will repeat it like a parrot. 🦜\n</div>\n<div class=\"card\">\n<pre>\nString inputText;\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println(\"Type something:\");\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    inputText = Serial.readString();\n    Serial.print(\"You said: \");\n    Serial.println(inputText);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nUpload the sketch → Open Serial Monitor → Type something → BOOM! Robot speaks.\n</div>\n<div class=\"card\">\nTry funny messages, secret codes, or emojis. Your robot’s got voice now (well… almost 😅)\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },{
  "title": "Baud Rate: Your Robot’s Talking Speed",
  "content": "<div class=\"card\">\n📡 When your Arduino talks to your PC (via Serial Monitor), they need to agree on a <b>speed of conversation</b>.\nThis speed is called the <b>Baud Rate</b>.\n</div>\n\n<div class=\"card\">\n💬 A Baud Rate is the number of bits (tiny pieces of data) sent per second.\nSo when you write:\n<pre>Serial.begin(9600);</pre>\nit means: “Hey Arduino, talk at 9600 bits per second.”\n</div>\n\n<div class=\"card\">\n🎙️ The most common baud rate is <code>9600</code> — it’s fast enough for most sensors and messages.\nBut you can also use values like <code>115200</code> for high-speed projects.\n</div>\n\n<div class=\"card\">\n⚠️ Both Arduino and Serial Monitor must use the same Baud Rate.\nIf one talks faster than the other — you'll get garbage like this:\n<pre>�$%#*^@~</pre>\n</div>\n\n<div class=\"card\">\n🧠 Rule of thumb:\n- Use <b>9600</b> for simple text/debugging\n- Use <b>115200</b> for faster data (like graphs or sensors)\n</div>\n\n<div class=\"card\">\n🤔 Bonus: “Baud” comes from Émile Baudot — a French engineer who invented early communication systems.\nYour robot's talking tech is literally based on history!\n</div>\n\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
  "image": "url",
  "audio": "url"
}

  ]
},{
  "title": "Know Your Numbers: Numeric Data Types in Arduino",
  "lessons": [
    {
      "title": "🔢 All About Numbers in Arduino",
      "content": "<div class=\"card\">\n🧠 In Arduino, numbers aren't just numbers. They have <b>types</b>, and each type decides how much space they use and what values they can hold.\n</div>\n\n<div class=\"card\">\n💡 Here's a cheat sheet:\n<ul>\n<li><code>int</code>: Whole numbers from -32,768 to 32,767</li>\n<li><code>long</code>: Bigger whole numbers</li>\n<li><code>float</code>: Decimal numbers like 3.14</li>\n<li><code>unsigned int</code>: Only positive numbers (0 to 65,535)</li>\n</ul>\n</div>\n\n<div class=\"card\">\n⚠️ Example:\n<pre>\nint speed = 100;\nfloat voltage = 4.96;\nlong bigNum = 100000;\n</pre>\nThis way, your Arduino stores the exact kind of number you need — nothing more, nothing less.\n</div>\n\n<div class=\"card\">\n📏 Why does it matter?\nArduino has <b>very limited memory</b> — wasting bytes can crash your code. Choosing the right type = efficient code!\n</div>\n\n<div class=\"card\">\n🏋️‍♂️ Use <code>int</code> for sensors, <code>float</code> for voltages/temperatures, and <code>long</code> for timers or millis().\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Data Type Battle Royale",
      "content": "<div class=\"card\">\nYou have to pick the perfect data type for each case. Ready?\n</div>\n<div class=\"card\">\n<pre>\n1️⃣ Storing the value: 5.6 volts = ?\n2️⃣ Counting steps (0-100) = ?\n3️⃣ Measuring time in milliseconds (up to 10 million) = ?\n4️⃣ Distance in cm (no decimals) = ?\n</pre>\n</div>\n<div class=\"card\">\n<script>\nfunction checkTypes() {\n  const ans1 = document.getElementById('a1').value.toLowerCase();\n  const ans2 = document.getElementById('a2').value.toLowerCase();\n  const ans3 = document.getElementById('a3').value.toLowerCase();\n  const ans4 = document.getElementById('a4').value.toLowerCase();\n  if(ans1.includes('float') && ans2.includes('int') && ans3.includes('long') && ans4.includes('unsigned')) {\n    alert('🎉 Victory! You’ve mastered number logic.');\n  } else {\n    alert('😬 Try again! Hint: Think about size + decimals.');\n  }\n}\n</script>\n<input id=\"a1\" placeholder=\"Type for 5.6 volts\" style=\"width:100%\"><br>\n<input id=\"a2\" placeholder=\"Type for step counter\" style=\"width:100%\"><br>\n<input id=\"a3\" placeholder=\"Type for 10 million ms\" style=\"width:100%\"><br>\n<input id=\"a4\" placeholder=\"Type for distance in cm\" style=\"width:100%\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkTypes()\">Submit Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Numeric Data Types Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/lLBOgbMyyX8\" title=\"Arduino Numeric Data Types\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Type Overflow Crash Test",
      "content": "<div class=\"card\">\nLet’s crash some data! 🧨 Try this sketch and observe what happens.\n</div>\n<div class=\"card\">\n<pre>\nint value = 32766;\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  value++;\n  Serial.println(value);\n  delay(1000);\n}\n</pre>\n</div>\n<div class=\"card\">\nWatch closely. Once it hits 32767, it wraps around to... -32768! That’s called <b>overflow</b>. ⚠️\n</div>\n<div class=\"card\">\nTry changing <code>int</code> to <code>long</code> and see how long it goes now.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Talking in Text: char & String in Arduino",
  "lessons": [
    {
      "title": "📝 Understanding char and String",
      "content": "<div class=\"card\">\n📢 Your robot can count, light up, and make noise... but can it say words? Yes — using <b>text data types</b>!\n</div>\n<div class=\"card\">\nThere are 2 main types:\n<ul>\n<li><code>char</code>: Stores a <b>single character</b> — like <code>'A'</code> or <code>'5'</code></li>\n<li><code>String</code>: Stores a <b>sequence of characters</b> — like <code>\"Hello World!\"</code></li>\n</ul>\n</div>\n<div class=\"card\">\nExamples:\n<pre>\nchar grade = 'A';\nString name = \"Kaustubh\";\n</pre>\nStrings are powerful — you can join them, measure them, and compare them!\n</div>\n<div class=\"card\">\nYou can even mix text and numbers:\n<pre>\nString msg = \"Speed: \";\nint speed = 50;\nSerial.println(msg + speed);\n</pre>\nThis will print: <b>Speed: 50</b>\n</div>\n<div class=\"card\">\n⚠️ Bonus Tip: <code>char</code> uses 1 byte, but <code>String</code> uses dynamic memory.\nToo many Strings = 🔥 crash! Be smart, and free memory when needed.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: char or String?",
      "content": "<div class=\"card\">\nDecide whether each line should use <code>char</code> or <code>String</code>.\n</div>\n<div class=\"card\">\n<pre>\n1️⃣ Grade = 'B'\n2️⃣ Name = \"Robot123\"\n3️⃣ KeyPressed = '?'\n4️⃣ WelcomeMsg = \"Hello Kaustubh!\"\n</pre>\n</div>\n<div class=\"card\">\n<script>\nfunction checkCharString() {\n  let a1 = document.getElementById('g1').value.toLowerCase();\n  let a2 = document.getElementById('g2').value.toLowerCase();\n  let a3 = document.getElementById('g3').value.toLowerCase();\n  let a4 = document.getElementById('g4').value.toLowerCase();\n  if (a1.includes('char') && a2.includes('string') && a3.includes('char') && a4.includes('string')) {\n    alert('🎉 Nice! You’ve nailed the text types.');\n  } else {\n    alert('🧐 Check again — remember 1 letter vs full word.');\n  }\n}\n</script>\n<input id=\"g1\" placeholder=\"Type for Grade\" style=\"width:100%\"><br>\n<input id=\"g2\" placeholder=\"Type for Name\" style=\"width:100%\"><br>\n<input id=\"g3\" placeholder=\"Type for KeyPressed\" style=\"width:100%\"><br>\n<input id=\"g4\" placeholder=\"Type for WelcomeMsg\" style=\"width:100%\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkCharString()\">Check Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Arduino Text Data Types ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/dn78xZ0m6r4\" title=\"Arduino String and Char Types\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💬 Try It: Input and Reply with Strings",
      "content": "<div class=\"card\">\nLet’s get your robot to talk to the user. Type your name, and Arduino will say hello.\n</div>\n<div class=\"card\">\n<pre>\nString name;\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println(\"What's your name?\");\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    name = Serial.readString();\n    Serial.print(\"Hello, \");\n    Serial.println(name);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nUpload this sketch → Open Serial Monitor → Type your name and press Enter.\nBoom! Your robot just greeted you like a pal. 🥳\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Brains with Bins: Mastering Arrays in Arduino",
  "lessons": [
    {
      "title": "📦 What Are Arrays and Why Use Them?",
      "content": "<div class=\"card\">\nEver wanted to store 5 sensor values? Or 3 LED pins? \nBoom — you need an <b>array</b>. Think of it like a box with slots.\n</div>\n<div class=\"card\">\n📋 An array stores <b>multiple values</b> of the same type. \nExample:\n<pre>int ledPins[3] = {8, 9, 10};</pre>\nThis creates 3 slots to store pin numbers.\n</div>\n<div class=\"card\">\nYou access items using their position (called <b>index</b>), starting from 0:\n<pre>digitalWrite(ledPins[0], HIGH);  // controls pin 8\n</pre>\n</div>\n<div class=\"card\">\n🔁 Arrays + loops = ultimate power:\n<pre>\nfor(int i = 0; i < 3; i++) {\n  digitalWrite(ledPins[i], HIGH);\n  delay(500);\n}\n</pre>\nOne loop, many actions. That’s the power of bins. 🧠\n</div>\n<div class=\"card\">\n⚠️ Don’t go out of bounds!\nIf your array has 5 elements, <code>array[5]</code> will crash it.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Array Ping Pong",
      "content": "<div class=\"card\">\nLet’s test your index IQ. What’s the output of this sketch?\n</div>\n<div class=\"card\">\n<pre>\nint values[4] = {10, 20, 30, 40};\nSerial.println(values[2]);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"arrayAnswer\" style=\"width:100%\" placeholder=\"Your answer (number)\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkArrayAnswer()\">Submit</button>\n<script>\nfunction checkArrayAnswer() {\n  let ans = document.getElementById('arrayAnswer').value.trim();\n  if(ans === \"30\") {\n    alert('✅ Correct! Index 2 means the third item: 30.');\n  } else {\n    alert('❌ Nope! Arrays start at 0. Index 2 = third item.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Arrays in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/1EdHFLsp9Ms\" title=\"Arduino Arrays in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Try It: Blink LEDs Using Arrays + Loop",
      "content": "<div class=\"card\">\nHere’s a cool sketch that turns on 3 LEDs one by one using arrays and a loop:\n</div>\n<div class=\"card\">\n<pre>\nint ledPins[3] = {2, 3, 4};\n\nvoid setup() {\n  for(int i = 0; i < 3; i++) {\n    pinMode(ledPins[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  for(int i = 0; i < 3; i++) {\n    digitalWrite(ledPins[i], HIGH);\n    delay(300);\n    digitalWrite(ledPins[i], LOW);\n    delay(300);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nYou just made a running light. Try changing the pins or delay to customize it!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Controlling the World: Digital I/O in Arduino",
  "lessons": [
    {
      "title": "⚡ Meet Digital I/O: Your Arduino’s Superpower",
      "content": "<div class=\"card\">\nYour Arduino has <b>digital pins</b> — little magic gates that can either be <b>ON</b> or <b>OFF</b>.\nThey’re used to control LEDs, motors, buzzers, and to <i>read</i> buttons, sensors, and switches.\n</div>\n\n<div class=\"card\">\n💡 There are 2 modes for each pin:\n<code>pinMode(pin, mode)</code> sets it up:\n<ul>\n<li><b>OUTPUT</b> — Arduino sends signals</li>\n<li><b>INPUT</b> — Arduino listens</li>\n</ul>\n</div>\n\n<div class=\"card\">\n🖐️ To <b>write</b> to a pin:\n<pre>\ndigitalWrite(13, HIGH);  // turn ON\n</pre>\nTo <b>read</b> from a pin:\n<pre>\nint state = digitalRead(7);  // button pressed?\n</pre>\n</div>\n\n<div class=\"card\">\n🔁 Real example:\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}\n</pre>\nThis blinks an LED on pin 13 every second.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Input or Output?",
      "content": "<div class=\"card\">\nPick the right mode for each case:</div>\n<div class=\"card\">\n<pre>\n1️⃣ Controlling a motor = ?\n2️⃣ Reading a button = ?\n3️⃣ Powering an LED = ?\n4️⃣ Getting a signal from sensor = ?\n</pre>\n</div>\n<div class=\"card\">\n<script>\nfunction checkIOAnswers() {\n  let a1 = document.getElementById('io1').value.toLowerCase();\n  let a2 = document.getElementById('io2').value.toLowerCase();\n  let a3 = document.getElementById('io3').value.toLowerCase();\n  let a4 = document.getElementById('io4').value.toLowerCase();\n  if (a1 === 'output' && a2 === 'input' && a3 === 'output' && a4 === 'input') {\n    alert('✅ Perfect! You’re a digital master.');\n  } else {\n    alert('❌ Hmm... Check which way the info flows.');\n  }\n}\n</script>\n<input id=\"io1\" placeholder=\"1\" style=\"width:100%\"><br>\n<input id=\"io2\" placeholder=\"2\" style=\"width:100%\"><br>\n<input id=\"io3\" placeholder=\"3\" style=\"width:100%\"><br>\n<input id=\"io4\" placeholder=\"4\" style=\"width:100%\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkIOAnswers()\">Check Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Digital I/O Functions ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/qvUUFUCzPBY\" title=\"Arduino Digital I/O Functions in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Hands-On: Button → LED Reaction",
      "content": "<div class=\"card\">\nConnect a push button to pin 7 and an LED to pin 13. Let’s make a reaction circuit!</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  pinMode(7, INPUT);\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  int button = digitalRead(7);\n  if (button == HIGH) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nWhen you press the button, the LED lights up. Classic Arduino magic! 💡\n</div>\n<div class=\"card\">\nTry replacing the button with a touch sensor or vibration sensor to upgrade the circuit.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Smooth Moves: Analog Input & Output in Arduino",
  "lessons": [
    {
      "title": "🎛️ Reading the World: Analog Input & PWM Output",
      "content": "<div class=\"card\">\nDigital signals = ON or OFF. But analog? It’s smooth, continuous, real-world data — like light levels, temperature, or sound.\n</div>\n<div class=\"card\">\n🎚️ Use <code>analogRead(pin)</code> to read analog inputs:\n<pre>int val = analogRead(A0);</pre>\nThis gives a value from <b>0 to 1023</b> — like a volume knob.\n</div>\n<div class=\"card\">\n⚡ And what if you want to <b>output</b> smooth values? Use PWM!\nArduino uses <b>Pulse Width Modulation</b> to fake analog output with fast ON/OFF pulses.\n<pre>analogWrite(pin, value);</pre>\nvalue = 0 to 255 (where 255 = full power)\n</div>\n<div class=\"card\">\n🎨 Use analogWrite to dim LEDs, control motor speed, and more. It feels smooth to your eyes — even though it's just fast switching.\n</div>\n<div class=\"card\">\n⚠️ Not all pins support PWM! Use the ones with <b>~</b> symbol next to them (like 3, 5, 6, 9, 10, 11 on UNO).\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: 0–1023 or 0–255?",
      "content": "<div class=\"card\">\nTell whether these functions return 0–1023 or 0–255 range.</div>\n<div class=\"card\">\n<pre>\n1️⃣ analogRead(A0) → ?\n2️⃣ analogWrite(3, 128) → ?\n3️⃣ analogRead(A3) → ?\n4️⃣ analogWrite(5, 255) → ?\n</pre>\n</div>\n<div class=\"card\">\n<script>\nfunction checkAnalogGame() {\n  let a1 = document.getElementById('ag1').value;\n  let a2 = document.getElementById('ag2').value;\n  let a3 = document.getElementById('ag3').value;\n  let a4 = document.getElementById('ag4').value;\n  if (a1 === \"1023\" && a2 === \"255\" && a3 === \"1023\" && a4 === \"255\") {\n    alert('🎉 Correct! You know your analog domains.');\n  } else {\n    alert('❌ Oops! Remember: read = 1023, write = 255.');\n  }\n}\n</script>\n<input id=\"ag1\" placeholder=\"Range for #1\" style=\"width:100%\"><br>\n<input id=\"ag2\" placeholder=\"Range for #2\" style=\"width:100%\"><br>\n<input id=\"ag3\" placeholder=\"Range for #3\" style=\"width:100%\"><br>\n<input id=\"ag4\" placeholder=\"Range for #4\" style=\"width:100%\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkAnalogGame()\">Check Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Analog I/O Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/HnCZJjsYltE\" title=\"Arduino Analog Read and Write in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Dim LED With Potentiometer",
      "content": "<div class=\"card\">\n🎛️ You’ll use a potentiometer (knob) on A0 to control the brightness of an LED on pin 9.\n</div>\n<div class=\"card\">\n<pre>\nint pot = A0;\nint led = 9;\n\nvoid setup() {\n  pinMode(led, OUTPUT);\n}\n\nvoid loop() {\n  int val = analogRead(pot);\n  int brightness = map(val, 0, 1023, 0, 255);\n  analogWrite(led, brightness);\n}\n</pre>\n</div>\n<div class=\"card\">\n📏 We used <code>map()</code> to convert 0–1023 input into 0–255 output. Now turning the knob dims the LED in real time. 🌗\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Decide Like a Pro: The if...else Statement",
  "lessons": [
    {
      "title": "🧠 Meet the if...else Statement",
      "content": "<div class=\"card\">\nWhat if your robot needs to decide: <i>Should I move?</i> <i>Is it dark?</i> That’s where <b>if...else</b> comes in!\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nif(condition) {\n  // do something\n} else {\n  // do something else\n}\n</pre>\n</div>\n<div class=\"card\">\nExample:\n<pre>\nint sensor = analogRead(A0);\nif(sensor > 500) {\n  digitalWrite(LED_BUILTIN, HIGH);\n} else {\n  digitalWrite(LED_BUILTIN, LOW);\n}\n</pre>\n🔍 This will light the LED if it’s bright!\n</div>\n<div class=\"card\">\n🧩 Conditions can use: <code>==</code>, <code>!=</code>, <code><</code>, <code>></code>, <code>&&</code> (AND), <code>||</code> (OR)\n</div>\n<div class=\"card\">\n💡 Think of it like a brain: If this happens — do that. Else — do something else. Simple logic, big power.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Predict the Output",
      "content": "<div class=\"card\">\nWhat will this sketch do?</div>\n<div class=\"card\">\n<pre>\nint temp = 30;\nif(temp < 25) {\n  Serial.println(\"Cool\");\n} else {\n  Serial.println(\"Hot\");\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"ifgame\" placeholder=\"What will print?\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkIfGame()\">Submit</button>\n<script>\nfunction checkIfGame() {\n  const ans = document.getElementById('ifgame').value.toLowerCase();\n  if(ans.includes(\"hot\")) {\n    alert('🔥 Correct! The temp is 30, so else block runs.');\n  } else {\n    alert('❄️ Oops! Check the condition again — temp is 30.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: If Else in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/lT0NTCkK3vM\" title=\"If Else Statement Arduino Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Mini Project: Auto Night Light",
      "content": "<div class=\"card\">\n🛏️ Build an auto night-light that turns ON when the room is dark.</div>\n<div class=\"card\">\nConnect a photoresistor (LDR) to A0 and LED to pin 9.\n</div>\n<div class=\"card\">\n<pre>\nint ldr = A0;\nint led = 9;\n\nvoid setup() {\n  pinMode(led, OUTPUT);\n}\n\nvoid loop() {\n  int light = analogRead(ldr);\n  if(light < 400) {\n    digitalWrite(led, HIGH);\n  } else {\n    digitalWrite(led, LOW);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry changing the <code>400</code> threshold based on your room brightness. 🔦</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Multiple Choices: if...else if in Arduino",
  "lessons": [
    {
      "title": "🧠 Understanding if...else if",
      "content": "<div class=\"card\">\nSometimes, two choices aren’t enough. What if your robot sees <b>LOW</b>, <b>MEDIUM</b>, or <b>HIGH</b> brightness? Enter the hero: <b>else if</b>.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nif(condition1) {\n  // do something\n} else if(condition2) {\n  // do something else\n} else {\n  // default case\n}\n</pre>\n</div>\n<div class=\"card\">\nExample:\n<pre>\nint temp = 28;\nif(temp < 20) {\n  Serial.println(\"Cold\");\n} else if(temp < 30) {\n  Serial.println(\"Warm\");\n} else {\n  Serial.println(\"Hot\");\n}\n</pre>\n</div>\n<div class=\"card\">\nThe robot checks the first condition, then the second, then defaults to the last one. This is how you add <b>smart decisions</b>.\n</div>\n<div class=\"card\">\nPro Tip: Keep your conditions ordered from most specific to least. 🧩\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's the Output?",
      "content": "<div class=\"card\">\nPredict the printed result:\n</div>\n<div class=\"card\">\n<pre>\nint x = 55;\nif(x < 30) {\n  Serial.println(\"Low\");\n} else if(x < 60) {\n  Serial.println(\"Medium\");\n} else {\n  Serial.println(\"High\");\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"elseifgame\" placeholder=\"What will print?\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkElseIfGame()\">Submit</button>\n<script>\nfunction checkElseIfGame() {\n  const val = document.getElementById('elseifgame').value.toLowerCase();\n  if(val.includes(\"medium\")) {\n    alert('✅ Medium is correct! It matched the 2nd condition.');\n  } else {\n    alert('❌ Not quite. It skipped first, matched second.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: if else if Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/XfGxZxXAxws\" title=\"Arduino else if in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Temperature Range Indicator",
      "content": "<div class=\"card\">\n🌡️ Let’s build a color indicator using 3 LEDs: green, yellow, and red for different temperature zones.</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>Green LED to pin 3</li>\n<li>Yellow LED to pin 4</li>\n<li>Red LED to pin 5</li>\n<li>LM35 sensor to A0</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  for(int i=3;i<=5;i++) pinMode(i, OUTPUT);\n}\n\nvoid loop() {\n  int val = analogRead(A0);\n  float temp = val * 0.488;\n  \n  digitalWrite(3, LOW);\n  digitalWrite(4, LOW);\n  digitalWrite(5, LOW);\n\n  if(temp < 20) {\n    digitalWrite(3, HIGH); // Green\n  } else if(temp < 30) {\n    digitalWrite(4, HIGH); // Yellow\n  } else {\n    digitalWrite(5, HIGH); // Red\n  }\n  delay(500);\n}\n</pre>\n</div>\n<div class=\"card\">\nTry touching the sensor to raise temp and see the color change.🔥</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Control Center: Using switch...case in Arduino",
  "lessons": [
    {
      "title": "🔀 When If...Else Gets Too Long: Use switch...case!",
      "content": "<div class=\"card\">\nWhat if you're checking <b>one variable</b> against many exact values? Like checking user choices from 1 to 5?\n</div>\n<div class=\"card\">\nUse <code>switch...case</code> for a cleaner, structured alternative to multiple <code>if</code> statements.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nswitch(variable) {\n  case value1:\n    // do this\n    break;\n  case value2:\n    // do that\n    break;\n  default:\n    // catch-all\n}\n</pre>\n</div>\n<div class=\"card\">\n🚨 Don't forget <code>break;</code> — or the code will 'fall through' to next case!\n</div>\n<div class=\"card\">\n🧠 Use this when:\n- You’re comparing 1 variable\n- To specific fixed values\n- And you want organized blocks\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Predict the LED Mode",
      "content": "<div class=\"card\">\nCheck this code and guess what mode the LED will follow based on <code>mode = 2</code>.\n</div>\n<div class=\"card\">\n<pre>\nint mode = 2;\nswitch(mode) {\n  case 1:\n    Serial.println(\"Blink Slow\");\n    break;\n  case 2:\n    Serial.println(\"Blink Fast\");\n    break;\n  default:\n    Serial.println(\"Off\");\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"switchgame\" placeholder=\"Your answer\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkSwitchGame()\">Submit</button>\n<script>\nfunction checkSwitchGame() {\n  const val = document.getElementById('switchgame').value.toLowerCase();\n  if(val.includes(\"fast\")) {\n    alert('✅ Correct! Mode 2 triggers \"Blink Fast\"');\n  } else {\n    alert('❌ Nope! switch(mode) was 2, so case 2 runs.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: switch...case in Hindi",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/6HiU77miGGc\" title=\"Arduino switch case Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Fan Speed Selector (Mode Switch)",
      "content": "<div class=\"card\">\n🌀 Let’s build a fan controller with 3 speeds and a button input!</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>Button to pin 2</li>\n<li>LED (as fan) to pin 9 (PWM)</li>\n</ul>\n</div>\n<div class=\"card\">\nEach time button is pressed, we change the speed (mode = 0 to 2).\n</div>\n<div class=\"card\">\n<pre>\nint btn = 2;\nint fan = 9;\nint mode = 0;\n\nvoid setup() {\n  pinMode(btn, INPUT_PULLUP);\n  pinMode(fan, OUTPUT);\n}\n\nvoid loop() {\n  if(digitalRead(btn) == LOW) {\n    mode++;\n    if(mode > 2) mode = 0;\n    delay(300);\n  }\n\n  switch(mode) {\n    case 0: analogWrite(fan, 0); break;\n    case 1: analogWrite(fan, 100); break;\n    case 2: analogWrite(fan, 200); break;\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry swapping the LED with a motor module — and now you have a real fan controller! 😎</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "The Loop Machine: Mastering the For Loop",
  "lessons": [
    {
      "title": "♾️ What is a For Loop?",
      "content": "<div class=\"card\">\nImagine telling Arduino: <b>Do this 5 times</b>. That’s exactly what a <b>for loop</b> does — repeat stuff in a clean, powerful way.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nfor(int i = 0; i < 5; i++) {\n  // your repeated code\n}\n</pre>\nThis means: start with i = 0, stop when i = 5, and increase i by 1 each time.\n</div>\n<div class=\"card\">\nExample:\n<pre>\nfor(int i = 0; i < 10; i++) {\n  digitalWrite(13, HIGH);\n  delay(200);\n  digitalWrite(13, LOW);\n  delay(200);\n}\n</pre>\n💡 This will blink LED 10 times!\n</div>\n<div class=\"card\">\n✅ When to use a <code>for</code> loop:\n<ul>\n<li>Fixed repetitions</li>\n<li>Indexing arrays</li>\n<li>LED chasers, counters, timed blinks</li>\n</ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: For Loop Output Quiz",
      "content": "<div class=\"card\">\nWhat will be printed?\n</div>\n<div class=\"card\">\n<pre>\nfor(int i = 0; i < 3; i++) {\n  Serial.print(i);\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"forgame\" placeholder=\"Your answer (eg. 012)\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkForGame()\">Submit</button>\n<script>\nfunction checkForGame() {\n  const val = document.getElementById('forgame').value;\n  if(val === \"012\") {\n    alert('✅ Correct! The loop prints 0, 1, 2.');\n  } else {\n    alert('❌ Nope. The loop runs for i = 0, 1, 2.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: For Loop Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/1a3EjFvpkdU\" title=\"Arduino For Loop in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: LED Chaser (Knight Rider Style)",
      "content": "<div class=\"card\">\n🔄 Make 6 LEDs connected to pins 2–7 light up one after the other — just like a running light!</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  for(int i=2; i<=7; i++) {\n    pinMode(i, OUTPUT);\n  }\n}\n\nvoid loop() {\n  for(int i=2; i<=7; i++) {\n    digitalWrite(i, HIGH);\n    delay(100);\n    digitalWrite(i, LOW);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n💡 Try making it reverse too — or bounce like a scanner!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Endless Action: While Loops in Arduino",
  "lessons": [
    {
      "title": "🔁 Meet the While Loop",
      "content": "<div class=\"card\">\nSometimes, you don’t know *how many* times something needs to repeat — you just want it to run <b>until a condition is false</b>.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nwhile(condition) {\n  // do something\n}\n</pre>\n🚨 Make sure your condition becomes false eventually — or you’ll get an infinite loop!\n</div>\n<div class=\"card\">\nExample:\n<pre>\nint x = 0;\nwhile(x < 5) {\n  Serial.println(x);\n  x++;\n}\n</pre>\nThis prints 0 to 4, like a for loop but more flexible.\n</div>\n<div class=\"card\">\nUse <b>while</b> when:\n<ul>\n<li>You don’t know how many times to loop</li>\n<li>You want to wait for user input or sensor value</li>\n</ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Infinite Loop or Not?",
      "content": "<div class=\"card\">\nWill this code cause an infinite loop?</div>\n<div class=\"card\">\n<pre>\nint x = 1;\nwhile(x < 10) {\n  Serial.println(x);\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"whilegame\" placeholder=\"Yes or No\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkWhileGame()\">Submit</button>\n<script>\nfunction checkWhileGame() {\n  const answer = document.getElementById('whilegame').value.toLowerCase();\n  if(answer === \"yes\") {\n    alert('✅ Correct! x never changes, so condition never becomes false. Infinite loop!');\n  } else {\n    alert('❌ Nope! The value of x is never updated, so it loops forever.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: While Loops in Hindi",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/2Ey5UYtBqlg\" title=\"While Loop Arduino Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Wait for Button Press",
      "content": "<div class=\"card\">\nLet’s use a <b>while loop</b> to wait until a button is pressed — only then blink the LED.\n</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>Button to pin 2</li>\n<li>LED to pin 9</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  while(digitalRead(2) == HIGH) {\n    // wait until button is pressed\n  }\n  digitalWrite(9, HIGH);\n  delay(500);\n  digitalWrite(9, LOW);\n}\n</pre>\n</div>\n<div class=\"card\">\n🎮 Press the button — only then does the LED flash! Perfect for wait-until-user-input logic.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Make Your Own Commands: Custom Functions in Arduino",
  "lessons": [
    {
      "title": "🧠 Why Create Your Own Functions?",
      "content": "<div class=\"card\">\nImagine writing the same code again and again. Not fun, right? 😅\nWith <b>custom functions</b>, you create your own reusable blocks of logic!\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nvoid myFunction() {\n  // code here\n}\n</pre>\nThen you just call:\n<pre>\nmyFunction();\n</pre>\n🎉 Done!\n</div>\n<div class=\"card\">\nExample:\n<pre>\nvoid blink() {\n  digitalWrite(13, HIGH);\n  delay(500);\n  digitalWrite(13, LOW);\n  delay(500);\n}\n\nvoid loop() {\n  blink();\n}\n</pre>\n</div>\n<div class=\"card\">\n✅ Benefits:\n<ul>\n<li>Organized code</li>\n<li>Easy to debug</li>\n<li>Reusability</li>\n<li>Modular structure</li>\n</ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Function Creator Challenge",
      "content": "<div class=\"card\">\n💡 What’s missing in this code?</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  greet();\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"funcgame\" placeholder=\"Type your answer...\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkFuncGame()\">Submit</button>\n<script>\nfunction checkFuncGame() {\n  const val = document.getElementById('funcgame').value.toLowerCase();\n  if(val.includes(\"define\") || val.includes(\"missing\") || val.includes(\"void greet\")) {\n    alert('✅ Correct! The function greet() must be defined before you can call it.');\n  } else {\n    alert('❌ Try again — greet() is undefined, we need to declare it.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Custom Functions in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/yZ_FvcyZqiw\" title=\"Creating your own functions - Arduino Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Dance with LEDs – Using Your Own Function",
      "content": "<div class=\"card\">\n🎆 Let’s make a custom function that creates an LED pattern.</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>3 LEDs to pins 3, 4, 5</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nvoid blinkAll() {\n  for(int i=3; i<=5; i++) {\n    digitalWrite(i, HIGH);\n  }\n  delay(500);\n  for(int i=3; i<=5; i++) {\n    digitalWrite(i, LOW);\n  }\n  delay(500);\n}\n\nvoid setup() {\n  for(int i=3; i<=5; i++) pinMode(i, OUTPUT);\n}\n\nvoid loop() {\n  blinkAll();\n}\n</pre>\n</div>\n<div class=\"card\">\n🔁 You just created your own mini light show function! Call it anytime — and reuse it in bigger patterns.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "The Return of the Value: Using `return` in Arduino",
  "lessons": [
    {
      "title": "📬 What is `return`?",
      "content": "<div class=\"card\">\nSo far, our functions did stuff — but didn’t <b>give anything back</b>.\nWith <code>return</code>, you can ask Arduino to run some code and <b>send a result back</b>.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\ntype functionName() {\n  // logic\n  return value;\n}\n</pre>\nExample:\n<pre>\nint add(int a, int b) {\n  return a + b;\n}\n</pre>\nNow you can call:\n<pre>\nint sum = add(3, 4);\n</pre>\n</div>\n<div class=\"card\">\n📌 You must specify the return type:\n<ul>\n<li><code>int</code> for integers</li>\n<li><code>float</code> for decimals</li>\n<li><code>bool</code> for true/false</li>\n</ul>\n</div>\n<div class=\"card\">\n🎯 Use this when your function needs to calculate or decide something, and pass it back to the main program.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Return Detective!",
      "content": "<div class=\"card\">\n🧠 What will this return?\n</div>\n<div class=\"card\">\n<pre>\nint multiply(int a, int b) {\n  return a * b;\n}\nvoid loop() {\n  int result = multiply(3, 5);\n  Serial.println(result);\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"retgame\" placeholder=\"Your answer?\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkReturnGame()\">Submit</button>\n<script>\nfunction checkReturnGame() {\n  const val = document.getElementById('retgame').value.trim();\n  if(val === \"15\") {\n    alert('✅ Correct! 3 x 5 = 15.');\n  } else {\n    alert('❌ Nope! The result of 3 * 5 is 15.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: The `return` Keyword Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/QC4RL4GAKtA\" title=\"Arduino Return Keyword Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Auto Temp Reader with Return",
      "content": "<div class=\"card\">\nLet’s build a function that reads LM35 sensor and returns temperature!</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>LM35 sensor to A0</li>\n<li>Optional: Serial Monitor</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nfloat getTemperature() {\n  int val = analogRead(A0);\n  return val * 0.488;\n}\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  float temp = getTemperature();\n  Serial.println(temp);\n  delay(1000);\n}\n</pre>\n</div>\n<div class=\"card\">\n🎉 This keeps the main loop clean and puts the logic inside the return function. Much more readable!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Instant Reactions: Using Interrupts in Arduino",
  "lessons": [
    {
      "title": "⚡ What are Interrupts?",
      "content": "<div class=\"card\">\nUsually, Arduino checks things one-by-one in the loop. But what if you want it to react <b>immediately</b> — like when a button is pressed?\n</div>\n<div class=\"card\">\nThat’s where <b>Interrupts</b> come in! 💥\nThey <b>interrupt</b> the current task and jump to a special function when a pin changes state.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nattachInterrupt(digitalPinToInterrupt(pin), ISR_function, mode);\n</pre>\n<ul>\n<li><b>pin:</b> the interrupt pin (like 2 or 3)</li>\n<li><b>ISR_function:</b> function that runs when triggered (no delay!)</li>\n<li><b>mode:</b> WHEN to trigger (RISING, FALLING, CHANGE)\n</li>\n</ul>\n</div>\n<div class=\"card\">\n🚫 Inside an interrupt, avoid using <code>delay()</code> or <code>Serial.print()</code>.\nKeep it super short and fast.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Interrupt Mode Match",
      "content": "<div class=\"card\">\nWhich mode would you use to trigger an interrupt when a button goes from LOW to HIGH?\n</div>\n<div class=\"card\">\n<input id=\"intgame\" placeholder=\"Type RISING, FALLING or CHANGE\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkIntGame()\">Submit</button>\n<script>\nfunction checkIntGame() {\n  const val = document.getElementById('intgame').value.toLowerCase();\n  if(val === \"rising\") {\n    alert('✅ Correct! RISING triggers when the signal goes from LOW to HIGH.');\n  } else {\n    alert('❌ Nope! You’d use RISING for a LOW to HIGH transition.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Interrupts in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/-zWQqYRLH08\" title=\"Arduino Interrupt Hindi Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Emergency Stop Button",
      "content": "<div class=\"card\">\n🛑 Let’s make an emergency stop button using interrupts.\n</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>LED to pin 9</li>\n<li>Button to pin 2</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nvolatile bool stopped = false;\n\nvoid stopNow() {\n  stopped = true;\n}\n\nvoid setup() {\n  pinMode(9, OUTPUT);\n  pinMode(2, INPUT_PULLUP);\n  attachInterrupt(digitalPinToInterrupt(2), stopNow, FALLING);\n}\n\nvoid loop() {\n  if(!stopped) {\n    digitalWrite(9, HIGH);\n    delay(300);\n    digitalWrite(9, LOW);\n    delay(300);\n  } else {\n    digitalWrite(9, LOW);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n👀 Press the button — the LED immediately stops blinking. No delay, no waiting.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Memory Magic: Understanding Pointers in Arduino",
  "lessons": [
    {
      "title": "🧠 What is a Pointer?",
      "content": "<div class=\"card\">\nA <b>pointer</b> is a variable that stores the <i>memory address</i> of another variable.\nSounds scary? Don’t worry — we’ll break it down 👇\n</div>\n<div class=\"card\">\nExample:\n<pre>\nint x = 10;\nint *ptr = &x;\n</pre>\n<code>*ptr</code> is a pointer. It stores the address of <code>x</code>. <code>&x</code> means \"address of x\".\n</div>\n<div class=\"card\">\nWant to know the actual value stored at that memory location?\n<pre>\nSerial.println(*ptr);  // prints 10\n</pre>\n<code>*</code> means \"dereference\" the pointer = get the value at the address.\n</div>\n<div class=\"card\">\nUse pointers when:\n<ul>\n<li>Passing values by reference</li>\n<li>Modifying variables inside functions</li>\n<li>Working with arrays efficiently</li>\n</ul>\n🔧 You’ve entered pro territory!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Pointer Quiz - What's the Output?",
      "content": "<div class=\"card\">\nWhat will this code print?</div>\n<div class=\"card\">\n<pre>\nint a = 7;\nint *p = &a;\na = a + 3;\nSerial.println(*p);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"ptrgame\" placeholder=\"Type your answer...\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkPointerGame()\">Submit</button>\n<script>\nfunction checkPointerGame() {\n  const val = document.getElementById('ptrgame').value.trim();\n  if(val === \"10\") {\n    alert('✅ Correct! a = 7 + 3 = 10. *p points to a.');\n  } else {\n    alert('❌ Nope! a became 10. *p sees the new value.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Pointers Explained in Hindi",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/uv1WEgZ7svU\" title=\"Arduino Pointers Hindi Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: Modify a Value Using a Function with Pointer",
      "content": "<div class=\"card\">\nLet’s pass a variable <b>by pointer</b> to a function — and change its value.\n</div>\n<div class=\"card\">\n<pre>\nvoid doubleValue(int *val) {\n  *val = *val * 2;\n}\n\nvoid setup() {\n  Serial.begin(9600);\n  int x = 6;\n  doubleValue(&x);\n  Serial.println(x);  // prints 12\n}\n\nvoid loop() {}\n</pre>\n</div>\n<div class=\"card\">\n🪄 The function actually <b>modified</b> x because we passed its address! That's pointer power.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Time Travelers: Mastering Arduino Timing Functions",
  "lessons": [
    {
      "title": "⏳ Delay vs millis() vs micros()",
      "content": "<div class=\"card\">\nArduino offers different tools to handle <b>time</b>. Each one has its use!\n</div>\n<div class=\"card\">\n🕒 <code>delay(ms)</code> blocks the entire code for that many milliseconds.\n<pre>\ndelay(1000); // pause for 1 second\n</pre>\n</div>\n<div class=\"card\">\n⏱️ <code>millis()</code> returns the number of milliseconds since the Arduino started.\nUse it for <b>non-blocking</b> delays!\n</div>\n<div class=\"card\">\n📏 <code>micros()</code> returns microseconds (1 millionth of a second!). Great for very precise timing.\n</div>\n<div class=\"card\">\n🔧 Use <code>millis()</code> when you want other code to run while waiting. Ideal for blinking, inputs, and sensors.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Choose the Best Time Function",
      "content": "<div class=\"card\">\n🧠 Question: You want an LED to blink every second <b>without using delay()</b>. Which function should you use?\n</div>\n<div class=\"card\">\n<input id=\"timegame\" placeholder=\"Type: delay / millis / micros\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkTimeGame()\">Submit</button>\n<script>\nfunction checkTimeGame() {\n  const val = document.getElementById('timegame').value.trim().toLowerCase();\n  if(val === \"millis\") {\n    alert('✅ Correct! millis() lets other code run while you wait.');\n  } else {\n    alert('❌ Try again — delay blocks code, micros is too fast. millis is the one!');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Arduino Timing Functions ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/2nxzrSn8VJU\" title=\"Arduino Time Functions Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: Blink Without delay()!",
      "content": "<div class=\"card\">\nLet’s blink an LED every second — <b>without using delay()</b> — using millis().\n</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>LED to pin 9</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nunsigned long lastTime = 0;\nconst int interval = 1000; // 1 second\n\nvoid setup() {\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  if (millis() - lastTime >= interval) {\n    lastTime = millis();\n    digitalWrite(9, !digitalRead(9));\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n🎉 This keeps blinking your LED every second — <i>while letting other code run too</i>. Pro-level multitasking!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "What Are Libraries?",
  "lessons": [
    {
      "title": "📚 So… What *Exactly* Is a Library?",
      "content": "<div class=\"card\">\nA library in Arduino is like a magic toolbox 🧰.\n</div>\n<div class=\"card\">\nNeed to control a servo? → Use Servo library.\nWant to light up LEDs in patterns? → Use NeoPixel library.\n</div>\n<div class=\"card\">\nThey contain ready-made code to make your life 100x easier.\nYou just include the library — and boom, features unlocked!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why Use Libraries?",
      "content": "<div class=\"card\">\nImagine writing your own I2C driver from scratch... 😵\nWhy suffer?\n</div>\n<div class=\"card\">\nLibraries are built by pros — you can just use their functions:\n<pre>#include <Servo.h>\nmyservo.attach(9);</pre>\n</div>\n<div class=\"card\">\nThey save time, remove complexity, and increase reliability.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Library or Not?",
      "content": "<div class=\"card\">\nType 'Yes' if this is a library, or 'No' if not:\n<pre>\n1. Servo.h\n2. digitalWrite\n3. Wire.h\n4. loop()\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"libgame\" placeholder=\"Your answers (Y/N, comma-separated)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: Yes, No, Yes, No! Libraries have .h headers!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎥 Video: What Are Arduino Libraries?",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/xq7g3Tz0D-Y\" title=\"What Are Arduino Libraries?\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 Types of Libraries",
      "content": "<div class=\"card\">\nThere are 3 main types:\n<ul>\n<li>📦 Built-in (e.g., Servo, Wire)</li>\n<li>🌐 Official installable (NeoPixel, LiquidCrystal)</li>\n<li>🧑‍💻 Custom from GitHub</li>\n</ul>\n</div>\n<div class=\"card\">\nYou can even make your own library!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Installing a Library (Arduino IDE)",
      "content": "<div class=\"card\">\n1. Open Arduino IDE → Sketch → Include Library → Manage Libraries...\n</div>\n<div class=\"card\">\n2. Search for something (e.g., Adafruit NeoPixel)\n3. Click Install\n</div>\n<div class=\"card\">\nDone! Now you can <code>#include</code> it and use its functions.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧬 GitHub Library Installation (Manual)",
      "content": "<div class=\"card\">\nSometimes, cool libraries are on GitHub!\n</div>\n<div class=\"card\">\nSteps:\n<ol>\n<li>Download ZIP from GitHub</li>\n<li>In Arduino IDE → Sketch → Include Library → Add .ZIP Library...</li>\n<li>Browse & select the ZIP file</li>\n</ol>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📁 Inside a Library Folder",
      "content": "<div class=\"card\">\nLibrary folders usually contain:\n<ul><li><b>library.h</b> – main header</li>\n<li><b>library.cpp</b> – function code</li>\n<li><b>examples/</b> – test sketches</li>\n</ul>\n</div>\n<div class=\"card\">\nSome even include README.md and keywords.txt\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Quiz: Library Keywords!",
      "content": "<div class=\"card\">\nMatch the keyword with what it refers to:\n<ul>\n<li><b>attach()</b> — ???</li>\n<li><b>Serial.begin()</b> — ???</li>\n<li><b>pixels.show()</b> — ???</li>\n</ul>\n</div>\n<div class=\"card\">\n<input id=\"quizmatch\" placeholder=\"Servo, Serial, NeoPixel?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ attach = Servo, Serial.begin = Serial, pixels.show = NeoPixel!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎉 Final Tip: Use Examples!",
      "content": "<div class=\"card\">\nAlmost every library comes with examples!\nFile → Examples → Choose your library → Pick a sketch!\n</div>\n<div class=\"card\">\nRun it, study it, remix it, and level up your Arduino skills! ⚡\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}




















      ]
    },
    {
      title:"Let’s Get Pinny: Digital I/O Deep Dive",
      modules:[
        {
  "title": "Toggling the World: Meet digitalWrite()",
  "lessons": [
    {
      "title": "💡 What is digitalWrite()?",
      "content": "<div class=\"card\">\n<code>digitalWrite(pin, value)</code> is your Arduino's way of saying:\n\"Turn that pin ON or OFF!\"\n</div>\n<div class=\"card\">\n<pre>\ndigitalWrite(13, HIGH);  // ON (5V)\ndigitalWrite(13, LOW);   // OFF (0V)\n</pre>\nSimple, right? Like flipping a light switch!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔌 Real-Life Example: Kitchen Lights",
      "content": "<div class=\"card\">\nThink of Pin 13 as your kitchen light.\n</div>\n<div class=\"card\">\nWhen Mom says:\n👉 “Alexa, turn on kitchen light!”\nYour Arduino says:\n<pre>digitalWrite(13, HIGH);</pre>\n</div>\n<div class=\"card\">\nAnd to turn it off before bed:\n<pre>digitalWrite(13, LOW);</pre>\nSimple, reliable, robotic home automation 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: HIGH or LOW?",
      "content": "<div class=\"card\">\nWhich command will turn on an LED?\n<pre>A. digitalWrite(9, LOW);\nB. digitalWrite(9, HIGH);</pre>\n</div>\n<div class=\"card\">\n<input id=\"pinQuiz\" placeholder=\"Type A or B\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It’s B! HIGH = ON = 5V!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: LED Blink = digitalWrite in Action",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/XIIBY-1ZSsc\" title=\"Blink LED using digitalWrite()\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Button-Activated digitalWrite()",
      "content": "<div class=\"card\">\nMake an LED turn ON only when you press a button:\n<pre>\nif (digitalRead(2) == HIGH) {\n  digitalWrite(13, HIGH);\n} else {\n  digitalWrite(13, LOW);\n}\n</pre>\n</div>\n<div class=\"card\">\n👆 Welcome to interactive electronics — press to shine! 💡\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Pro Tip: Must Set pinMode First!",
      "content": "<div class=\"card\">\nBefore using <code>digitalWrite()</code>, always set the pin as an OUTPUT:\n<pre>pinMode(13, OUTPUT);</pre>\nWithout this, your Arduino gets confused 😵‍💫\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎉 Bonus: Blink Without Delay Challenge",
      "content": "<div class=\"card\">\nCan you make the LED blink without using <code>delay()</code>?\nUse <code>millis()</code> instead to stay responsive!\n</div>\n<div class=\"card\">\nIf you crack this, you’re officially leveled up! 🧙‍♂️\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Listening to the World: Say Hello to digitalRead()",
  "lessons": [
    {
      "title": "👂 What is digitalRead()?",
      "content": "<div class=\"card\">\n<code>digitalRead(pin)</code> asks: Is the pin receiving HIGH (5V) or LOW (0V)?\n</div>\n<div class=\"card\">\nIt returns either:\n<ul><li><b>HIGH</b> – Pin has voltage (pressed/connected)</li><li><b>LOW</b> – Pin is grounded or idle</li></ul>\n</div>\n<div class=\"card\">\nExample:\n<pre>int buttonState = digitalRead(2);</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Doorbell Button",
      "content": "<div class=\"card\">\nWhen you press a doorbell, it connects a wire — that’s like sending HIGH to Arduino!\n</div>\n<div class=\"card\">\nSo your Arduino checks:\n<pre>if (digitalRead(4) == HIGH) {\n  ringBell();\n}</pre>\n</div>\n<div class=\"card\">\nSimple logic, massive possibilities 🔔\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Output!",
      "content": "<div class=\"card\">\nWhat will happen if pin 7 is HIGH and you run this?\n<pre>\nif (digitalRead(7) == HIGH) {\n  digitalWrite(13, HIGH);\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"dreadgame\" placeholder=\"LED ON or OFF?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: LED turns ON (pin 13 = HIGH)!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Push Button with digitalRead",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/E-H6GufFTwc\" title=\"digitalRead explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 digitalRead + LED Control",
      "content": "<div class=\"card\">\nWiring:\n<ul><li>Button → Pin 2</li><li>LED → Pin 13</li></ul>\n</div>\n<div class=\"card\">\nCode:\n<pre>\nvoid loop() {\n  int state = digitalRead(2);\n  digitalWrite(13, state);\n}\n</pre>\n</div>\n<div class=\"card\">\nWhen you press → LED lights up. Simple echo machine!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 Pro Tip: Use INPUT_PULLUP",
      "content": "<div class=\"card\">\nAvoid noisy readings? Use:\n<pre>pinMode(2, INPUT_PULLUP);</pre>\n</div>\n<div class=\"card\">\nThis means the pin is HIGH by default.\nPressing the button pulls it LOW.\nYou just reverse logic in your code 👇\n<pre>\nif (digitalRead(2) == LOW) {\n  // Button pressed!\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Button Counter!",
      "content": "<div class=\"card\">\nMake Arduino count every time the button is pressed 👇\n</div>\n<div class=\"card\">\n<pre>\nint count = 0;\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    count++;\n    Serial.println(count);\n    delay(300); // debounce\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nNow press that button and count your fame 😄\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Before You Read or Write: pinMode()",
  "lessons": [
    {
      "title": "⚙️ Why pinMode() Matters",
      "content": "<div class=\"card\">\nBefore talking to a pin, tell Arduino what role it plays:\n<pre>pinMode(pin, mode);</pre>\n</div>\n<div class=\"card\">\nThere are 3 main modes:\n<ul>\n<li><b>OUTPUT</b> — Send signal out (e.g., LED, buzzer)</li>\n<li><b>INPUT</b> — Read signal in (e.g., button)</li>\n<li><b>INPUT_PULLUP</b> — Read signal in, but with an internal safety net</li>\n</ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Analogy: Room Roles",
      "content": "<div class=\"card\">\nImagine Arduino as a house.\n</div>\n<div class=\"card\">\nYou assign rooms for roles:\n<ul><li>Kitchen (OUTPUT) – makes stuff</li><li>Doorbell (INPUT) – listens for visitors</li><li>Sensor Room (INPUT_PULLUP) – quiet until triggered</li></ul>\n</div>\n<div class=\"card\">\n<code>pinMode(13, OUTPUT);</code> means: “Hey Pin 13, you’re now the kitchen!” 🍳\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's My Mode?",
      "content": "<div class=\"card\">\nGuess the mode based on the situation:\n<ol>\n<li>Controlling an LED</li>\n<li>Detecting button press</li>\n<li>Using button without external resistor</li>\n</ol>\n</div>\n<div class=\"card\">\n<input id=\"pmgame\" placeholder=\"Type: OUTPUT, INPUT, or INPUT_PULLUP (comma-separated)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: OUTPUT, INPUT, INPUT_PULLUP!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Full pinMode Explanation",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/O4zmWqgA5l8\" title=\"pinMode Arduino Explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 INPUT_PULLUP Magic",
      "content": "<div class=\"card\">\nNormal INPUT pins float — they pick up random noise.\n</div>\n<div class=\"card\">\nUsing <b>INPUT_PULLUP</b> connects an internal resistor to 5V. So the pin stays HIGH by default.\n</div>\n<div class=\"card\">\nWhen you press a button (to GND), it goes LOW.\n</div>\n<div class=\"card\">\nIt saves you from needing an external pull-up resistor!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: LED & Button Combo",
      "content": "<div class=\"card\">\nWire:\n<ul>\n<li>LED → Pin 13 (OUTPUT)</li>\n<li>Button → Pin 2 (INPUT)</li>\n</ul>\n</div>\n<div class=\"card\">\nCode:\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n  pinMode(2, INPUT);\n}\n\nvoid loop() {\n  if (digitalRead(2) == HIGH) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: Tell Pins Who They Are!",
      "content": "<div class=\"card\">\nAlways set the mode before using a pin:\n<ul>\n<li><code>pinMode(pin, OUTPUT);</code></li>\n<li><code>pinMode(pin, INPUT);</code></li>\n<li><code>pinMode(pin, INPUT_PULLUP);</code></li>\n</ul>\n</div>\n<div class=\"card\">\nWithout this, Arduino pins are clueless 🙈\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "React Fast! Using attachInterrupt()",
  "lessons": [
    {
      "title": "⏱️ What is an Interrupt?",
      "content": "<div class=\"card\">\nAn interrupt is like a ninja tap on the shoulder —\nit pauses everything and runs special code instantly.\n</div>\n<div class=\"card\">\nImagine you're doing homework 📝 and someone rings the bell 🔔. You pause, check the door, then continue working.\n</div>\n<div class=\"card\">\nThat's exactly what interrupts do!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💻 attachInterrupt() Syntax",
      "content": "<div class=\"card\">\n<pre>\nattachInterrupt(digitalPinToInterrupt(pin), ISR, mode);\n</pre>\n</div>\n<div class=\"card\">\n- <b>pin</b> — the pin that triggers it (use interrupt-capable pins)\n- <b>ISR</b> — function to call (Interrupt Service Routine)\n- <b>mode</b> — when to trigger (RISING, FALLING, CHANGE)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Choose the Trigger",
      "content": "<div class=\"card\">\nWhen should the interrupt run?\n<pre>\nattachInterrupt(digitalPinToInterrupt(2), alarm, ???);\n</pre>\n</div>\n<div class=\"card\">\nOptions:\n<ul><li><b>RISING</b> — button goes from LOW to HIGH</li>\n<li><b>FALLING</b> — from HIGH to LOW</li>\n<li><b>CHANGE</b> — any change</li></ul>\n</div>\n<div class=\"card\">\n<input placeholder=\"Your answer\" id=\"interruptGame\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ All valid depending on situation! Most use FALLING or RISING.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Using Interrupts",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/o2hrpZB2E9w\" title=\"Arduino Interrupt Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Anti-Bounce Alarm",
      "content": "<div class=\"card\">\nSet up a motion sensor or button → Pin 2\n</div>\n<div class=\"card\">\n<pre>\nvolatile bool alarmTriggered = false;\nvoid alarm() {\n  alarmTriggered = true;\n}\n\nvoid setup() {\n  attachInterrupt(digitalPinToInterrupt(2), alarm, RISING);\n}\n\nvoid loop() {\n  if (alarmTriggered) {\n    Serial.println(\"⚠️ Alert!\");\n    alarmTriggered = false;\n  }\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},  {
  "title": "What's a Pulse? Understanding pulseIn()",
  "lessons": [
    {
      "title": "🔊 What is a Pulse?",
      "content": "<div class=\"card\">\nA pulse is a quick change in voltage — like a short beep or flash.\n</div>\n<div class=\"card\">\nThink of it like:\n- A hand clap 👏 (one pulse)\n- A quick flash of light 💡\n- A signal burst from an ultrasonic sensor 🔊\n</div>\n<div class=\"card\">\nArduino can measure the time length of such pulses using:\n<pre>pulseIn(pin, value);</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⏱️ pulseIn() Syntax + Example",
      "content": "<div class=\"card\">\n<pre>pulseIn(7, HIGH);</pre>\nThis returns how long pin 7 stayed HIGH (in microseconds!)\n</div>\n<div class=\"card\">\nUse it to measure:\n<ul>\n<li>Echo return time from ultrasonic sensors</li>\n<li>IR remote pulses</li>\n<li>Servo signals (advanced)</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Pulse or Not?",
      "content": "<div class=\"card\">\nGuess which is a pulse signal:\n<ul>\n<li>A) Button press and hold</li>\n<li>B) IR remote click</li>\n<li>C) Constant 5V on pin</li>\n</ul>\n</div>\n<div class=\"card\">\n<input id=\"pulseGame\" placeholder=\"Your answers (e.g. A, B)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ B is a pulse! A might be, C is not.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: pulseIn() with Ultrasonic",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/9xToP9Hvrqk\" title=\"pulseIn Arduino Ultrasonic Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Measure Echo Time!",
      "content": "<div class=\"card\">\nWiring:\n- HC-SR04 Echo → Pin 7<br>\n- Trigger → Pin 6\n</div>\n<div class=\"card\">\n<pre>\ndigitalWrite(6, HIGH);\ndelayMicroseconds(10);\ndigitalWrite(6, LOW);\n\nlong duration = pulseIn(7, HIGH);\nSerial.println(duration);\n</pre>\nThis prints how long it took the echo to return 👂\n</div>",
      "image": "url",
      "audio": "url" 
    }
  ]
}





      ]
    },{
      title:"The Mighty Math Toolbox 🧮 — Arduino’s Built-in Brainpower!",
      modules:[
        {
  "title": "No Negativity Here: The Power of abs()",
  "lessons": [
    {
      "title": "📘 What is abs()?",
      "content": "<div class=\"card\">\nThe <code>abs()</code> function gives the <b>absolute value</b> of a number.\n</div>\n<div class=\"card\">\nThat means it turns any negative number into a positive one!\n<pre>abs(-5);  // returns 5\nabs(7);   // returns 7 (unchanged)</pre>\n</div>\n<div class=\"card\">\nIt's super useful when you're calculating distances, differences, or ignoring direction.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏡 Real-Life Analogy",
      "content": "<div class=\"card\">\nImagine you're 3 steps left of home, or 3 steps right — either way, you're just <b>3 steps away</b>.\n</div>\n<div class=\"card\">\nThat’s what <code>abs()</code> captures: the <i>distance</i>, not direction!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's the Output?",
      "content": "<div class=\"card\">\nGuess the output:\n<pre>\nint a = -8;\nint b = abs(a);\nSerial.println(b);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"absGame\" placeholder=\"Your answer here...\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! abs(-8) = 8')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Absolute Value (Concept)",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/nZxZ2K3bfcI\" title=\"What is Absolute Value?\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Bounce Back LED",
      "content": "<div class=\"card\">\nLet’s simulate an LED brightness going up/down. If it goes negative, we use <code>abs()</code> to keep it in bounds:\n</div>\n<div class=\"card\">\n<pre>\nint brightness = -120;\nanalogWrite(9, abs(brightness));\n</pre>\nThis way the LED still shines bright, even if the math goes wild 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why Use abs()?",
      "content": "<div class=\"card\">\nUse <code>abs()</code> when:\n<ul>\n<li>Comparing distances or time differences</li>\n<li>Eliminating negative errors</li>\n<li>Building clean sensor logic</li>\n</ul>\n</div>\n<div class=\"card\">\n🎯 It helps prevent bugs due to negative math.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Stay In Bounds! Meet constrain()",
  "lessons": [
    {
      "title": "📘 What is constrain()?",
      "content": "<div class=\"card\">\n<code>constrain(x, a, b)</code> keeps <code>x</code> within a safe range — like a protective fence.\n</div>\n<div class=\"card\">\nIf <code>x</code> is below <code>a</code>, it returns <code>a</code>. If it’s above <code>b</code>, it returns <code>b</code>. Otherwise, it returns <code>x</code> itself.\n</div>\n<div class=\"card\">\n<pre>\nconstrain(150, 0, 100);  // returns 100\nconstrain(-5, 0, 100);   // returns 0\nconstrain(50, 0, 100);   // returns 50\n</pre>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏡 Real-Life Analogy: Volume Control",
      "content": "<div class=\"card\">\nYour speaker has volume from 0 to 100.\nIf your code tries to set 150 — that’s 🔊 too loud!\n</div>\n<div class=\"card\">\n<code>constrain()</code> brings it back to the max: 100.\n</div>\n<div class=\"card\">\nIt’s like automatic safety guards.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Keep It Legal!",
      "content": "<div class=\"card\">\nWhat will this return?\n<pre>constrain(300, 0, 255);</pre>\n</div>\n<div class=\"card\">\n<input id=\"constrainGame\" placeholder=\"Your answer here...\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It’s 255 — max brightness for an LED!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: constrain() in Action",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/YWbCy6OmUuA\" title=\"Arduino constrain() Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Brightness Clamp",
      "content": "<div class=\"card\">\nSet brightness using <code>analogWrite()</code> — but limit it!\n</div>\n<div class=\"card\">\n<pre>\nint sensor = analogRead(A0);\nint brightness = map(sensor, 0, 1023, -50, 300);\nbrightness = constrain(brightness, 0, 255);\nanalogWrite(9, brightness);\n</pre>\n</div>\n<div class=\"card\">\n👀 No matter how wild the input, brightness stays safe!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Why Use constrain()?",
      "content": "<div class=\"card\">\nUse it when:\n<ul>\n<li>You map values that could go beyond safe limits</li>\n<li>You want to avoid glitches, blinks, or crashes</li>\n<li>You want smooth, controlled behavior</li>\n</ul>\n</div>\n<div class=\"card\">\n🛡️ It’s like a bouncer for your variables.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Translate Anything! Meet map()",
  "lessons": [
    {
      "title": "🗺️ What is map()?",
      "content": "<div class=\"card\">\n<code>map(value, fromLow, fromHigh, toLow, toHigh)</code>\n</div>\n<div class=\"card\">\nIt’s like a translator between two worlds!\n</div>\n<div class=\"card\">\nExample:\n<pre>map(512, 0, 1023, 0, 255);</pre>\n👉 Converts 512 (from 0–1023) into 128 (in 0–255 range)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎛️ Real-Life Analogy: Volume Knob to LED",
      "content": "<div class=\"card\">\nYou rotate a knob from 0 to 1023 (sensor reading)\n</div>\n<div class=\"card\">\nBut your LED only accepts 0 to 255 for brightness\n</div>\n<div class=\"card\">\n<code>map()</code> helps you convert knob values into brightness values perfectly.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Mapping Master",
      "content": "<div class=\"card\">\nWhat does this return?\n<pre>map(0, 0, 100, 100, 0)</pre>\n</div>\n<div class=\"card\">\n<input id=\"mapQuiz\" placeholder=\"Your answer (e.g. 50)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It returns 100 — direction flipped!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Mapping Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zQRrXTSkvfw\" title=\"Arduino map() Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Potentiometer Brightness",
      "content": "<div class=\"card\">\nWiring:\n- Potentiometer → A0\n- LED → Pin 9\n</div>\n<div class=\"card\">\n<pre>\nint val = analogRead(A0);\nint brightness = map(val, 0, 1023, 0, 255);\nanalogWrite(9, brightness);\n</pre>\n</div>\n<div class=\"card\">\nSpin the knob → Light gets brighter or dimmer!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚠️ Caution: No constrain() Included",
      "content": "<div class=\"card\">\n<code>map()</code> does NOT limit the values automatically.\n</div>\n<div class=\"card\">\nYou should use <code>constrain()</code> after map to stay safe!\n</div>\n<div class=\"card\">\n<pre>\nval = map(val, 0, 1023, 0, 255);\nval = constrain(val, 0, 255);\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Who's Bigger? Meet max()",
  "lessons": [
    {
      "title": "📏 What's max() All About?",
      "content": "<div class=\"card\">\n<code>max(a, b)</code> compares two numbers and returns the bigger one. Simple!\n</div>\n<div class=\"card\">\nIt's like asking: “Which number rules the throne?” 👑\n<pre>\nmax(7, 4); // returns 7\nmax(3, 11); // returns 11\n</pre>\n</div>\n<div class=\"card\">\nUseful when you need to make sure a value is **not too small**, like motor speed, sensor range, etc.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏆 Real-Life Example: Score Battle",
      "content": "<div class=\"card\">\nImagine two players: Alice (9 points), Bob (6 points).\nWho’s leading?\n</div>\n<div class=\"card\">\nUse:\n<pre>\nint leader = max(9, 6);  // returns 9\n</pre>\nNow show the leader on an OLED or print it via Serial:\n<pre>\nSerial.print(\"Leader: \");\nSerial.println(leader);\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Find the Max!",
      "content": "<div class=\"card\">\nWhat does this return?\n<pre>\nmax(25, digitalRead(2));\n</pre>\nAssume pin 2 is LOW (0V).\n</div>\n<div class=\"card\">\n<input id=\"maxGame\" placeholder=\"Your answer\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: 25 — because LOW is 0, and 25 is higher.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Comparing Numbers in Arduino",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/kwZg_6qY3mY\" title=\"max function in Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Max Speed Enforcer",
      "content": "<div class=\"card\">\nYou want your robot's speed to **never drop below 50**.\n</div>\n<div class=\"card\">\nTry this logic:\n<pre>\nint rawSpeed = analogRead(A0);\nint finalSpeed = max(rawSpeed, 50);\n</pre>\n</div>\n<div class=\"card\">\nNow even if raw input is 40, your bot moves at least at 50 speed.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Shrink It Down: Discover min()",
  "lessons": [
    {
      "title": "📏 What is min()?",
      "content": "<div class=\"card\">\n<code>min(a, b)</code> compares two numbers and returns the smaller one.\n</div>\n<div class=\"card\">\nLike a referee saying:\n“Hmm... who’s the tiniest player here?” 🧒\n<pre>\nmin(7, 4); // returns 4\nmin(3, 11); // returns 3\n</pre>\n</div>\n<div class=\"card\">\nUseful when you want to limit max values — like sensor caps, PWM brightness, etc.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Fan Speed Cap",
      "content": "<div class=\"card\">\nLet’s say user input controls fan speed. But it must never go above 150.\n</div>\n<div class=\"card\">\nUse:\n<pre>\nint inputSpeed = analogRead(A1);\nint safeSpeed = min(inputSpeed, 150);\n</pre>\n</div>\n<div class=\"card\">\nYou just made your fan kid-safe 🧒🌬️\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Who Wins the Shrink Battle?",
      "content": "<div class=\"card\">\nWhat’s the output?\n<pre>\nmin(analogRead(A0), 100);\n</pre>\nAssume analogRead returns 80.\n</div>\n<div class=\"card\">\n<input id=\"minGame\" placeholder=\"Your answer\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: 80 — because it’s already less than 100.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Using min() Function",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/xuXL_KjzmQA\" title=\"min function in Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Cap That Brightness!",
      "content": "<div class=\"card\">\nLED brightness should stay under 180.\n</div>\n<div class=\"card\">\n<pre>\nint brightness = analogRead(A2) / 4;\nint limited = min(brightness, 180);\nanalogWrite(9, limited);\n</pre>\n</div>\n<div class=\"card\">\nToo bright? Not anymore. 👁️‍🗨️✨\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Raise the Power! pow() Function",
  "lessons": [
    {
      "title": "🔋 What is pow()?",
      "content": "<div class=\"card\">\n<code>pow(base, exponent)</code> raises a number to the power of another.\n</div>\n<div class=\"card\">\nLike saying:\n“How many times should I multiply this by itself?”\n<pre>\npow(2, 3);  // 2³ = 8\npow(5, 2);  // 5² = 25\n</pre>\n</div>\n<div class=\"card\">\nSuper useful in math-heavy projects like sensor scaling, physics, and motion control 🎢\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Kinetic Energy Formula",
      "content": "<div class=\"card\">\nKinetic Energy (KE) = 0.5 × mass × velocity²\n</div>\n<div class=\"card\">\nArduino version:\n<pre>\nfloat mass = 2.5;\nfloat velocity = 6;\nfloat KE = 0.5 * mass * pow(velocity, 2);\n</pre>\n</div>\n<div class=\"card\">\nScience + code = awesome 🚀\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Power Up the Answer!",
      "content": "<div class=\"card\">\nWhat does this return?\n<pre>\npow(4, 2);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"powGame\" placeholder=\"Your answer\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: 16 — because 4² = 16!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: pow() Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/GrVKhdmjb4M\" title=\"pow() Function Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Exponential Dimming!",
      "content": "<div class=\"card\">\nTry dimming LED based on an exponential scale:\n</div>\n<div class=\"card\">\n<pre>\nint sensorVal = analogRead(A0);\nfloat brightness = pow(sensorVal / 1023.0, 2) * 255;\nanalogWrite(9, (int)brightness);\n</pre>\n</div>\n<div class=\"card\">\nLooks smoother than linear? That’s the magic of <code>pow()</code>!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Square It Instantly with sq()",
  "lessons": [
    {
      "title": "🧊 What is sq()?",
      "content": "<div class=\"card\">\n<code>sq(x)</code> returns the square of x — just like <code>x * x</code>\n</div>\n<div class=\"card\">\nIt’s a shortcut to avoid writing <code>x * x</code> every time!\n<pre>\nsq(5);  // 25\nsq(3.5);  // 12.25\n</pre>\n</div>\n<div class=\"card\">\nMuch cleaner when doing physics or math operations 💫\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 Use Case: Distance Calculations",
      "content": "<div class=\"card\">\nWhen calculating distances between 2D points:\n<pre>\ndistance = sqrt(sq(x2 - x1) + sq(y2 - y1));\n</pre>\n</div>\n<div class=\"card\">\nThat’s Pythagoras in action — and <code>sq()</code> makes it short and sweet 📐\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What’s the Square?",
      "content": "<div class=\"card\">\nGuess the result:\n<pre>\nsq(4.0);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"sqGame\" placeholder=\"Your answer (e.g. 16)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! 4.0 × 4.0 = 16.0')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: sq() in Arduino Math",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/NqBOwdloMdU\" title=\"sq() Arduino Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Sensor to Speed!",
      "content": "<div class=\"card\">\nLet’s simulate squaring analog values to exaggerate speed readings:\n</div>\n<div class=\"card\">\n<pre>\nint val = analogRead(A0);\nint exaggerated = sq(val / 4);\nSerial.println(exaggerated);\n</pre>\n</div>\n<div class=\"card\">\nYou'll see low values appear much smaller — while high values blow up! 🔥\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Root It Out: The Power of sqrt()",
  "lessons": [
    {
      "title": "🌱 What is sqrt()?",
      "content": "<div class=\"card\">\n<code>sqrt(x)</code> returns the square root of <code>x</code>.\n</div>\n<div class=\"card\">\nIt's like asking: \"What number multiplied by itself gives x?\"\n<pre>\nsqrt(16);  // 4\nsqrt(9);   // 3\nsqrt(2.25); // 1.5\n</pre>\n</div>\n<div class=\"card\">\nUseful in distance, velocity, acceleration, and physics equations!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚡ Real-Life Analogy: Pizza Slice Area",
      "content": "<div class=\"card\">\nIf area of a pizza slice is known and it's circular, you can use <code>sqrt()</code> to find the radius:\n<pre>\nradius = sqrt(area / PI);\n</pre>\n</div>\n<div class=\"card\">\nThat’s Arduino helping you with your 🍕 proportions 😄\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Root",
      "content": "<div class=\"card\">\nWhat’s the output of this code?\n<pre>\nSerial.println(sqrt(36));\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"sqrtGame\" placeholder=\"Your answer (e.g. 6)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! sqrt(36) = 6')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: sqrt() in Motion",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/t1_dU2ikSzY\" title=\"sqrt() Arduino Example\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Distance from Sensor",
      "content": "<div class=\"card\">\nIf you calculate a 2D distance:\n</div>\n<div class=\"card\">\n<pre>\nint dx = 3;\nint dy = 4;\ndouble dist = sqrt(sq(dx) + sq(dy));\nSerial.println(dist);\n</pre>\n</div>\n<div class=\"card\">\nYou’ll get 5 — straight from Pythagoras' theorem! 📐\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Bits & Bytes Unleashed: Low-Level Magic with Arduino",
      modules:[
        {
  "title": "Summon a Bit: Understanding bit()",
  "lessons": [
    {
      "title": "🧠 What is a Bit?",
      "content": "<div class=\"card\">\nA <b>bit</b> is the tiniest piece of data — just a 0 or a 1.\n</div>\n<div class=\"card\">\nA <b>byte</b> is made of 8 bits:\n<pre>10110110 → 1 byte</pre>\n</div>\n<div class=\"card\">\nControlling individual bits lets you do: \n<ul><li>Efficient LED control</li><li>Sensor flag management</li><li>Speedy low-level tricks</li></ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url_to_bit_vs_byte_diagram",
      "audio": "url"
    },
    {
      "title": "✨ bit() Explained",
      "content": "<div class=\"card\">\n<code>bit(n)</code> returns a number where only the nth bit is set to 1.\n</div>\n<div class=\"card\">\n<pre>bit(3); → 0b00001000 → 8</pre>\n</div>\n<div class=\"card\">\nPerfect for setting specific bits in a byte!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Which Bit is Set?",
      "content": "<div class=\"card\">\nWhat is the result of <code>bit(5)</code>?\n</div>\n<div class=\"card\">\n<input id=\"bitGame\" placeholder=\"Enter a decimal value\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: bit(5) = 32 (0b00100000)')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bit Position Visualized",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/7QkW9o94zUs\" title=\"Arduino bit() Visualized\" frameborder=\"0\" allowfullscreen></iframe>"
    },
    {
      "title": "🧪 Try It: Bit Highlighting",
      "content": "<div class=\"card\">\nTry this code:\n<pre>\nbyte x = 0;\nx = x | bit(2);  // sets 3rd bit\nSerial.println(x, BIN);  // prints 00000100\n</pre>\n</div>\n<div class=\"card\">\nYou just switched on a single bit like flipping one switch in a room of 8.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Light It Up: Using bitSet()",
  "lessons": [
    {
      "title": "💡 What is bitSet()?",
      "content": "<div class=\"card\">\n<code>bitSet(x, n)</code> turns ON the nth bit in the variable <code>x</code>.\n</div>\n<div class=\"card\">\nIt’s like flipping a switch in a row of 8 bulbs (a byte).\n</div>\n<div class=\"card\">\n<pre>\nbyte lights = 0b00000000;\nbitSet(lights, 3);  // Now: 00001000\n</pre>\n</div>",
      "image": "url_to_bit_switch_diagram",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Analogy: Switchboard",
      "content": "<div class=\"card\">\nImagine a room with 8 switches:\n<ul><li>Each controls 1 light</li><li>bitSet() flips ON one light</li></ul>\n</div>\n<div class=\"card\">\n<pre>bitSet(room, 5);</pre>\nLight 6 is ON. 🎉\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Set the Bit",
      "content": "<div class=\"card\">\nWhat will this do?\n<pre>\nbyte flags = 0;\nbitSet(flags, 2);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"bitSetGame\" placeholder=\"Binary or Decimal Answer?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It sets bit 2 → flags = 4 → 0b00000100')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: bitSet() in Action with LEDs",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/vCMZsxfv2sI\" title=\"bitSet Arduino Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Manual LED ON Using Bits",
      "content": "<div class=\"card\">\nHook 8 LEDs to pins 2–9. Use one byte variable to control them:\n<pre>\nbyte ledState = 0;\nbitSet(ledState, 4);  // Turn ON 5th LED\n</pre>\nLoop through the bits to control pins.\n</div>\n<div class=\"card\">\nYou just unlocked an LED using a single BIT of memory 🔓\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Sneaky Bits – The Magic of bitRead()",
  "lessons": [
    {
      "title": "🧠 What is bitRead()?",
      "content": "<div class=\"card\">\nImagine you have a byte — a group of 8 switches (bits):\n<pre>byte b = 0b10101100;</pre>\nWant to check if a specific switch (bit) is ON (1) or OFF (0)? That’s where <code>bitRead()</code> comes in!\n</div>\n<div class=\"card\">\n<pre>bitRead(b, 2);</pre>\n👆 This checks the 3rd bit (from the right, starting at 0).\nReturns 1 (ON) or 0 (OFF) — super handy!\n</div>\n<div class=\"card\">\nIt's like asking: \"Hey, is switch #2 turned ON?\"\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Analogy: Light Switch Panel",
      "content": "<div class=\"card\">\nImagine a wall panel with 8 switches controlling lights.\nEach switch = 1 bit in a byte.\n</div>\n<div class=\"card\">\nYou say: “Is switch #4 ON?” That’s what <code>bitRead()</code> checks!\n</div>\n<div class=\"card\">\n<pre>\nbyte room = B00010000;\nint light = bitRead(room, 4); // Returns 1 = ON 💡\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Reading Bits Like a Pro",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/00A_1BfbM5k\" title=\"bitRead() in Arduino explained visually\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's the Bit?",
      "content": "<div class=\"card\">\n<pre>byte b = B10110010;</pre>\nWhat does <code>bitRead(b, 5)</code> return?\n</div>\n<div class=\"card\">\n<input id=\"bitGame\" placeholder=\"Your answer: 0 or 1\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! It’s 1. Bit 5 is ON (count from right, 0-indexed).')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: LED Control via Bit Map",
      "content": "<div class=\"card\">\nLet’s say you’re controlling 8 LEDs via a shift register.\nYou want to know if LED 6 is ON:\n</div>\n<div class=\"card\">\n<pre>\nbyte ledState = B10101010;\nif (bitRead(ledState, 6) == 1) {\n  digitalWrite(6, HIGH);\n}\n</pre>\n</div>\n<div class=\"card\">\nYou just built logic to control individual hardware from bits 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: bitRead() Superpower",
      "content": "<div class=\"card\">\n<code>bitRead(variable, bitNumber)</code>\nReturns either 0 or 1, depending on whether that bit is OFF or ON.\n</div>\n<div class=\"card\">\nIt’s perfect when you store many ON/OFF settings inside one byte — and want to extract just one.\n</div>\n<div class=\"card\">\nThat’s *bit-level mastery*, my friend 💥\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Bye Bye Bit – Clearing Bits with bitClear()",
  "lessons": [
    {
      "title": "💡 What is bitClear()?",
      "content": "<div class=\"card\">\n<code>bitClear(x, n)</code> turns OFF the nth bit (sets it to 0) in number <code>x</code>.\n</div>\n<div class=\"card\">\nThink of it as removing a power switch from a device 📴\n</div>\n<div class=\"card\">\nExample:\n<pre>bitClear(0b00001111, 0); // ➜ 0b00001110</pre>\nIt turns OFF the lowest bit (bit 0).\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏡 Analogy: Room Light Switches",
      "content": "<div class=\"card\">\nImagine each bit is a light switch in your house 🏠\n</div>\n<div class=\"card\">\n<pre>bitClear(0b11111111, 4);</pre>\nmeans: “Turn OFF the switch in Room 5” (bit 4)\n</div>\n<div class=\"card\">\nSo output is:\n<pre>0b11101111</pre>\nThat room’s light is OFF now 💡❌\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Mini Game: Bit Cleansing Quiz",
      "content": "<div class=\"card\">\nWhat’s the result of this?\n<pre>bitClear(0b1101, 2);</pre>\n</div>\n<div class=\"card\">\n<input id=\"bitclearquiz\" placeholder=\"Binary answer? (e.g. 0b1011)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: 0b1001! Bit 2 turned off.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bitwise Operations in Arduino",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/_tY5xWAaVb4\" title=\"Bitwise Operators Explained!\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Bit-Controlled LED Strip",
      "content": "<div class=\"card\">\nLet’s say you’re using 8 LEDs. Each bit controls one LED:\n<pre>\nbyte leds = 0b11111111;\nbitClear(leds, 3); // Turn OFF LED 4\n</pre>\n</div>\n<div class=\"card\">\nYou can then send that byte to a shift register like 74HC595 to control actual LEDs 😎\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Precision Editing with bitWrite()",
  "lessons": [
    {
      "title": "💡 What is bitWrite()?",
      "content": "<div class=\"card\">\n<code>bitWrite(x, n, b)</code> changes the nth bit of <code>x</code> to either <b>1</b> or <b>0</b>.\n</div>\n<div class=\"card\">\nIt’s like editing one character in a secret code 🧑‍💻\n</div>\n<div class=\"card\">\nExample:\n<pre>\nbitWrite(0b10101010, 1, 1); // ➜ 0b10101011\nbitWrite(0b10101010, 2, 0); // ➜ 0b10101000\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏗️ Analogy: Bit Editor Like Paint Tool",
      "content": "<div class=\"card\">\nImagine 8 checkboxes representing 8 bits.\n<pre>10101101</pre>\nYou want to change the 3rd box from 1 to 0 ➜ use <code>bitWrite()</code>\n</div>\n<div class=\"card\">\nIt’s like pixel painting — one bit at a time! 🎨\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Edit This Bit!",
      "content": "<div class=\"card\">\nYou have:\n<pre>bitWrite(0b11111111, 4, 0);</pre>\nWhat is the result?\n</div>\n<div class=\"card\">\n<input id=\"bitwritegame\" placeholder=\"Binary answer? (e.g. 0b10111111)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: 0b11101111')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bit Mastery 101",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/h3quF4tTmPo\" title=\"bitWrite() and friends\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Dynamic LED Pattern",
      "content": "<div class=\"card\">\nYou want to control an LED bar:\n<pre>\nbyte leds = 0b00000000;\nbitWrite(leds, 3, 1); // Light up LED 4\nbitWrite(leds, 0, 1); // LED 1\nbitWrite(leds, 3, 0); // Turn off LED 4 again\n</pre>\n</div>\n<div class=\"card\">\nBit by bit, build your pattern like digital LEGO 🧱\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "The Upper Half — highByte() Unmasked!",
  "lessons": [
    {
      "title": "🎭 What is highByte()?",
      "content": "<div class=\"card\">\nEvery number bigger than 255 takes more than 8 bits (1 byte).\n</div>\n<div class=\"card\">\nA 16-bit number like <code>0x1234</code> has:\n<ul><li><b>Low byte</b> ➜ 0x34 (last 8 bits)</li>\n<li><b>High byte</b> ➜ 0x12 (first 8 bits)</li></ul>\n</div>\n<div class=\"card\">\nSo <code>highByte(0x1234)</code> returns <b>0x12</b> 🔍\n</div>\n<div class=\"card\">\n🧪 Try it in decimal:\n<pre>highByte(1000);  // returns 3</pre>\nBecause:\n<pre>1000 ➜ 0x03E8 ➜ High byte = 0x03</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏰 Real-World Analogy: Royal Mail",
      "content": "<div class=\"card\">\nImagine a 2-digit house number 📬: <b>12 34</b>\n<ul>\n<li>Low byte: Apartment number (34)</li>\n<li>High byte: Building block (12)</li>\n</ul>\nTo find which building mail goes to ➜ use <b>highByte()</b>\n</div>\n<div class=\"card\">\n<pre>\nunsigned int address = 0x1234;\nbyte block = highByte(address); // 0x12\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What’s the High Byte?",
      "content": "<div class=\"card\">\nGuess the result:\n<pre>\nhighByte(0xABCD) = ?\nhighByte(512) = ?\nhighByte(3000) = ?\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"highgame\" placeholder=\"Try 3 answers e.g. AB, 02, 0B\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: AB, 02, 0B — You’re a bit wizard! 🧙‍♂️')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bytes Split in Arduino",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/h3quF4tTmPo?t=315\" title=\"highByte() tutorial\" frameborder=\"0\" allowfullscreen></iframe>\n<div class=\"card\">\nWatch how to split integers into high and low bytes — and combine them back!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Serial Debugging with highByte()",
      "content": "<div class=\"card\">\nTry this handy debug print:\n<pre>\nint val = analogRead(A0);\nbyte hi = highByte(val);\nbyte lo = lowByte(val);\nSerial.print(\"High: \");\nSerial.println(hi);\nSerial.print(\"Low: \");\nSerial.println(lo);\n</pre>\n</div>\n<div class=\"card\">\nPerfect for understanding sensor values split into two parts!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Bonus Tip: Why Do We Even Need This?",
      "content": "<div class=\"card\">\nOlder devices and protocols (like I2C, serial, MIDI) often split 16-bit values into 2 bytes.\n</div>\n<div class=\"card\">\nWhen transmitting or saving data, it’s easier to send small 8-bit chunks:\n<pre>\nsend(highByte(myData));\nsend(lowByte(myData));\n</pre>\n</div>\n<div class=\"card\">\nIt’s like sending two envelopes instead of a giant box! 📦\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "The Tiny Detective — lowByte() Investigates!",
  "lessons": [
    {
      "title": "🔍 What is lowByte()?",
      "content": "<div class=\"card\">\nJust like <code>highByte()</code> gives the upper 8 bits,\n<code>lowByte(x)</code> gives the bottom 8 bits — the last 2 hex digits!\n</div>\n<div class=\"card\">\nFor example:\n<pre>\nlowByte(0x1234) ➜ 0x34\nlowByte(1000) ➜ 0xE8 (232 in decimal)\n</pre>\n</div>\n<div class=\"card\">\nThink of it as checking the last 8 bits of a 16-bit value.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Analogy: House Apartment Numbers",
      "content": "<div class=\"card\">\nIf <b>0x1234</b> is the building address:\n<ul><li><b>12</b> is the building block ➜ <code>highByte()</code></li>\n<li><b>34</b> is the apartment number ➜ <code>lowByte()</code></li></ul>\n</div>\n<div class=\"card\">\nYou use lowByte when you need to know the **exact room** in a building 🏢\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Crack the Byte Code!",
      "content": "<div class=\"card\">\nGuess the low byte of:\n<pre>\nlowByte(0x56AB) = ?\nlowByte(2020) = ?\nlowByte(0x00FF) = ?\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"lowgame\" placeholder=\"Your answers (e.g. AB, E4, FF)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: AB, E4, FF — Bit-splitting hero! 🦸')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Splitting Bytes Visually",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/OIrxpbwN1fA\" title=\"Understanding lowByte and highByte\" frameborder=\"0\" allowfullscreen></iframe>\n<div class=\"card\">\nThis animation shows how a full 16-bit value is separated into its low and high parts.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Serial Split Monitor",
      "content": "<div class=\"card\">\nTry breaking a sensor value into low + high bytes and printing both:\n<pre>\nint sensor = analogRead(A1);\nbyte lo = lowByte(sensor);\nbyte hi = highByte(sensor);\n\nSerial.print(\"Sensor:\");\nSerial.println(sensor);\nSerial.print(\"High Byte:\");\nSerial.println(hi);\nSerial.print(\"Low Byte:\");\nSerial.println(lo);\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💾 Why It Matters: Saving Space!",
      "content": "<div class=\"card\">\nIf you're sending data via Serial, Bluetooth, I2C or SPI, sometimes you can only send 1 byte at a time!\n</div>\n<div class=\"card\">\nSplit data like this:\n<pre>\nsend(highByte(myData));\nsend(lowByte(myData));\n</pre>\nThen combine them later:\n<pre>\nint full = (high << 8) | low;\n</pre>\n</div>\n<div class=\"card\">\nThat’s data teleportation, byte-by-byte 🚀\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Final Summary: highByte vs lowByte",
      "content": "<div class=\"card\">\n✅ Use <code>lowByte()</code> to get the last 8 bits (lower part) of any 16-bit value.\n</div>\n<div class=\"card\">\n✅ Handy for sending bytes over serial, wireless, etc.\n</div>\n<div class=\"card\">\n✅ Combine with <code>highByte()</code> to fully control big data in small packets.\n</div>\n<div class=\"card\">\nYou're now fluent in byte-splitting 🧠💥\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Beyond 0 & 1 — The Analog Universe of Arduino",
      modules:[
        {
  "title": "The Listener: Meet analogRead()",
  "lessons": [
    {
      "title": "🎚️ What is analogRead()?",
      "content": "<div class='card'>\n<code>analogRead(pin)</code> lets Arduino hear the real world — not just ON/OFF, but every whisper in-between!\n</div>\n<div class='card'>\nIt reads voltage (0–5V) on an analog pin and returns a number from <b>0 to 1023</b>.\n</div>\n<div class='card'>\nSo:\n<ul><li><b>0</b> = 0V (no signal)</li><li><b>1023</b> = 5V (full signal)</li><li><i>anything in-between</i> = analog vibes 🎶</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Voltage, Logic & Truth: What’s the Connection?",
      "content": "<div class='card'>\nLet’s clear this up once and for all:\n<ul>\n<li><b>HIGH</b> = 5V</li>\n<li><b>LOW</b> = 0V</li>\n<li><b>1</b> = TRUE = HIGH = ON</li>\n<li><b>0</b> = FALSE = LOW = OFF</li>\n</ul>\n</div>\n<div class='card'>\nThink of a bulb:\n- Bulb ON → 5V → HIGH → 1 → true ✅<br>\n- Bulb OFF → 0V → LOW → 0 → false ❌\n</div>\n<div class='card'>\nBut analogRead() gives values <b>between</b> these extremes. So it’s like a dimmer, not just switch!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Pins That Work with analogRead()",
      "content": "<div class='card'>\nOnly analog input pins are supported:\n<ul>\n<li><b>UNO</b> → A0 to A5</li>\n<li><b>Nano</b> → A0 to A7</li>\n<li><b>Mega</b> → A0 to A15</li>\n</ul>\n</div>\n<div class='card'>\nThese pins are connected to a secret chip called the <b>ADC (Analog to Digital Converter)</b> 🧠\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔦 Real-Life Analogy: Light Dimmer",
      "content": "<div class='card'>\nImagine turning a knob that controls the brightness of your room light.\n</div>\n<div class='card'>\nWhen the knob is at 0%, analogRead = 0.\nWhen it’s full = 1023.\nMiddle = any value between.\n</div>\n<div class='card'>\nYou just wired a potentiometer to A0? Try:\n<pre>int brightness = analogRead(A0);</pre>\nNow you're reading real-world brightness!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Value",
      "content": "<div class='card'>\nSuppose you rotate the knob halfway. What does analogRead(A0) return?\n</div>\n<div class='card'>\n<input id='analogGame' placeholder='0 to 1023?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct: Around 512!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: analogRead() Explained",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/ZDnNn-NyUlM' title='analogRead Arduino Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It Yourself: Serial Reader",
      "content": "<div class='card'>\nWire:\n<ul><li>Center of potentiometer to A0</li><li>Other 2 legs to GND & 5V</li></ul>\n</div>\n<div class='card'>\nCode:\n<pre>\nvoid setup() {\n  Serial.begin(9600);\n}\nvoid loop() {\n  int value = analogRead(A0);\n  Serial.println(value);\n  delay(200);\n}\n</pre>\n</div>\n<div class='card'>\nNow rotate the knob — values will print between 0–1023 📊\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Pro Tip: Average the Readings",
      "content": "<div class='card'>\nAnalog sensors are sometimes noisy ⚡\n</div>\n<div class='card'>\nTo make them stable:\n<pre>\nint total = 0;\nfor (int i = 0; i < 10; i++) {\n  total += analogRead(A0);\n  delay(5);\n}\nint avg = total / 10;\n</pre>\n</div>\n<div class='card'>\n🎯 Now you've got a more reliable reading.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Smooth Control: analogReadResolution()",
  "lessons": [
    {
      "title": "🔍 What is analogReadResolution()?",
      "content": "<div class='card'>\n<code>analogReadResolution(bits)</code> tells Arduino how <b>precisely</b> it should read analog signals.\n</div>\n<div class='card'>\nIt's like changing the resolution of your camera — more bits = more detail!\n</div>\n<div class='card'>\nDefault is <b>10-bit</b>, giving values from <b>0–1023</b> (2¹⁰ levels).\nBut if your board supports it, you can use 8, 12, even 16 bits!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why Change Resolution?",
      "content": "<div class='card'>\nImagine you're measuring room temperature with a sensor:\n- At <b>8-bit</b> → only 256 steps\n- At <b>12-bit</b> → 4096 steps = <b>way more detail</b> 🌡️\n</div>\n<div class='card'>\nLower resolution makes readings faster but less accurate. Use wisely based on your needs.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📍 Where is it Used?",
      "content": "<div class='card'>\nOnly certain boards support this, like:\n<ul>\n<li>Arduino Due</li>\n<li>ESP32</li>\n<li>Portenta, MKR series</li>\n</ul>\n<b>UNO & Nano</b> don’t support resolution changes — they stay at 10 bits.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌐 Real-Life Analogy: Thermometer",
      "content": "<div class='card'>\nThink of an old analog thermometer:\n- One has just tick marks for every 5°C → LOW RESOLUTION 🌡️\n- Another shows every 0.1°C → HIGH RESOLUTION 🧊🔥\n</div>\n<div class='card'>\nSame with sensors — more resolution = more meaningful data.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Change Resolution on ESP32",
      "content": "<div class='card'>\nFor ESP32 or Due:\n<pre>\nanalogReadResolution(12);\nint value = analogRead(34); // will return 0–4095\n</pre>\n</div>\n<div class='card'>\nNow your reads are 4x more precise than 10-bit!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Bits and Ranges",
      "content": "<div class='card'>\nHow many values can 12-bit resolution give?\n</div>\n<div class='card'>\n<input id='resGame' placeholder='Type your answer' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ 4096! Because 2^12 = 4096.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Resolution Explained",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/xYb2T7yxLF8' title='Arduino ADC Resolution Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚠️ Pro Tips",
      "content": "<div class='card'>\n<ul>\n<li>Calling analogReadResolution() on unsupported boards <b>does nothing</b></li>\n<li>Always check your board's documentation before using it</li>\n<li>Don’t expect more precision on old boards — ADC hardware limits it</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Setting the Standard: analogReference()",
  "lessons": [
    {
      "title": "🎚️ What is analogReference()?",
      "content": "<div class='card'>\n<code>analogReference(type)</code> tells Arduino what voltage to consider as 100% (or 1023 for 10-bit readings).\n</div>\n<div class='card'>\nBy default, Arduino uses <b>5V</b> (or 3.3V) as the reference.\nBut sometimes, we want more accuracy with smaller signals.\n</div>\n<div class='card'>\nThis is when <b>analogReference()</b> shines! 🌟\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why Use a Different Reference?",
      "content": "<div class='card'>\nIf you're reading small voltages (like 0–1V), using 5V reference wastes precision.\n</div>\n<div class='card'>\nChange the reference to <b>INTERNAL</b> (1.1V on UNO), and now 1023 = 1.1V.\nBetter precision for small signals!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚙️ analogReference() Options",
      "content": "<div class='card'>\nThese vary by board, but common ones:\n<ul>\n<li><b>DEFAULT</b> – 5V or 3.3V</li>\n<li><b>INTERNAL</b> – 1.1V (UNO)</li>\n<li><b>INTERNAL1V1</b>, <b>INTERNAL2V56</b> – some boards only</li>\n<li><b>EXTERNAL</b> – use voltage on AREF pin</li>\n</ul>\n</div>\n<div class='card'>\nExample:\n<pre>analogReference(INTERNAL);</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Real-World Analogy: Fuel Gauge",
      "content": "<div class='card'>\nImagine your car's fuel gauge.\nIf you calibrate it to 100 liters but the tank only holds 20, it’s inaccurate.\n</div>\n<div class='card'>\nSame with analogRead — the reference is your 'full tank'.\nMatch it to your signal range!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Measure Small Voltages Precisely",
      "content": "<div class='card'>\nConnect a 1V analog sensor to A0.\nSet reference to INTERNAL:\n<pre>\nvoid setup() {\n  analogReference(INTERNAL);\n}\n</pre>\n</div>\n<div class='card'>\nNow even small differences in voltage give useful readings.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: analogReference Tutorial",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/N3IhIEM8tC8' title='Arduino analogReference Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚠️ Caution When Using EXTERNAL",
      "content": "<div class='card'>\nIf you select <code>EXTERNAL</code>, you <b>MUST</b> connect a voltage to the AREF pin.\nIf you don’t — your analogRead will break or give random results.\n</div>\n<div class='card'>\nNever use both <code>analogReference(EXTERNAL)</code> and <code>5V</code> on AREF without proper setup!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Choose the Right Reference!",
      "content": "<div class='card'>\nYou want to measure 0–1V signal. What reference is best?\n</div>\n<div class='card'>\n<input id='refGame' placeholder='DEFAULT, INTERNAL, EXTERNAL?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ INTERNAL! It’s perfect for small signals like 1.1V max.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Not So Analog: Welcome to analogWrite()",
  "lessons": [
    {
      "title": "🎚️ What is analogWrite()?",
      "content": "<div class='card'>\n<code>analogWrite(pin, value)</code> sends a fake analog signal (actually PWM!)\n</div>\n<div class='card'>\nValue ranges from <b>0 (off)</b> to <b>255 (full on)</b>\n</div>\n<div class='card'>\nSo <code>analogWrite(9, 127);</code> gives half brightness to an LED connected to pin 9.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📊 Wait — What is PWM?",
      "content": "<div class='card'>\n<b>PWM = Pulse Width Modulation</b>\n</div>\n<div class='card'>\nArduino rapidly turns pin ON and OFF:\n- More ON than OFF = higher brightness\n- More OFF than ON = dimmer light\n</div>\n<div class='card'>\nIt happens so fast, we don’t see flicker 👀\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚡ When & Where to Use?",
      "content": "<div class='card'>\nYou’ll use <code>analogWrite()</code> to:\n<ul>\n<li>Dim LEDs</li>\n<li>Control motor speed</li>\n<li>Generate audio tones (with some tricks!)</li>\n<li>Make RGB LEDs change color</li>\n</ul>\n</div>\n<div class='card'>\nOnly specific PWM-capable pins work with this!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📍 PWM-Capable Pins",
      "content": "<div class='card'>\nOn Arduino UNO:\n<ul>\n<li><b>Pins: 3, 5, 6, 9, 10, 11</b></li>\n<li>Look for the ~ symbol on the board</li>\n</ul>\n</div>\n<div class='card'>\nOn other boards? Check their pinout diagrams!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Real Life Example: Fan Speed Control",
      "content": "<div class='card'>\nImagine you control a ceiling fan speed:\n- Slow: analogWrite = 80\n- Medium: analogWrite = 160\n- Fast: analogWrite = 255\n</div>\n<div class='card'>\nSame concept for DC motors using motor drivers!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: LED Dimming!",
      "content": "<div class='card'>\nWire an LED → Pin 9 + resistor\n</div>\n<div class='card'>\n<pre>\nvoid setup() {\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  for (int i = 0; i <= 255; i++) {\n    analogWrite(9, i);\n    delay(10);\n  }\n  for (int i = 255; i >= 0; i--) {\n    analogWrite(9, i);\n    delay(10);\n  }\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: PWM Explained Visually",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/3BHz0Dbb0h4' title='PWM Arduino analogWrite() Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Match the Brightness",
      "content": "<div class='card'>\nIf 0 = OFF and 255 = FULL, what is analogWrite(9, 127)?\n</div>\n<div class='card'>\n<input id='brightnessGame' placeholder='Your guess' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Half brightness! 127 is about 50% duty cycle.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Precision Power: analogWriteResolution()",
  "lessons": [
    {
      "title": "🎚️ What is analogWriteResolution()?",
      "content": "<div class='card'>\nBy default, <code>analogWrite()</code> accepts values from <b>0 to 255</b> (8-bit resolution).\n</div>\n<div class='card'>\n<code>analogWriteResolution(bits)</code> allows you to increase or decrease this range!\n</div>\n<div class='card'>\nExample:\n<pre>analogWriteResolution(12);</pre>\nNow <code>analogWrite()</code> accepts values from 0 to 4095.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Why Does This Matter?",
      "content": "<div class='card'>\nHigher resolution = smoother brightness or motor control.\n</div>\n<div class='card'>\nIt's like turning a volume knob — 256 steps is OK, but 4096 steps gives you finesse 🎧\n</div>\n<div class='card'>\nOnly some Arduino boards support this:\n<ul>\n<li>Arduino Due</li>\n<li>Zero</li>\n<li>MKR series</li>\n<li>Portenta, Nano 33 IoT, etc.</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Smooth Light Fading",
      "content": "<div class='card'>\nYour eyes can detect small flickers in brightness at low levels.\n</div>\n<div class='card'>\nIf you're fading a backlight or mood LED:\n- 8-bit (256 steps) might look choppy\n- 12-bit (4096 steps) feels buttery smooth 🍦\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Syntax + How To Use",
      "content": "<div class='card'>\n<pre>\nanalogWriteResolution(12);\nanalogWrite(PIN, 2048); // 50% of 12-bit\n</pre>\n</div>\n<div class='card'>\nMake sure your board supports it. Otherwise, the function is ignored silently 😶\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: PWM + Resolution in Action",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/C6T9sI5QmTo' title='PWM Resolution Arduino' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Super-Smooth Fade",
      "content": "<div class='card'>\n<pre>\nanalogWriteResolution(12); // set resolution\nfor (int i = 0; i <= 4095; i++) {\n  analogWrite(PIN_LED, i);\n  delay(1);\n}\n</pre>\n</div>\n<div class='card'>\nNow fade back down from 4095 to 0 for full effect 💡\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Resolution Math",
      "content": "<div class='card'>\nIf you want 25% brightness on 10-bit resolution, what value do you write?\n(0 to 1023 scale)\n</div>\n<div class='card'>\n<input id='resGame' placeholder='Your guess' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ 256! That’s 25% of 1023.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },
    {
      title:"Waveforms, Robots & Angles: Trigonometry with Arduino",
      modules:[
        {
          title:"Sine Wave Magic: Using sin() in Arduino",
          lessons:[
            {
  "title": "📈 What is sin()? The Wave Creator",
  "content": "<div class=\"card\">\n<code>sin(angle)</code> returns the sine of an angle in radians (not degrees!).\n</div>\n<div class=\"card\">\nIts value ranges between -1 to +1.\n</div>\n<div class=\"card\">\nExample:\n<pre>\nfloat result = sin(PI / 2);  // = 1.0\n</pre>\n</div>\n<div class=\"card\">\nThink of it like a smooth wave — great for robotics and animations!\n</div>",
  "image": "url",
  "audio": "url"
}
,{
  "title": "🤖 Servo Wobble using sin()",
  "content": "<div class=\"card\">\nImagine a robot head slowly swaying side to side like it's nodding to music.\n</div>\n<div class=\"card\">\n<pre>\n#include <Servo.h>\nServo myServo;\nvoid setup() {\n  myServo.attach(9);  // use PWM pin 9\n}\n\nvoid loop() {\n  float angle = (sin(millis() / 1000.0) + 1) * 90; // range 0–180\n  myServo.write(angle);\n  delay(20);\n}\n</pre>\n</div>\n<div class=\"card\">\nThis creates a calming left-right servo sweep. 🔁\n</div>",
  "image": "url",
  "audio": "url"
}
,{
  "title": "🎮 sin() Quiz Time!",
  "content": "<div class=\"card\">\nWhat is <code>sin(PI)</code> ?\n</div>\n<div class=\"card\">\n<input id=\"sinquiz\" placeholder=\"Your answer (0, 1, etc)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! sin(PI) ≈ 0')\">Submit</button>\n</div>",
  "image": "url",
  "audio": "url"
}
,{
  "title": "📺 Watch: Sine Motion on Arduino",
  "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/8Vj8XMvyyfw\" title=\"Arduino sin() based motion\" frameborder=\"0\" allowfullscreen></iframe>",
  "image": "url",
  "audio": "url"
}
,{
  "title": "💡 LED Breathing with sin()",
  "content": "<div class=\"card\">\nHook an LED to Pin 9 (PWM pin).\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  float value = sin(millis() / 1000.0);\n  int brightness = (value + 1) * 127.5;  // map to 0-255\n  analogWrite(9, brightness);\n  delay(10);\n}\n</pre>\n</div>\n<div class=\"card\">\nA smooth fade-in-out effect! ✨\n</div>",
  "image": "url",
  "audio": "url"
}

          ]
        },
        {
  "title": "Riding the Wave: cos() in Arduino",
  "lessons": [
    {
      "title": "🌊 What is cos()? Why Do We Need It?",
      "content": "<div class=\"card\">\n<code>cos(angle)</code> calculates the cosine of an angle (in radians).\n</div>\n<div class=\"card\">\nIt returns values from +1 to -1, just like <code>sin()</code>.\nBut it starts from 1 instead of 0, giving you a 'lead' wave.\n</div>\n<div class=\"card\">\nUse <code>cos()</code> when you want something to start fully ON — e.g., a fading light that starts bright.\n</div>\n<div class=\"card\">\nFormula:\n<pre>\nfloat value = cos(angle_in_radians);\n</pre>\nResult: value between -1.0 and 1.0\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Analogy: Wheel Rotation",
      "content": "<div class=\"card\">\nImagine a wheel rotating — the <b>cos()</b> value tells how far forward or backward your wheel is shifting.\n</div>\n<div class=\"card\">\nUsed in games, waves, oscillating servos, robotic limbs, LED breathing, and simulated pendulums.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Example: LED Pulse with cos()",
      "content": "<div class=\"card\">\nWe’ll use <code>analogWrite()</code> on pin 9 (PWM capable pin) to simulate a breathing LED effect that starts ON.\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  float angle = millis() / 1000.0;\n  float wave = cos(angle);\n  int brightness = (wave + 1) * 127.5;\n  analogWrite(9, brightness);\n  delay(10);\n}\n</pre>\n</div>\n<div class=\"card\">\nNotice how this breathing starts from full brightness — unlike <code>sin()</code>.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Match the Curve!",
      "content": "<div class=\"card\">\nWhich one is a <b>cosine</b> graph?\n</div>\n<div class=\"card\">\n<ul>\n<li>A. Starts at 0, peaks at middle</li>\n<li>B. Starts at 1, then drops</li>\n<li>C. Flat line</li>\n</ul>\n</div>\n<div class=\"card\">\n<input id=\"cosgame\" placeholder=\"Type A, B, or C\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! It’s B — cosine starts at 1.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: sin() vs cos() Explained Visually",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/yAXo3xU2bDU\" title=\"Sine vs Cosine Arduino Animation\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Wobble Two Servos with sin & cos",
      "content": "<div class=\"card\">\nAttach Servo1 to Pin 9 and Servo2 to Pin 10.\n</div>\n<div class=\"card\">\n<pre>\n#include <Servo.h>\nServo s1, s2;\nvoid setup() {\n  s1.attach(9);\n  s2.attach(10);\n}\nvoid loop() {\n  float t = millis() / 1000.0;\n  s1.write((sin(t) + 1) * 90);\n  s2.write((cos(t) + 1) * 90);\n  delay(10);\n}\n</pre>\n</div>\n<div class=\"card\">\nTwo servos will dance in a 90° wave delay. Cool robotic motion!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Summary: cos() is sin()'s Twin but Leads",
      "content": "<div class=\"card\">\nBoth <code>sin()</code> and <code>cos()</code> are periodic functions used in time-based or rotational actions.\n</div>\n<div class=\"card\">\nUse <code>cos()</code> when you want a wave-like motion that starts from full value (1.0) instead of 0.\n</div>\n<div class=\"card\">\nUse in animation curves, robot walking patterns, wave tone synths, servo syncs, and LED fade-in-out.\n</div>"
    }
  ]
}
,{
  "title": "Tilted Perspectives: tan() in Arduino",
  "lessons": [
    {
      "title": "📐 What is tan()? Why Is It Useful?",
      "content": "<div class=\"card\">\n<code>tan(angle)</code> returns the tangent of an angle in radians.\n</div>\n<div class=\"card\">\n⚠️ Unlike <code>sin()</code> or <code>cos()</code>, <b>tan()</b> can go from -∞ to +∞ — very steep!\n</div>\n<div class=\"card\">\nIt’s often used to calculate the slope of a line or simulate tilting behavior.\nFormula:\n<pre>float result = tan(angle_in_radians);</pre>\n</div>\n<div class=\"card\">\n⚠️ Warning: <b>tan()</b> has undefined points (like 90° or π/2 radians), causing huge spikes or crashy math!\n</div>"
    },
    {
      "title": "🌍 Real-Life Example: Simulating Slope & Angle",
      "content": "<div class=\"card\">\nImagine your robot is climbing a ramp. Use <code>tan()</code> to calculate the ramp’s slope from angle.\n</div>\n<div class=\"card\">\nExample: Slope = height / base = <code>tan(angle)</code> — cool, right?\n</div>\n<div class=\"card\">\nPerfect for terrain estimation, tilt sensors, and robotic balancing! 🤖\n</div>"
    },
    {
      "title": "🛠️ Code Example: Accelerometer Tilt Angle",
      "content": "<div class=\"card\">\nLet’s say you read X and Z values from an accelerometer.\n</div>\n<div class=\"card\">\nYou want to estimate the angle of tilt:\n<pre>\nfloat angle = atan(x / z);  // inverse tan (arc tangent)\n</pre>\nThat’s <b>how real robots balance</b> on slopes!\n</div>"
    },
    {
      "title": "🎮 Game: Safe or Crashy?",
      "content": "<div class=\"card\">\nWhich angle will make tan() go crazy?\n<pre>A) 45° (PI/4 radians)\nB) 90° (PI/2 radians)\nC) 0°\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"tanGame\" placeholder=\"Your answer (A, B, C)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ B is the danger zone! tan(PI/2) = infinite.')\">Submit</button>\n</div>"
    },
    {
      "title": "📺 Video: Slope & Tangent in Real Motion",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/ZbozD0HXpbg\" title=\"Tangent Angle Explained with Arduino\" frameborder=\"0\" allowfullscreen></iframe>"
    },
    {
      "title": "🧪 Try It: Servo Controlled by Tan() Function",
      "content": "<div class=\"card\">\nLet’s simulate a servo arm that reacts to a changing slope.\n</div>\n<div class=\"card\">\n<pre>\n#include <Servo.h>\nServo s;\nvoid setup() {\n  s.attach(9);\n}\nvoid loop() {\n  float t = millis() / 1000.0;\n  float slope = tan(t);\n  int angle = constrain((slope + 1) * 45, 0, 180);\n  s.write(angle);\n  delay(10);\n}\n</pre>\n</div>\n<div class=\"card\">\n📈 The servo wiggles more dramatically as <code>tan()</code> spikes!\n</div>"
    },
    {
      "title": "🔍 Advanced Tip: Use atan() Often Instead",
      "content": "<div class=\"card\">\nWhile <code>tan()</code> is useful, most real applications use <code>atan()</code> or <code>atan2()</code> — these give you the angle from X/Y ratios.\n</div>\n<div class=\"card\">\nUse <code>tan()</code> for theoretical sim or wave math.\nUse <code>atan2(y, x)</code> for real-world position sensors, GPS, or 2D orientation.\n</div>"
    },
    {
      "title": "🎓 Summary: tan() = Slope = Danger + Power",
      "content": "<div class=\"card\">\nUse <code>tan()</code> to simulate steepness or exponential growth.\nBut be careful near PI/2 radians (90°) — things get wild 😬\n</div>\n<div class=\"card\">\nGreat for wave-skewing, slope prediction, or servo drama.\nBut always constrain and monitor your output!\n</div>"
    }
  ]
}

      ]
    },{
      title:"⚡ Instant Reactions: Mastering External Interrupts",
      modules:[
        {
  "title": "attachInterrupt(): The Lightning Listener",
  "lessons": [
    {
      "title": "🌩️ What is attachInterrupt()?",
      "content": "<div class='card'>Imagine you’re coding a robot, and suddenly, someone claps 👏. The robot must STOP what it’s doing and react instantly. <b>That’s what interrupts are for.</b></div>\n<div class='card'>An <b>interrupt</b> is a special event that makes Arduino pause everything and jump to a specific function instantly.\n<pre>attachInterrupt(digitalPinToInterrupt(pin), ISR, mode);</pre>\nWhere:\n<ul>\n<li><code>pin</code>: The digital pin you want to monitor</li>\n<li><code>ISR</code>: The function to run (Interrupt Service Routine)</li>\n<li><code>mode</code>: WHEN to trigger: <code>RISING</code>, <code>FALLING</code>, or <code>CHANGE</code></li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💬 Real-Life Analogy: Doorbell Interrupt",
      "content": "<div class='card'>You're watching Netflix 🍿, and someone rings the doorbell 🚪🔔.\nYou pause the movie, check the door (ISR), then resume watching. That’s an <b>interrupt</b>.</div>\n<div class='card'>Arduino does the same thing:\n<pre>\nvoid ringBell() {\n  Serial.println(\"🔔 Someone’s at the door!\");\n}\n\nattachInterrupt(digitalPinToInterrupt(2), ringBell, FALLING);</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: External Interrupts Tutorial",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/o2hrpZB2E9w\" title=\"Arduino Interrupt Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: When to Interrupt?",
      "content": "<div class='card'>Which situation needs an interrupt?\n<ol>\n<li>Checking a temperature sensor every 5 seconds</li>\n<li>Detecting sudden light using a photoresistor</li>\n<li>Counting button presses at any time</li>\n</ol></div>\n<div class='card'>\n<input placeholder='Type 2 and 3' id='interruptGame' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Use interrupts when immediate response is required.\")'>Submit</button></div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 What Pins Work with Interrupts?",
      "content": "<div class='card'>It depends on your board:\n<ul>\n<li><b>Uno/Nano:</b> Pins 2 & 3 only</li>\n<li><b>Mega:</b> Pins 2, 3, 18, 19, 20, 21</li>\n<li><b>ESP32/ESP8266:</b> Almost all digital pins (⚡cool!)</li>\n</ul>\n</div>\n<div class='card'>Use <code>digitalPinToInterrupt(pin)</code> to be safe.\nExample:\n<pre>\nattachInterrupt(digitalPinToInterrupt(2), alarm, RISING);\n</pre></div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Emergency Brake Button",
      "content": "<div class='card'>Simulate an emergency stop using a pushbutton:\n<ul><li>Connect Button to Pin 2 (interrupt pin)</li>\n<li>LED to Pin 13</li></ul>\n</div>\n<div class='card'>\n<pre>\nvolatile bool stopNow = false;\nvoid emergencyStop() {\n  stopNow = true;\n}\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n  attachInterrupt(digitalPinToInterrupt(2), emergencyStop, FALLING);\n}\n\nvoid loop() {\n  if (!stopNow) {\n    digitalWrite(13, HIGH);\n    delay(200);\n    digitalWrite(13, LOW);\n    delay(200);\n  }\n}</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Pro Tips for attachInterrupt",
      "content": "<div class='card'>⏱️ The ISR (interrupt function) must be fast! Don’t use <code>delay()</code> or <code>Serial.print()</code> inside it.</div>\n<div class='card'>Keep ISR logic short — just change a variable, then act on it in <code>loop()</code>.</div>\n<div class='card'>Use <code>volatile</code> keyword for any shared variables!</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "detachInterrupt(): Power Down the Listener",
  "lessons": [
    {
      "title": "🔌 What is detachInterrupt()?",
      "content": "<div class='card'>Once you <code>attachInterrupt()</code>, Arduino keeps listening for that trigger forever… unless you tell it to STOP.</div>\n<div class='card'><code>detachInterrupt(pin)</code> disables the interrupt from the specified pin.</div>\n<div class='card'>It’s like saying: “Ignore the doorbell now, I’m focused.”</div>\n<pre>\ndetachInterrupt(digitalPinToInterrupt(2));</pre>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 When to Use detachInterrupt()",
      "content": "<div class='card'>🔊 Use cases:\n<ul>\n<li>✅ Once an alarm is triggered, no need to re-trigger it.</li>\n<li>✅ Avoid bounce or repeated triggers.</li>\n<li>✅ Switching from manual to auto mode in a system.</li>\n</ul></div>\n<div class='card'>🧠 It helps cleanly control WHEN your Arduino should react — or ignore — signals.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏡 Real-Life Example: Security System",
      "content": "<div class='card'>In a home security system, once an intruder is detected, we sound the alarm and stop listening to further motion — until reset.</div>\n<div class='card'>Code:\n<pre>\nvoid intruderAlert() {\n  alarmOn = true;\n  detachInterrupt(digitalPinToInterrupt(2));\n}</pre></div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Disable After First Trigger",
      "content": "<div class='card'>Wiring:\n<ul><li>Button → Pin 2 (interrupt)</li><li>LED → Pin 13</li></ul></div>\n<div class='card'>Code:\n<pre>\nvolatile bool pressed = false;\nvoid stopOnce() {\n  pressed = true;\n  detachInterrupt(digitalPinToInterrupt(2));\n}\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n  attachInterrupt(digitalPinToInterrupt(2), stopOnce, FALLING);\n}\n\nvoid loop() {\n  if (pressed) digitalWrite(13, HIGH);\n}</pre></div>\n<div class='card'>✅ The LED lights up once, then ignores future presses!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: Keep It Controlled",
      "content": "<div class='card'>🚫 <code>detachInterrupt()</code> is your off switch for triggers.</div>\n<div class='card'>📦 Use it to pause/reactivate inputs intelligently — in alarms, counters, games, and more!</div>\n<div class='card'><code>attachInterrupt()</code> starts the reaction,<br><code>detachInterrupt()</code> ends it like a pro.</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "digitalPinToInterrupt(): Board-Safe Interrupt Mapping",
  "lessons": [
    {
      "title": "🧭 Why digitalPinToInterrupt()?",
      "content": "<div class='card'>Every Arduino board has different interrupt-capable pins.</div>\n<div class='card'>You can’t assume <code>pin 2</code> or <code>pin 3</code> works for all models.\nThat’s where <code>digitalPinToInterrupt()</code> comes in.</div>\n<div class='card'>It maps your pin to the internal interrupt number.</div>\n<pre>\nattachInterrupt(digitalPinToInterrupt(2), ISR, FALLING);</pre>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 When Should I Use It?",
      "content": "<div class='card'>✅ Always!</div>\n<div class='card'>✅ Makes your code portable between Uno, Mega, Nano, Leonardo, ESP32, etc.</div>\n<div class='card'>✅ Avoids errors like: <code>'2' is not an interrupt</code> on some boards.</div>\n<div class='card'>💡 Treat it like a translator between your chosen pin and the chip’s actual interrupt number.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔌 Real-Life Analogy: Hotel Room Numbers",
      "content": "<div class='card'>Imagine you say: \"I want room 101,\" but the hotel staff uses internal room IDs.</div>\n<div class='card'>They use a map to find which actual corridor and key belong to Room 101.</div>\n<div class='card'>That’s exactly what <code>digitalPinToInterrupt()</code> does.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Safer Interrupt Setup",
      "content": "<div class='card'>Let’s use a button on Pin 3 and trigger an LED on Pin 13.</div>\n<pre>\nvolatile bool isOn = false;\n\nvoid toggle() {\n  isOn = !isOn;\n}\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n  attachInterrupt(digitalPinToInterrupt(3), toggle, RISING);\n}\n\nvoid loop() {\n  digitalWrite(13, isOn);\n}</pre>\n<div class='card'>✅ This will work even if you move to an ESP32 or Mega!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Interrupts on Different Boards",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/S5U7NWxKJTA' title='Interrupts across Arduino boards' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧩 Summary: Always Use It!",
      "content": "<div class='card'><code>digitalPinToInterrupt()</code> = portable, error-free interrupts.</div>\n<div class='card'>It adapts your code to work with any compatible Arduino board automatically.</div>\n<div class='card'>🚀 Pro coders never hardcode pin numbers — they use this helper function!</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Mastering Advanced I/O: Sounds, Signals & Data Streams",
      modules:[
        {
  "title": "Let’s Make Some Noise: Exploring tone()",
  "lessons": [
    {
      "title": "🔊 What is tone()?",
      "content": "<div class='card'>The <code>tone()</code> function lets Arduino play musical notes or alert sounds by sending out square wave frequencies on a pin.</div>\n<div class='card'><pre>tone(pin, frequency);</pre>\nYou can even add duration:\n<pre>tone(pin, frequency, duration);</pre></div>\n<div class='card'>🎵 Frequency = pitch (e.g., 440Hz = A note)</div>\n<div class='card'>⌛ Duration = how long to play (in ms)</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Where and Why is tone() Used?",
      "content": "<div class='card'>- Buzzers for alerts\n- Sound effects in projects\n- Musical instruments\n- Alarms and reminders\n- Sensor feedback tones</div>\n<div class='card'>🎮 Game consoles and microwaves use tone-like sound signals. So can your Arduino!</div>\n<div class='card'>Use any PWM-capable digital pin (e.g., Pin 8 or 9 on Uno) 🎧</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Example: Doorbell Buzz",
      "content": "<div class='card'>Imagine a smart home doorbell using Arduino. A visitor presses a button, and Arduino plays a tone:</div>\n<pre>\nif (digitalRead(2) == HIGH) {\n  tone(8, 1000, 500); // 1kHz tone for 0.5s\n}</pre>\n<div class='card'>This mimics the buzz you hear on apartment doors 🚪🔔</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Buzzer Melody with tone()",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/1JDEf1glEDA' title='Arduino Buzzer with tone()' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess That Frequency!",
      "content": "<div class='card'>What happens when you run this?</div>\n<pre>tone(9, 261, 500);</pre>\n<div class='card'>A) A low-pitched rumble\nB) A mid-range beep\nC) A high-pitched squeak</div>\n<div class='card'>\n<input id='toneQuiz' placeholder='A, B or C?' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct: B! 261Hz = Middle C 🎹\")'>Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Motion Alarm System",
      "content": "<div class='card'>Hook up a motion sensor and buzzer:</div>\n<pre>\n#define buzzerPin 10\nvoid setup() {\n  pinMode(2, INPUT); // Motion sensor\n}\nvoid loop() {\n  if (digitalRead(2) == HIGH) {\n    tone(buzzerPin, 1200, 1000);\n  }\n}</pre>\n<div class='card'>👣 Motion triggers sound — great for theft detection or hallway alerts!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Pro Tip: Only One tone() at a Time",
      "content": "<div class='card'>Arduino can only play one tone at once.</div>\n<div class='card'>If you call <code>tone()</code> again on a different pin, it stops the previous one!</div>\n<div class='card'>Use <code>noTone(pin);</code> to manually stop sound.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Summary: Arduino + Sound = Fun Projects",
      "content": "<div class='card'>You can make alarms, instruments, and interactive sounds using just a simple piezo buzzer!</div>\n<div class='card'>And it’s all powered by:\n<pre>tone(pin, frequency, duration);</pre></div>\n<div class='card'>Go compose your first Arduino music loop now 🎼🤖</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Silence the Sound: Exploring noTone()",
  "lessons": [
    {
      "title": "🤫 What is noTone()?",
      "content": "<div class='card'>The <code>noTone(pin)</code> function is the OFF switch for any sound being played using <code>tone()</code>.</div>\n<div class='card'><pre>\nnoTone(8);  // Immediately stop sound on pin 8\n</pre></div>\n<div class='card'>It's perfect when you want to stop a buzzer on demand (e.g., after a button is released or a timeout).</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Where & Why Would You Use noTone()?",
      "content": "<div class='card'>🔕 Alarms that should stop after a condition is resolved (e.g., motion stopped)</div>\n<div class='card'>🔄 Replace tones with silence in games or apps\n🛑 Stop continuous sounds after a set time</div>\n<div class='card'>🎯 Use it with the same pin used by <code>tone()</code>. E.g., Digital Pin 9 on Arduino Uno</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Example: Security Buzzer Reset",
      "content": "<div class='card'>Imagine a home alarm — it buzzes if motion is detected. But once the person walks away, the sound should stop!</div>\n<div class='card'>This logic works:</div>\n<pre>\nif (digitalRead(2) == HIGH) {\n  tone(9, 1500);\n} else {\n  noTone(9);\n}\n</pre>\n<div class='card'>🎯 Great for creating professional-feeling alarms, entry systems, or visitor alerts!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: tone() + noTone() Demo",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/lW-wc__AsNw' title='Arduino tone and noTone Example' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: When to Silence?",
      "content": "<div class='card'>When would you call <code>noTone()</code> in this logic?</div>\n<pre>\nif (digitalRead(2) == ???) {\n  noTone(9);\n}\n</pre>\n<div class='card'>A) HIGH – button pressed\nB) LOW – button released\nC) ALWAYS</div>\n<div class='card'>\n<input id='ntquiz' placeholder='Your answer (A/B/C)' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Best answer: B! Stop tone when button is released.\")'>Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Button-Silenced Alarm",
      "content": "<div class='card'>Wire a button to Pin 2, buzzer to Pin 9:</div>\n<pre>\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    noTone(9); // Button released\n  } else {\n    tone(9, 2000); // Button held\n  }\n}\n</pre>\n<div class='card'>This setup lets the user cancel the alarm by releasing the button 🔇</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: tone() + noTone = 🔊🎚️ Control",
      "content": "<div class='card'>Use <code>noTone(pin)</code> to stop a sound when it's no longer needed.</div>\n<div class='card'>Just like how you pause music on your phone, <code>noTone()</code> brings silence to your project 🎶❌</div>\n<div class='card'>Perfect for clean transitions and reducing power usage!</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Catch the Pulse: Measuring with pulseIn()",
  "lessons": [
    {
      "title": "📊 What is a Pulse?",
      "content": "<div class='card'>A <b>pulse</b> is a quick burst of HIGH or LOW signal — like a clap of hands or a blink of light.</div>\n<div class='card'>It's used in sensors, remotes, servo control, and signal timing.</div>\n<div class='card'>When a signal turns ON then OFF rapidly, that’s a pulse. Arduino can measure how long it lasted using <code>pulseIn()</code>.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Syntax & Purpose of pulseIn()",
      "content": "<div class='card'>Use <code>pulseIn(pin, value)</code> to measure how long a pin stayed <b>HIGH</b> or <b>LOW</b>.</div>\n<pre>\nlong duration = pulseIn(7, HIGH);\n</pre>\n<div class='card'>It returns the pulse length in microseconds (μs)!</div>\n<div class='card'>🎯 Common Use: Ultrasonic sensors, IR remotes, PWM signal analysis</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Real-Life Example: Ultrasonic Distance",
      "content": "<div class='card'>Think of sonar — like a dolphin sending a sound pulse and listening for the echo.</div>\n<div class='card'>HC-SR04 sensor sends a HIGH pulse. Arduino listens for the echo using:</div>\n<pre>\nlong duration = pulseIn(echoPin, HIGH);\n</pre>\n<div class='card'>Longer the pulse, farther the object!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔌 What Pins Can You Use?",
      "content": "<div class='card'>✅ <b>Any digital pin</b> on Arduino can be used with <code>pulseIn()</code></div>\n<div class='card'>Just connect the signal wire (e.g. echo pin of sensor) to a digital pin — often Pin 7 or 8 for sensors</div>\n<div class='card'>⚠️ Avoid using PWM pins for both input and output at the same time.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: pulseIn + Ultrasonic Sensor",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/9xToP9Hvrqk' title='Arduino Ultrasonic Sensor & pulseIn Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Echo Time with pulseIn()",
      "content": "<div class='card'>Wiring:</div>\n<ul>\n<li>HC-SR04 Echo → Pin 7</li>\n<li>Trigger → Pin 6</li>\n</ul>\n<pre>\ndigitalWrite(6, LOW);\ndelayMicroseconds(2);\ndigitalWrite(6, HIGH);\ndelayMicroseconds(10);\ndigitalWrite(6, LOW);\n\nlong duration = pulseIn(7, HIGH);\nSerial.println(duration);\n</pre>\n<div class='card'>This prints the pulse duration in microseconds 📏</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's the Distance?",
      "content": "<div class='card'>If pulseIn() gives 500 μs, how far is the object (in cm)?</div>\n<div class='card'>Use this rule: <br><code>distance_cm = duration / 58.0</code></div>\n<div class='card'>\n<input id='pulsegame' placeholder='Enter distance in cm' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ 500 / 58 = ~8.6 cm\")'>Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: When to Use pulseIn()",
      "content": "<div class='card'>Use it when you want to:</div>\n<ul>\n<li>⏱️ Measure duration of a pulse (HIGH or LOW)</li>\n<li>📡 Read distance using ultrasonic sensors</li>\n<li>🛰️ Decode signals from IR remotes or radio</li>\n</ul>\n<div class='card'>It’s like Arduino’s stopwatch for electrical pulses 🕒⚡</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Patience Pays: Using pulseInLong() for Longer Pulses",
  "lessons": [
    {
      "title": "🧠 Why pulseInLong() Exists",
      "content": "<div class='card'>While <code>pulseIn()</code> is great for measuring short pulses, it may <b>timeout early</b> when the pulse is long.</div>\n<div class='card'>That’s where <code>pulseInLong()</code> steps in — it's like <b>pulseIn with more patience</b>.</div>\n<div class='card'>⏳ It allows for longer timeout periods, perfect for slow signals or long-distance ultrasonic sensors.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Syntax & How to Use",
      "content": "<div class='card'>Here's the syntax for <code>pulseInLong()</code>:</div>\n<pre>pulseInLong(pin, value)</pre>\n<pre>pulseInLong(pin, value, timeout)</pre>\n<div class='card'>Just like <code>pulseIn()</code>, it waits for the pin to go HIGH or LOW and measures the duration (in μs).</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌐 When to Use pulseInLong()",
      "content": "<div class='card'>✅ Use this when:</div>\n<ul>\n<li>You're dealing with <b>long pulse durations</b></li>\n<li>Your sensor’s signal is slow to return</li>\n<li>You need to measure PWM from slow devices (e.g. infrared sensors)</li>\n</ul>\n<div class='card'>⛔ Avoid in time-critical code — it still blocks while waiting for the pulse!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Analogy: Long Echo in a Cave",
      "content": "<div class='card'>Imagine shouting into a deep cave.</div>\n<div class='card'>It takes longer for the echo to return — <b>pulseIn() may give up too soon</b>.</div>\n<div class='card'>But <code>pulseInLong()</code> waits longer, capturing even the slowest echo like a pro spelunker 🧗</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Using pulseIn vs pulseInLong",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/jFzJk6NK9eA' title='pulseInLong Arduino Example' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Compare Two Distance Modes",
      "content": "<div class='card'>Wire HC-SR04 echo to Pin 7</div>\n<pre>\nlong duration1 = pulseIn(7, HIGH);\nlong duration2 = pulseInLong(7, HIGH);\n\nSerial.print(\"pulseIn: \");\nSerial.println(duration1);\nSerial.print(\"pulseInLong: \");\nSerial.println(duration2);\n</pre>\n<div class='card'>See the difference in results — especially over longer distances!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Pulse Patience Test",
      "content": "<div class='card'>If your ultrasonic pulse doesn't return in time using <code>pulseIn()</code>, what should you try?</div>\n<div class='card'>\n<input id='pulseLongQuiz' placeholder='Type your answer' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Use pulseInLong() to allow more time.\")'>Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: pulseInLong vs pulseIn",
      "content": "<div class='card'><b>pulseIn()</b> — Quick, works great for short signals</div>\n<div class='card'><b>pulseInLong()</b> — Same job, but with extended timeout capability</div>\n<div class='card'>Use when pulse timing may be long (like deep-distance sensors)</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "shiftIn() — Talk to the 74HC165 Like a Pro",
  "lessons": [
    {
      "title": "📦 What's a Shift Register? (74HC165)",
      "content": "<div class=\"card\">\nA shift register is a chip that helps Arduino deal with <b>more inputs</b> using <b>fewer pins</b>.\n</div>\n<div class=\"card\">\n<b>74HC165</b> is a special kind:\n👉 Parallel-In, Serial-Out\nIt reads 8 switches <i>at once</i> but sends that data one bit at a time.\n</div>\n<div class=\"card\">\n📊 Example Use:\n- Read 8 buttons with just 3 Arduino pins 😲\n- Build a control panel\n- Old keyboard scanners\n</div>",
      "image": "url_to_diagram",
      "audio": "url"
    },
    {
      "title": "📐 How shiftIn() Helps",
      "content": "<div class=\"card\">\nYour Arduino <b>asks</b> the 74HC165: “Give me the next bit!” — and it replies... 0 or 1.\n</div>\n<div class=\"card\">\nThis happens 8 times, and Arduino builds a full <code>byte</code> from it.\n</div>\n<div class=\"card\">\nNow you know which buttons are pressed!\n</div>",
      "image": "url_to_timing_diagram",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Wiring 74HC165 with Arduino",
      "content": "<div class=\"card\">\nWiring:\n<ul>\n<li>74HC165 QH (output) → Arduino D8</li>\n<li>Clock → D9</li>\n<li>Load/Shld → D10</li>\n</ul>\nPull up all 8 data pins with resistors and buttons.\n</div>\n<div class=\"card\">\n<pre>\n#define DATA 8\n#define CLOCK 9\n#define LOAD 10\n\nvoid loop() {\n  digitalWrite(LOAD, LOW);\n  delayMicroseconds(5);\n  digitalWrite(LOAD, HIGH);\n\n  byte data = shiftIn(DATA, CLOCK, MSBFIRST);\n  Serial.println(data, BIN);\n}\n</pre>\n</div>\n<div class=\"card\">\nNow press buttons and see the byte change in Serial Monitor!\n</div>",
      "image": "url_to_real_button_board",
      "audio": "url"
    },
    {
      "title": "📺 Video: 74HC165 with shiftIn()",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/GUnUfpXcAqk\" title=\"74HC165 with Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Real-Life Analogy",
      "content": "<div class=\"card\">\nImagine 8 kids raising hands (1 = up, 0 = down).\nBut the teacher (Arduino) can't see them all.\nSo one kid whispers each hand's state to the teacher one-by-one.\nThat’s how <b>serial data</b> works — bit by bit.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "shiftOut() — More LEDs, Fewer Pins (Thanks 74HC595!)",
  "lessons": [
    {
      "title": "💡 Why shiftOut()? What's 74HC595?",
      "content": "<div class=\"card\">\nArduino has limited digital output pins.\n</div>\n<div class=\"card\">\nEnter the 🦸‍♂️ hero chip: <b>74HC595</b> —\nA <b>Serial-In, Parallel-Out</b> shift register!\nIt takes data <i>bit-by-bit</i> and lights up 8 outputs <i>at once</i>.\n</div>\n<div class=\"card\">\nUse it for:\n- LED matrix displays\n- 7-segment counters\n- Controlling 8+ relays, motors, etc.\n- DJ lights or game panels 🎮\n</div>",
      "image": "url_to_chip_diagram",
      "audio": "url"
    },
    {
      "title": "🧠 How it Works",
      "content": "<div class=\"card\">\nImagine you're passing 8 boxes down a conveyor belt one at a time.\nEach box has ON/OFF info.\n</div>\n<div class=\"card\">\n<b>shiftOut()</b> sends those boxes (bits) to 74HC595.\nWhen ready, you say “GO!” — and the chip pushes out all signals at once 💥\n</div>\n<div class=\"card\">\nThat “GO!” is done via a <code>latch</code> pin.\n</div>",
      "image": "url_to_conveyor_gif_or_static",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Wiring 74HC595 + 8 LEDs",
      "content": "<div class=\"card\">\nWiring:\n<ul>\n<li>Pin 11 (Data) → 74HC595 DS</li>\n<li>Pin 12 (Clock) → SH_CP</li>\n<li>Pin 8 (Latch) → ST_CP</li>\n<li>Q0 to Q7 → LEDs with resistors</li>\n<li>Don't forget GND!</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\n#define DATA 11\n#define CLOCK 12\n#define LATCH 8\n\nvoid setup() {\n  pinMode(DATA, OUTPUT);\n  pinMode(CLOCK, OUTPUT);\n  pinMode(LATCH, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LATCH, LOW);\n  shiftOut(DATA, CLOCK, MSBFIRST, 0b10101010);\n  digitalWrite(LATCH, HIGH);\n  delay(500);\n}\n</pre>\n</div>\n<div class=\"card\">\nThis blinks alternate LEDs — neat!\n</div>",
      "image": "url_to_led_array_wiring",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Pattern",
      "content": "<div class=\"card\">\nWhat will this pattern do?\n<pre>shiftOut(DATA, CLOCK, MSBFIRST, 0b11110000);</pre>\n</div>\n<div class=\"card\">\nA) First 4 LEDs ON, rest OFF\n<br>B) All LEDs ON\n<br>C) Alternate ON/OFF\n</div>\n<div class=\"card\">\n<input id=\"patternQuiz\" placeholder=\"Type A, B or C\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! A is the right answer.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: shiftOut() + LED Example",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/6aWf3_Qg_7k\" title=\"shiftOut tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🤔 Real-Life Analogy",
      "content": "<div class=\"card\">\nThink of shiftOut like this:\n<ul>\n<li>You line up 8 toy soldiers in a line (shift bits)</li>\n<li>Then you pull the curtain (latch pin) and 💥 they all raise their weapons!</li>\n<li>This all happens using just 3 Arduino pins 😎</li>\n</ul>\n</div>",
      "image": "url_to_fun_illustration",
      "audio": "url"
    },
    {
      "title": "🧪 Bonus: Count from 0 to 255 in Binary!",
      "content": "<div class=\"card\">\nWant to flex the full power?\nLet’s make a binary counter using shiftOut:\n</div>\n<div class=\"card\">\n<pre>\nfor (int i = 0; i < 256; i++) {\n  digitalWrite(LATCH, LOW);\n  shiftOut(DATA, CLOCK, MSBFIRST, i);\n  digitalWrite(LATCH, HIGH);\n  delay(100);\n}\n</pre>\n</div>\n<div class=\"card\">\nWatch the LEDs dance through all binary combos 🕺\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Know Your Characters: The Art of Detecting Letters, Digits & More!",
      modules:[
        {
  "title": "isAlpha() — Is it a Letter?",
  "lessons": [
    {
      "title": "🔍 What is isAlpha()?",
      "content": "<div class=\"card\">\n<code>isAlpha(c)</code> checks if <b>c</b> is a letter from the alphabet (A–Z or a–z).\n</div>\n<div class=\"card\">\nIt returns:\n<ul>\n<li><b>true</b> if it's a letter</li>\n<li><b>false</b> if it's not (like a digit or symbol)</li>\n</ul>\n</div>\n<div class=\"card\">\nGreat for password checks, name filters, and input sanitization.\n</div>",
      "image": "url_to_letter_icon",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Name Form Validation",
      "content": "<div class=\"card\">\nYou're creating a smart name input field with Arduino + LCD.\n</div>\n<div class=\"card\">\nIf someone types <b>J0hn</b>,\n<pre>isAlpha('0')</pre>\nwill return <b>false</b> — because numbers aren't letters.\n</div>\n<div class=\"card\">\nSo you can flash a warning or buzz a buzzer 🔔\n</div>",
      "image": "url_to_form_lcd",
      "audio": "url"
    },
    {
      "title": "💻 Code Example",
      "content": "<div class=\"card\">\n<pre>\nchar c = 'A';\nif (isAlpha(c)) {\n  Serial.println(\"It's a letter!\");\n} else {\n  Serial.println(\"Not a letter!\");\n}\n</pre>\n</div>\n<div class=\"card\">\nTry with 'Z', 'm', '5', '$' — test what gets through!\n</div>",
      "image": "url_to_serial_monitor_preview",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Is it Alpha?",
      "content": "<div class=\"card\">\nWhat will this return?\n<pre>isAlpha('#')</pre>\n</div>\n<div class=\"card\">\n<input id=\"alphaGame\" placeholder=\"true or false?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('❌ Nope! It’s FALSE — # is not a letter.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Letters vs. Not-Letters!",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/0z7QRejIW8M\" title=\"Character Functions in Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Challenge: Filter the Name!",
      "content": "<div class=\"card\">\nWrite a sketch that reads a name via Serial and removes anything that’s not a letter:\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isAlpha(c)) Serial.print(c);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n👏 Welcome to smart input validation Arduino-style!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isAlphaNumeric() — Letters or Numbers?",
  "lessons": [
    {
      "title": "🔍 What is isAlphaNumeric()?",
      "content": "<div class=\"card\">\n<code>isAlphaNumeric(c)</code> checks if <b>c</b> is a letter (A-Z or a-z) <u>or</u> a digit (0–9).\n</div>\n<div class=\"card\">\nIt returns:\n<ul>\n<li><b>true</b> if it’s a letter or number</li>\n<li><b>false</b> if it’s anything else (like %, @, space, etc.)</li>\n</ul>\n</div>\n<div class=\"card\">\nIt’s like a security guard for your inputs.\n</div>",
      "image": "url_to_mixed_input",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Username Filters",
      "content": "<div class=\"card\">\nWant your user to enter a username like <code>RoboKid007</code>?\n</div>\n<div class=\"card\">\n<code>isAlphaNumeric()</code> ensures they don’t use invalid symbols like @ or #.\n</div>\n<div class=\"card\">\nPerfect for: forms, tags, LCD messages, keypads, and more.\n</div>",
      "image": "url_to_username_input",
      "audio": "url"
    },
    {
      "title": "💻 Code Example",
      "content": "<div class=\"card\">\n<pre>\nchar c = '7';\nif (isAlphaNumeric(c)) {\n  Serial.println(\"It’s a valid character!\");\n} else {\n  Serial.println(\"Not allowed!\");\n}\n</pre>\n</div>\n<div class=\"card\">\nTry testing it with '@', 'Q', '9', and a space.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Is it Alphanumeric?",
      "content": "<div class=\"card\">\n<pre>isAlphaNumeric(' ')</pre>\nWhat will this return?\n</div>\n<div class=\"card\">\n<input id=\"alphaNumGame\" placeholder=\"true or false?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('❌ Nope! Spaces are not alphanumeric.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Character Filtering in Arduino",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/FzCftKzZ1Bo\" title=\"isAlphaNumeric() Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Challenge: Valid Username Collector",
      "content": "<div class=\"card\">\nMake a Serial reader that accepts only letters and digits:\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isAlphaNumeric(c)) {\n      Serial.print(c);\n    } else {\n      Serial.print(\"🔒\");\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry typing symbols — Arduino filters them instantly!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isAscii() — ASCII or Not?",
  "lessons": [
    {
      "title": "💡 What is isAscii()?",
      "content": "<div class=\"card\">\n<code>isAscii(c)</code> checks if the character <b>c</b> belongs to the ASCII set.\n</div>\n<div class=\"card\">\nThat means its value is between 0 and 127.\n</div>\n<div class=\"card\">\nWhy care? Because Arduino's Serial, keypads, and displays often expect ASCII!\n</div>",
      "image": "url_to_ascii_table",
      "audio": "url"
    },
    {
      "title": "🌍 Real-Life Analogy: Keyboard Typing",
      "content": "<div class=\"card\">\nEvery time you press a key like <b>A</b> or <b>4</b>, the keyboard sends its ASCII value to your computer.\n</div>\n<div class=\"card\">\nIf someone tries to send emoji 🐱 — it’s <b>not</b> ASCII. That’s Unicode!\n</div>",
      "image": "url_keyboard_ascii",
      "audio": "url"
    },
    {
      "title": "📘 Example: Check ASCII",
      "content": "<div class=\"card\">\n<pre>\nchar c = '©'; // this is NOT ASCII\nif (isAscii(c)) {\n  Serial.println(\"ASCII accepted!\");\n} else {\n  Serial.println(\"Not ASCII! Ignored.\");\n}\n</pre>\n</div>\n<div class=\"card\">\nTry this with emojis, accented letters, or symbols from other languages!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the ASCII Range",
      "content": "<div class=\"card\">\nWhat's the range of ASCII values?\nA. 0–255<br>B. 0–127<br>C. 32–126\n</div>\n<div class=\"card\">\n<input id=\"asciiGame\" placeholder=\"Type A, B, or C\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: B! ASCII values are 0–127.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII vs Unicode Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/MijmeoH9LT4\" title=\"ASCII Explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: ASCII Filter for Serial Input",
      "content": "<div class=\"card\">\nFilter out non-ASCII characters from Serial input:\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isAscii(c)) {\n      Serial.print(c);\n    } else {\n      Serial.print(\"❌\");\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry typing in symbols like é, ✓, and see how Arduino filters them.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isControl() — Silent but Powerful",
  "lessons": [
    {
      "title": "🤐 What is a Control Character?",
      "content": "<div class=\"card\">\n<code>isControl(c)</code> checks if a character is a <b>control character</b> — meaning it's not visible, but performs a function.\n</div>\n<div class=\"card\">\nASCII has 33 such characters (values 0–31 + 127).\n</div>\n<div class=\"card\">\nExamples include:\n<ul>\n<li><b>\\n</b> (newline) → moves cursor to next line</li>\n<li><b>\\t</b> (tab) → inserts a tab space</li>\n<li><b>\\b</b> (backspace)</li>\n<li>ASCII 0 (NUL) — null terminator for strings</li>\n</ul>\nThese aren’t seen, but are always at work behind the scenes!\n</div>",
      "image": "url_control_chars_table",
      "audio": "url"
    },
    {
      "title": "🎤 Real-World Analogy: TV Remote",
      "content": "<div class=\"card\">\nImagine you're watching TV and you press the 'volume up' button.\n</div>\n<div class=\"card\">\nYou don't see the infrared signal, but your TV does.\nThat invisible signal = control character — it's not seen, but it changes something.\n</div>",
      "image": "url_tv_remote_control",
      "audio": "url"
    },
    {
      "title": "📘 Example: Detect Newline",
      "content": "<div class=\"card\">\n<pre>\nchar c = '\\n';\nif (isControl(c)) {\n  Serial.println(\"Yep, it's a control character!\");\n}\n</pre>\n</div>\n<div class=\"card\">\nThis works for any invisible characters: tab, enter, backspace, etc.\n</div>",
      "image": "url_serial_newline",
      "audio": "url"
    },
    {
      "title": "🔍 Why is isControl() Important?",
      "content": "<div class=\"card\">\nWhen reading Serial input, sometimes you get extra characters.\n<pre>\\n</pre> or <pre>\\r</pre> sneak in and mess up your parsing!\n</div>\n<div class=\"card\">\nUse <code>isControl()</code> to filter those out or handle them differently.\n</div>\n<div class=\"card\">\nAlso helps in protocols, text formatting, communication debugging, etc.\n</div>",
      "image": "url_serial_bug_example",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Control or Not?",
      "content": "<div class=\"card\">\nWhich of the following are control characters?\n<pre>\nA. 'A'\nB. '\\n'\nC. ' '\nD. '\\t'</pre>\n</div>\n<div class=\"card\">\n<input id=\"controlGame\" placeholder=\"Type A, B, C, or D (multiple allowed)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ B and D are control characters!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII Control Characters Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/WVhmN1-vnnY\" title=\"ASCII Control Codes\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Filter Out Control Characters",
      "content": "<div class=\"card\">\nRead a Serial input, and ignore control characters:</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (!isControl(c)) {\n      Serial.print(c);\n    } else {\n      Serial.print(\"❌\"); // filtered\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry pressing ENTER after some text and see it filter!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Recap: Invisible but Vital",
      "content": "<div class=\"card\">\nControl characters are invisible warriors:\n<ul>\n<li>They move the cursor</li>\n<li>End strings</li>\n<li>Structure protocols</li>\n</ul>\nUse <code>isControl()</code> to detect and handle them smartly 😎\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isDigit() — Number Detective!",
  "lessons": [
    {
      "title": "🔢 What is isDigit()?",
      "content": "<div class=\"card\">\n<code>isDigit(c)</code> checks if the character <code>c</code> is a digit — like '0' to '9'.\n</div>\n<div class=\"card\">\nIt doesn't check for <b>numeric value</b>, it checks if the <b>character</b> is one of the digit characters in the ASCII table.\n</div>\n<div class=\"card\">\n<b>✔️ True for:</b> '0', '1', ..., '9' <br>\n<b>❌ False for:</b> '.', '-', 'A', etc.\n</div>",
      "image": "url_ascii_digits_table",
      "audio": "url"
    },
    {
      "title": "📜 ASCII Refresher (Super Important)",
      "content": "<div class=\"card\">\nEvery character you type has a numeric ID in the ASCII system:\n<ul>\n<li>'0' → ASCII 48</li>\n<li>'1' → ASCII 49</li>\n<li>...</li>\n<li>'9' → ASCII 57</li>\n</ul>\nSo <code>isDigit()</code> simply checks if ASCII value of character is between 48–57.\n</div>\n<div class=\"card\">\nTo see it:\n<pre>\nchar ch = '5';\nSerial.println((int)ch); // prints 53\n</pre>\nThat’s the magic behind it!\n</div>",
      "image": "url_ascii_table_digits",
      "audio": "url"
    },
    {
      "title": "📘 Example: Serial Input Digit Check",
      "content": "<div class=\"card\">\nLet's say a user is typing into Serial Monitor — you want to allow only numbers:\n</div>\n<div class=\"card\">\n<pre>\nchar input = Serial.read();\nif (isDigit(input)) {\n  Serial.println(\"✅ That's a digit!\");\n} else {\n  Serial.println(\"❌ Not a digit.\");\n}\n</pre>\n</div>\n<div class=\"card\">\nThis is perfect for menu systems, keypad validation, PIN inputs, etc.\n</div>",
      "image": "url_serial_input_validation",
      "audio": "url"
    },
    {
      "title": "🎤 Real-Life Analogy: Cashier Scanner",
      "content": "<div class=\"card\">\nImagine you're a cashier scanning barcodes. Some codes are numbers, some are letters.\n</div>\n<div class=\"card\">\nYou only want to process items with numeric codes (e.g., price tags).\nThat's what <code>isDigit()</code> does — it separates the numbers from noise.\n</div>",
      "image": "url_barcode_scanner_example",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Output!",
      "content": "<div class=\"card\">\nWhat does this print?\n<pre>\nchar a = '9';\nchar b = 'x';\nSerial.println(isDigit(a));\nSerial.println(isDigit(b));\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"digitGame\" placeholder=\"Type two numbers (e.g. 1, 0)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: 1 for digit, 0 for non-digit!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII Digits vs Numbers (Why '5' ≠ 5)",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Q9qFb2tJf0M\" title=\"ASCII Characters Explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Parse Number from Serial",
      "content": "<div class=\"card\">\nBuild a simple calculator that only adds digits entered by the user:\n</div>\n<div class=\"card\">\n<pre>\nint total = 0;\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isDigit(c)) {\n      total += c - '0';\n      Serial.print(\"Running Total: \");\n      Serial.println(total);\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTip: <code>c - '0'</code> converts char digit to actual number!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Recap: Character ≠ Number",
      "content": "<div class=\"card\">\n<code>isDigit()</code> checks if a char is between '0' and '9' in ASCII.\n</div>\n<div class=\"card\">\nIt’s great for input validation, keypad readers, calculator inputs, and any time you’re working with typed characters.\n</div>\n<div class=\"card\">\nUse this wisely to build strong, bug-free Arduino apps!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isGraph() — Detect the Printable Gang (Except Spaces!)",
  "lessons": [
    {
      "title": "🧐 What is isGraph()?",
      "content": "<div class=\"card\">\n<code>isGraph(c)</code> checks if a character has a visible shape (a graphic symbol) — excluding spaces.\n</div>\n<div class=\"card\">\nIf it makes a mark on the screen — like <b>'A'</b>, <b>'9'</b>, <b>'@'</b>, <b>'~'</b>, etc. — then it’s considered a graphical (printable) character.\n</div>\n<div class=\"card\">\n<b>Returns TRUE (1)</b> for ASCII 33 to 126.<br>\n<b>Returns FALSE (0)</b> for space (ASCII 32), control characters, and non-printables.\n</div>",
      "image": "url_ascii_range_graphical",
      "audio": "url"
    },
    {
      "title": "🔤 Graphical Characters vs Printable vs Whitespace",
      "content": "<div class=\"card\">\n🧠 Let’s break it down:\n</div>\n<div class=\"card\">\n<ul>\n<li><b>Printable characters (isPrint)</b>: everything you can see (includes space)</li>\n<li><b>Graphical characters (isGraph)</b>: same as printable, but <b>excludes</b> space</li>\n<li><b>Whitespace:</b> space, tab, newline — characters you don’t “see” but they take space</li>\n</ul>\n</div>\n<div class=\"card\">\nSo: <pre>isPrint(' ') → true<br>isGraph(' ') → false</pre>\nThat’s the main difference!\n</div>",
      "image": "url_print_vs_graph",
      "audio": "url"
    },
    {
      "title": "🔢 ASCII Range: What Does isGraph() Cover?",
      "content": "<div class=\"card\">\nLet’s dive deep into the ASCII table:\n</div>\n<div class=\"card\">\n<pre>\nASCII 33:  !\nASCII 34:  \"\n...\nASCII 57:  9\nASCII 65:  A\nASCII 90:  Z\nASCII 97:  a\nASCII 122: z\nASCII 126: ~\n</pre>\n</div>\n<div class=\"card\">\nAll characters from <b>!</b> to <b>~</b> are considered “graphical”. Space (ASCII 32) is NOT.\n</div>",
      "image": "url_ascii_chart_slice",
      "audio": "url"
    },
    {
      "title": "🛠 Real-Life Example: Form Field Validation",
      "content": "<div class=\"card\">\nSuppose you’re building a login form using a keypad. You don’t want empty spaces, but you want any visible character allowed.\n</div>\n<div class=\"card\">\nThat’s where <code>isGraph()</code> helps:\n<pre>\nchar c = Serial.read();\nif (isGraph(c)) {\n  username += c;\n} else {\n  Serial.println(\"Invalid input: not a visible character\");\n}\n</pre>\n</div>\n<div class=\"card\">\nIt’s perfect for usernames, PINs, passwords where you want NO blank spaces.\n</div>",
      "image": "url_form_example",
      "audio": "url"
    },
    {
      "title": "🧮 Fun Trick: Count All Graphical Inputs",
      "content": "<div class=\"card\">\nTry this code to count all visible keypresses, excluding spaces:\n</div>\n<div class=\"card\">\n<pre>\nint count = 0;\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isGraph(c)) count++;\n  }\n  Serial.println(count);\n}\n</pre>\n</div>\n<div class=\"card\">\nOnly characters like A-Z, 0-9, @, !, %, etc., will be counted.\n</div>",
      "image": "url_keylogger_simulation",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess Which One is Graphical",
      "content": "<div class=\"card\">\nWhich of these characters return TRUE with <code>isGraph()</code>?\n<pre>\nA) '@'\nB) ' '\nC) '\\n'\nD) '9'\nE) '~'\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"graphGame\" placeholder=\"Type the letter(s), e.g., A, D, E\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: A, D, E! B and C are not graphical.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII — Printable vs Graphical Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/2TSqBEF4-cE\" title=\"Graphical ASCII Characters\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: When to Use isGraph()",
      "content": "<div class=\"card\">\n✔️ Use <code>isGraph()</code> when you want to filter out empty or invisible characters from user input.\n</div>\n<div class=\"card\">\nIt’s great for:\n<ul>\n<li>Keypad text entry</li>\n<li>Username/password validation</li>\n<li>Ensuring no invisible garbage is being typed in</li>\n</ul>\n</div>\n<div class=\"card\">\n📍Remember: It’s like <code>isPrint()</code>, just stricter — no room for spaces!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isHexadecimalDigit() — Hex Check Like a Pro!",
  "lessons": [
    {
      "title": "🔢 What’s a Hexadecimal Digit?",
      "content": "<div class='card'>\nA <b>hexadecimal digit</b> is any of these 16 characters:\n<pre>0 1 2 3 4 5 6 7 8 9 A B C D E F</pre>\nThey represent base-16 numbers used in memory addresses, colors, low-level coding, and more.\n</div>\n<div class='card'>\nIt includes both uppercase and lowercase versions:\n<pre>'0'-'9', 'A'-'F', 'a'-'f'</pre>\nSo 9, F, and f are all valid hex digits!\n</div>",
      "image": "url_hex_chart",
      "audio": "url"
    },
    {
      "title": "🔍 What is isHexadecimalDigit()?",
      "content": "<div class='card'>\n<code>isHexadecimalDigit(c)</code> checks whether a character is one of the valid hexadecimal characters above.\n</div>\n<div class='card'>\nIf it is, it returns <b>true</b> (1). If not — false (0).\n</div>\n<div class='card'>\nExamples:\n<pre>\nisHexadecimalDigit('A') → true\nisHexadecimalDigit('G') → false\nisHexadecimalDigit('4') → true\nisHexadecimalDigit('@') → false\n</pre>\n</div>",
      "image": "url_function_demo",
      "audio": "url"
    },
    {
      "title": "📦 Why Use This in Arduino?",
      "content": "<div class='card'>\nWhen you receive serial data or keypad input, and expect a user to enter a <b>hex code</b> (e.g., for colors or addresses), you can validate every character easily:\n</div>\n<div class='card'>\nExample:\n<pre>\nchar input = Serial.read();\nif (isHexadecimalDigit(input)) {\n  Serial.println(\"✔️ Valid hex digit\");\n} else {\n  Serial.println(\"❌ Not hex!\");\n}\n</pre>\n</div>\n<div class='card'>\n💡 Bonus: It's especially useful in systems involving sensors with hexadecimal configurations or communicating with EEPROM, displays, or RGB LEDs.\n</div>",
      "image": "url_arduino_serial",
      "audio": "url"
    },
    {
      "title": "🌈 Real-Life Example: RGB Color Code Input",
      "content": "<div class='card'>\nLet’s say you want users to enter a 6-digit hex color like #FF00AA.\n</div>\n<div class='card'>\nYou can verify each digit before constructing the color:\n<pre>\nchar r1 = Serial.read();\nif (!isHexadecimalDigit(r1)) {\n  Serial.println(\"Invalid color input!\");\n}\n</pre>\n</div>\n<div class='card'>\nThis ensures your color code won't break due to bad characters like '$' or 'Z'.\n</div>",
      "image": "url_color_input_validation",
      "audio": "url"
    },
    {
      "title": "🧮 Hex and Memory — How it Helps",
      "content": "<div class='card'>\nIn embedded systems, memory addresses and values are often written in hexadecimal — like <b>0x7F</b> or <b>0xFF</b>.\n</div>\n<div class='card'>\nIf you’re debugging or parsing memory dumps, knowing what’s valid hex helps avoid disaster 😱\n</div>\n<div class='card'>\n<code>isHexadecimalDigit()</code> helps ensure you're interpreting memory right when reading bytes and converting data.\n</div>",
      "image": "url_memory_debug_hex",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Is It Hex?",
      "content": "<div class='card'>\nType the letters that are valid hexadecimal digits:\n<pre>A) Z\nB) 4\nC) F\nD) 8\nE) G\nF) a</pre>\n</div>\n<div class='card'>\n<input id='hexCheckGame' placeholder='Type your answers (e.g. B, C, D, F)' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct: B, C, D, F — those are valid hex digits!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Hexadecimal Made Easy",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/b2C6Ry7Zw6A' title='What is Hexadecimal?' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: When to Use isHexadecimalDigit()",
      "content": "<div class='card'>\nUse this function when:\n<ul>\n<li>You're asking users to input color values (#RRGGBB)</li>\n<li>You’re parsing hex strings for memory or device configs</li>\n<li>You're reading EEPROM dumps or address maps</li>\n</ul>\n</div>\n<div class='card'>\nIt’s simple, but powerful. You don’t want garbage where only valid hex should live!\n</div>",
      "image": "url_summary_card",
      "audio": "url"
    }
  ]
}
,{
  "title": "isLowercase() — The Lowercase Letter Spy 🕵️‍♂️",
  "lessons": [
    {
      "title": "🔡 What is a Lowercase Character?",
      "content": "<div class='card'>\nLowercase characters are the little guys — the small letters from <code>'a'</code> to <code>'z'</code>. They’re the ones you use in normal writing, unlike SHOUTY CAPS like <code>'A'</code> to <code>'Z'</code>.\n</div>\n<div class='card'>\nIn ASCII (which is how Arduino stores characters), lowercase letters have codes from:\n<pre>'a' → 97\n'z' → 122</pre>\nSo checking if something is lowercase means checking if it's between 97 and 122.\n</div>",
      "image": "url_ascii_table_zoomed",
      "audio": "url"
    },
    {
      "title": "🤖 What is isLowercase()?",
      "content": "<div class='card'>\n<code>isLower(c)</code> is a handy function that checks if a character <code>c</code> is a lowercase letter.\n</div>\n<div class='card'>\nIt returns:\n<ul>\n<li><b>True (1)</b> if the character is between <code>'a'</code> and <code>'z'</code></li>\n<li><b>False (0)</b> for all other characters (digits, symbols, uppercase, etc)</li>\n</ul>\n</div>\n<div class='card'>\nExamples:\n<pre>\nisLower('a') → 1\nisLower('z') → 1\nisLower('G') → 0\nisLower('!') → 0\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Use Case: Validating Input from Serial",
      "content": "<div class='card'>\nImagine you're making a game where the player types a word — and you only want lowercase letters. What do you do?\n</div>\n<div class='card'>\nUse <code>isLowercase()</code> to check each character:\n<pre>\nchar input = Serial.read();\nif (isLower(input)) {\n  // Accept input\n} else {\n  Serial.println(\"❌ Not lowercase!\");\n}\n</pre>\n</div>\n<div class='card'>\nThis makes sure your logic only processes clean lowercase data, avoiding errors in logic or string comparison.\n</div>",
      "image": "url_serial_keyboard_game",
      "audio": "url"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>\nThink of <code>isLowercase()</code> like a lowercase bouncer outside a club 🕶️:\n</div>\n<div class='card'>\nHe checks IDs. If your name is in small letters, he says: “Come on in.”\nIf you’re all uppercase or just a number? “Nah bro, you're not on the list.”\n</div>",
      "image": "url_bouncer_cartoon",
      "audio": "url"
    },
    {
      "title": "💡 ASCII Secrets Behind the Scenes",
      "content": "<div class='card'>\nEach character in C++ is actually just a number behind the scenes.\n</div>\n<div class='card'>\nHere's what happens when you call <code>isLowercase()</code>:\n<pre>\nbool isLower(char c) {\n  return (c >= 'a' && c <= 'z');\n}\n</pre>\nSo yes, you could write your own version too — but Arduino already gives it for free!\n</div>",
      "image": "url_ascii_explained",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Lower or Not?",
      "content": "<div class='card'>\nWhich of these are lowercase?\n<pre>A) 'm'\nB) 'Z'\nC) '7'\nD) 'x'</pre>\n</div>\n<div class='card'>\n<input id='lowerGame' placeholder='Type the correct ones (e.g. A, D)' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct: A and D!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII Table + Lowercase Logic",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/o8NPllzkFhE' title='ASCII in 5 Minutes' frameborder='0' allowfullscreen></iframe>",
      "image": "url_ascii_vid",
      "audio": "url"
    },
    {
      "title": "📘 Recap: When to Use isLowercase()",
      "content": "<div class='card'>\nUse <code>isLowercase()</code> when you want to:\n<ul>\n<li>Accept only lowercase names, passwords, or strings</li>\n<li>Parse input from keyboards, sensors, or web forms</li>\n<li>Ensure text formatting in text-to-speech or file saving</li>\n<li>Teach kids or students about character handling with confidence!</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isPunct() — Is This a Punctuation Symbol?",
  "lessons": [
    {
      "title": "🔎 What is isPunct() Exactly?",
      "content": "<div class='card'>\n<code>isPunct(c)</code> checks if a character is a punctuation symbol.\nIt returns:\n<ul><li><b>1 (true)</b> if the character is punctuation</li>\n<li><b>0 (false)</b> otherwise</li></ul>\n</div>\n<div class='card'>\nPunctuation symbols include:\n<pre>!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~</pre>\nThese are all visible ASCII characters <b>between 33 and 47, 58–64, 91–96, and 123–126</b>\n</div>\n<div class='card'>\nIt does <b>not</b> include letters, numbers, or whitespace.\n</div>",
      "image": "url_isPunct_intro",
      "audio": "url"
    },
    {
      "title": "💡 Why Use isPunct()?",
      "content": "<div class='card'>\nWhen processing passwords, usernames, file names, or scanned texts — we often need to <b>filter out or detect punctuation</b>.\n</div>\n<div class='card'>\nExample: Want to remove all punctuation from a sentence for NLP?\nUse <code>isPunct()</code> in a loop.\n</div>\n<div class='card'>\nIt’s also useful in input validation, text formatting, and security filters.\n</div>",
      "image": "url_usecase_punctuation_filter",
      "audio": "url"
    },
    {
      "title": "🌍 Real-World Use Case: Password Check",
      "content": "<div class='card'>\nSuppose your Arduino password input system needs to ensure at least 1 punctuation character for strength.\n</div>\n<div class='card'>\nCode snippet:\n<pre>\nbool hasPunct = false;\nfor (int i = 0; i < strlen(input); i++) {\n  if (isPunct(input[i])) {\n    hasPunct = true;\n    break;\n  }\n}\n</pre>\n</div>\n<div class='card'>\nThis can reject passwords like <code>hello123</code> and accept <code>hello@123</code>\n</div>",
      "image": "url_password_strength_check",
      "audio": "url"
    },
    {
      "title": "📘 ASCII Explanation: What Counts as Punctuation?",
      "content": "<div class='card'>\nHere’s the breakdown by ASCII ranges:\n<ul>\n<li>33–47 → ! \" # $ % & ' ( ) * + , - . /</li>\n<li>58–64 → : ; < = > ? @</li>\n<li>91–96 → [ \\ ] ^ _ `</li>\n<li>123–126 → { | } ~</li>\n</ul>\n</div>\n<div class='card'>\nNot included:\n<ul>\n<li>32 (Space)</li>\n<li>48–57 (Digits)</li>\n<li>65–90 (Uppercase)</li>\n<li>97–122 (Lowercase)</li>\n</ul>\n</div>",
      "image": "url_ascii_table_ranges",
      "audio": "url"
    },
    {
      "title": "🧪 Try It Yourself: Filter Punctuation",
      "content": "<div class='card'>\nLet’s write a program that removes all punctuation and keeps the rest.\n</div>\n<div class='card'>\n<pre>\nchar original[] = \"Hello, World! How's it going?\";\nchar clean[50];\nint j = 0;\n\nfor (int i = 0; i < strlen(original); i++) {\n  if (!isPunct(original[i])) {\n    clean[j++] = original[i];\n  }\n}\nclean[j] = '\\0';\nSerial.println(clean);  // Output: Hello World Hows it going\n</pre>\n</div>",
      "image": "url_punctuation_removal_example",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Is This a Punct?",
      "content": "<div class='card'>\nGuess which of these will return true for <code>isPunct()</code>:\n<pre>A. 'A'\nB. '!'\nC. '\\n'\nD. '@'\nE. ' '</pre>\n</div>\n<div class='card'>\n<input id='isPunctGame' placeholder='Type A, B, etc' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Answer: B and D are punctuation.')\">Submit</button>\n</div>",
      "image": "url_punct_quiz_card",
      "audio": "url"
    },
    {
      "title": "📺 Video: Punctuation in ASCII (Visual Tutorial)",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/ZfA3e7ZrxzQ' title='ASCII and Punctuation' frameborder='0' allowfullscreen></iframe>",
      "image": "url_video_frame_ascii_punct",
      "audio": "url"
    },
    {
      "title": "📚 Recap: When is isPunct() Useful?",
      "content": "<div class='card'>\nUse it to:\n<ul>\n<li>Build password rules</li>\n<li>Clean user input</li>\n<li>Ignore symbols when counting words/letters</li>\n<li>Visualize clean strings for displays or logs</li>\n</ul>\n</div>\n<div class='card'>\nAnything between ASCII 33 and 126 <b>that is not a letter, digit, or space</b> is likely a punctuation!\n</div>",
      "image": "url_summary_punctuation_checker",
      "audio": "url"
    }
  ]
}
,{
  "title": "isSpace() — Spotting the Invisible!",
  "lessons": [
    {
      "title": "🧩 What is isSpace()?",
      "content": "<div class='card'>\n<code>isSpace(c)</code> checks if the character is a kind of <b>whitespace</b> — things like spaces, tabs, or line breaks.\n</div>\n<div class='card'>\nThese characters <b>don't print symbols</b>, but they control layout.\nThey’re essential in formatting strings, parsing commands, or cleaning input.\n</div>\n<div class='card'>\nIt returns:\n<ul>\n<li><b>1 (true)</b> if the character is whitespace</li>\n<li><b>0 (false)</b> otherwise</li></ul>\n</div>\n<div class='card'>\n<b>Pro Tip:</b> Great for skipping gaps while parsing or filtering user input.\n</div>",
      "image": "url_whitespace_concept",
      "audio": "url"
    },
    {
      "title": "📘 What Counts As Whitespace?",
      "content": "<div class='card'>\n`isSpace()` returns <b>true</b> for the following invisible characters:\n<ul>\n<li><code>' '</code> – space (ASCII 32)</li>\n<li><code>'\\t'</code> – tab (ASCII 9)</li>\n<li><code>'\\n'</code> – newline (ASCII 10)</li>\n<li><code>'\\r'</code> – carriage return (ASCII 13)</li>\n<li><code>'\\f'</code> – form feed (ASCII 12)</li>\n<li><code>'\\v'</code> – vertical tab (ASCII 11)</li>\n</ul>\n</div>\n<div class='card'>\nEven though these characters are invisible, they <b>change how text looks</b> on screen.\n</div>",
      "image": "url_ascii_whitespace",
      "audio": "url"
    },
    {
      "title": "🌍 Real-Life Example: Parsing SMS Commands",
      "content": "<div class='card'>\nImagine your Arduino receives a command string via Bluetooth:\n<code>\"SET LED ON\\n\"</code>\n</div>\n<div class='card'>\nTo process it cleanly, we may want to <b>skip all spaces, tabs, and line breaks</b>.\nThat’s where <code>isSpace()</code> comes in!\n</div>\n<div class='card'>\n<pre>\nfor (int i = 0; i < strlen(cmd); i++) {\n  if (!isSpace(cmd[i])) {\n    Serial.print(cmd[i]);\n  }\n}</pre>\nThis will only print <code>SETLEDON</code>!\n</div>",
      "image": "url_sms_parse_example",
      "audio": "url"
    },
    {
      "title": "🔍 ASCII Deep Dive: Visualizing Whitespace",
      "content": "<div class='card'>\nASCII codes for whitespace:\n<ul>\n<li><b>9</b> → TAB</li>\n<li><b>10</b> → LF (Line Feed aka \\n)</li>\n<li><b>11</b> → VT (Vertical Tab)</li>\n<li><b>12</b> → FF (Form Feed)</li>\n<li><b>13</b> → CR (Carriage Return aka \\r)</li>\n<li><b>32</b> → SPACE</li>\n</ul>\n</div>\n<div class='card'>\nThese codes exist from the era of old typewriters and early printers — CR meant <i>move to line start</i>, LF meant <i>move down</i>.\n</div>\n<div class='card'>\n💡 Even today, Linux uses <code>\\n</code> and Windows uses <code>\\r\\n</code> for new lines!\n</div>",
      "image": "url_ascii_table_full",
      "audio": "url"
    },
    {
      "title": "🧪 Try It Yourself: Remove Whitespace",
      "content": "<div class='card'>\nWrite a program that removes all whitespace from a string.\n</div>\n<div class='card'>\n<pre>\nchar input[] = \"  Hello \\t World!\\n\";\nchar clean[30];\nint j = 0;\n\nfor (int i = 0; i < strlen(input); i++) {\n  if (!isSpace(input[i])) {\n    clean[j++] = input[i];\n  }\n}\nclean[j] = '\\0';\nSerial.println(clean);  // Output: HelloWorld!\n</pre>\n</div>",
      "image": "url_whitespace_strip_code",
      "audio": "url"
    },
    {
      "title": "🎮 Game: True or False?",
      "content": "<div class='card'>\nWill <code>isSpace()</code> return true for the following?\n<pre>\nA. ' '\nB. '\\n'\nC. 'A'\nD. '\\t'\nE. '!'\n</pre>\n</div>\n<div class='card'>\n<input id='isSpaceGame' placeholder='Write A, B, etc...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Answer: A, B, D are spaces!')\">Submit</button>\n</div>",
      "image": "url_quiz_card_space_check",
      "audio": "url"
    },
    {
      "title": "📺 Video: Understanding Whitespace in ASCII",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/DRrMZWGZd_E' title='ASCII Whitespace Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "url_video_frame_whitespace_ascii",
      "audio": "url"
    },
    {
      "title": "📚 Recap: isSpace() Is Essential For...",
      "content": "<div class='card'>\n✅ Cleaning input from users or serial port\n✅ Parsing commands or text streams\n✅ Creating strong password logic (no leading/trailing spaces)\n✅ Skipping blanks when counting letters\n✅ Beautifying output display\n</div>\n<div class='card'>\n📌 Summary: Whitespace ≠ useless. It’s just invisible!\n</div>",
      "image": "url_summary_cleaning_space",
      "audio": "url"
    }
  ]
}
,{
  "title": "isUpperCase() — Are You SHOUTING?",
  "lessons": [
    {
      "title": "🔠 What is isUpperCase()?",
      "content": "<div class=\"card\">\n<code>isUpperCase(c)</code> checks if the given character <code>c</code> is an uppercase letter: <code>'A'</code> to <code>'Z'</code>.\n</div>\n<div class=\"card\">\nIf you pass <code>'M'</code>, it returns <code>true</code>.\nIf you pass <code>'m'</code>, it returns <code>false</code>.\n</div>\n<div class=\"card\">\n✅ Used to filter inputs, handle keypresses, parse text, validate names or tags — anything involving alphabets!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real World Analogy",
      "content": "<div class=\"card\">\nImagine you're grading a test. Some answers are in CAPS:\n<code>\"SPEED = DISTANCE / TIME\"</code> — Easy to read, bold, visible.\n</div>\n<div class=\"card\">\nYou use <code>isUpperCase()</code> like your eye scanning for SHOUTING words 📢\n</div>\n<div class=\"card\">\nIn Arduino: maybe you're reading serial input character-by-character and want to respond **only** when the user sends a capital letter.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔤 ASCII & Behind-the-Scenes",
      "content": "<div class=\"card\">\nCharacters in Arduino (and C/C++) are stored using <b>ASCII codes</b>.\n</div>\n<div class=\"card\">\nFor example:\n<ul>\n<li><b>'A'</b> = 65</li>\n<li><b>'B'</b> = 66</li>\n<li>...</li>\n<li><b>'Z'</b> = 90</li>\n</ul>\n</div>\n<div class=\"card\">\nSo internally, <code>isUpperCase('A')</code> checks if its ASCII is between 65 and 90.\nThat's it! 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Code Example: Only Allow Caps",
      "content": "<div class=\"card\">\nThis program reads a letter from the Serial Monitor and lights up an LED <b>only</b> if it's a capital letter.\n</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char ch = Serial.read();\n    if (isUpperCase(ch)) {\n      digitalWrite(13, HIGH);\n    } else {\n      digitalWrite(13, LOW);\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n👆 Try typing letters in Serial Monitor. Only capital letters turn on the LED!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Mini Game: UPPER or not?",
      "content": "<div class=\"card\">\nWhat will <code>isUpperCase('H')</code> return?\n<pre>A) true\nB) false</pre>\n</div>\n<div class=\"card\">\n<input id=\"ucaseGame\" placeholder=\"Type A or B\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! H is uppercase.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII + Case Detection",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/fm05REfNE9Y\" title=\"ASCII & isUpperCase Explanation\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try This Challenge",
      "content": "<div class=\"card\">\nWrite a program that:\n<ul>\n<li>Reads a character from Serial</li>\n<li>If it's uppercase — blinks LED rapidly</li>\n<li>If not — blinks LED slowly</li>\n</ul>\n</div>\n<div class=\"card\">\nHint: use <code>delay()</code> to create different blink speeds based on <code>isUpperCase()</code> result.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Recap & Use Cases",
      "content": "<div class=\"card\">\n✅ <code>isUpperCase()</code> helps you validate and respond to <b>uppercase letters only</b>.\n</div>\n<div class=\"card\">\n🎯 It's useful in:\n<ul>\n<li>Command filtering (e.g. ‘R’ for RESET)</li>\n<li>Menu navigation via Serial</li>\n<li>Security/password entry where CAPS matter</li>\n</ul>\n</div>\n<div class=\"card\">\nNow you know how Arduino tells if you’re SHOUTING! 😉\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isWhitespace() — Not All Spaces Are Empty!",
  "lessons": [
    {
      "title": "🧽 What is isWhitespace()?",
      "content": "<div class=\"card\">\n<code>isWhitespace(c)</code> checks if the character <code>c</code> is a whitespace.\nThat means: a space, a tab, a newline — characters that ‘take space’ but don’t show anything.\n</div>\n<div class=\"card\">\nIt returns <code>true</code> if <code>c</code> is:\n<ul>\n<li>Space ( )</li>\n<li>Tab (\\t)</li>\n<li>Newline (\\n)</li>\n<li>Carriage return (\\r)</li>\n</ul>\nAnd <code>false</code> if it's anything else (letters, numbers, punctuation...)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Analogy: The Invisible Characters",
      "content": "<div class=\"card\">\nWhen you write a sentence, you leave spaces between words.\n</div>\n<div class=\"card\">\nBut also — when you hit \"Enter\", that’s a newline. Or when you press \"Tab\", that’s a tab.\n</div>\n<div class=\"card\">\nTo you, they’re just layout. But to your Arduino, they’re **real characters** with **ASCII codes**!\n</div>\n<div class=\"card\">\n<code>isWhitespace()</code> helps the Arduino say:\n🗣️ \"Hey! This character is a space-like thing. Ignore it for now.\"\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔎 ASCII View: What’s a Whitespace?",
      "content": "<div class=\"card\">\nWhitespace characters and their ASCII codes:\n<ul>\n<li><b>' '</b> (Space) = 32</li>\n<li><b>\\t</b> (Tab) = 9</li>\n<li><b>\\n</b> (New Line) = 10</li>\n<li><b>\\r</b> (Carriage Return) = 13</li>\n</ul>\n</div>\n<div class=\"card\">\nThese don’t show up when printed normally. But they’re VERY common in text, especially Serial input.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧰 Why & When to Use isWhitespace()?",
      "content": "<div class=\"card\">\n⚡ When reading a name from Serial Monitor, a user might accidentally type spaces:\n<pre>\"    John\\n\"</pre>\n</div>\n<div class=\"card\">\nYou want to clean this text before using it.\nUse <code>isWhitespace()</code> to skip or remove these extra characters.\n</div>\n<div class=\"card\">\nAlso great for:\n<ul>\n<li>Validating user input</li>\n<li>Parsing text</li>\n<li>Skipping garbage characters</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Code: Ignore Spaces in Name",
      "content": "<div class=\"card\">\nThis reads name from Serial Monitor, skips whitespace, and prints only visible characters.\n</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (!isWhitespace(c)) {\n      Serial.print(c);\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry typing: <code>    Hello Arduino!\\n</code>\n👉 Output: <code>HelloArduino!</code> (spaces gone!)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Spot the Whitespace",
      "content": "<div class=\"card\">\nWhich of these will <code>isWhitespace()</code> return <code>true</code> for?\n<pre>\nA. ' '\nB. 'A'\nC. '\\n'\nD. '7'\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"wsGame\" placeholder=\"Your answer (e.g., A, C)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! A and C are whitespace characters.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Serial Input Cleanup",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/hSu_4K4U63U\" title=\"Remove whitespace from Serial data\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try This Challenge: Trim Text!",
      "content": "<div class=\"card\">\nWrite a sketch that reads an entire sentence and prints only non-whitespace characters (like a compact string).\n</div>\n<div class=\"card\">\nBonus: Count how many whitespace characters you removed!\n</div>\n<div class=\"card\">\nHint: Use a counter and <code>isWhitespace()</code> to track skipped ones.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Recap",
      "content": "<div class=\"card\">\n✅ <code>isWhitespace()</code> helps identify invisible characters like spaces, tabs, and newlines.\n</div>\n<div class=\"card\">\n🎯 It's perfect for:\n<ul>\n<li>Text cleanup</li>\n<li>Skipping blanks</li>\n<li>Improving input parsing</li>\n</ul>\n</div>\n<div class=\"card\">\nWhitespace may be invisible, but now — it’s no longer a mystery to you! 🕵️‍♂️\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Interrupt Mastery — Taking Full Control",
      modules:[
        {
  "moduleTitle": "interrupts() — Resume Listening to the Outside World",
  "lessons": [
    {
      "title": "🚀 Introduction to interrupts()",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>What is interrupts()?</h2>\n<p>The <code>interrupts()</code> function is used to re-enable interrupt handling in your Arduino program after you've turned it off using <code>noInterrupts()</code>. This is essential for safely managing time-critical tasks or data access.</p>\n<p>Think of it as saying: <strong>\"Alright, I'm done with my delicate task. Now I'm ready to listen again.\"</strong></p>\n</div>\n\n<div class=\"card\">\n<h2>🧠 Why Use interrupts()?</h2>\n<ul>\n<li>To resume normal interrupt behavior after a protected section of code.</li>\n<li>To allow external sensors or buttons to trigger actions again.</li>\n<li>To return your Arduino to its reactive, event-driven state.</li>\n</ul>\n</div>\n\n<div class=\"card\">\n<h2>🔍 Real-World Analogy</h2>\n<p>Imagine you're a radio operator. During an emergency call, you put your headphones down to avoid distractions. Once done, you put them back on. <code>interrupts()</code> is like putting the headphones back on and saying, \"I'm listening again.\"</p>\n</div>"
    },
    {
      "title": "🛠️ Live Use Case — Counter with Button",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Real Use Case Example</h2>\n<p>Imagine a pushbutton connected to pin 2 that increments a counter every time it's pressed. To read this counter safely from the main loop, you pause interrupts, copy the value, then resume them:</p>\n\n<pre><code>volatile int count = 0;\n\nvoid setup() {\n  Serial.begin(9600);\n  attachInterrupt(digitalPinToInterrupt(2), increaseCount, RISING);\n}\n\nvoid loop() {\n  int safeCopy;\n  noInterrupts();        // Pause interrupts\n  safeCopy = count;      // Critical section\n  interrupts();          // Resume interrupts\n\n  Serial.println(safeCopy);\n  delay(500);\n}\n\nvoid increaseCount() {\n  count++;\n}</code></pre>\n<p>Here, <code>interrupts()</code> lets the Arduino resume watching for new button presses once we’re done reading the shared variable safely.</p>\n</div>"
    },
    {
      "title": "📌 What Pins Are Used?",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Pins Used in interrupt Functions</h2>\n<p>The <code>interrupts()</code> function itself does not use specific pins, but it re-enables hardware interrupts that may be attached to pins like 2 and 3 on an UNO.</p>\n<p>Common interrupt pins:</p>\n<ul>\n  <li><strong>UNO:</strong> 2 and 3</li>\n  <li><strong>Mega:</strong> 2, 3, 18, 19, 20, 21</li>\n  <li><strong>ESP32 / ESP8266:</strong> Most GPIOs can be interrupt-enabled</li>\n</ul>\n</div>"
    },
    {
      "title": "🧪 Interactive Quiz",
      "type": "quiz",
      "content": {
        "question": "What happens if you forget to call interrupts() after noInterrupts()?",
        "options": [
          "Your sketch runs normally.",
          "Arduino stops all communication.",
          "External interrupts won’t work until you call interrupts().",
          "The board resets."
        ],
        "answerIndex": 2,
        "explanation": "Once you disable interrupts using noInterrupts(), you must call interrupts() to resume normal interrupt-based actions like handling sensor input."
      }
    },
    {
      "title": "🎬 Recommended Video",
      "type": "video",
      "content": {
        "url": "https://www.youtube.com/watch?v=ZCjdzkeXh5Y",
        "description": "In-depth explanation of critical sections and safe interrupt usage in Arduino. Super useful for intermediate makers."
      }
    }
  ]
}
,{
  "moduleTitle": "noInterrupts() — How to Quiet Everything Down (Safely!)",
  "lessons": [
    {
      "title": "🔍 What is noInterrupts()?",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Understanding noInterrupts()</h2>\n<p>The <code>noInterrupts()</code> function disables all interrupts on your Arduino board until you explicitly re-enable them with <code>interrupts()</code>.</p>\n<p>Think of it like telling your Arduino: <strong>“Do NOT listen to any distractions right now, I need your full focus.”</strong></p>\n<p>Use this when you’re doing something extremely sensitive — like working with data that might change mid-way if interrupted.</p>\n</div>\n\n<div class=\"card\">\n<h2>🧠 When Should You Use noInterrupts()?</h2>\n<ul>\n  <li>When copying or modifying <code>volatile</code> variables used in an ISR (Interrupt Service Routine)</li>\n  <li>When you need a precise timing window</li>\n  <li>When performing atomic (indivisible) operations</li>\n</ul>\n</div>"
    },
    {
      "title": "📦 Real-Life Analogy — Do Not Disturb Mode",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Real-World Analogy</h2>\n<p>Imagine you're writing down a phone number someone is telling you, and you put on noise-cancelling headphones for 5 seconds just to not miss a digit.</p>\n<p><code>noInterrupts()</code> is like putting on those headphones. You're saying: \"Hold on world, I need silence!\"</p>\n</div>"
    },
    {
      "title": "💻 Code Example — Handling Shared Variables",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Use Case: Accurate Counter Access</h2>\n<p>This is one of the most common uses. Imagine a pushbutton on pin 2 that increases a counter via an ISR:</p>\n<pre><code>volatile int counter = 0;\n\nvoid setup() {\n  Serial.begin(9600);\n  attachInterrupt(digitalPinToInterrupt(2), countUp, RISING);\n}\n\nvoid loop() {\n  int safeCopy;\n\n  noInterrupts();           // Stop interrupts temporarily\n  safeCopy = counter;       // Copy shared variable safely\n  interrupts();             // Resume interrupts\n\n  Serial.println(safeCopy);\n  delay(500);\n}\n\nvoid countUp() {\n  counter++;\n}</code></pre>\n<p>Without <code>noInterrupts()</code>, the value might change mid-copy, leading to weird bugs. This prevents that.</p>\n</div>"
    },
    {
      "title": "📌 What Pins Are Affected?",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Which Pins Matter?</h2>\n<p>Technically, <code>noInterrupts()</code> doesn’t use any specific pin. It just stops <strong>all interrupts</strong>, including those triggered by pins.</p>\n<p>Typical external interrupt pins:</p>\n<ul>\n<li><strong>UNO:</strong> Digital pins 2 and 3</li>\n<li><strong>MEGA:</strong> Pins 2, 3, 18, 19, 20, 21</li>\n<li><strong>ESP32:</strong> Most digital pins can be used as interrupt pins</li>\n</ul>\n</div>"
    },
    {
      "title": "🎯 Watch Out — What Happens If You Forget to Re-Enable?",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Important Caveat</h2>\n<p>If you forget to call <code>interrupts()</code> after <code>noInterrupts()</code>, your board will never handle any interrupts again.</p>\n<p>This means things like pushbutton triggers, sensor edge detection, serial receiving, etc., may silently fail!</p>\n</div>"
    },
    {
      "title": "📺 Video Tutorial",
      "type": "video",
      "content": {
        "url": "https://www.youtube.com/watch?v=ZCjdzkeXh5Y",
        "description": "Clear explanation of how and when to use noInterrupts() and interrupts() — includes practical scope and usage warnings."
      }
    }
  ]
}

      ]
    },{
      title:" Mastering Time Functions in Arduino",
      modules:[
        {
  "title": "delayMicroseconds() — Ultra-Fine Delays",
  "lessons": [
    {
      "title": "What is delayMicroseconds()?",
      "content": "This function makes your Arduino pause, but for a VERY short time — measured in microseconds. One microsecond is one-millionth of a second. We use this when we need precise timing — like sending fast pulses or talking to sensitive sensors that expect exact gaps between signals.\n\n⚠️ While delay() waits in milliseconds, delayMicroseconds() waits in microseconds (1000× smaller)."
    },
    {
      "title": "Where and Why?",
      "content": "Imagine you are triggering an ultrasonic sensor. It expects a HIGH signal of exactly 10 microseconds. You can't use delay() because that waits too long (minimum is 1ms = 1000µs). That's why we use delayMicroseconds() — it's like a stopwatch for tiny timings."
    },
    {
      "title": "Real-World Example",
      "content": "Let’s say you're working with an IR remote signal or SPI communication. These protocols send data in waves that last for just a few microseconds. Arduino can create or interpret those waves using delayMicroseconds().\n\nThink of it like pressing a stoplight button with ninja-like speed. 😉"
    },
    {
      "title": "Syntax and Range",
      "content": "📘 Syntax: delayMicroseconds(time_in_microseconds);\n\nFor example: delayMicroseconds(10);\n\n📏 Valid range is around 3µs to 16383µs. Anything too small might be ignored because the chip can’t react fast enough!"
    },
    {
      "title": "Example Code",
      "content": "void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delayMicroseconds(100);\n  digitalWrite(13, LOW);\n  delayMicroseconds(100);\n}"
    },
    {
      "title": "Related Pins and Hardware",
      "content": "delayMicroseconds() doesn’t use any specific pin itself — it just pauses the program. But you’ll often use it with digital pins to control things like sensors, IR transmitters, or precise timers. Especially used in ultrasonic sensor triggering pins or custom PWM generation."
    },
    {
      "title": "Fun Fact 🌟",
      "content": "Your brain takes about 200,000 microseconds to blink.\nArduino can do 20,000 delayMicroseconds(10) in that same blink. Now that's fast!"
    }
  ]
},{
  "title": "micros() — Arduino’s Microsecond Stopwatch",
  "lessons": [
    {
      "title": "What is micros()? 🤔",
      "content": "<div class='card'>The <code>micros()</code> function in Arduino returns the number of microseconds (1 millionth of a second!) since the program started running.</div>\n<div class='card'>This is perfect when you want to measure tiny time intervals — like how long a sensor takes to respond or how fast something moves.</div>"
    },
    {
      "title": "Where is it used? 📍",
      "content": "<div class='card'>Use <code>micros()</code> when you need high-precision timing — for example, measuring the echo time of an ultrasonic sensor, or building your own IR remote decoder.</div>\n<div class='card'>Unlike <code>millis()</code>, which only updates every 1 ms, <code>micros()</code> gives you much finer detail, especially in time-sensitive projects.</div>"
    },
    {
      "title": "How it Works ⚙️",
      "content": "<div class='card'>When the Arduino turns on, <code>micros()</code> starts from 0 and counts up. Every time you call it, it tells you how many microseconds have passed.</div>\n<div class='card'><b>Important:</b> It rolls over back to 0 after ~70 minutes on UNO/Nano (because of 32-bit overflow). So plan accordingly!</div>"
    },
    {
      "title": "Example Code ⌛",
      "content": "<div class='card'><pre><code>unsigned long start = micros();\n// Do something here\nunsigned long end = micros();\nunsigned long duration = end - start;\nSerial.print(\"It took: \");\nSerial.print(duration);\nSerial.println(\" µs\");</code></pre></div>"
    },
    {
      "title": "🎬 Watch: Arduino micros() Explained",
      "content": "<div class='card'>Here's a video guide that walks you through how <code>micros()</code> works, with examples and cool applications!</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/jGz7gkaXQ4c' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "Mini-Game: microTime Hunter ⏱️",
      "content": "<div class='card'>You’ll see a fast timer ticking in microseconds. Tap STOP as close to 1000000 µs (1 second) as you can!</div>\n<button class='gaming-btn' onclick='startMicroGame()'>Start Game</button>\n<div id='micro-timer'></div>\n<script>\nfunction startMicroGame() {\n  const display = document.getElementById('micro-timer');\n  let start = performance.now();\n  const btn = document.createElement('button');\n  btn.innerText = 'Stop!';\n  btn.className = 'gaming-btn';\n  btn.onclick = () => {\n    let end = performance.now();\n    let diff = Math.round((end - start) * 1000);\n    display.innerHTML = 'You stopped at ' + diff + ' microseconds!';\n  };\n  display.innerHTML = '';\n  display.appendChild(btn);\n}\n</script>"
    },
    {
      "title": "Used Pins? 🧷",
      "content": "<div class='card'><code>micros()</code> doesn’t use any particular pin. But it’s often paired with <b>pulse-based sensors</b> (e.g., ultrasonic, IR) that use <b>digital pins</b> to send or receive pulses.</div>"
    },
    {
      "title": "Real World Example 🚘",
      "content": "<div class='card'>Imagine you're building a car-reversing radar system using an ultrasonic sensor. You send a ping and use <code>micros()</code> to measure how long the echo takes to return. That tells you how far the obstacle is!</div>"
    }
  ]
}

      ]
    }
  ]
};
