const API_BASE_URL = import.meta.env.PROD 
  ? 'https://api.jogjabootcamp.com'
  : 'http://localhost:8787';

export interface QuizSubmissionPayload {
  name: string;
  whatsapp: string;
  email: string;
  businessType?: string;
  score: number;
  level: number;
  levelTitle: string;
  levelEmoji: string;
  recommendations: string[];
}

export interface Product {
  name: string;
  downloadUrl: string;
  description: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export async function submitQuiz(payload: QuizSubmissionPayload): Promise<ApiResponse<{ products: Product[] }>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/submit-quiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, message: 'Gagal terhubung ke server' };
  }
}
