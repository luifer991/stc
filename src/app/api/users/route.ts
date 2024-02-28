import { supabaseKey, supabaseUrl } from "@/lib/api";
import { text } from "stream/consumers";

const GET = () => {
    return Response.json({ id: 1, email: 'luifer991@gmail.com' });
}

export { GET };

export async function POST() {
    const res = await fetch('https://tzlkeuutysjbehhqgowj.supabase.co', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        },
        body: JSON.stringify({ email: text }),
    })

    const data = await res.json()

    return Response.json(data)
}