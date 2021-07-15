import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DateText = styled.span`
    color: rgb(125, 140, 255);
    font-size: 1.2rem;
    font-weight: 600;
`;

const DAY_OF_WEEK = ["SNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const english_ordinal_suffix = (dt) => {
    return (
        dt.getDate() +
        (dt.getDate() % 10 === 1 && dt.getDate() !== 11
            ? "st"
            : dt.getDate() % 10 === 2 && dt.getDate() !== 12
            ? "nd"
            : dt.getDate() % 10 === 3 && dt.getDate() !== 13
            ? "rd"
            : "th")
    );
};

const Today = () => {
    const today = new Date();
    const [date, setDate] = useState("");
    const [day, setDay] = useState("");

    const getDay = () => {
        setDay(DAY_OF_WEEK[today.getDay()]);
    };
    const getDate = () => {
        setDate(`${MONTHS[today.getMonth()]} ${english_ordinal_suffix(today)}`);
    };

    useEffect(() => {
        getDay();
        getDate();
    });

    return (
        <>
            <DateText>
                {date}, {day}
            </DateText>
        </>
    );
};

export default Today;
