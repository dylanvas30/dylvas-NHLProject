const API_URL = 'https://api-web.nhle.com';

export const fetchLeagueSchedule = async () => {
    const response = await fetch(`${API_URL}/v1/schedule/now`);
    if(!response.ok) {
        throw new Error('Failed to fetch schedule');
    }
    return response.json();
};