export default function ExperienceDisplay({ workexperiences }) {

     const getFormattedDate = (date) => {
         const dateAndTime = date.split('T');

         let yearAndMonth = dateAndTime[0].split('-').reverse();
         let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
         return `${months[Number(parseInt(yearAndMonth[1]) - 1)]}-${yearAndMonth[2]}`
    };

    return (
        <>
 
            {(workexperiences && (workexperiences.length > 0)) &&
                <div style={{ display: "flex", flexDirection: "column" }}>
                {workexperiences.map((exp,idx) => {
                    return (
                        <div key={idx} style={{ border: "1px dotted #ddd", padding: "5px", borderRadius: "5px", background: "#f2f2f2", margin : "2px" }}>
                            <span style={{ display : 'flex' }}>{`Company : ${exp?.company}`}</span>
                            <span style={{ display: 'flex' }}>{`Title : ${exp?.titleOrRole}`}</span>
                            <span style={{ display: 'flex' }}>{`From ${getFormattedDate(exp?.startdate)} to ${exp?.isCurrentJob ? "Present" : exp?.enddate}`}</span>
                            <span style={{ display: 'flex' }}>{`Summary :${exp?.description}`}</span>
                        </div>
                    )
                })}

                </div>
            }            
        </>
    )
}