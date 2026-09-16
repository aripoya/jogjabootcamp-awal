const API_BASE_URL = import.meta.env.PROD 
  ? 'https://api.jogjabootcamp.com'
  : 'http://localhost:8787';

const REQUEST_TIMEOUT_MS = 15000;

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
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${API_BASE_URL}/api/submit-quiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const body = await response.json().catch(() => null);
    if (response.ok && body?.success) {
      return body;
    }
    return { success: false, message: body?.message || 'Server sedang bermasalah' };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      message: controller.signal.aborted ? 'Server terlalu lama merespons' : 'Gagal terhubung ke server',
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
