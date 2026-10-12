export const site = { name: 'Revival Voice Ministries', leader: 'Prophet Deevah', phone: '+263 78 975 0904', whatsapp: '263789750904', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://revival-voice-ministries.vercel.app', siipGroupUrl: process.env.NEXT_PUBLIC_SIIP_GROUP_URL || '' };
export const wa = (message: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
export const navigation = [['Home','/'],['About','/about'],['Our Ministries','/ministries'],['SIIP','/siip'],['Teachings','/teachings'],['Events','/events'],['Testimonies','/testimonies'],['Prayer Requests','/prayer-requests'],['Contact','/contact']];
export const teachings = [
 {slug:'growing-through-prayer',title:'Growing through prayer',category:'Prayer & Spiritual Growth',description:'A space for teachings on a consistent prayer life and growing in faith.'},
 {slug:'rooted-in-the-word',title:'Rooted in the Word',category:'Biblical Teachings',description:'A space for Scripture-centred teaching and spiritual understanding.'},
 {slug:'the-heart-of-revival',title:'The heart of revival',category:'Revival Teachings',description:'A space for messages on spiritual renewal and purpose.'},
 {slug:'faith-and-discernment',title:'Faith and discernment',category:'Prophetic Messages',description:'A space for approved prophetic messages and biblical encouragement.'}
];
export const ministries = [
 ['Prayer Ministry','Building a consistent prayer life through faith, encouragement and fellowship.','/siip'],
 ['Prophetic Ministry','Encouraging faith and spiritual discernment, rooted in Scripture.','/teachings'],
 ['Apostolic Teaching','Growing in understanding of the Word and the message of Jesus Christ.','/teachings'],
 ['Revival Meetings','Coming together for prayer, the Word and spiritual renewal. Confirmed gatherings will be announced.','/events'],
 ['Spiritual Mentorship','Encouraging believers to grow in spiritual maturity and pursue their God-given purpose.','/contact'],
 ['Biblical Teaching','Remaining rooted in Scripture and applying the Word to everyday life.','/teachings']
];
export const events: {slug:string;title:string;description:string;date?:string;venue?:string}[] = [];
export const testimonies: {name:string;story:string}[] = [];
