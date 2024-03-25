import './style.css'

const poems = [
  'En el jardín de tus sueños, _name_, florecen esperanzas como rosas en primavera, perfumando el aire con la dulzura de tus anhelos más profundos.',
  'En cada lágrima que derramas, _name_, encuentras la fuerza para regar el jardín de tu alma, cultivando la resiliencia que te lleva a florecer aún en la oscuridad.',
  'Como un faro en la tormenta, tu sonrisa ilumina el horizonte, _name_, guiando a los corazones perdidos hacia la calma de tus aguas serenas.',
  'En el lienzo de la vida, _name_, pintas paisajes de coraje y determinación, transformando obstáculos en senderos hacia la plenitud.',
  'Que las estrellas en el cielo sean testigos, _name_, de tu valentía que desafía la gravedad, elevándote por encima de los miedos que intentan amarrarte a tierra.',
  'En el eco de tus susurros nocturnos, _name_, resuena el poder de tu voz interior, recordándote que en la quietud encuentras la fortaleza para seguir adelante.',
  'Cada cicatriz en tu piel cuenta una historia, _name_, de batallas libradas y lecciones aprendidas, marcando el camino hacia la belleza de tu propia resurrección.',
  'Como el vuelo del colibrí entre las flores, _name_, tu gracia y ligereza desafían la gravedad de la adversidad, danzando con la vida en un eterno renacer.',
  'En el eco del silencio, _name_, escucha el susurro del universo que te susurra al oído: eres más fuerte de lo que crees, más valiente de lo que imaginas.',
  'Que cada amanecer sea un recordatorio, _name_, de que en cada nuevo día yace la promesa de un nuevo comienzo, una nueva oportunidad para brillar con todo tu esplendor.',
  "_name_, en tus ojos resplandece la luz del universo, reflejando la eternidad de tu espíritu radiante.",
  "En tu voz, _name_, encuentro la melodía que calma mi alma inquieta y me lleva a la serenidad más profunda.",
  "Como un lirio entre espinas, _name_, tu gracia y delicadeza sobresalen en un mundo lleno de caos y adversidad.",
  "_name_, tus pasos son el eco de la esperanza, marcando un camino de posibilidades infinitas y sueños realizados.",
  "En tu abrazo, _name_, encuentro el refugio donde se disipan mis miedos y renace la fe en un mañana mejor.",
  "Como el viento que acaricia las hojas en otoño, _name_, tu presencia trae consuelo y renovación a mi corazón cansado.",
  "_name_, en cada lágrima que cae, veo la valentía de un alma que se atreve a sentir profundamente en un mundo que a menudo se niega a hacerlo.",
  "Como el sol que se alza cada mañana, _name_, tu resplandor ilumina incluso los rincones más oscuros de la desesperación, trayendo consigo la promesa de un nuevo día.",
  "En tus sueños, _name_, yacen las semillas de un mañana más brillante, donde la esperanza florece en cada rincón de tu imaginación.",
  "_name_, eres la danza de la vida en su forma más pura, un remolino de energía y pasión que transforma el mundo a su paso.",
  "Como un faro en la noche, _name_, tu amor guía mi camino en medio de la oscuridad, mostrándome la belleza que aún espera ser descubierta.",
  "En el eco de tu risa, _name_, encuentro la melodía que da ritmo a mi corazón y alegra mi existencia.",
  "_name_, tus cicatrices son medallas de honor, testigos silenciosos de las batallas que has librado y las victorias que has alcanzado.",
  "Como el río que fluye sin cesar, _name_, tu fuerza es inagotable, llevándote hacia adelante incluso cuando los obstáculos parecen insuperables.",
  "En tu mirada, _name_, encuentro la calma que anhelo, la quietud que me permite encontrar mi centro en medio del caos.",
  "_name_, como el ave fénix, renaces de las cenizas de tus desafíos, emergiendo con una fuerza renovada y una determinación inquebrantable.",
  "Como el arco iris después de la tormenta, _name_, tu presencia es un recordatorio de que la belleza puede surgir incluso de los momentos más oscuros.",
  "En tu sonrisa, _name_, veo la luz del universo brillando a través de ti, iluminando mi camino y dándome esperanza en tiempos difíciles.",
  "_name_, tus palabras son el bálsamo que cura mis heridas y el fuego que enciende mi alma, dándome el coraje para enfrentar cualquier desafío.",
  "Como una estrella en la noche, _name_, tu luz guía mi camino en la oscuridad, recordándome que nunca estoy solo en este viaje llamado vida."

]

document.addEventListener('DOMContentLoaded', () => {
  const searchParams = new URLSearchParams(window.location.search)
  const poemIndex = Math.floor(Math.random() * 20)
  const name = searchParams.get('name') || 'Melina'
  console.log(name)
  const poem = poems[poemIndex].replace(
    '_name_',
    `<span id="nam">${name}</span>`
  )
  console.log(poem)
  message.innerHTML = `
  <b>Para ${name} :</b><br>
  ${poem}
  `
})
