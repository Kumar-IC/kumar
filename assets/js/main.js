
// Año dinámico
document.getElementById('y').textContent = new Date().getFullYear();

// Reveal on scroll
const els = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
},{threshold:0.12});
els.forEach(el=>io.observe(el));

// Botón WhatsApp con data-* reemplazable para GTM
const btn = document.querySelector('[data-cta="whatsapp"]');
if (btn){
  const phone = btn.dataset.phone || '51940284345';
  const msg = encodeURIComponent(btn.dataset.msg || 'Hola Omar, me gustaría hablar sobre un proyecto.');
  btn.addEventListener('click', ()=>{
    window.open(`https://wa.me/${phone}?text=${msg}`,'_blank','noopener');
  });
}
