import { animate, query, state, style, transition, trigger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.1s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.6s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const slideAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
  ])
]);

export const heightAnimation = trigger('headerAnimation', [
  state('open', style({
    height: '*',
  })),
  state('closed', style({
    height: '0px',
  })),
  transition('closed => open', [
    animate('.25s')
  ]),
]);

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  state('open', style({
    opacity: 1
  })),
  state('closed', style({
    opacity: 0.5
  }))
]);

export const collapseExpand = trigger('detailExpand', [
  state('collapsed', style({ height: '0px', minHeight: '0' })),
  state('expanded', style({ height: '*' })),
  transition('expanded <=> collapsed', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
])
