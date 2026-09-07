import * as Icons from 'lucide-react';
export default function Icon({name,size=20,strokeWidth=1.8,...props}){const C=Icons[name]||Icons.Sparkles;return <C size={size} strokeWidth={strokeWidth} {...props}/>}
