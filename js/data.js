/* CONFIGURACIÓN  */
const NUM = "573144383732";     
const FORMSPREE_URL = "https://formspree.io/f/sapachonp@unal.edu.co";        

const wa = t => "https://wa.me/" + NUM + "?text=" + encodeURIComponent(t);
const cop = n => "$" + Number(n).toLocaleString("es-CO") + " COP";
const tier = p => p <= 500000 ? 1 : p <= 1500000 ? 2 : 3;
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* PRODUCTOS */
const DEFAULT_PRODUCTS = [
  {id:"p1",n:"Anillo Luz de Medellín",c:"Anillos",m:"Oro 18k",p:4200000,o:["boda"],tag:"Exclusivo"},
  {id:"p2",n:"Anillo Gota de Muzo",c:"Anillos",m:"Plata 925",p:450000,o:["diario","regalo"],tag:"Esmeralda natural"},
  {id:"p3",n:"Solitario Chiquinquirá",c:"Anillos",m:"Oro 18k",p:1350000,o:["boda","grado"],tag:"Compromiso"},
  {id:"p4",n:"Manilla Boyacá",c:"Manillas",m:"Oro laminado",p:220000,o:["diario","regalo"],tag:"Más vendida"},
  {id:"p5",n:"Manilla Eslabón Real",c:"Manillas",m:"Oro 18k",p:2300000,o:["grado","regalo"],tag:"Alta joyería"},
  {id:"p6",n:"Collar Gota de Muzo",c:"Collares",m:"Plata 925",p:890000,o:["regalo","diario"],tag:"Esmeralda natural"},
  {id:"p7",n:"Collar Reina Verde",c:"Collares",m:"Oro 18k",p:2900000,o:["boda","regalo"],tag:"Exclusivo"},
  {id:"p8",n:"Dije Virgen de Chiquinquirá",c:"Dijes",m:"Oro 18k",p:480000,o:["grado","diario"],tag:"Tradición"},
  {id:"p9",n:"Dije Esmeralda",c:"Dijes",m:"Plata 925",p:310000,o:["regalo","diario","grado"],tag:"Detalle ideal"}
];