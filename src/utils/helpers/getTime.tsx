const getTime = (str: string): string => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const dateString: Array<number> = str
        .split('-')
        .map(entry => Number(entry));
    const timeStamp = new Date(dateString[0], dateString[1] - 1, dateString[2]);
    const month = months[timeStamp.getMonth()];
    const date = timeStamp.getDate();
    const year = timeStamp.getFullYear();
    return `${month} ${date}, ${year}`;
};

export default getTime;
