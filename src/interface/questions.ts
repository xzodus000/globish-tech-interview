export interface Choice {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "ถ้าวันนี้เป็นวันหยุด คุณจะ...",
    choices: [
      { text: "นอนเล่น พักผ่อน", score: 10 },
      { text: "ดูหนัง ดูซีรี่ส์ เล่นเกม", score: 20 },
      { text: "เรียนรู้อะไรใหม่ ๆ", score: 30 },
    ],
  },
  {
    id: 2,
    text: "คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร?",
    choices: [
      { text: "การทำงาน", score: 30 },
      { text: "เที่ยวต่างประเทศ", score: 10 },
      { text: "ใช้ในชีวิตประจำวัน", score: 20 },
    ],
  },
  {
    id: 3,
    text: "สไตล์การเรียนภาษาอังกฤษของคุณ เป็นแบบไหน?",
    choices: [
      { text: "เรียนคอร์สออนไลน์ / โรงเรียนสอนภาษา", score: 30 },
      { text: "เรียนด้วยตนเอง เช่น อ่านหนังสือ ดูหนัง ฟังเพลง", score: 20 },
      { text: "คุยกับเพื่อนต่างชาติ / ไปเที่ยวต่างประเทศ", score: 10 },
    ],
  },
  {
    id: 4,
    text: "คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?",
    choices: [
      { text: "เป็นประจำทุกวัน", score: 30 },
      { text: "เป็นบางครั้ง", score: 10 },
      { text: "นาน ๆ ที / ไม่ได้ใช้เลย", score: 20 },
    ],
  },
  {
    id: 5,
    text: "คุณอยากพัฒนาสกิลภาษาอังกฤษ สกิลไหนมากที่สุด?",
    choices: [
      { text: "การฟัง", score: 20 },
      { text: "การพูด", score: 10 },
      { text: "การเขียน", score: 30 },
    ],
  },
  {
    id: 6,
    text: "อยากเรียนภาษาอังกฤษ แต่...",
    choices: [
      { text: "ไม่มีเวลา", score: 20 },
      { text: "เนื้อหาไม่น่าสนใจ / สอนไม่สนุก", score: 10 },
      { text: "ไม่มั่นใจ", score: 30 },
    ],
  },
  {
    id: 7,
    text: "คุณรู้จัก Globish ผ่านช่องทางใด (เลือกได้มากกว่า 1 ข้อ)",
    choices: [
      { text: "Instagram", score: 0 },
      { text: "Facebook", score: 0 },
      { text: "อื่นๆ (โปรดระบุ)", score: 0 },
    ],
  },
];
