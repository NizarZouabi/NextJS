"use client"
// import 'server-only';
// import { serverSideFunction } from "@/utils/server-utils"
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';


export default function ClientPage() {
    console.log("Client route rendered")
    const theme = useTheme()
    const result = clientSideFunction()
    // const result = serverSideFunction()
  return (
    <div>
        <h3>ClientRoutePage</h3>
        <h1 style={{color: theme.colors.primary}}>
        Hello World
        </h1>
        <p>{result}</p>
    </div>
  )
}
