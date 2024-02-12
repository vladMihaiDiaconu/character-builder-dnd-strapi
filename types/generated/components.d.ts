import type { Schema, Attribute } from '@strapi/strapi';

export interface BannersCardsAndTextBanner extends Schema.Component {
  collectionName: 'components_banners_cards_and_text_banners';
  info: {
    displayName: 'Cards And Text Banner';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    displayCardsArray: Attribute.Component<'cards.display-card', true>;
  };
}

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

export interface CardsDisplayCard extends Schema.Component {
  collectionName: 'components_cards_display_cards';
  info: {
    displayName: 'Display Card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    buttonLink: Attribute.String;
    imageUrl: Attribute.String;
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
      'banners.cards-and-text-banner': BannersCardsAndTextBanner;
      'banners.hero-banner': BannersHeroBanner;
      'cards.display-card': CardsDisplayCard;
      'misc.stripe': MiscStripe;
    }
  }
}
