import { Link } from 'react-router-dom';
import Title from '../assets/Title.svg';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center relative min-h-screen'>
        <img src={Title} alt="Tic Tac Toe" className="mb-3 h-40 -translate-y-1/4 animate__animated animate__zoomIn animate__faster" />
        <Link to="/one-player" className='font-fredoka font-semibold hover:text-red-500'>
          <div className='bg-[#F9E9D0] py-3 w-52 text-center mb-3 rounded-2xl shadow-lg cursor-pointer hover:scale-95 hover:transition-all  hover:ease-in-out animate__animated animate__zoomIn animate__faster'>
            One Player
          </div>
        </Link>
        <Link to="/two-players" className='font-fredoka font-semibold hover:text-red-500'>
          <div className='bg-[#F9E9D0] py-3 w-52 text-center rounded-2xl shadow-lg cursor-pointer animate__animated animate__zoomIn animate__faster hover:scale-95 hover:transition-all hover:ease-in-out'>Two Players
          </div>
        </Link>
      </div>
      <div className="bg-[#051937] text-white text-center py-1">
        <footer className="text-white text-center p-3 pb-2 text-sm">
          <div className='flex flex-row justify-center'>Created with <i className="bi bi-heart-fill text-danger mx-1"></i> by
            <a href="https://www.instagram.com/rizalfahlevi8/" className="text-white font-bold ml-1" target="_blank" rel="noreferrer"> rizalfahlevi8
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
