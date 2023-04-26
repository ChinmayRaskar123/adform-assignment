export const reformat = (data) => {
    return data.map(dt => (
        {
            id: dt.id, 
            campaignName: `Campaign ${dt.id}`,
            name: dt.name, 
            startDate: dt.startDate, 
            endDate: dt.endDate, 
            budget: `${Math.round(dt.Budget / 1000)}K USD`, 
            userId: dt.userId
    }
    ))
}

export const compareDates = (d1, d2) => {
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