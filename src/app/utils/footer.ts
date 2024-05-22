export const appname:string = 'tasmeel'


export interface ServiceTypes {
    name: string;
    href: string;
  }
  
  export const Services: ServiceTypes[] = [
    { name: 'AI Text to Video', href: '/' },
    { name: 'AI Voice Generator', href: '/' },
    { name: 'AI Image Generator', href: '/' },
    { name: 'YouTube Video', href: '/' },
  ];
  
  export const Support: ServiceTypes[] = [
    { name: 'FAQ', href: '/' },
    { name: 'How it Works', href: '/' },
    { name: 'Email Us', href: '/' },
    { name: 'Pricing', href: '/' },
  ];
  
  export const Contact: ServiceTypes[] = [
    { name: 'Email', href: 'mailto:support@example.com' },
    { name: 'Phone', href: 'tel:+1234567890' },
    { name: 'Address', href: 'https://www.google.com' },
  ];