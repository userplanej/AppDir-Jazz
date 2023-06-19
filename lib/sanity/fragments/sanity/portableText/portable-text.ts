import groq from 'groq';
import { MODULE_ACCORDION } from '../modules/accordion';
import { MODULE_CALLOUT } from '../modules/callout';
import { MODULE_CALL_TO_ACTION } from '../modules/calltoaction';
import { MODULE_GRID } from '../modules/grid';
import { MODULE_IMAGES } from '../modules/images';
import { MODULE_INSTAGRAM } from '../modules/instagram';
import { MODULE_PRODUCTS } from '../modules/products';
import { MODULE_YOUTUBE } from '../modules/youtube';
import { MARK_DEFS } from './markDefs';

export const PORTABLE_TEXT = groq`
  ...,
  (_type == 'blockAccordion') => {
    ${MODULE_ACCORDION},
  },
  (_type == 'blockCallout') => {
    ${MODULE_CALLOUT}
  },
  (_type == 'blockCallToAction') => {
    ${MODULE_CALL_TO_ACTION}
  },
  (_type == 'blockGrid') => {
    ${MODULE_GRID},
  },
  (_type == 'blockImages') => {
    ${MODULE_IMAGES}
  },
  (_type == 'blockInstagram') => {
    ${MODULE_INSTAGRAM}
  },
  (_type == 'blockYoutube') => {
    ${MODULE_YOUTUBE}
  },
  (_type == 'blockProducts') => {
    ${MODULE_PRODUCTS}
  },
  markDefs[] {
    ${MARK_DEFS}
  }
`;
