export type GradientVariant = 'orange' | 'blue';

export interface GradientField {
  color: string;
  x: string;
  y: string;
  w: string;
  h: string;
  blur: string;
  opacity: number;
}

export interface GradientConfig {
  base: string;
  fields: GradientField[];
}

const blur = 'clamp(120px, 14vw, 200px)';
const blurSoft = 'clamp(140px, 16vw, 220px)';

export const gradientVariants: Record<GradientVariant, GradientConfig> = {
  orange: {
    base: 'color-mix(in srgb, var(--color-mist) 32%, white)',
    fields: [
      {
        color: 'var(--color-mist)',
        x: '8%',
        y: '6%',
        w: '120vw',
        h: '100vh',
        blur: blurSoft,
        opacity: 0.9,
      },
      {
        color: 'color-mix(in srgb, var(--color-mist) 70%, white)',
        x: '92%',
        y: '8%',
        w: '90vw',
        h: '80vh',
        blur: blurSoft,
        opacity: 0.55,
      },
      {
        color: 'color-mix(in srgb, var(--color-mist) 55%, white)',
        x: '12%',
        y: '92%',
        w: '85vw',
        h: '70vh',
        blur,
        opacity: 0.45,
      },
      {
        color: 'var(--color-warm-yellow)',
        x: '34%',
        y: '42%',
        w: '95vw',
        h: '85vh',
        blur: blurSoft,
        opacity: 0.72,
      },
      {
        color: 'color-mix(in srgb, var(--color-warm-yellow) 80%, white)',
        x: '28%',
        y: '32%',
        w: '70vw',
        h: '65vh',
        blur,
        opacity: 0.4,
      },
      {
        color: 'var(--color-sunset)',
        x: '82%',
        y: '58%',
        w: '110vw',
        h: '95vh',
        blur: blurSoft,
        opacity: 0.7,
      },
      {
        color: 'color-mix(in srgb, var(--color-sunset) 75%, var(--color-warm-yellow))',
        x: '68%',
        y: '48%',
        w: '80vw',
        h: '75vh',
        blur,
        opacity: 0.45,
      },
      {
        color: 'color-mix(in srgb, var(--color-sunset) 65%, white)',
        x: '96%',
        y: '88%',
        w: '85vw',
        h: '80vh',
        blur: blurSoft,
        opacity: 0.5,
      },
    ],
  },
  blue: {
    base: 'color-mix(in srgb, var(--color-warm-yellow) 14%, white)',
    fields: [
      {
        color: 'var(--color-warm-yellow)',
        x: '18%',
        y: '4%',
        w: '115vw',
        h: '90vh',
        blur: blurSoft,
        opacity: 0.85,
      },
      {
        color: 'var(--color-sunset)',
        x: '6%',
        y: '16%',
        w: '90vw',
        h: '80vh',
        blur,
        opacity: 0.5,
      },
      {
        color: 'color-mix(in srgb, var(--color-warm-yellow) 70%, white)',
        x: '42%',
        y: '12%',
        w: '85vw',
        h: '70vh',
        blur: blurSoft,
        opacity: 0.4,
      },
      {
        color: 'var(--color-muted-blue)',
        x: '64%',
        y: '88%',
        w: '125vw',
        h: '105vh',
        blur: blurSoft,
        opacity: 0.82,
      },
      {
        color: 'color-mix(in srgb, var(--color-muted-blue) 80%, var(--color-mist))',
        x: '78%',
        y: '72%',
        w: '95vw',
        h: '85vh',
        blur,
        opacity: 0.55,
      },
      {
        color: 'color-mix(in srgb, var(--color-muted-blue) 45%, var(--color-warm-yellow))',
        x: '48%',
        y: '58%',
        w: '80vw',
        h: '70vh',
        blur: blurSoft,
        opacity: 0.28,
      },
      {
        color: 'color-mix(in srgb, var(--color-mist) 60%, white)',
        x: '96%',
        y: '36%',
        w: '70vw',
        h: '65vh',
        blur,
        opacity: 0.35,
      },
    ],
  },
};
