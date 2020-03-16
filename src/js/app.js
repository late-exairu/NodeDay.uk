

import { CLASSES } from './_classes';

import header from './_header';
import Video from './_video';
import videosSlider from './_videosSlider';

header();
new Video({
  btn: CLASSES.videoBtn
});
videosSlider();
