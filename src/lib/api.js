import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
export { supabase }