function setAvailable(number_of_tickets) {
    return (
        <>
            {number_of_tickets > 0 ? <><i className={number_of_tickets < 20 ? "inline-block w-8 h-8 rounded mr-5 bg-red animate-ping"
                : number_of_tickets < 80 ? "inline-block w-8 h-8 rounded mr-5 bg-yellow animate-ping"
                    : "inline-block w-8 h-8 rounded mr-5 bg-green animate-ping"}></i>{number_of_tickets}</> : <span className="text-red font-bold">SOLD!</span>}

        </>
    )
}

function setAvailableWithText(number_of_tickets) {
    return (
        <>
            {number_of_tickets > 0 ? <><i className={number_of_tickets < 20 ? "inline-block w-8 h-8 rounded mr-5 bg-red animate-ping"
                : number_of_tickets < 80 ? "inline-block w-8 h-8 rounded mr-5 bg-yellow animate-ping"
                    : "inline-block w-8 h-8 rounded mr-5 bg-green animate-ping"}></i>{number_of_tickets}/220 tickets left</> : <span className="text-red font-bold">SOLD!</span>}

        </>
    )
}

const AvailableTicketsHelper = {
    setAvailable,
    setAvailableWithText
}

export default AvailableTicketsHelper;