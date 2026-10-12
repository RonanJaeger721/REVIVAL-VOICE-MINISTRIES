import {notFound} from 'next/navigation';
import {events,wa} from '../../../lib/content';
import {Action,Label} from '../../../components/shared';
export default async function Event({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const event=events.find(e=>e.slug===slug);if(!event)notFound();return <section className="page-opening"><div className="container"><Label>MINISTRY GATHERING</Label><h1>{event.title}</h1><p>{event.description}</p>{event.date&&<p>{event.date}</p>}{event.venue&&<p>{event.venue}</p>}<Action href={wa(`Hello, I would like to enquire about ${event.title}.`)}>Enquire about this gathering</Action></div></section>}
