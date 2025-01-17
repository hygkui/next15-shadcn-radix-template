import { loadEnvConfig } from '@next/env'
import { NextRequest } from 'next/server'
 
const projectDir = process.cwd()
loadEnvConfig(projectDir)

console.log(process.env.DB_HOST)
