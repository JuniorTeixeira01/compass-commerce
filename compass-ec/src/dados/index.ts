import dining from '../assets/dining.svg'
import living from '../assets/living.svg';
import bedroom from '../assets/bedroom.svg';

import syltherine from '../assets/syltherine.svg';
import leviosa from '../assets/leviosa.jpeg';
import lolito from '../assets/lolito.svg';
import respira from '../assets/respira.svg';
import grifo from '../assets/grifo.svg';
import muggo from '../assets/muggo.svg';
import pingky from '../assets/pingky.svg';
import potty from '../assets/potty.svg';
import desc30 from '../assets/desc-30.svg';
import desc50 from '../assets/desc-50.svg';
import pNew from '../assets/New.svg';

const showcase = [
    {id: 1, imagem: dining, title: 'Dining'},
    {id: 2, imagem: living, title: 'Living'},
    {id: 3, imagem: bedroom, title: 'Bedroom'}
];



const ourProducts = [
    {id: 1, imagem: syltherine, imgDesc: desc30, name: 'Syltherine', description: 'Stylish cafe chair', value: 'Rp 2.500.000', desc: 'Rp 3.500.000'},
    {id: 2, imagem: leviosa, imgDesc: '', name: 'Leviosa', description: 'Stylish cafe chair', value: 'Rp 2.500.000', desc: ''},
    {id: 3, imagem: lolito, imgDesc: desc50, name: 'Lolito', description: 'Luxury big sofa', value: 'Rp 7.000.000', desc: 'Rp 14.000.000'},
    {id: 4, imagem: respira, imgDesc: pNew, name: 'Respira', description: 'Outdoor bar table and stool', value: 'Rp 500.000', desc: ''},
    {id: 5, imagem: grifo, imgDesc: '', name: 'Griffo', description: 'Nigth lamp', value: 'Rp 1.500.000', desc: ''},
    {id: 6, imagem: muggo, imgDesc: pNew, name: 'Muggo', description: 'Small mug', value: 'Rp 150.000', desc: ''},
    {id: 7, imagem: pingky, imgDesc: desc50, name: 'Pingky', description: 'Cute bed set', value: 'Rp 7.000.000', desc: '14.000.000'},
    {id: 8, imagem: potty, imgDesc: pNew, name: 'Potty', description: 'Minimalist flower pot', value: 'Rp 500.000', desc: ''}
];


export { showcase, ourProducts };