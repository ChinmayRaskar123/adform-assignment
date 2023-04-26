export const reformat = (data) => {
    return data.map(dt => (
        {
            id: dt.id, 
            campaignName: `Campaign ${dt.id}`,
            name: dt.name, 
            startDate: dt.startDate, 
            endDate: dt.endDate, 
            budget: dt.Budget, 
            userId: dt.userId
    }
    ))
}