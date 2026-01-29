import os
from google import genai

# ✅ Load API Key from .env
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# ✅ Load optional configs
MODEL_NAME = os.getenv("GEMINI_MODEL", "models/gemini-2.5-flash")
TEMPERATURE = float(os.getenv("GEMINI_TEMPERATURE", 0.6))

# ✅ Initialize Client (New SDK)
client = genai.Client(api_key=GEMINI_API_KEY)


def generate_staffing_advice(predicted_days, breakdown):
    """
    Uses Gemini LLM to generate staffing + delivery recommendations
    """

    prompt = f"""
You are an AI Staffing and Deployment Advisor.

Deployment Estimate: {predicted_days} days

Breakdown of delays:
{breakdown}

Task:
1. Explain why deployment is delayed
2. Suggest staffing actions (backup resource, training, buffer)
3. Help delivery teams adjust client commitments

Keep response concise, professional, and actionable.
"""

    # ✅ New Gemini API call
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt,
        config={
            "temperature": TEMPERATURE
        }
    )

    return response.text
