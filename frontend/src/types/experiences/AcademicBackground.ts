type AcademicBackground = {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string | null;
  isEnded: boolean;
}

export default AcademicBackground;