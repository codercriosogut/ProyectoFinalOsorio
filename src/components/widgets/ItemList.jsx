import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function UserCard({ character }) {

    const { name , imagenurl , id, category } = character

    return (
        <div className="card p-4 transition rounded-md shadow-md user-card hover:scale-105 group bg-slate-300">
            <div className="card-header bg-transparent text-center">
                <h2 className="card-title font-bold text-salmon text-sm mb-0" style={{ fontFamily: 'Helvetica' }}>{category}</h2>
            </div>
            <div className="overflow-hidden aspect-video">
                <img className="card-img-top w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" 
                src={imagenurl} alt="card image" />
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold mb-2">{name}</h2>
             
                <div className="text-center"> 
                
                    <Link to={`/characters/${id}`}>
                    
                        <Button variant="primary">Ver más</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
