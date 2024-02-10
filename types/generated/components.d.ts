import type { Schema, Attribute } from '@strapi/strapi';

export interface BannersHeroBanner extends Schema.Component {
  collectionName: 'components_banners_hero_banners';
  info: {
    displayName: 'Hero Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    buttonPrompt: Attribute.String;
    buttonLink: Attribute.String;
    isImageLeft: Attribute.Boolean & Attribute.DefaultTo<true>;
    imagePath: Attribute.String;
    imageAlt: Attribute.String;
  };
}

export interface MiscStripe extends Schema.Component {
  collectionName: 'components_misc_stripes';
  info: {
    displayName: 'Stripe';
  };
  attributes: {
    text: Attribute.Text;
    link: Attribute.String;
    buttonPrompt: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banners.hero-banner': BannersHeroBanner;
      'misc.stripe': MiscStripe;
    }
  }
}
