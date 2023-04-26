import dayjs from 'dayjs';

export const reformat = (data) => {
    return data.map(dt => (
        {
            id: dt.id, 
            campaignName: `Campaign ${dt.id}`,
            name: dt.name, 
            startDate: dt.startDate, 
            endDate: dt.endDate, 
            flag: 'Active',
            budget: `${Math.round(dt.Budget / 1000)}K USD`, 
            userId: dt.userId
    }
    ))
}

export const validateDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
  
    if (d1 !== 'Invalid Date' && d2 !== 'Invalid Date') {
        if (date1 < date2) {
            return ''
        } else if (date1 > date2) {
            return 'Invalid Date'
        }
    } else {
        return ''
    }
  };

 export const dateCompare = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if(date1 > date2){
       return true
    } else if(date1 < date2){
        console.log(`${d2} is greater than ${d1}`)
    } else{
        console.log(`Both dates are equal`)
    }
}

export const reformatDate = (date) => {
    return dayjs(date).format('M/D/YYYY')
}