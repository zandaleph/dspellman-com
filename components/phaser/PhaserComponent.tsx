import { FunctionComponent } from "react";
import { type Game } from "phaser";
import { useEffect, useState, useRef } from "react";

interface Props {
  config: Phaser.Types.Core.GameConfig;
}

const PhaserComponent: FunctionComponent<Props> = ({ config }) => {
  const gameParentRef = useRef<HTMLDivElement | null>(null);
  const [game, setGame] = useState<Game | undefined>();

  useEffect(() => {
    const setupGame = async () => {
      const Phaser = await import("phaser");
      const finalConfig: Phaser.Types.Core.GameConfig = {
        parent: gameParentRef.current!!,
        dom: {
          createContainer: true,
        },
        type: Phaser.AUTO,
        ...config,
      };
      setGame((existingGame) => {
        // if there's already an existing game don't make another
        return existingGame || new Phaser.Game(finalConfig);
      });
    };
    setupGame();
  }, [config, setGame]);

  useEffect(() => {
    return () => {
      game?.destroy(true);
      setGame((existingGame) => {
        return existingGame === game ? undefined : existingGame;
      });
    };
  }, [game]);

  return <div ref={gameParentRef} />;
};

export default PhaserComponent;
