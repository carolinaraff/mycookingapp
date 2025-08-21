import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import Card from '../../ui/Card';

gsap.registerPlugin(Draggable);

function CardsList({categories}){
    const cardsRef = useRef([]);
    const containerRef = useRef(null);

    // Assign each card to the cardsRef array
    const setCardRef = (el, index) => {
        cardsRef.current[index] = el;
    };

    useEffect(() => {
        const cards = cardsRef.current;
        const container = containerRef.current;

        cards.forEach((card, i) => {
        // Initial z-index: last one is visually on top
        card.style.zIndex = cards.length - i;

        Draggable.create(card, {
            type: 'x',
            bounds: container,
            onDragEnd: function () {
            if (Math.abs(this.endX) > 100) {
                // Animate the card off screen and shrink it
                gsap.to(card, {
                x: this.endX > 0 ? 1000 : -1000,
                scale: 0.05,
                duration: 1,
                ease: 'power2.inOut',
                onComplete: () => {
                    // Move to back of stack
                    card.style.zIndex = 0;

                    // Raise all others
                    cards.forEach(c => {
                    if (c !== card) {
                        c.style.zIndex = parseInt(c.style.zIndex) + 1;
                    }
                    });

                    // Instantly reset position and scale
                    gsap.set(card, {
                    x: 0,
                    scale: 1
                    });
                }
                });
            } else {
                // Not far enough — snap back to center
                gsap.to(card, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
                });
            }
            }
        });
        });
    }, []);


    return (
    <ul className='cards-list' ref={containerRef}>
        {categories.map((cat, index) => 
            <li key={cat.key} className='card-item'>
                <Card cardRef={el => setCardRef(el, index)} category={cat.category} id={cat.key}/>
            </li>
        )}
    </ul>
  )
}

export default CardsList