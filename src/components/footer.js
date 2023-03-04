import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <div className="footer p-5">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between align-center">
                        <p>646.292.5500 | info@elany.org | elanyhelpdesk@elany.org</p>
                        <p>121 Wall Street | 24th Floor | New York, NY 10006</p>
                    </div>
                    <p className='text-white text-center underline pt-3'><Link to="/">SubScribe</Link> | <Link to="/">UnsubScribe</Link></p>
                </div>
            </div>
        </>
    );
};

export default Footer