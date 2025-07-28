import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

// Set output directory
Config.setPublicDir('./public');

// Performance settings
Config.setConcurrency(2);
Config.setChromiumOpenGlRenderer('egl');