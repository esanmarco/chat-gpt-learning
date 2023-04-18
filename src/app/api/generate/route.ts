import { NextResponse } from "next/server";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ChatMessages {
  model: string;
  messages: string[];
  temperature?: number;
}

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  console.log(process.env.OPENAI_API_KEY, "process.env.OPENAI_API_KEY");
  const body: ChatMessages[] = await request.json();

  const completion = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    messages: body,
    tempurature: 1,
  });

  const newMessage = completion.data.choices[0].text;

  return NextResponse.json({});
}
