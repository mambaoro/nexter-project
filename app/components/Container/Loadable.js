/**
 *
 * Asynchronously loads the component for Container
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
