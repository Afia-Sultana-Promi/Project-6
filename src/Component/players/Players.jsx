import PropTypes from 'prop-types';
import Player from '../player/Player';

const Players = ({players, selectPlayer}) => (
  <div className="grid grid-cols-3 gap-4 p-4">
  {players.map(player => (
    <Player key={player.id} player={player} selectPlayer={selectPlayer}></Player>
  ))}
</div>
);

Players.propTypes = {
  players: PropTypes.array,
  selectPlayer: PropTypes.func
}

export default Players;