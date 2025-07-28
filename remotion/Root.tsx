import { Composition } from 'remotion';
import { PantipRemotionVideo } from '../components/animations/PantipRemotionVideo';
import { IsometricClaudeUIVideo } from '../components/animations/IsometricClaudeUIVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PantipRemotion"
        component={PantipRemotionVideo}
        durationInFrames={900}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
      <Composition
        id="IsometricClaudeUI"
        component={IsometricClaudeUIVideo}
        durationInFrames={900}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};