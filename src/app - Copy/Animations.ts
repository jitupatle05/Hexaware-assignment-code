import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

export const menuFadeAnimation = trigger('menuFade', [
  transition(':enter', [
    style({ opacity: 0 }),

    animate('200ms ease-out', style({ opacity: 1 })),

    query(
      'a',
      [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        stagger(60, [
          animate(
            '300ms ease-out',
            style({ opacity: 1, transform: 'none' })
          )
        ])
      ],
      { optional: true }
    )
  ]),

  transition(':leave', [
    animate('200ms ease-in', style({ opacity: 0 }))
  ])
]);
