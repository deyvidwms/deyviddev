type Job = {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  isEnded: boolean;
  description: string;
  tags: string[];
}

export default Job;