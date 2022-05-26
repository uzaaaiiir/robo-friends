import React from "react";

const Card = function (props) {
    console.log(props);
    const { name, email, id } = props;
    console.log(`${name}, ${email}, ${id}`);
    return (
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img
                src={`https://robohash.org/${id}?size=200x200`}
                alt="Represents a Robot part of the Robo Friends Application."
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
