/**
 *
 * Asynchronously loads the component for Story
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
