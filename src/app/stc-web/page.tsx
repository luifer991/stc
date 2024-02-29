import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers'

export default async function Page() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: newsletter } = await supabase.from("newsletter").select();

    return <pre>{JSON.stringify(newsletter, null, 2)}</pre>
}
