import { TheoryCard, ChartData, PDFDocument, QuizQuestion } from './types';

export const THEORY_DATA: TheoryCard[] = [
  {
    id: '1',
    title: 'Xử lý Cơ học',
    category: 'Cơ học',
    description: 'Loại bỏ các tạp chất không hòa tan có kích thước lớn.',
    content: 'Xử lý cơ học là bước đầu tiên trong hệ thống, sử dụng song chắn rác, bể lắng cát và bể lắng sơ cấp để loại bỏ chất rắn lơ lửng.',
    icon: 'Settings2'
  },
  {
    id: '2',
    title: 'Xử lý Sinh học',
    category: 'Sinh học',
    description: 'Sử dụng vi sinh vật để phân hủy chất hữu cơ.',
    content: 'Quá trình này diễn ra tại bể Aerotank hoặc bể lọc sinh học, nơi vi sinh vật hiếu khí/kỵ khí tiêu thụ các chất hữu cơ hòa tan.',
    icon: 'Microscope'
  },
  {
    id: '3',
    title: 'Xử lý Hóa học',
    category: 'Hóa học',
    description: 'Sử dụng hóa chất để kết tủa hoặc khử trùng.',
    content: 'Bao gồm các quá trình keo tụ, tạo bông, trung hòa pH và khử trùng bằng Clo hoặc Ozone trước khi xả thải.',
    icon: 'FlaskConical'
  }
];

export const MOCK_CHART_DATA: ChartData[] = [
  { time: '08:00', bod: 250, cod: 450, ph: 7.2 },
  { time: '10:00', bod: 280, cod: 500, ph: 7.0 },
  { time: '12:00', bod: 320, cod: 580, ph: 6.8 },
  { time: '14:00', bod: 300, cod: 540, ph: 6.9 },
  { time: '16:00', bod: 260, cod: 470, ph: 7.1 },
  { time: '18:00', bod: 220, cod: 400, ph: 7.3 },
];

export const PDF_DOCS: PDFDocument[] = [
  { id: '1', title: 'Giáo trình Xử lý Nước thải - Tập 1', size: '4.5 MB', url: '/pdf/giao-trinh-tap-1.pdf' },
  { id: '2', title: 'Quy chuẩn kỹ thuật quốc gia QCVN 40:2011/BTNMT', size: '1.2 MB', url: '/pdf/qcvn-40.pdf' },
  { id: '3', title: 'Sổ tay vận hành hệ thống Aerotank', size: '2.8 MB', url: '/pdf/van-hanh-aerotank.pdf' },
  { id: '4', title: 'Kỹ thuật phân tích chỉ tiêu môi trường', size: '3.5 MB', url: '/pdf/ky-thuat-phan-tich.pdf' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "BOD là viết tắt của cụm từ nào?",
    options: ["Biochemical Oxygen Demand", "Biological Ozone Device", "Basic Oxygen Degree", "Bio-Organic Density"],
    correctAnswer: 0,
    explanation: "BOD (Biochemical Oxygen Demand) là nhu cầu oxy sinh hóa."
  },
  {
    id: 2,
    question: "COD là gì?",
    options: ["Nhu cầu oxy sinh hóa", "Nhu cầu oxy hóa học", "Chất rắn lơ lửng", "Độ dẫn điện"],
    correctAnswer: 1,
    explanation: "COD (Chemical Oxygen Demand) là nhu cầu oxy hóa học."
  },
  {
    id: 3,
    question: "Khoảng pH tối ưu cho vi sinh vật hiếu khí hoạt động là?",
    options: ["3.0 - 5.0", "6.5 - 8.5", "9.0 - 11.0", "1.0 - 14.0"],
    correctAnswer: 1,
    explanation: "Vi sinh vật hiếu khí thường hoạt động tốt nhất ở môi trường trung tính đến kiềm nhẹ (6.5 - 8.5)."
  },
  {
    id: 4,
    question: "TSS là viết tắt của?",
    options: ["Total Soluble Sugar", "Total Suspended Solids", "Toxic Substance System", "Temperature Sensor Station"],
    correctAnswer: 1,
    explanation: "TSS (Total Suspended Solids) là tổng chất rắn lơ lửng."
  },
  {
    id: 5,
    question: "Bể Aerotank thuộc giai đoạn xử lý nào?",
    options: ["Xử lý cơ học", "Xử lý sinh học", "Xử lý hóa học", "Xử lý bậc cao"],
    correctAnswer: 1,
    explanation: "Aerotank là bể xử lý sinh học hiếu khí bằng bùn hoạt tính."
  },
  {
    id: 6,
    question: "Vai trò chính của vi sinh vật trong xử lý nước thải là?",
    options: ["Làm đẹp nước", "Phân hủy chất hữu cơ", "Tăng độ pH", "Lọc rác kích thước lớn"],
    correctAnswer: 1,
    explanation: "Vi sinh vật sử dụng chất hữu cơ làm nguồn thức ăn để sinh trưởng, qua đó làm sạch nước."
  },
  {
    id: 7,
    question: "Quá trình lắng cát thường diễn ra ở đâu?",
    options: ["Đầu hệ thống (Cơ học)", "Cuối hệ thống", "Trong bể Aerotank", "Trong bể khử trùng"],
    correctAnswer: 0,
    explanation: "Lắng cát là một phần của xử lý cơ học để bảo vệ thiết bị phía sau."
  },
  {
    id: 8,
    question: "Hóa chất nào thường dùng để khử trùng nước thải?",
    options: ["Axit Sunfuric", "Clo (Chlorine)", "Xút (NaOH)", "Phèn nhôm"],
    correctAnswer: 1,
    explanation: "Clo là hóa chất phổ biến nhất để tiêu diệt vi khuẩn gây bệnh trước khi xả thải."
  },
  {
    id: 9,
    question: "Nước thải sinh hoạt có đặc điểm gì nổi bật?",
    options: ["Chứa nhiều kim loại nặng", "Chứa nhiều chất hữu cơ và vi khuẩn", "Có độ pH cực thấp", "Không có chất rắn lơ lửng"],
    correctAnswer: 1,
    explanation: "Nước thải sinh hoạt giàu chất hữu cơ (carbon, nitơ, phốt pho) và vi sinh vật."
  },
  {
    id: 10,
    question: "Bùn hoạt tính là gì?",
    options: ["Đất sét", "Tập hợp các vi sinh vật", "Cát mịn", "Hóa chất keo tụ"],
    correctAnswer: 1,
    explanation: "Bùn hoạt tính là các bông cặn chứa quần thể vi sinh vật có khả năng phân hủy chất hữu cơ."
  }
];
