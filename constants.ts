export interface TheoryCard {
  id: string;
  title: string;
  category: 'Cơ học' | 'Sinh học' | 'Hóa học';
  description: string;
  content: string;
  icon: string;
}

export interface ChartData {
  time: string;
  bod: number;
  cod: number;
  ph: number;
}

export interface PDFDocument {
  id: string;
  title: string;
  size: string;
  url: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
