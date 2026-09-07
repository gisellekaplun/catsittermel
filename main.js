/* =========================================
   CAT SITTER MEL - JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('.nav__link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- FAQs ---
    const faqData = [
        {
            q: "¿Podés atender a mi gato a una hora específica?",
            a: "Debido a la cantidad de visitas que realizo en el día, las visitas se reservan por franjas horarias: Mañana (6 a 10 hs), Mediodía/Tarde (10 a 17 hs) y Noche (17 a 22 hs). Si tu gato necesita una hora puntual, hago todo lo posible por respetarla, aunque no está garantizada. Si es un caso especial, comunicámelo al momento de reservar."
        },
        {
            q: "¿Qué zonas de Buenos Aires cubrís?",
            a: "Trabajo en Capital Federal. Al confirmar tu zona de cobertura, lo coordinamos por WhatsApp para asegurarme de que puedo llegar a tu domicilio."
        },
        {
            q: "¿Cómo recibo actualizaciones de mi gato durante la visita?",
            a: "Te envío fotos y mensajes durante cada visita para que sepas cómo está tu gato. Si hay algo que te llame la atención en las fotos o querés saber algo puntual, escribime y te respondo lo antes posible."
        },
        {
            q: "¿Administrás medicación a los gatos?",
            a: "Sí, puedo administrar medicación por vía oral (pastillas, líquidos en la mayoría de los casos). Por seguridad, no aplico inyecciones. Si tu gato necesita un tipo de medicación puntual, consultame antes de reservar."
        },
        {
            q: "¿Puedo tener cámaras en casa?",
            a: "¡Sí! De hecho, las cámaras de seguridad o de mascota son una herramienta útil en el servicio. Si tenés cámaras, es importante que me indiques las ubicaciones de las habitaciones. No se permite el uso de cámaras en baños. Si encuentro una cámara que no fue declarada, será motivo de terminación inmediata del servicio."
        },
        {
            q: "¿Qué pasa si mi gato se pierde o se lastima durante el cuidado?",
            a: "En mis años de servicio esto no ha sucedido, pero tengo un plan en caso de que ocurra. Te contactaré lo antes posible. Si tu gato tiene una emergencia médica, me comunicaré con tu veterinaria habitual (o una clínica de emergencia si es fuera de horario). El costo de la atención médica corre por cuenta del dueño, y cualquier inquietud debe comunicarse dentro de las 24 a 48 horas posteriores a finalizar el servicio."
        },
        {
            q: "¿Con cuánta anticipación debo reservar?",
            a: "Te recomiendo reservar apenas sepas que vas a necesitar el servicio. ¡Cuanto antes, mejor! Prefiero anotar las fechas y ajustar después, a recibir solicitudes de último momento. Las mismas llevan un recargo administrativo, salvo que sea una emergencia familiar u otra razón justificada."
        },
        {
            q: "¿Qué requisitos debe cumplir mi gato?",
            a: "Para cuidar la salud de tu gato y de los demás, es importante que tenga sus vacunas al día y esté libre de parásitos o en tratamiento activo. Ante cualquier duda, lo confirmamos antes de la primera visita."
        },
        {
            q: "¿Cuál es la política de cancelación y pagos?",
            a: "El pago se coordina por adelantado. Mi política de cancelación es flexible dentro de lo razonable: si surge una emergencia (enfermedad, imprevisto, etc.), la penalización suele quedar exenta. Si cancelás repetidamente a último momento, puede aplicar una compensación por el tiempo administrativo de la reserva."
        },
        {
            q: "¿Ofrecés cuidado para otros animales además de gatos?",
            a: "Me especializo en gatos, que es donde tengo la mayor experiencia y conocimiento. Si tenés otro tipo de animal de compañía y una duda puntual, escribime y te cuento si puedo ayudarte."
        }
    ];

    const faqList = document.getElementById('faqList');

    faqData.forEach((item, index) => {
        const faq = document.createElement('div');
        faq.className = 'faq';
        faq.innerHTML = `
            <button class="faq__question" aria-expanded="false">${item.q}</button>
            <div class="faq__answer">
                <div class="faq__answer-inner">${item.a}</div>
            </div>
        `;

        const question = faq.querySelector('.faq__question');
        const answer = faq.querySelector('.faq__answer');

        question.addEventListener('click', () => {
            const isOpen = faq.classList.contains('faq--open');
            const allFaqs = document.querySelectorAll('.faq');
            allFaqs.forEach(f => {
                f.classList.remove('faq--open');
                f.querySelector('.faq__answer').style.maxHeight = null;
                f.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                faq.classList.add('faq--open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.setAttribute('aria-expanded', 'true');
            }
        });

        faqList.appendChild(faq);
    });

});
