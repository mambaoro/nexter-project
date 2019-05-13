/**
 *
 * Asynchronously loads the component for StoryContent
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
