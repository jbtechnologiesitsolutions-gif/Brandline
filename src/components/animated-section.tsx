'use client';

import React from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { GlowEffect } from '@/components/core/glow-effect';
import { TextMorph } from '@/components/core/text-morph';

export type SlideDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';

export interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  className?: string;
  direction?: SlideDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const getDirectionVariants = (direction: SlideDirection, distance = 40): Variants => {
  switch (direction) {
    case 'up':
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case 'down':
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case 'left':
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case 'zoom':
      return {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1 },
      };
    case 'fade':
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

export function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  ...props
}: AnimatedSectionProps) {
  const variants = getDirectionVariants(direction);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function SlideIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: SlideDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
}) {
  const variants = getDirectionVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  direction?: SlideDirection;
}) {
  const variants = getDirectionVariants(direction, 30);

  return (
    <motion.div
      variants={variants}
      transition={{
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Interactive Glow Action Button with TextMorph, matching user specification */
export function GlowActionButton({
  text = 'Get Free Consultation',
  loadingText = 'Securing Your Audit...',
  onClick,
  className,
}: {
  text?: string;
  loadingText?: string;
  onClick?: () => void;
  className?: string;
}) {
  const [isGlowing, setIsGlowing] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleClick = () => {
    setIsSubmitting(true);
    setIsGlowing(true);
    onClick?.();
    setTimeout(() => {
      setIsSubmitting(false);
      setTimeout(() => setIsGlowing(false), 2000);
    }, 1800);
  };

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      onMouseEnter={() => setIsGlowing(true)}
      onMouseLeave={() => !isSubmitting && setIsGlowing(false)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-xl"
        animate={{
          opacity: isGlowing ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}
      >
        <GlowEffect
          colors={['#D4AF37', '#F59E0B', '#EAB308', '#FDE047']}
          mode="colorShift"
          blur="medium"
          duration={3.5}
        />
      </motion.div>
      <button
        type="button"
        onClick={handleClick}
        className="relative z-10 inline-flex h-12 items-center justify-center rounded-xl border border-primary/20 bg-primary px-6 font-display text-sm font-bold tracking-wide text-primary-foreground shadow-lg transition-transform active:scale-[0.97]"
      >
        <TextMorph>{isSubmitting ? loadingText : text}</TextMorph>
      </button>
    </div>
  );
}
