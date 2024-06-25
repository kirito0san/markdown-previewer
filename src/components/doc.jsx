import axios from "axios";
import { useEffect, useState } from "react";
const Doc = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await axios.get(url);
                setData(response);
            } catch (error) {
                console.error("Error fetching data: " + error);
            }
        };
        if (!data) {
            fetchData("./data.json");
        }
    }, [data]);
    return (
        <div className="doc">
            {data &&
                data.data.basic_syntax.map((e, i) => (
                    <div key={i}>
                        <h1>{e.name}</h1>
                        <p>{e.description}</p>
                        <div className="example">
                            {e.examples.map((e, i) => (
                                <div key={i}>
                                    <h2>Example {i + 1}</h2>
                                    {Object.keys(e).map((item, i) => (
                                        <div key={i}>
                                            <h3>- {item}</h3>
                                            <p>{e[item]}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="additional-examples">
                            {e.additional_examples.map((e, i) => (
                                <div key={i}>
                                    <h2>{e.name}</h2>
                                    <p>{e.description}</p>
                                    {Object.keys(e).map((item, i) => {
                                        if (item !== "name" && item !== "description") {
                                            return (
                                                <div key={i}>
                                                    <h3>- {item}</h3>
                                                    <p>{e[item]}</p>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Doc;
