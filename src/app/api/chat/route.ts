import { NextRequest, NextResponse } from "next/server";

const processLongResponse = (content: string | null | undefined) => {
  if (content && content.length > 2000) {
    return {
      content,
      isLongResponse: true
    };
  }
  return { content, isLongResponse: false };
};

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const modelName = process.env.MODEL_NAME || 'gemini-2.5-flash';
    
    if (!apiKey) {
      console.error("GOOGLE_API_KEY is not defined in environment variables");
      return NextResponse.json(
        { error: "API key is not configured" },
        { status: 500 }
      );
    }

    const { messages } = await req.json();
    console.log("Received messages:", JSON.stringify(messages));

    const systemMessage = {
      role: "system",
      content: "You are PakJustice AI, an AI legal assistant specializing in Pakistani law. Provide accurate, helpful information about Pakistani legal matters including the Constitution of Pakistan, PPC (Pakistan Penal Code), CrPC, civil laws, family laws, property laws, and other Pakistani legal frameworks. If asked about laws outside Pakistan or non-legal topics, politely redirect the conversation to Pakistani legal matters. Always clarify that your responses are for informational purposes only and provide legal information. When uncertain, acknowledge limitations and suggest consulting a qualified legal professional in Pakistan. IMPORTANT: For complex topics, structure your response with numbered points and clear headings to improve readability."
    };

  const conversationWithSystem = [systemMessage, ...messages];
    
    console.log(`Using Google Gemini API with model: ${modelName}`);
    
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: conversationWithSystem.map(msg => ({
            parts: [{ text: msg.content }]
          })),
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
            topP: 0.8,
            topK: 40
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API error:', errorData);
        return NextResponse.json(
          { error: "Error from Gemini API: " + (errorData.error?.message || 'Unknown error') },
          { status: response.status }
        );
      }

      const data = await response.json();
      console.log('Gemini API response:', JSON.stringify(data));
      
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        console.error('Unexpected response format:', data);
        return NextResponse.json(
          { error: "Unexpected response format from Gemini API" },
          { status: 500 }
        );
      }

      const content = data.candidates[0].content.parts[0].text;
      const processedResponse = processLongResponse(content);

      return NextResponse.json({
        role: 'assistant',
        content: processedResponse.content,
        isLongResponse: processedResponse.isLongResponse
      });
    } catch (error) {
      console.error("Gemini API error:", error);
      return NextResponse.json(
        { error: "Error calling Gemini API", details: String(error) },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request", details: String(error) },
      { status: 500 }
    );
  }
}