/**
 * FocusNestt — UK English copy.
 * Angle: a reassuring place to start when the gym feels intimidating.
 */
import { enCopy, mergeCopy } from './en-copy';

const siteCopy = {
  home: {
    seo: {
      title: 'Personal trainer: a gentle place to start',
      description:
        'Training for people who feel out of place in a gym: one-to-one sessions in person or online, explained step by step, with nobody watching but your coach.',
    },
    hero: {
      eyebrow: 'Personal training, a safe place to begin',
      titleLead: 'Somewhere to start,',
      titleMark: 'away from everyone else',
      lead: 'Not knowing what to do, or feeling watched while you work it out, stops more people than any lack of fitness. We start somewhere comfortable, at your pace, with everything explained as we go.',
      visualLabel: 'One step at a time',
    },
    highlights: {
      eyebrow: 'What makes it easier',
      title: 'Nothing to prove to anyone',
      subtitle: 'Four things that take the fear out of starting.',
      items: [
        { title: 'No audience', text: 'Sessions happen somewhere you feel comfortable, whether that is at home, outdoors or a quiet corner.' },
        { title: 'Everything explained', text: 'What the exercise does, how it should feel, and what to do if it does not feel right.' },
        { title: 'Nothing assumed', text: 'No prior experience expected, and no vocabulary you are supposed to already know.' },
        { title: 'Small first steps', text: 'The first sessions are deliberately modest. Confidence comes before intensity.' },
      ],
    },
    method: {
      eyebrow: 'The method',
      title: 'Gently, then properly',
      subtitle: 'Four steps designed so you always know what comes next.',
      steps: [
        { title: 'A conversation first', text: 'What has put you off before, what you would enjoy, and what feels completely off the table for now.' },
        { title: 'A comfortable setting', text: 'We agree where you will feel at ease, and start there rather than where you think you should be.' },
        { title: 'Movements you own', text: 'A small set of basics, practised until they feel natural and genuinely yours.' },
        { title: 'Confidence, then more', text: 'As the basics feel easy, we widen the plan. Never the other way round.' },
      ],
    },
    cta: {
      eyebrow: 'First step',
      title: 'Nervous about starting?',
      lead: 'That is the most normal thing in the world. Say so in a message, and we will make the first session easy.',
    },
  },
  about: {
    seo: {
      title: 'About: coaching for people who feel out of place',
      description: 'Training built for beginners who find gyms intimidating: nothing assumed, everything explained, and no audience.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'For anyone who has ever',
      titleMark: 'felt out of place',
      lead: 'Walking into a room full of people who seem to know exactly what they are doing is genuinely off-putting. None of that is required here.',
    },
    philosophy: {
      title: 'Kind, and still effective',
      subtitle: 'Feeling safe is what makes the work possible, not a substitute for it.',
      quote: 'Confidence is built, the same way strength is.',
    },
    values: {
      title: 'What you can count on',
      items: [
        { title: 'Patience', text: 'Questions are welcome, however basic they feel to you.' },
        { title: 'Privacy', text: 'Your starting point stays between you and your coach.' },
        { title: 'Clarity', text: 'Plain language, no jargon, no assumed knowledge.' },
        { title: 'Encouragement', text: 'Progress gets noticed out loud, especially early on.' },
      ],
    },
  },
  services: {
    seo: {
      title: 'Services: beginner-friendly personal training',
      description: 'One-to-one sessions in person or online, a written programme and nutrition guidance, all designed for people starting from scratch.',
    },
    hero: {
      eyebrow: 'The services',
      titleLead: 'Four formats,',
      titleMark: 'all beginner friendly',
      lead: 'Each one can start as gently as you need, and build from there.',
    },
  },
  booking: {
    seo: {
      title: 'Booking: an easy first session',
      description: 'Book a first session designed to be comfortable: a conversation, a little movement and no pressure.',
    },
    hero: {
      eyebrow: 'Booking',
      titleLead: 'A first session',
      titleMark: 'that is easy to say yes to',
      lead: 'Mostly a conversation, a little gentle movement, and a clear idea of what comes next.',
    },
  },
  contact: {
    seo: {
      title: 'Contact: ask anything before you start',
      description: 'Get in touch with any question, however small, before booking a first session.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Ask anything,',
      titleMark: 'however small it feels',
      lead: 'There is no such thing as a silly question here. Ask before you commit to anything.',
    },
  },
};

export const overrides: Record<string, unknown> = mergeCopy(enCopy, siteCopy) as unknown as Record<string, unknown>;
