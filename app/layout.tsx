import type { Metadata } from 'next';
import { Montserrat, Inter, Cormorant_Garamond } from 'next/font/google';
import { Header, MotionSystem } from '../components/interactive';
import { Footer } from '../components/shared';
import { site } from '../lib/content';
import './globals.css';
const heading=Montserrat({subsets:['latin'],variable:'--font-heading'});
const body=Inter({subsets:['latin'],variable:'--font-body'});
const serif=Cormorant_Garamond({subsets:['latin'],weight:['400','500','600'],variable:'--font-serif'});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'Prophet Deevah (Davison Mukoriro) | Revival Voice Ministries',template:'%s | Revival Voice Ministries'},description:'Discover Revival Voice Ministries under Prophet Deevah (Davison Mukoriro). Explore biblical teachings, prayer programmes, SIIP, ministry events and more.',openGraph:{type:'website',images:[{url:'/images/deevah-navy.jpg',width:958,height:1280,alt:'Prophet Deevah'}]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${heading.variable} ${body.variable} ${serif.variable}`}><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><MotionSystem/></body></html>}
