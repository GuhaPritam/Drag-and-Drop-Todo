import PropTypes from 'prop-types';

const Header = ({ text, bg, count }) => {
    return (
        <>
            <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
                {text}{" "}
                <div className='ml-2 bg-white w-5 text-black rounded-full flex items-center justify-center'>{count}</div>
            </div>
        </>
    );
};


Header.propTypes = {
    text: PropTypes.any.isRequired,
    bg: PropTypes.any.isRequired,
    count: PropTypes.any.isRequired,
};

export default Header;