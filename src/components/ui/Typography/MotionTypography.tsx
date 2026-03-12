'use client';

import { motion } from 'framer-motion';
import { Typography } from './Typography';

/**
 * Motion-wrapped Typography for animated text elements.
 * Accepts all Typography props + all framer-motion animation props.
 *
 * Usage:
 * <MotionTypography
 *   variant="h2"
 *   initial={{ opacity: 0, y: 20 }}
 *   whileInView={{ opacity: 1, y: 0 }}
 * >
 *   Animated heading
 * </MotionTypography>
 */
export const MotionTypography = motion.create(Typography);
