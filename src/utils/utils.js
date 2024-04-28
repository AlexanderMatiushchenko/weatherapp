
export const filterAndGroupByDay = (list) => {
    return list.filter((item, index, self) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        return self.findIndex(obj => new Date(obj.dt * 1000).toLocaleDateString() === date) === index;
    }).map((item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        const dayItems = list.filter(obj => new Date(obj.dt * 1000).toLocaleDateString() === date);
        const maxTemp = Math.max(...dayItems.map(obj => obj.main.temp));
        const minTemp = Math.min(...dayItems.map(obj => obj.main.temp));
        
        return {
            date,
            dayItems,
            maxTemp,
            minTemp
        };
    });
};
