export interface City {
    name: string;
    q: string;
};


export interface State {
    cityList: Map<string, City>;
    selectedCity: City;
    isLoading: boolean;
    weatherDescription: string;
};
