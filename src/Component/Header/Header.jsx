import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

const Header = ({coins, addCoins}) => {
    return (
        <div>
            <header className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='flex gap-2'>
                    <ul className='flex gap-3 font-normal'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className='px-2 border border-gray-200 rounded-lg flex items-center gap-2 font-bold'><span> {coins} </span> Coin<img className='w-6 h-6' src="/src/assets/icons8-coin-48.png" alt="" /></button>
                </div>
            </header>
            <div className='py-5 mt-5 bg-img bg-black flex flex-col gap-4 items-center rounded-lg'>
                <img src="/src/assets/banner-main.png" alt="" />
                <h1 className='font-bold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h4 className='text-xl text-gray-300'>Beyond Boundaries Beyond Limits</h4>
                <button onClick={addCoins} className='bg-[#E7FE29] text-xl py-2 px-3 rounded-2xl font-bold border-2 border-amber-50'>Claim Free Credit</button>
            </div>
        </div>
    );
};
    Header.propTypes = {
        coins: PropTypes.number,
        addCoins: PropTypes.func
    }

export default Header;
