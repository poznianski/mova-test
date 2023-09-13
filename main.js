const questions = [
  {
    level: "A1",
    task: 1,
    title: "1. Complete the sentences",
    question: "The class is .... Monday morning.",
    options: ["on", "in", "at", "to"],
    answer: "on",
  },
  {
    level: "A1",
    task: 1,
    title: "1. Complete the sentences",
    question: "The briefing is .... 08:00 hours",
    options: ["on", "in", "at", "to"],
    answer: "at",
  },
  {
    level: "A1",
    task: 1,
    title: "1. Complete the sentences",
    question: "We start training .... the morning.",
    options: ["on", "in", "at", "to"],
    answer: "in",
  },
  {
    level: "A1",
    task: 1,
    title: "1. Complete the sentences",
    question: "PT is from 14:00 .... 16:00 hours.",
    options: ["on", "in", "at", "to"],
    answer: "to",
  },
  {
    level: "A1",
    task: 1,
    title: "1. Complete the sentences",
    question: "He was born .... 1965.",
    options: ["on", "in", "at", "to"],
    answer: "in",
  },
  {
    level: "A1",
    task: 1,
    title: "1. Complete the sentences",
    question: "The flight is .... 21:15. ",
    options: ["on", "in", "at", "to"],
    answer: "at",
  },
  {
    level: "A1",
    task: 2,
    title: "2. Choose the correct word",
    question: "She is .... Australian doctor.",
    options: ["a", "an"],
    answer: "an",
  },
  {
    level: "A1",
    task: 2,
    title: "2. Choose the correct word",
    question: "They are .... tanks.",
    options: ["German", "Germans"],
    answer: "German",
  },
  {
    level: "A1",
    task: 2,
    title: "2. Choose the correct word",
    question: "Do you have .... batteries?",
    options: ["an", "some"],
    answer: "some",
  },
  {
    level: "A1",
    task: 2,
    title: "2. Choose the correct word",
    question: "I don't need .... compass.",
    options: ["a", "any"],
    answer: "any",
  },
  {
    level: "A1",
    task: 2,
    title: "2. Choose the correct word",
    question: "We need .... shoe polish.",
    options: ["some", "a"],
    answer: "some",
  },
  {
    level: "A1",
    task: 2,
    title: "2. Choose the correct word",
    question: ".... there any people in the building?",
    options: ["Is", "Are"],
    answer: "Are",
  },
  {
    level: "A1",
    task: 2,
    title: "2. Choose the correct word",
    question: "There .... any good maps.",
    options: ["isn't", "aren't"],
    answer: "aren't",
  },
  {
    level: "A1",
    task: 2,
    title: "2. Choose the correct word",
    question: "We found .... guns in the truck, sir.",
    options: ["these", "this"],
    answer: "these",
  },
  {
    level: "A1",
    task: 3,
    title: "3. Circle the correct word to complete the sentences.",
    question: "How .... are you staying?",
    options: ["long", "much", "old", "time"],
    answer: "long",
  },
  {
    level: "A1",
    task: 3,
    title: "3. Circle the correct word to complete the sentences.",
    question: "How .... does it weigh?",
    options: ["many", "tall", "much", "big"],
    answer: "much",
  },
  {
    level: "A1",
    task: 3,
    title: "3. Circle the correct word to complete the sentences.",
    question: ".... are you going?",
    options: ["where", "who", "which", "what"],
    answer: "where",
  },
  {
    level: "A1",
    task: 3,
    title: "3. Circle the correct word to complete the sentences.",
    question: "What .... does the train arrive?",
    options: ["time", "hour", "long", "often"],
    answer: "time",
  },
  {
    level: "A1",
    task: 3,
    title: "3. Circle the correct word to complete the sentences.",
    question: "How .... does a ticket cost?",
    options: ["money", "quantity", "many", "much"],
    answer: "much",
  },
  {
    level: "A1",
    task: 4,
    title: "4. Circle the correct word.",
    question: "Good morning. I .... Captain Boyd.",
    options: ["am", "is"],
    answer: "am",
  },
  {
    level: "A1",
    task: 4,
    title: "4. Circle the correct word.",
    question: "She .... for her country.",
    options: ["runs", "run"],
    answer: "runs",
  },
  {
    level: "A1",
    task: 4,
    title: "4. Circle the correct word.",
    question: ".... it fire rounds?",
    options: ["Do", "Does"],
    answer: "Does",
  },
  {
    level: "A1",
    task: 4,
    title: "4. Circle the correct word.",
    question: "He .... speak Ukrainian and Polish.",
    options: ["cans", "can"],
    answer: "can",
  },
  {
    level: "A1",
    task: 4,
    title: "4. Circle the correct word.",
    question: "Where .... you born?",
    options: ["were", "was"],
    answer: "were",
  },
  {
    level: "A1",
    task: 4,
    title: "4. Circle the correct word.",
    question: ".... you posted abroad?",
    options: ["were", "did"],
    answer: "were",
  },
  {
    level: "A1",
    task: 4,
    title: "4. Circle the correct word.",
    question: "They .... train for war.",
    options: ["weren't", "didn't"],
    answer: "didn't",
  },
  {
    level: "A1",
    task: 5,
    title: "5. Circle the correct word to complete the sentences.",
    question: "How .... are you staying?",
    options: ["long", "much", "old", "time"],
    answer: "long",
  },
  {
    level: "A1",
    task: 5,
    title: "5. Circle the correct word to complete the sentences.",
    question: "How .... does it weigh?",
    options: ["many", "tall", "much", "big"],
    answer: "much",
  },
  {
    level: "A1",
    task: 5,
    title: "5. Circle the correct word to complete the sentences.",
    question: ".... are you going?",
    options: ["Where", "Who", "Which", "What"],
    answer: "Where",
  },
  {
    level: "A1",
    task: 5,
    title: "5. Circle the correct word to complete the sentences.",
    question: "What .... does the train arrive?",
    options: ["hour", "time", "long", "often"],
    answer: "time",
  },
  {
    level: "A1",
    task: 5,
    title: "5. Circle the correct word to complete the sentences.",
    question: "How .... does a ticket cost?",
    options: ["much", "money", "quantity", "many"],
    answer: "much",
  },
  {
    level: "A1",
    task: 6,
    title: "6. Complete the sentences. Use a, an, the or - (no word).",
    question: "Do you play .... basketball?",
    options: ["a", "an", "the", "-"],
    answer: "-",
  },
  {
    level: "A1",
    task: 6,
    title: "6. Complete the sentences. Use a, an, the or - (no word).",
    question: "Are you in .... Navy? ",
    options: ["a", "an", "the", "-"],
    answer: "the",
  },
  {
    level: "A1",
    task: 6,
    title: "6. Complete the sentences. Use a, an, the or - (no word).",
    question: "She's .... interpreter. ",
    options: ["a", "an", "the", "-"],
    answer: "an",
  },
  {
    level: "A1",
    task: 6,
    title: "6. Complete the sentences. Use a, an, the or - (no word).",
    question: "He was promoted to the rank of .... airman first class",
    options: ["a", "an", "the", "-"],
    answer: "-",
  },
  {
    level: "A1",
    task: 6,
    title: "6. Complete the sentences. Use a, an, the or - (no word).",
    question: "There's .... restaurant on Station Road.",
    options: ["a", "an", "the", "-"],
    answer: "a",
  },
  {
    level: "A1",
    task: 6,
    title: "6. Complete the sentences. Use a, an, the or - (no word).",
    question: "He works for .... UN. ",
    options: ["a", "an", "the", "-"],
    answer: "the",
  },
  {
    level: "A2",
    task: 1,
    title: "1. Choose the opposite word",
    question: "Start point",
    options: ["reporting point", "release point"],
    answer: "release point",
  },
  {
    level: "A2",
    task: 1,
    title: "1. Choose the opposite word",
    question: "negative (radio language)",
    options: ["positive", "affirmative"],
    answer: "affirmative",
  },
  {
    level: "A2",
    task: 1,
    title: "1. Choose the opposite word",
    question: "ally",
    options: ["friend", "enemy"],
    answer: "enemy",
  },
  {
    level: "A2",
    task: 1,
    title: "1. Choose the opposite word",
    question: "land",
    options: ["take off", "overtake"],
    answer: "take off",
  },
  {
    level: "A2",
    task: 1,
    title: "1. Choose the opposite word",
    question: "return ticket",
    options: ["single ticket", "simple ticket"],
    answer: "single ticket",
  },
  {
    level: "A2",
    task: 1,
    title: "1. Choose the opposite word",
    question: "load (your weapon)",
    options: ["lock", "unload"],
    answer: "unload",
  },
  {
    level: "A2",
    task: 2,
    title: "2. Choose the correct form",
    question: "They were tasked to recce / with recce the perimeter.",
    options: ["to recce", "with recce"],
    answer: "to recce",
  },
  {
    level: "A2",
    task: 2,
    title: "2. Choose the correct form",
    question:
      "Vehicles can't / are not permitted to use this road after 10 pm.",
    options: ["can't", "are not permitted"],
    answer: "are not permitted",
  },
  {
    level: "A2",
    task: 2,
    title: "2. Choose the correct form",
    question: "Their mission was for / to defend the bridge.",
    options: ["for", "to"],
    answer: "to",
  },
  {
    level: "A2",
    task: 2,
    title: "2. Choose the correct form",
    question: "Helicopters are not allowed / shouldn't to land on this roof.",
    options: ["not allowed", "shouldn't"],
    answer: "not allowed",
  },
  {
    level: "A2",
    task: 2,
    title: "2. Choose the correct form",
    question: "It's prohibited to / necessary park here.",
    options: ["prohibited to", "necessary"],
    answer: "prohibited to",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "They travelled .... convoy",
    options: ["at", "in", "on", "for"],
    answer: "in",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "They waited .... a message.",
    options: ["at", "in", "on", "for"],
    answer: "for",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "Their lives were not .... immediate danger.",
    options: ["at", "in", "on", "for"],
    answer: "in",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "There were sandbags .... the main entrance.",
    options: ["at", "in", "on", "for"],
    answer: "at",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "There are tanks moving .... our right flank.",
    options: ["at", "in", "on", "for"],
    answer: "on",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "You are responsible .... planning our route.",
    options: ["of", "for", "with", "to"],
    answer: "for",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "The troops will report .... the Polish general.",
    options: ["of", "at", "with", "to"],
    answer: "to",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "The helicopter arrived .... the landing zone early.",
    options: ["over", "in", "at", "to"],
    answer: "at",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "There's a sniper .... the roof.",
    options: ["on", "in", "for", "to"],
    answer: "on",
  },
  {
    level: "A2",
    task: 3,
    title: "3. Choose the correct word",
    question: "There is a fence .... the perimeter.",
    options: ["round", "through", "for", "over"],
    answer: "round",
  },
  {
    level: "A2",
    task: 4,
    title: "4. Complete the sentences. Use these words.",
    question:
      "First you must check for trip wires .... you prod the ground for mines.",
    options: ["after", "before", "if", "unless", "until", "when"],
    answer: "before",
  },
  {
    level: "A2",
    task: 4,
    title: "4. Complete the sentences. Use these words.",
    question: "Radio your base .... you need help. ",
    options: ["after", "before", "if", "unless", "until", "when"],
    answer: "if",
  },
  {
    level: "A2",
    task: 4,
    title: "4. Complete the sentences. Use these words.",
    question:
      "Do not leave the camp .... last light. You could be shot in the dark by mistake.",
    options: ["after", "before", "if", "unless", "until", "when"],
    answer: "after",
  },
  {
    level: "A2",
    task: 4,
    title: "4. Complete the sentences. Use these words.",
    question:
      "Do not use deadly fire .... You are attacked and your life is in danger.",
    options: ["after", "before", "if", "unless", "until", "when"],
    answer: "unless",
  },
  {
    level: "A2",
    task: 4,
    title: "4. Complete the sentences. Use these words.",
    question: ".... you reach the junction, turn left.",
    options: ["after", "before", "if", "unless", "until", "when"],
    answer: "when",
  },
  {
    level: "A2",
    task: 5,
    title: "5. Choose the colours",
    question: "a UN peacekeeper's beret",
    options: ["blue", "green", "brown", "red", "white", "yellow"],
    answer: "blue",
  },
  {
    level: "A2",
    task: 5,
    title: "5. Choose the colours",
    question: "the alert state between high risk and normal at a military base",
    options: ["blue", "green", "brown", "red", "white", "yellow"],
    answer: "yellow",
  },
  {
    level: "A2",
    task: 5,
    title: "5. Choose the colours",
    question: "a jungle camouflage uniform",
    options: [
      "blue",
      "green",
      "brown",
      "red",
      "white",
      "yellow",
      "green and brown",
    ],
    answer: "green and brown",
  },
  {
    level: "A2",
    task: 5,
    title: "5. Choose the colours",
    question:
      "the triangle to tell people there is an accident or breakdown on the road ",
    options: ["blue", "green", "brown", "red", "white", "yellow", "red"],
    answer: "red",
  },
  {
    level: "A2",
    task: 6,
    title: "6. Match the questions and answers",
    question: "What does he look like?",
    options: [
      "He's fine, thank you.",
      "He loves going for long walks.",
      "He's very tall with long, dark hair.",
      "He's running round the base. ",
      "He's very hostile.",
      "I think he looks better now.",
    ],
    answer: "He's very tall with long, dark hair.",
  },
  {
    level: "A2",
    task: 6,
    title: "6. Match the questions and answers",
    question: "What's he like?",
    options: [
      "He's fine, thank you.",
      "He loves going for long walks.",
      "He's very tall with long, dark hair.",
      "He's running round the base. ",
      "He's very hostile.",
      "I think he looks better now.",
    ],
    answer: "He's very hostile.",
  },
  {
    level: "A2",
    task: 6,
    title: "6. Match the questions and answers",
    question: "How's your father?",
    options: [
      "He's fine, thank you.",
      "He loves going for long walks.",
      "He's very tall with long, dark hair.",
      "He's running round the base. ",
      "He's very hostile.",
      "I think he looks better now.",
    ],
    answer: "He's fine, thank you.",
  },
  {
    level: "A2",
    task: 6,
    title: "6. Match the questions and answers",
    question: "What does he like most?",
    options: [
      "He's fine, thank you.",
      "He loves going for long walks.",
      "He's very tall with long, dark hair.",
      "He's running round the base. ",
      "He's very hostile.",
      "I think he looks better now.",
    ],
    answer: "He loves going for long walks.",
  },
  {
    level: "A2",
    task: 6,
    title: "6. Match the questions and answers",
    question: "How does the patient seem?",
    options: [
      "He's fine, thank you.",
      "He loves going for long walks.",
      "He's very tall with long, dark hair.",
      "He's running round the base. ",
      "He's very hostile.",
      "I think he looks better now.",
    ],
    answer: "I think he looks better now.",
  },
  {
    level: "A2",
    task: 6,
    title: "6. Match the questions and answers",
    question: "What's he doing?",
    options: [
      "He's fine, thank you.",
      "He loves going for long walks.",
      "He's very tall with long, dark hair.",
      "He's running round the base.",
      "He's very hostile.",
      "I think he looks better now.",
    ],
    answer: "He's running round the base.",
  },
  {
    level: "B1",
    task: 1,
    title: "1. Choose the correct words.",
    question:
      "In the past, criminals were allowed .... join the French Foreign Legion.",
    options: ["for", "from", "to", "by"],
    answer: "to",
  },
  {
    level: "B1",
    task: 1,
    title: "1. Choose the correct words.",
    question: "Coy .... recently returned from a UN mission in Africa.",
    options: ["has", "were", "did", "have"],
    answer: "has",
  },
  {
    level: "B1",
    task: 1,
    title: "1. Choose the correct words.",
    question: "The Coy rebuilt the school .... they were deployed in Kosovo",
    options: ["during", "while", "for", "since"],
    answer: "while",
  },
  {
    level: "B1",
    task: 1,
    title: "1. Choose the correct words.",
    question:
      "Stay .... the right-hand lane until you see the signs for Fort Carson.",
    options: ["in", "at", "on", "to"],
    answer: "in",
  },
  {
    level: "B1",
    task: 1,
    title: "1. Choose the correct words.",
    question: "Call G9 and .... them make the arrangements.",
    options: ["tell", "get", "ask", "have"],
    answer: "have",
  },
  {
    level: "B1",
    task: 1,
    title: "1. Choose the correct words.",
    question: "I am responsible .... maintenance of equipment and weapons.",
    options: ["to", "for", "with", "of"],
    answer: "for",
  },
  {
    level: "B1",
    task: 2,
    title: "2.	Circle the correct form of the verbs.",
    question:
      "Troops .... mines from the border area since they have been here.",
    options: ["have cleared", "cleared"],
    answer: "have cleared",
  },
  {
    level: "B1",
    task: 2,
    title: "2.	Circle the correct form of the verbs.",
    question: "They .... from the area yesterday.",
    options: ["have withdrawn", "withdrew"],
    answer: "withdrew",
  },
  {
    level: "B1",
    task: 2,
    title: "2.	Circle the correct form of the verbs.",
    question: "During the conflict his unit .... to Afghanistan.",
    options: ["has deployed", "deployed"],
    answer: "deployed",
  },
  {
    level: "B1",
    task: 2,
    title: "2.	Circle the correct form of the verbs.",
    question: ".... in a peacekeeping mission?",
    options: ["have you ever served", "did you ever serve"],
    answer: "dhave you ever served",
  },
  {
    level: "B1",
    task: 2,
    title: "2.	Circle the correct form of the verbs.",
    question: "He's still on patrol. He .... to base yet.",
    options: ["hasn't returned", "didn't return"],
    answer: "hasn't returned",
  },
  {
    level: "B1",
    task: 3,
    title: "3.	Complete the sentences. Use during, while or for.",
    question: "He first saw action .... the Gulf War.",
    options: ["during", "while", "for"],
    answer: "during",
  },
  {
    level: "B1",
    task: 3,
    title: "3.	Complete the sentences. Use during, while or for.",
    question: "I served in my first unit .... six years.",
    options: ["during", "while", "for"],
    answer: "for",
  },
  {
    level: "B1",
    task: 3,
    title: "3.	Complete the sentences. Use during, while or for.",
    question: ".... I was deployed in Kosovo I was promoted to Captain",
    options: ["during", "while", "for"],
    answer: "while",
  },
  {
    level: "B1",
    task: 4,
    title: "4.	Complete the sentences. Use for, to, with, of or - (no word).",
    question:
      "I am responsible .... the Officer Commanding maintenance of equipment. ",
    options: ["for", "of", "to", "with", "-"],
    answer: "for",
  },
  {
    level: "B1",
    task: 4,
    title: "4.	Complete the sentences. Use for, to, with, of or - (no word).",
    question: "He supervises .... the work of a small team. ",
    options: ["for", "of", "to", "with", "-"],
    answer: "-",
  },
  {
    level: "B1",
    task: 4,
    title: "4.	Complete the sentences. Use for, to, with, of or - (no word).",
    question:
      "Protocol deals .... the preparation and supervision of the visit.",
    options: ["for", "of", "to", "with", "-"],
    answer: "with",
  },
  {
    question: "Which word is different?",
    options: ["cheese omelette", "ice-cream", "beef burgee", "grilled salmon"],
    answer: "ice-cream",
  },
  {
    level: "B2",
    task: 1,
    title: "1. Choose the different word?",
    question: "Which word is different?",
    options: ["robbery", "murder", "patrol", "theft"],
    answer: "patrol",
  },
  {
    level: "B2",
    task: 1,
    title: "1. Choose the different word?",
    question: "Which word is different?",
    options: ["landing gear", "cockpit", "tail boom", "starboard"],
    answer: "starboard",
  },
  {
    level: "B2",
    task: 1,
    title: "1. Choose the different word?",
    question: "Which word is different?",
    options: ["appetite", "bleeding", "fracture", "shock"],
    answer: "appetite",
  },
  {
    level: "B2",
    task: 1,
    title: "1. Choose the different word?",
    question: "Which word is different?",
    options: ["appetite", "bleeding", "fracture", "shock"],
    answer: "appetite",
  },
  {
    level: "B2",
    task: 1,
    title: "1. Choose the different word?",
    question: "Which word is different?",
    options: ["combatant", "observer", "guerrilla forces", "child soldier"],
    answer: "observer",
  },
  {
    level: "B2",
    task: 2,
    title: "2.	Circle the correct words.",
    question: "How long does the battery .... ?",
    options: ["last", "take"],
    answer: "last",
  },
  {
    level: "B2",
    task: 2,
    title: "2.	Circle the correct words.",
    question: "The memory card won't come ....",
    options: ["up", "out"],
    answer: "out",
  },
  {
    level: "B2",
    task: 2,
    title: "2.	Circle the correct words.",
    question: "The battery's very ....",
    options: ["quiet", "low"],
    answer: "low",
  },
  {
    level: "B2",
    task: 2,
    title: "2.	Circle the correct words.",
    question: "The zoom .... getting stuck.",
    options: ["keeps", "always"],
    answer: "keeps",
  },
  {
    level: "B2",
    task: 3,
    title: "3.	Circle the correct words to complete the sentences.",
    question: "On a ship, the openings from one deck to another are called ",
    options: ["compartments", "passageways", "hatches", "bulkheads"],
    answer: "hatches",
  },
  {
    level: "B2",
    task: 3,
    title: "3.	Circle the correct words to complete the sentences.",
    question:
      "An exercise where the armed forces of more than one country participates is called ",
    options: [
      "combined arms exercise",
      "joint exercise",
      "combined exercise",
      "allied exercise",
    ],
    answer: "combined arms exercise",
  },
  {
    level: "B2",
    task: 3,
    title: "3.	Circle the correct words to complete the sentences.",
    question: "To make a violent attack against an objective is ",
    options: ["to seize", "to assault", "to secure", "to fix"],
    answer: "to assault",
  },
  {
    level: "B2",
    task: 4,
    title: "4. Complete the sentences.",
    question:
      "The ground rescue team had laid .... (deliver) suppressive fire.",
    options: ["down", "out", "in ", "back", "up"],
    answer: "down",
  },
  {
    level: "B2",
    task: 4,
    title: "4. Complete the sentences.",
    question: "I picked .... (collect) the casualty without any problem.",
    options: ["down", "out", "in ", "back", "up"],
    answer: "up",
  },
  {
    level: "B2",
    task: 4,
    title: "4. Complete the sentences.",
    question:
      "When I was heading .... (return) to base, I received fire from below.",
    options: ["down", "out", "in ", "back", "up"],
    answer: "back",
  },
  {
    level: "B2",
    task: 4,
    title: "4. Complete the sentences.",
    question:
      "We were hit but I took .... (destroy) the position with cannon fire.",
    options: ["down", "out", "in ", "back", "up"],
    answer: "out",
  },
  {
    level: "C1",
    task: 1,
    title: "1. Choose the different word.",
    question: "Which word is different?",
    options: [
      "commission",
      "rotation",
      "temporary duty assignent",
      "tour of duty",
    ],
    answer: "commission",
  },
  {
    level: "C1",
    task: 1,
    title: "1. Choose the different word.",
    question: "Which word is different?",
    options: ["carry on", "get out", "join up", "stay on"],
    answer: "get out",
  },
  {
    level: "C1",
    task: 1,
    title: "1. Choose the different word.",
    question: "Which word is different?",
    options: ["earthquake", "famine", "landslide", "war"],
    answer: "war",
  },
  {
    level: "C1",
    task: 1,
    title: "1. Choose the different word.",
    question: "Which word is different?",
    options: ["battle", "campaign ", "engagement", "tactic"],
    answer: "tactic",
  },
  {
    level: "C1",
    task: 1,
    title: "1. Choose the different word.",
    question: "Which word is different?",
    options: ["attack", "engage ", "envelop", "retire"],
    answer: "retire",
  },
  {
    level: "C1",
    task: 1,
    title: "1. Choose the different word.",
    question: "Which word is different?",
    options: ["detective", "grounded ", "in commission", "out of commission"],
    answer: "in commission",
  },
  {
    level: "C1",
    task: 2,
    title: "2. Circle the correct form of the verbs.",
    question: "Exercise Gallant Eagle .... every two years.",
    options: ["takes place", "is taking place "],
    answer: "takes place",
  },
  {
    level: "C1",
    task: 2,
    title: "2. Circle the correct form of the verbs.",
    question:
      "The Wing is currently .... very hard to prepare for the exercise.",
    options: ["working", "works"],
    answer: "working",
  },
  {
    level: "C1",
    task: 2,
    title: "2. Circle the correct form of the verbs.",
    question: "The staff .... warning of the exercise in May.",
    options: ["received ", "was receiving"],
    answer: "received",
  },
  {
    level: "C1",
    task: 2,
    title: "2. Circle the correct form of the verbs.",
    question:
      "The news did not come as a surprise - the staft .... to take part in the exercise.",
    options: ["expected", "were expecting"],
    answer: "were expecting",
  },
  {
    level: "C1",
    task: 2,
    title: "2. Circle the correct form of the verbs.",
    question: "The Wing .... for the exercise since January.",
    options: ["has been preparing ", "has been preparing"],
    answer: "has been preparing ",
  },
  {
    level: "C1",
    task: 2,
    title: "2. Circle the correct form of the verbs.",
    question: "Most aircraft .... testing and are in good condition.",
    options: ["completed", "have completed "],
    answer: "have completed  ",
  },
  {
    level: "C1",
    task: 2,
    title: "2. Circle the correct form of the verbs.",
    question:
      "A number of aircraft were out of commission until just days before the exercise .... .",
    options: ["was starting", "started"],
    answer: "started",
  },
  {
    level: "C1",
    task: 2,
    title: "2. Circle the correct form of the verbs.",
    question:
      "The parts only arrived on Monday because a maintenance group techucian .... an order for the wrong parts.",
    options: ["sent", "had sent "],
    answer: "had sent ",
  },
  {
    level: "C1",
    task: 3,
    title: "3. Choose the correct form of the verb.",
    question: "You can't go through this checkpoint unless you .... a pass.",
    options: ["have", "had"],
    answer: "have",
  },
  {
    level: "C1",
    task: 3,
    title: "3. Choose the correct form of the verb.",
    question: "If I .... you, I would send someone to check with your HQ.",
    options: ["am", "were"],
    answer: "were",
  },
  {
    level: "C1",
    task: 3,
    title: "3. Choose the correct form of the verb.",
    question: "If you .... them, they would tell you we had authorisation",
    options: ["contact", "contacted"],
    answer: "contacted",
  },
  {
    level: "C1",
    task: 3,
    title: "3. Choose the correct form of the verb.",
    question:
      "The incident could have caused a lot of problems if the officer .... his cool.",
    options: ["did not keep ", "had not kept"],
    answer: "had not kept ",
  },
  {
    level: "C1",
    task: 3,
    title: "3. Choose the correct form of the verb.",
    question:
      "You would have saved us all a lot of trouble if you .... earlier.",
    options: ["checked", "had checked"],
    answer: "had checked",
  },
  {
    level: "C1",
    task: 4,
    title: "4. Complete the sentences.",
    question:
      "In the United States, a lot of people join .... because they get money to go to university",
    options: ["on", "out", "up"],
    answer: "up",
  },
  {
    level: "C1",
    task: 4,
    title: "4. Complete the sentences.",
    question: "Young men and women sign .... for 22 years service",
    options: ["on", "out", "up"],
    answer: "on",
  },
  {
    level: "C1",
    task: 4,
    title: "4. Complete the sentences.",
    question:
      "However, servicemen and women can get .... after their first four years of service",
    options: ["on", "out", "up"],
    answer: "out",
  },
  {
    level: "C1",
    task: 4,
    title: "4. Complete the sentences.",
    question: "Some soldiers stay .... because they get extra money",
    options: ["on", "out", "up"],
    answer: "on",
  },
  {
    level: "C2",
    task: 1,
    title: "1.	Complete the sentences with the words",
    question:
      "A UN medal is a decoration .... is given for service on UN missions.",
    options: ["which", "who", "where"],
    answer: "which",
  },
  {
    level: "C2",
    task: 1,
    title: "1.	Complete the sentences with the words",
    question: "An AVLB is an engineer vehicle .... carries a bridge on top.",
    options: ["that", "who", "where"],
    answer: "that",
  },
  {
    level: "C2",
    task: 1,
    title: "1.	Complete the sentences with the words",
    question:
      "The Motor Transport Officer is the officer .... is responsible for all the regiment's vehicles. ",
    options: ["which", "that", "who", "where"],
    answer: "who",
  },
  {
    level: "C2",
    task: 1,
    title: "1.	Complete the sentences with the words",
    question:
      "The parade ground is the place .... the whole regiment parades on special occasions.",
    options: ["which", "that", "who", "where"],
    answer: "where",
  },
  {
    level: "C2",
    task: 2,
    title: "2. Match the words",
    question: "armoured",
    options: ["battery", "company", "regiment", "squadron", "troop"],
    answer: "regiment",
  },
  {
    level: "C2",
    task: 2,
    title: "2. Match the words",
    question: "artillery",
    options: ["battery", "company", "regiment", "squadron", "troop"],
    answer: "battery",
  },
  {
    level: "C2",
    task: 2,
    title: "2. Match the words",
    question: "aviation",
    options: ["battery", "company", "regiment", "squadron", "troop"],
    answer: "squadron",
  },
  {
    level: "C2",
    task: 2,
    title: "2. Match the words",
    question: "engineer",
    options: ["battery", "company", "regiment", "squadron", "troop"],
    answer: "troop",
  },
  {
    level: "C2",
    task: 2,
    title: "2. Match the words",
    question: "infantry",
    options: ["battery", "company", "regiment ", "squadron", "troop"],
    answer: "company",
  },
  {
    level: "C2",
    task: 3,
    title: "3. Complete the chart with these words",
    question: "ambush, canalise, envelop",
    options: ["terrain features", "friendly forces", "enemy forces"],
    answer: "enemy forces",
  },
  {
    level: "C2",
    task: 3,
    title: "3. Complete the chart with these words",
    question: "support, withdraw, cover",
    options: ["terrain features", "friendly forces", "enemy forces"],
    answer: "friendly forces",
  },
  {
    level: "C2",
    task: 3,
    title: "3. Complete the chart with these words",
    question: "clear, seize, secure",
    options: ["terrain features", "friendly forces", "enemy forces"],
    answer: "terrain features",
  },
  {
    level: "C2",
    task: 4,
    title: "4. Complete the sentences",
    question: "To get fit, you need to work .... total body fitness",
    options: ["off", "on", "out", "in", "up"],
    answer: "on",
  },
  {
    level: "C2",
    task: 4,
    title: "4. Complete the sentences",
    question: "Start with light exercise and build .... slowly. ",
    options: ["off", "on", "out", "in", "up"],
    answer: "up",
  },
  {
    level: "C2",
    task: 4,
    title: "4. Complete the sentences",
    question:
      "Get a medical check up before you start your training programme and watch .... for any old injuries",
    options: ["off", "on", "out", "in", "up"],
    answer: "out",
  },
  {
    level: "C2",
    task: 4,
    title: "4. Complete the sentences",
    question:
      "It's also a good idea to give .... up smoking - you'll notice the difference",
    options: ["off", "on", "out", "in", "up"],
    answer: "up",
  },
  {
    level: "C2",
    task: 4,
    title: "4. Complete the sentences",
    question:
      "You can't train every day - you should take time .... at least once a week",
    options: ["off", "on", "out", "in", "up"],
    answer: "off",
  },
];

