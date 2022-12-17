const Chapter = () => {
    return (
        <div className="flex flex-col mt-8 w-2/3 mx-auto">
            <div className="flex w-full justify-between">
                <button className="btn btn-primary">{"<"}</button>
                <select className="select select-primary w-full max-w-xs">
                    <option disabled selected>
                        What is the best TV show?
                    </option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
                <button className="btn btn-primary">{">"}</button>
            </div>
            <div className="card w-full bg-neutral text-neutral-content my-2">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Test Chapter Title</h2>
                    <p>
                        The sound of distant animal roars echoed through the
                        alien jungle as Athena forced her aching eyes open. Even
                        before she could see anything, one basic question filled
                        her thoughts. “Where the hell am I?” Her head was
                        burning like someone lit it up with a Judicator-class
                        flamethrower. For a moment, the young woman found
                        herself in the middle of a sea of memories. One second,
                        she was a college student on Earth, worrying about her
                        future career prospects after graduation. The next
                        second, she was a proud soldier...a soldier of what?
                        The…the empire. No…the Imperium! What Imperium? Wasn’t
                        that like the Latin word for an empire? Even if that was
                        true, the only empire she really remembered that still
                        existed on Earth was the British Empire, and she doubted
                        she just joined the British Army. Groaning in pain and
                        frustration, the young woman tried to touch her head
                        with her hand, only to feel her skin pressing against
                        cold steel. That was when her sight finally cleared up
                        enough for her to see what was around her. More
                        specifically, what she was wearing. The first thing she
                        noticed was that she was wearing a helmet. The helmet
                        was completely sealed. Thankfully, there was only a
                        layer of transparent glass between her face and the
                        outside world. Otherwise her claustrophobia would ruin
                        her day. As she looked down, she realized there was a
                        layer of steel armor covering her body, protecting her
                        from the outside world. The armor was painted in black
                        and red, not the green camouflage she expected to see on
                        a supposed soldier. What was this? Once again, she found
                        the answer in her own memories. Guardian-class power
                        armor. Standard issue power armor for all infantry
                        soldiers of the Venya Imperium. For Imperial soldiers
                        fighting on inhospitable worlds like Morgo IV, their
                        power armors were the only thing keeping them alive.
                    </p>
                </div>
            </div>
            <div className="flex w-full justify-between">
                <button className="btn btn-primary">{"<"}</button>
                <select className="select select-primary w-full max-w-xs">
                    <option disabled selected>
                        What is the best TV show?
                    </option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
                <button className="btn btn-primary">{">"}</button>
            </div>
        </div>
    );
};

export default Chapter;
