import type { Schema, Attribute } from '@strapi/strapi';

export interface BannersBannerWithAccordion extends Schema.Component {
  collectionName: 'components_banners_banner_with_accordions';
  info: {
    displayName: 'Banner With Accordion';
    description: '';
  };
  attributes: {
    raceForm: Attribute.Component<'forms.race-form'>;
    classForm: Attribute.Component<'forms.class-form'>;
    backgroundForm: Attribute.Component<'forms.background-form'>;
  };
}

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

export interface BannersResourceLogBanner extends Schema.Component {
  collectionName: 'components_banners_resource_log_banners';
  info: {
    displayName: 'Resource Log Banner';
  };
  attributes: {
    log: Attribute.Text;
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

export interface FormsBackgroundForm extends Schema.Component {
  collectionName: 'components_forms_background_forms';
  info: {
    displayName: 'Background Form';
  };
  attributes: {
    backgrounds: Attribute.Relation<
      'forms.background-form',
      'oneToMany',
      'api::background.background'
    >;
  };
}

export interface FormsClassForm extends Schema.Component {
  collectionName: 'components_forms_class_forms';
  info: {
    displayName: 'Class Form';
  };
  attributes: {
    classes: Attribute.Relation<
      'forms.class-form',
      'oneToMany',
      'api::class.class'
    >;
  };
}

export interface FormsRaceForm extends Schema.Component {
  collectionName: 'components_forms_race_forms';
  info: {
    displayName: 'Race Form';
  };
  attributes: {
    races: Attribute.Relation<'forms.race-form', 'oneToMany', 'api::race.race'>;
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
      'banners.banner-with-accordion': BannersBannerWithAccordion;
      'banners.cards-and-text-banner': BannersCardsAndTextBanner;
      'banners.hero-banner': BannersHeroBanner;
      'banners.resource-log-banner': BannersResourceLogBanner;
      'cards.display-card': CardsDisplayCard;
      'forms.background-form': FormsBackgroundForm;
      'forms.class-form': FormsClassForm;
      'forms.race-form': FormsRaceForm;
      'misc.stripe': MiscStripe;
    }
  }
}