const startButton = document.querySelector("#start-button");
const quizContent = document.querySelector("#quiz-wrap");

const startQuiz = () => {
  startButton.style.display = "none";

  quizContent.style.display = "block";

  displayQuestion(currentQuestionIndex);
};

startButton.addEventListener("click", startQuiz);

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
let currentLevel = 0;
let correctAnswers = 0;
let currentQuestionIndex = 0;

const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");
const nextButton = document.querySelector("#next-button");
const resultParagraph = document.createElement("p");
const quizContainer = document.querySelector("#quiz-container");

quizContainer.appendChild(resultParagraph);

const displayQuestion = (index) => {
  const questionData = questions[index];
  questionElement.innerHTML = `
  <p class="question-title">${questionData.title}</p>
  <p class="question-text">${questionData.question}</p>
`;
  optionsElement.innerHTML = "";

  const form = document.createElement("form");
  form.id = "option-form";

  questionData.options.forEach((option, i) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;
    radio.id = `option${i}`;

    if (i === 0) {
      radio.checked = true;
    }

    const label = document.createElement("label");
    label.htmlFor = `option${i}`;
    label.textContent = option;

    form.appendChild(radio);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  });

  optionsElement.appendChild(form);
};

const handleAnswerClick = () => {
  const formData = new FormData(document.getElementById("option-form"));
  const selectedAnswer = formData.get("option");

  resultParagraph.textContent = "";

  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    resultParagraph.textContent = "Correct!";
    correctAnswers++;
  } else {
    resultParagraph.textContent = "Wrong!";
  }

  const currentLevelQuestions = questions.filter(
    (q) => q.level === levels[currentLevel]
  );

  if (correctAnswers >= 2 && currentLevel < levels.length - 1) {
    currentLevel++;
    correctAnswers = 0;
    currentQuestionIndex = questions.findIndex(
      (q) => q.level === levels[currentLevel]
    );
  } else {
    const nextQuestionIndex =
      currentLevelQuestions.findIndex(
        (q) => q === questions[currentQuestionIndex]
      ) + 1;

    if (nextQuestionIndex < currentLevelQuestions.length) {
      currentQuestionIndex = questions.findIndex(
        (q) => q === currentLevelQuestions[nextQuestionIndex]
      );
    } else {
      endTest();
      return;
    }
  }

  displayQuestion(currentQuestionIndex);
};

const endTest = () => {
  resultParagraph.innerHTML = `
  <span class="result-text">Дякуємо за проходження мовного тесту!</span><br>
  <span class="result-text"> Ваш результат: ${levels[currentLevel]}. </span><br>
  <span class="result-text"> Якщо ви хочете отримати результат на електронну пошту, заповніть поле нижче: </span><br>
  <span class="result-text"> Ваша електронна адреса: <input type="text" id="email"> <br>
  <button id="send-button" class="button">Надіслати</button>
  `;

  nextButton.disabled = true;
};

nextButton.addEventListener("click", () => {
  handleAnswerClick();
});

displayQuestion(currentQuestionIndex);
// endTest();
