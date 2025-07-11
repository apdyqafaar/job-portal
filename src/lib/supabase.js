
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


const supabaseCalient=async(supabaseAccessToken)=>{
    const supabase = createClient(supabaseUrl, supabaseKey,{
        global:{ 
           headers:{
            Authorization:`Bearer ${supabaseAccessToken}`
           } 
        }
    });
    return supabase
}

export default supabaseCalient
        