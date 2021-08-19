import React, { useEffect, useState } from 'react';

const Details = ({ match }) => {
    const [curData, setCurData] = useState('');
    console.log(curData);
    const newApi = 'a51463898d2a4cd2b0818abc2581450d';
    const searchValue = match.params.id.split('--')[0];
    console.log("searchValue", searchValue);
    const id = match.params.id.split('--')[1];
    console.log("id", id);
    console.log(match.params.id);
    console.log(searchValue, id);
    useEffect(() => {
        getObj();
    }, []);

    const getObj = () => {
        fetch(
            `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${newApi}&pageSize=100`,
        ).then((data) => data.json())
            .then((data) => {
                data.articles.forEach((key) => {
                    if (key.title === id) {
                        setCurData(key);
                    }
                });
            });
    };

    return (
        <div>
            {setCurData ? <div>{curData.title}</div> : <div>NOO data</div>}
        </div>
    );
};

export default Details;
