import {site,navigation} from '../lib/content';
export default function sitemap(){return [...navigation.map(([,p])=>p),'/privacy'].map(p=>({url:site.url+p,changeFrequency:'monthly' as const,priority:p==='/'?1:0.7}))}
