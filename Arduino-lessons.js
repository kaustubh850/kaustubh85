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
}

      ]
    }
  ]
};
